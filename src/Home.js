import React from 'react'
import { Nav, Container, Table, Button } from 'react-bootstrap'

export const Home = () => {
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

      <Container className='d-flex mt-3 justify-content-end'>
        <Button variant='success'>Agregar Usuario</Button>
        <Button variant='danger' >Borrar Usuario</Button>
      </Container>

      <Container className='mt-3'>
      <Table striped bordered hover>
        <thead>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo Electrónico</th>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Juan Carlos</td>
                <td>Santoyo</td>
                <td>jcsantoyo@utma.edu.mx</td>
            </tr>
            <tr>
                <td>002</td>
                <td>María Fernanda</td>
                <td>Aguirre</td>
                <td>mfaguirre@utma.edu.mx</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Jorge</td>
                <td>Vera</td>
                <td>jvera@utma.edu.mx</td>
            </tr>
            <tr>
                <td>004</td>
                <td>Sarur</td>
                <td>Santoyo</td>
                <td>ssantoyo@utma.edu.mx</td>
            </tr>
        </tbody>
      </Table>
      </Container>
    </>
  )
}