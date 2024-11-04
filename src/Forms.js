import { useState } from 'react';
import { Navegador } from './Components/Navegador';
import { Button, Card, Container, Form } from 'react-bootstrap';

const Forms = () => {
  const [questionnarie, setQuestionnarie] = useState({
    title: '',
    description: '',
    questions: [
      {
        question: '',
        type: 'NA',
        options: ['']
      }
    ]
  });

  // OnChange del título
  const onChangeTitle = (e) => {
    const vContenido = /^[a-zA-Z0-9\s]+$/;
    const newTitle = e.target.value.trim();

    if (newTitle === ""){
      alert("No permite vacio")
      return;
    } else if (!vContenido.test(newTitle)){
      alert("Solo permite numeros y letras")
      return;
    }
    setQuestionnarie({
      ...questionnarie,
      title: newTitle
    });
  };

  // OnChange de descripción
  const onChangeDescription = (e) => {
    const newDescription = e.target.value.trim();
    if (newDescription === ""){
      alert("No puede estar vacio")
      return;
    }
    setQuestionnarie({
      ...questionnarie,
      description: newDescription
    });
  };

  // OnChange de preguntas
  const onChangeQuestion = (e, index) => {
    const newQuestion = e.target.value.trim();
    if (newQuestion === ""){
      alert("No puede estar vacio")
      return;
    }
    const updatedQuestions = [...questionnarie.questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      question: e.target.value
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });

    console.log(questionnarie)
  };

  // OnChange de Opciones
  const onChangeOption = (e, questionIndex, optionIndex) => {
    const vContenido = /^[a-zA-Z0-9\s]+$/;
    const newOption = e.target.value.trim();

    if (newOption === ""){
      alert("No permite vacio")
      return;
    } else if (!vContenido.test(newOption)){
      alert("Solo permite numeros y letras")
      return;
    }
    const updatedQuestions = [...questionnarie.questions];
    const questionToUpdate = updatedQuestions[questionIndex];
    const updatedOptions = [...questionToUpdate.options];

    // Actualiza la opción específica
    updatedOptions[optionIndex] = e.target.value;
    updatedQuestions[questionIndex] = {
      ...questionToUpdate,
      options: updatedOptions
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Agregar pregunta
  const addQuestion = () => {
    setQuestionnarie({
      ...questionnarie,
      questions: [...questionnarie.questions, { question: '', type: 'NA', options: [''] }]
    });
  };

  // Agregar opciones
  const addOption = (questionIndex) => {
    const updatedQuestions = [...questionnarie.questions];
    const questionToUpdate = updatedQuestions[questionIndex];
    const updatedOptions = [...questionToUpdate.options, ''];

    updatedQuestions[questionIndex] = {
      ...questionToUpdate,
      options: updatedOptions
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Borrar opción
  const deleteOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questionnarie.questions];
    const questionToUpdate = updatedQuestions[questionIndex];
    const updatedOptions = questionToUpdate.options.filter((_, i) => i !== optionIndex); 
    
    updatedQuestions[questionIndex] = {
      ...questionToUpdate,
      options: updatedOptions
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Borrar una pregunta
  const deleteQuestion = (questionIndex) => {
    const updatedQuestions = questionnarie.questions.filter((_, i) => i !== questionIndex);

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  return (
    <>
      <Navegador />

      {/* Controles para el título y descripción del cuestionario */}
      <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end'>
        <Button variant='secondary'>Vista Previa</Button>
        <Button variant='primary'>Guardar Cuestionario</Button>
      </Container>

      <Container className='mt-3'>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>{questionnarie.title}</h1>
            </Card.Title>
            <Card.Text>{questionnarie.description}</Card.Text>
            <Form>
              <Form.Label>Ingresa el nombre del Cuestionario:</Form.Label>
              <Form.Control
                value={questionnarie.title}
                onChange={onChangeTitle}
              />

              <Form.Label> Descripción del cuestionario: </Form.Label>
              <Form.Control value={questionnarie.description} onChange={onChangeDescription} />
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* Preguntas y Opciones */}
      {questionnarie.questions.map((q, index) => (
        <Container key={index} className='mt-3'>
          <Card>
            <Card.Body>
              <Card.Title>{index + 1}. {q.question}</Card.Title>

              <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end'>
                <Form.Control
                  placeholder='Ingresa la pregunta:'
                  value={q.question}
                  onChange={(e) => onChangeQuestion(e, index)}
                />
                
                <Form.Select
                  value={q.type}
                  className='mt-2'
                  onChange={(e) => {
                    const updatedQuestions = [...questionnarie.questions];
                    updatedQuestions[index] = {
                      ...updatedQuestions[index],
                      type: e.target.value
                    };
                    setQuestionnarie({
                      ...questionnarie,
                      questions: updatedQuestions
                    });
                  }}
                >
                  <option value='NA'>Seleccione el tipo de pregunta</option>
                  <option value='multOption'>Opción Múltiple</option>
                  <option value='checkbox'>Casilla de Verificación</option>
                  <option value='Answer'>Respuesta Corta</option>
                </Form.Select>
              </Container>

              {/* Para cuando no te deje poner opciones cuando es respuesta corta.*/}
              {q.type === 'Answer' ? (
                <Container className='mt-3'>
                  <Form.Label>Respuesta:</Form.Label>
                  <Form.Control
                    placeholder='Ingresa tu respuesta'
                    className='mt-2'
                  />
                </Container>
              ) : (
                <Container>


                  {/* Opciones de cada pregunta */}
                  <Card.Text className='mt-3'>Opciones:</Card.Text>
                  {q.options.map((option, i) => (
                    <Container key={i} className='d-flex align-items-center'>
                      <Form.Control
                        value={option}
                        placeholder={`Opción ${i + 1}`}
                        onChange={(e) => onChangeOption(e, index, i)}
                        className='mt-2'
                      />
                      {q.options.length > 1 && (
                        //Borra opciones
                        <Button
                          variant='danger'
                          onClick={() => deleteOption(index, i)}
                          className='ms-2 mt-1'
                        >
                          X
                        </Button>
                      )}
                    </Container>
                  ))}

                  <Container className='d-flex justify-content-between'>
                    <Button
                      variant='secondary'
                      onClick={() => addOption(index)}
                      className='mt-3'
                    >
                      Agregar Opción
                    </Button>

                    {questionnarie.questions.length > 1 && (

                      <Button
                        variant='danger'
                        onClick={() => deleteQuestion(index)}
                        className='mt-3'
                      >
                        Eliminar Pregunta
                      </Button>
                    )}
                  </Container>
                </Container>
              )}
            </Card.Body>
          </Card>
        </Container>
      ))}

      <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end mb-5'>
        <Button variant='primary' onClick={addQuestion}>Agregar Pregunta</Button>
      </Container>
    </>
  );
};

export default Forms;