import React from 'react';
import { useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap';
import { SimpleNavegador } from './Components/SImpleNavigator';

export const Usuarios = () => {

    const [data, setData] = useState({});

    const onChangeRegistrer = (e) => {
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
            <SimpleNavegador />
            <Container className='mt-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Registro</Card.Title>

                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={onChangeRegistrer} name="name" placeholder='Ingresa tu nombre' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control onChange={onChangeRegistrer} name="last_name" placeholder="Ingresa tu apellido" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <Form.Control onChange={onChangeRegistrer} name="email" type="email" placeholder="Ingresa tu correo" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contrseña</Form.Label>
                                <Form.Control onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña" />
                            </Form.Group>

                            {/* Falta la validacion para que tengan que ser exactamente iguales las contraseñas */}

                            <Form.Group>
                                <Form.Label>Confirma tu Contrseña</Form.Label>
                                <Form.Control onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña" />
                            </Form.Group>

                            <Button onClick={() => onSubmit()} className='mt-3'>Registrate!</Button>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};
