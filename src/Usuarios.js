import React from 'react';
import { useState } from "react"; 
import { Card, Container, FormControl, FormGroup, FormLabel, Form, Button} from 'react-bootstrap';


 export const Usuarios = () => {

    const [data,setData] = useState ({});

    const onChangeRegistrer  = (e)=>{
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
                <Card.Title>Registro</Card.Title>

                <Form>
                    <FormGroup>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl onChange={onChangeRegistrer} name= "name" placeholder='Ingresa tu nombre'></FormControl>
                    </FormGroup>
                        
                    <FormGroup>
                        <FormLabel>Apellido</FormLabel>
                        <FormControl onChange={onChangeRegistrer} name="last_name" placeholder="Ingresa tu apellido"></FormControl>
                    </FormGroup>

                    <FormGroup>
                    <FormLabel>Correo</FormLabel>
                    <FormControl onChange={onChangeRegistrer} name="email" type="email" placeholder="Ingresa tu correo"></FormControl>
                    </FormGroup>

                    <FormGroup>
                    <FormLabel>Contrseña</FormLabel>
                    <FormControl onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña"></FormControl>
                    </FormGroup>

                    {/* Falta la validacion para que tengan que ser exactamente iguales las contraseñas */}
                    
                    <FormGroup>
                    <FormLabel>Confirma tu Contrseña</FormLabel>
                    <FormControl onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña"></FormControl>
                    </FormGroup>

                    <Button onClick={()=>onSubmit()} className='mt-3'>Registrate!</Button>

                </Form>
            </Card>
        </Container>
    );
};

