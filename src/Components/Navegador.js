import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Navegador = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" >UTMA Questionnaires</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/users">Usuarios</Nav.Link>
                        <Nav.Link href="/forms">Formularios</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}