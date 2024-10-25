import { useState } from "react";
import { Card, CardBody, CardText, CardTitle, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export const AnswerQuestionnaire = (props) => {
    const [questionnaire, setQuestionnaire] = useState(props.questionnaire);

    // Manejar el cambio en las opciones seleccionadas
    const handleChange = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questionnaire.questions];

        // Asumiendo que 'type' puede ser "checkbox" o "radio"
        if (updatedQuestions[questionIndex].type === "checkbox") {
            // Actualiza el estado del checkbox
            updatedQuestions[questionIndex].options[optionIndex].selected = !updatedQuestions[questionIndex].options[optionIndex].selected;
        } else {
            // Para el radio, puedes establecer el índice seleccionado
            updatedQuestions[questionIndex].options.forEach((opt, i) => {
                opt.selected = i === optionIndex; // Solo uno debe estar seleccionado
            });
        }

        setQuestionnaire({
            ...questionnaire,
            questions: updatedQuestions
        });
    };

    return (
        <Container>
            <Card>
                <CardBody>
                    <CardTitle>{questionnaire.title}</CardTitle>
                    <CardText>{questionnaire.description}</CardText>
                    <hr />
                    <Form>
                        {questionnaire.questions.map((question, questionIndex) => (
                            <FormGroup key={questionIndex}>
                                <FormLabel>{question.title}</FormLabel>
                                {
                                    question.options.map((option, optionIndex) => (
                                        ["checkbox", "radio"].includes(question.type) && (
                                            <FormCheck
                                                key={optionIndex}
                                                type={question.type}
                                                label={option.label} // Cambiado para usar option.label
                                                checked={option.selected} // Asumiendo que cada opción tiene una propiedad 'selected'
                                                onChange={() => handleChange(questionIndex, optionIndex)}
                                            />
                                        ) || question.type === "text" && (
                                            <FormControl key={optionIndex} onChange={(e) => {
                                                const updatedQuestions = [...questionnaire.questions];
                                                updatedQuestions[questionIndex].options[0].answer = e.target.value; // Suponiendo que la opción es solo una respuesta corta
                                                setQuestionnaire({
                                                    ...questionnaire,
                                                    questions: updatedQuestions
                                                });
                                            }} />
                                        ) || question.type === "select" && (
                                            <FormSelect key={optionIndex} onChange={(e) => {
                                                const updatedQuestions = [...questionnaire.questions];
                                                updatedQuestions[questionIndex].options[0].answer = e.target.value; // Suponiendo que la opción es solo una respuesta seleccionada
                                                setQuestionnaire({
                                                    ...questionnaire,
                                                    questions: updatedQuestions
                                                });
                                            }}>
                                                <option></option>
                                                {question.options.map((opt) => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </FormSelect>
                                        )
                                    ))
                                }
                            </FormGroup>
                        ))}
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
};
