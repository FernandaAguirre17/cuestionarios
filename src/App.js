import './App.css';
import { Container, Card } from 'react-bootstrap'
import { Navegador } from './Components/Navegador.js';

const App = () => {
  return (
    <>
      <Navegador />
      <Container className='mb-5'>
        <Card className='mt-5'>
          <Card.Body>
            <Card.Title>
              Esta es la pantalla de Inicio
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default App;
