import React from 'react';
import { useState } from "react"; 
import { Card, Container, FormControl, FormGroup, FormLabel, Form, Button} from 'react-bootstrap';
import { Navegador } from './Navegador';

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
            <Navegador />
            <Container className='mt-3'>
                <Card className='mb-3'>
                    <Card.Body>
                        <Card.Title className='mb-3'>Ingresar</Card.Title>
                        <Form>
                            <FormGroup>
                                <FormLabel>Correo</FormLabel>
                                <FormControl onChange={onChangeLogin} name="email" type="email" placeholder="Ingresa tu correo"></FormControl>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Contrseña</FormLabel>
                                <FormControl onChange={onChangeLogin} name="password" type="password" placeholder="Ingresa tu contraseña"></FormControl>
                            </FormGroup>

                            <Button onClick={() => onSubmit()} className='mt-3'>Entrar</Button>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

