import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const QuestionForm = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions([...questions, { id: Date.now(), text: '', options: ['Option 1', 'Option 2'] }]);
    };

    const modifyQuestion = (id, newText, newOptions) => {
        setQuestions(questions.map(q => q.id === id ? { ...q, text: newText, options: newOptions } : q));
    };

    const deleteQuestion = id => {
        setQuestions(questions.filter(q => q.id !== id));
    };

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <Button onClick={addQuestion}>Add Question</Button>
                </Col>
            </Row>
            {questions.map((question, index) => (
                <Question
                    key={question.id}
                    question={question}
                    onModify={modifyQuestion}
                    onDelete={deleteQuestion}
                />
            ))}
        </Container>
    );
};

const Question = ({ question, onModify, onDelete }) => {
    const [text, setText] = useState(question.text);
    const [options, setOptions] = useState(question.options);

    const handleTextChange = (e) => {
        setText(e.target.value);
        onModify(question.id, e.target.value, options);
    };

    const handleOptionChange = (index, e) => {
        const newOptions = options.map((option, idx) => (idx === index ? e.target.value : option));
        setOptions(newOptions);
        onModify(question.id, text, newOptions);
    };

    const addOption = () => {
        const newOptions = [...options, `Option ${options.length + 1}`];
        setOptions(newOptions);
        onModify(question.id, text, newOptions);
    };

    const deleteOption = (index) => {
        const newOptions = options.filter((_, idx) => idx !== index);
        setOptions(newOptions);
        onModify(question.id, text, newOptions);
    };

    return (
        <Row className="mb-3">
            <Col>
                <Form.Control type="text" value={text} onChange={handleTextChange} placeholder="Enter your question" />
                {options.map((option, index) => (
                    <Form.Group key={index} controlId={`option-${index}`}>
                        <Form.Check type="checkbox" label={
                            <>
                                <Form.Control type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
                                <Button variant="danger" onClick={() => deleteOption(index)}>Delete Option</Button>
                            </>
                        } />
                    </Form.Group>
                ))}
                <Button variant="secondary" onClick={addOption}>Add Option</Button>
                <Button variant="danger" onClick={() => onDelete(question.id)}>Delete Question</Button>
            </Col>
        </Row>
    );
};

export default QuestionForm;

