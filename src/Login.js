import React from 'react';
import { useState } from "react"; 
import { Card, Container, FormControl, FormGroup, FormLabel, Form, Button} from 'react-bootstrap';


export const Login = () => {

    const [data,setData] = useState ({});

    const onChangeLogin = (e)=>{
        e.preventDefault();
        const nData = data;
        nData[e.target.name] = e.target.value;
        setData(nData);
        console.log(nData)
    };

    const onSubmit = () => {
        console.log (data)
    }

    return(
        <Container>
            <Card>
                <Card.Title>Ingresar</Card.Title>
                <Form>
                    <FormGroup>
                        <FormLabel>Correo</FormLabel>
                        <FormControl onChange={onChangeLogin} name="email" type="email" placeholder="Ingresa tu correo"></FormControl>
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Contrseña</FormLabel>
                        <FormControl onChange={onChangeLogin} name="password" type="password" placeholder="Ingresa tu contraseña"></FormControl>
                    </FormGroup>

                    <Button onClick={()=>onSubmit()} className='mt-3'>Entrar</Button>

                </Form>
            </Card>
        </Container>
    );
};

