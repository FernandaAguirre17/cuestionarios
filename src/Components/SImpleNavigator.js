import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const SimpleNavegador = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" >UTMA Questionnaires</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}