import React from 'react';
import { Navbar, Nav, Container, Table, Button, Card } from 'react-bootstrap';

export const Navegador = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="" >UTMA Questionnaires</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Usuarios">Usuarios</Nav.Link>
                        <Nav.Link href="/RecoverPassword">RecoverPassword</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}