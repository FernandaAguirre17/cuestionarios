import React from 'react';
import { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';

export const Login = () => {

    const [data, setData] = useState({});

    const onChangeLogin = (e) => {
        e.preventDefault();
        const nData = data;
        nData[e.target.name] = e.target.value;
        setData(nData);
        console.log(nData)
    };

    const onSubmit = () => {
        console.log(data)
    }

    return (
        <>
            <Container className='mt-3 d-flex justify-content-center'>
                <Card className='mb-3 d-flex' style={{ width: '60%' }}>
                    <Card.Body>
                        <Card.Title className='mb-3'>Bienvenido a UTMA Questionnaries</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <Form.Control onChange={onChangeLogin} name="email" type="email" placeholder="Ingresa tu correo"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contrseña</Form.Label>
                                <Form.Control onChange={onChangeLogin} name="password" type="password" placeholder="Ingresa tu contraseña"/>
                            </Form.Group>

                            <Button href='/home' onClick={() => onSubmit()} type='submit' className='mt-3 d-flex justify-content-center'>Entrar</Button>

                        </Form>

                        <Container className='d-flex justify-content-between mt-3'>
                            <a href='/registrarse'>Registrate</a>
                            <a href='/recuperarContraseña'>Recuperar Contraseña</a>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

