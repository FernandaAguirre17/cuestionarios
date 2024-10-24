import { useState } from 'react';
import { Navegador } from './Components/Navegador'
import { Button, Card, Container, Form } from 'react-bootstrap'

const Forms = () => {

    const [title, setTitle] = useState('');

    const onChangeTitle = ((e) => {
        setTitle(e.target.value);
    })


    return (
        <>
            <Navegador />
            {/* Darle el Nombre al Cuestionario */}
            <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end'>
                <Button variant='secondary'>Vista Previa</Button>
                <Button variant='primary' >Guardar Cuestionario</Button>
            </Container>
            <Container className='mt-3'>
                <Card>
                    <Card.Body>
                        <Card.Title><h1>{title}</h1></Card.Title>
                        <Form>
                            <Form.Label>Ingresa el nombre del Cuestionario:</Form.Label>
                            <Form.Control onChange={onChangeTitle} />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <Container className='mt-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Preguntas</Card.Title>
                        <Container className='d-grid gap-3 d-md-flex mt-3'>
                            <Form.Control placeholder='Ingresa la pregunta:' />
                            <Form.Select>
                                <option>Opción Múltiple</option>
                                <option>Casilla de Verificación</option>
                                <option>Respuesta Corta</option>
                                <option>Select</option>
                            </Form.Select>
                        </Container>
                        <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end'>
                            <Button variant='secondary'>Agregar Opción</Button>
                            <Button variant='primary' >Guardar Pregunta</Button>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Forms
