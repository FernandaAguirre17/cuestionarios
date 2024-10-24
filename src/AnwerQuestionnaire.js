import { useState } from "react";
import { Card, CardBody, CardText, CardTitle, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";


export const AnwerQuestionnaire = (props) => {
    const [questionnaire, setQuestionnaire] = useState(props.questionnaires)
    return (
        <Container>
                <Card>
                    <CardBody>
                        <CardTitle>{questionnaire.title}</CardTitle>
                        <CardText>{questionnaire.description}</CardText>
                        <hr/>
                        <Form>
                        {
                            questionnaire.questions.map((question) => (
                            <FormGroup>
                                <FormLabel>{question.title}</FormLabel>
                                {
                                    question.options.map((option) =>(
                                        ["checkbox", "radio"].includes(question.type) && (
                                            <FormCheck
                                            type={question.type}
                                            label={option}
                                            />
                                        ) || question.type === "text" && (
                                            <FormControl/>
                                        )|| question.type === "select" && (
                                            <FormSelect>
                                                <option></option>
                                                {question.options.map((options) => (
                                                    <option>{option}</option>
                                                ))}
                                            </FormSelect>
                                        )

                                    ))
                                }
                            </FormGroup>
                            ))
                        }
                        </Form>
                    </CardBody>
                </Card>
        </Container>
    )
};