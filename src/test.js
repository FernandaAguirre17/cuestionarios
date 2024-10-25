import { useState } from 'react';
import { Navegador } from './Components/Navegador';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { AnswerQuestionnaire } from './Components/AnsQuestionnarie.js'; // Asegúrate de cambiar la ruta

const Prueba = () => {
  const [questionnarie, setQuestionnarie] = useState({
    title: '',
    description: '',
    questions: [
      {
        question: '',
        type: '',
        options: ['']
      }
    ]
  });

  // Cambiar el título del cuestionario
  const onChangeTitle = (e) => {
    setQuestionnarie({
      ...questionnarie,
      title: e.target.value
    });
  };

  // Cambiar el título del cuestionario
  const onChangeDescription = (e) => {
    setQuestionnarie({
      ...questionnarie,
      description: e.target.value
    });
  };

  // Cambiar el texto de una pregunta específica
  const onChangeQuestion = (e, index) => {
    const updatedQuestions = [...questionnarie.questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      question: e.target.value
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Cambiar el texto de una opción específica
  const onChangeOption = (e, questionIndex, optionIndex) => {
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

  // Agregar una nueva pregunta al cuestionario
  const addQuestion = () => {
    setQuestionnarie({
      ...questionnarie,
      questions: [...questionnarie.questions, { question: '', type: '', options: [''] }]
    });
  };

  // Agregar una nueva opción a una pregunta específica
  const addOptionToQuestion = (questionIndex) => {
    const updatedQuestions = [...questionnarie.questions];
    const questionToUpdate = updatedQuestions[questionIndex];
    const updatedOptions = [...questionToUpdate.options, '']; // Agrega una nueva opción vacía

    updatedQuestions[questionIndex] = {
      ...questionToUpdate,
      options: updatedOptions
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Eliminar una opción específica de una pregunta
  const removeOptionFromQuestion = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questionnarie.questions];
    const questionToUpdate = updatedQuestions[questionIndex];
    const updatedOptions = questionToUpdate.options.filter((_, i) => i !== optionIndex); // Filtra la opción a eliminar

    updatedQuestions[questionIndex] = {
      ...questionToUpdate,
      options: updatedOptions
    };

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };

  // Eliminar una pregunta completa
  const removeQuestion = (questionIndex) => {
    const updatedQuestions = questionnarie.questions.filter((_, i) => i !== questionIndex); // Filtra la pregunta a eliminar

    setQuestionnarie({
      ...questionnarie,
      questions: updatedQuestions
    });
  };


  // Funciones de manejo de cambios aquí...

  return (
    <>
      <Navegador />

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
            <Form>
              <Form.Label>Ingresa el nombre del Cuestionario:</Form.Label>
              <Form.Control
                value={questionnarie.title}
                onChange={onChangeTitle}
              />
              <Form.Label className="mt-2">Descripción:</Form.Label>
              <Form.Control
                value={questionnarie.description}
                onChange={(e) => setQuestionnarie({ ...questionnarie, description: e.target.value })}
              />
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* Listado de preguntas dinámicas */}
      {questionnarie.questions.map((q, index) => (
        <Container key={index} className='mt-3'>
          <Card>
            <Card.Body>
              <Card.Title>Pregunta {index + 1}</Card.Title>
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
                  <option value=''>Seleccione el tipo de pregunta</option>
                  <option value='multiple'>Opción Múltiple</option>
                  <option value='checkbox'>Casilla de Verificación</option>
                  <option value='shortAnswer'>Respuesta Corta</option>
                </Form.Select>
              </Container>

              {/* Manejo de opciones y preguntas */}
              {q.type === 'shortAnswer' ? (
                <Container className='mt-3'>
                  <Form.Label>Respuesta:</Form.Label>
                  <Form.Control
                    placeholder='Ingresa tu respuesta'
                    className='mt-2'
                  />
                </Container>
              ) : (
                <Container>
                  <Card.Text className='mt-3'>Opciones:</Card.Text>
                  {q.options.map((option, optIndex) => (
                    <Container key={optIndex} className='d-flex align-items-center'>
                      <Form.Control
                        value={option}
                        placeholder={`Opción ${optIndex + 1}`}
                        onChange={(e) => onChangeOption(e, index, optIndex)}
                        className='mt-2'
                      />
                      {q.options.length > 1 && (
                        <Button
                          variant='danger'
                          onClick={() => removeOptionFromQuestion(index, optIndex)}
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
                      onClick={() => addOptionToQuestion(index)}
                      className='mt-3'
                    >
                      Agregar Opción
                    </Button>

                    {questionnarie.questions.length > 1 && (
                      <Button
                        variant='danger'
                        onClick={() => removeQuestion(index)}
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

      {/* Agregar un nuevo cuestionario */}
      <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end'>
        <Button variant='primary' onClick={addQuestion}>Agregar Pregunta</Button>
      </Container>

      {/* Renderiza el componente AnwerQuestionnaire al final */}
      <AnswerQuestionnaire questionnaires={questionnarie} />
    </>
  );
};

export default Prueba;
