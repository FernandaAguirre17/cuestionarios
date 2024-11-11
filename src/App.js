import { Container, Card } from 'react-bootstrap'
import { Navegador } from './Components/Navegador.js';

const App = () => {
  const user = {
    name: 'Mateo',
    lastName: 'Guapo',
    role: 'adminitrator'
  }

  const coverForms = [{
    name: 'Formulario1',
    description: 'Descripción del Formulario',
    creator: 'Sarur',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  {
    name: 'Formulario2',
    description: 'Descripción del Formulario',
    creator: 'Charly',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  {
    name: 'Formulario3',
    description: 'Descripción del Formulario',
    creator: 'Fernanda',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  {
    name: 'Formulario4',
    description: 'Descripción del Formulario',
    creator: 'Jorge',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  {
    name: 'Formulario5',
    description: 'Descripción del Formulario',
    creator: 'Mr. Ubuntu',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  {
    name: 'Formulario6',
    description: 'Descripción del Formulario',
    creator: 'Rector UTMA',
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },

  ]

  const myForms = [{
    name: 'Formulario1',
    description: 'Descripción del Formulario',
    creator: user.name,
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },

  {
    name: 'Formulario2',
    description: 'Descripción del Formulario',
    creator: user.name,
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },

  {
    name: 'Formulario3',
    description: 'Descripción del Formulario',
    creator: user.name,
    urlImg: 'https://copymate.app/wp-content/uploads/2024/02/formularze-na-stronie-najlepsze-praktyki-projektowania-formularzy-kontaktowych-800x694.jpg'
  },
  ]


  return (
    <>
      <Navegador />
      {user.role === 'administrator' ? (
        <>
          <Container className='mt-3'>
            <Card className='mb-3 '>
              <Card.Body>
                <Card.Title>
                  Este es el Home de los Administradores
                </Card.Title>
              </Card.Body>
            </Card>

            <Container className="d-flex"
              style={{ flexWrap: "wrap", justifyItems: "center" }}>
              {coverForms.map((c) => (

                <Card className="mb-3 "
                  style={{ width: "18rem", marginRight: "1rem" }}>
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Text>{c.description}</Card.Text>
                    <Card.Text><b>Por: {c.creator}</b></Card.Text>
                    <Card.Img src={c.urlImg} />
                  </Card.Body>
                </Card>

              ))}
            </Container>

          </Container>
        </>

      ) : (
        <>
          <Container className='mt-3'>
            <Card className='mb-3'>
              <Card.Body>
                <Card.Title>
                  Mis Formularios
                </Card.Title>
              </Card.Body>
            </Card>
          </Container>

          <Container className="d-flex"
              style={{ flexWrap: "wrap", justifyItems: "center" }}>
            
            {myForms.map((mf) => (
              <Card className="mb-3 "
                style={{ width: "18rem", marginRight: "1rem" }}>
                <Card.Body>
                  <Card.Title>{mf.name}</Card.Title>
                  <Card.Text>{mf.description}</Card.Text>
                  <Card.Text><b>Por: {mf.creator}</b></Card.Text>
                  <Card.Img src={mf.urlImg} />
                </Card.Body>
              </Card>

            ))}
          </Container>
        </>
      )}
    </>
  )
}
export default App;
