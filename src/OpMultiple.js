import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardHeader, CardTitle, Container, Form, FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem } from 'react-bootstrap';

export const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [editingIndex, setEditingIndex] = useState(-1);

//CAMBIOS DE LAS OPCIONES DEL FORMULARIO (INDEX= OPCION QUE SE MODIFICA)
// VALUE= VALOR POR ASIGNAR
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    //AQUI SE ACTUALIZA LA OPCION EN LA POSICION INDEX DENTRO DEL NUEVO ARRAY "NEWOPTIONS"
    newOptions[index] = value;
    //ACTUALIZA ELESTADO DELAS OPCIONES CON EL ARRAY QUE SE ACABA DE CREAR
    setOptions(newOptions);
  };

  //AÑADIR A LA UNA OPCION A LA LISTA DE OPCIONES 
  const addOption = () => {
    //MAXIMO DE OPCIONES QUE SE PUEDEN AGREGAR SON 6
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  //PARA ELIMINAR OPCIONES 
  const removeOption = (indexToRemove) => {
    //EVITA QUE NOS QUEDEMOS CON MENOS DE DOS OPCIONES 
    if (options.length > 2) {
      //ACTUALIZA LAS OPCIONES "OPTIONS" CON "SETOPTIONS"
      //FILTER DEVUELVE EL NUEVO ARREGLO CON LOS ELEMENTOS QUE CUMPLEN LA CONDICION
      setOptions(options.filter((_, index) => index !== indexToRemove));
      //CONDICION PARA QUE SI LA OPCION CORRECTA ES LA QUE SE ELIMINA INICIAR DESDE 0
      if (correctAnswer === indexToRemove) {
        setCorrectAnswer(0);
      } else if (correctAnswer > indexToRemove) {
        setCorrectAnswer(correctAnswer - 1);
      }
    }
  };

  //VALIDAR DATOS DELOS CAMPOS 
  const handleSubmit = () => {
    //TRIM() ELIMINA LOS ESPACIOS EN BLANCO AL PRINCIPIO Y AL FINAL DE LA CADENA 
    //ESTO VERIFICA QUE LA PREGUNTA NO ESTE VACIA, TAMBIEN HACE LA VALIDACION CON LOS ESPACIOS  
    if (!currentQuestion.trim() || options.some(opt => !opt.trim())) {
      //RECORDATORIO PARA EL CLIENTE EN CASO DE TENER UN ESPACIO VACIO 
      alert('Por favor completa todos los campos');
      return;
    }

    //CREAR NUEVOS OBJETOS DE PREGUNTA GUARDANDO LA PREGUNTA CON LA RESPUESTA CORRECTA 
    const newQuestion = {
      //PREGUNTA ACTUAL ESCRITA POR EL USUARIO
      question: currentQuestion,
      //ASEGURA QUE SOLO INCLUYAN LAS OPCIONES VALIDAS EN EL OBJETO 
      options: options.filter(opt => opt.trim()),
      //RESPUESTA QUE SEÑALAMOS COMO CORRECTA 
      correctAnswer
    };

    //GUARDAR PREGUNTA EN LISTA DE PREGUNTAS Y RESTABLECER EL FORMULARIO
    if (editingIndex >= 0) {
      //EVITA MODIFICAR EL ESTADO DIRECTAMENTE
      const newQuestions = [...questions];
      newQuestions[editingIndex] = newQuestion;
      setQuestions(newQuestions);
      setEditingIndex(-1);
    } else {
      setQuestions([...questions, newQuestion]);
    }
    //LIMPIA LOS CAMPOS DEL FORMULARIO
    resetForm();
  };

  //RESTABLECE LOS CAMPOS DEL FORMULARIO
  const resetForm = () => {
    setCurrentQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer(0);
  };

  //ELIMINACION DE PREGUNTAS  
  const deleteQuestion = (index) => {
  // ACTUALIZA LA LISTA DE PREGUNTAS  
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <Container>

      <Card>
              <Card>
                <CardTitle>Crear Pregunta</CardTitle>
              </Card>
                  <CardBody>
                        <FormLabel>Pregunta:</FormLabel>
                        <FormControl
                        type="text"
                        value={currentQuestion}
                        onChange={(e) => setCurrentQuestion(e.target.value)}
                        placeholder="Escribe tu pregunta aquí"
                        />

 
                        <FormLabel>Opciones:</FormLabel>
                        {options.map((option, index) => (
                        <FormGroup key={index} className="input-group mb-2">
                        {/*AGRUPA UN CAMPO DE FORMULARIO CON UN TEXTO O ELEMENTO ADICIONAL  */}
                        <div className="input-group-text">
                        <FormControl
                                    type="radio"
                                    name="correctAnswer"
                                    /* ESTO ES PARA VER SI EL BOTTON DEBE APARECER SELECCIONADO */
                                    checked={correctAnswer === index}
                                    /* ESTO SE ACTIVA CUANDO EL USUARIO SELECCIONA LA CASILLA */
                                    onChange={() => setCorrectAnswer(index)}
                                    className="form-check-input mt-0"
                        />
                        </div>
                        <FormControl
                                type="text"
                                /* ESTABLECE EL VALOR ACTUAL DEL CAMPO DE ENTRADA */
                                value={option}
                                /* SE EJECUTA CUANDO EL USUARIO CAMBIA EL TEXTO EN EL CAMPO DE ENTRADA */
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                /* TEXTO MARCADO */
                                placeholder={`Opción ${index + 1}`}
                        />
                        {/* LA LONGITUD TIENE QUE SER MAYOR A DOS (NUMERO DE OPCIONES MINIMAS) */}
                        {options.length > 2 && (
                          /* BOTTON PARA ELIMINAR OPCIONES DEL CUESTIONARIO */
                        <Button onClick={() => removeOption(index)}>Eliminar</Button>)}
                        </FormGroup>
                        ))}
                        {options.length < 6 && (
                        <Button onClick={addOption} > Agregar Opción </Button>
                        )}

                        <FormGroup>
                            <Button 
                            onClick={handleSubmit}>{'Agregar Pregunta'}
                            </Button> 
                        </FormGroup>
                  </CardBody>
          <Card>
            <CardHeader>
                <CardTitle>
                  {/* MUESTRA LAS PREGUNTAS CON SUS RESPECTIVAS OPCIONES DE RESPUESTA */}
                  Preguntas Creadas ({questions.length})
                </CardTitle>
            </CardHeader>
            <CardBody>
                {/* LONGITUD DEL ARREGLO DE LAS PREGUNTAS AGREGADAS */}
                {questions.length === 0 ? (
                  <p className="text-center text-muted">No hay preguntas creadas</p>
                ) : (
                  <ListGroup>
                   {/*  PARA ITERAR LAS PREGUNTAS YA AGREGADAS */} 
                  {questions.map((q, index) => (
                  <ListGroupItem key={index}>
                        <Form >
                          {/* COMIENZA EL NUMERO DE LAS PREGUNTAS EN 1 */}
                          <Form>Pregunta {index + 1}</Form>
                        </Form>
                        <p>{q.question}</p>
                        <ul className="list-unstyled mb-0">
                          {/* RENDERIZAR ES GENERAR Y MOSTRAR COONTENIDO VISUAL */}
                          {/* RENDERIZA CADA OPCION Y MARCA LA OPCION (POR LO REGULAR ES COLOR VERDE) */}
                          {q.options.map((opt, i) => (
                            <li 
                              key={i}
                              className={i === q.correctAnswer ? "text-success fw-bold" : ""}
                            >
                              {i + 1}. {opt}
                            </li>
                          ))}
                        </ul>
                        <Card>
                          <Button onClick={() => deleteQuestion(index)}>Eliminar
                          </Button>
                        </Card>
                  </ListGroupItem>
                  ))}
                  </ListGroup>
                )}
            </CardBody>
          </Card>
      </Card>

    </Container>
  );
};


