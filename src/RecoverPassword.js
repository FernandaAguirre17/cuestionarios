import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Card, Form, Nav } from 'react-bootstrap';

export const RecoverPassword = () => {
    const [email, setEmail] = useState("");

    const onChange = (e) => {
        setEmail(e.target.value);  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email ingresado:", email);
    }
    return (
    <>
  <Nav variant="tabs" defaultActiveKey="/home">
   <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Cuestionarios UTMA
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Cuestionarios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Usuaios</Nav.Link>
      </Nav.Item>
    </Nav>

        <Container className="mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>Ingresa tu Correo Electrónico</Card.Title>
                    <Form onSubmit={handleSubmit}> {}
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Ingrese su correo"
                            value={email} 
                            onChange={onChange}
                        />
                        <Button variant="outline-success" className="mt-3">Recupera tu Contraseña!</Button>{' '}
                    </Form> 
                </Card.Body>
            </Card>
        </Container>    
    </>
    );
}