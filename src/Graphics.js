import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Button, Card, Container } from 'react-bootstrap';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Graphics = () => {

    const questionsData = [
        {
            question: '¿Cuál es tu color favorito?',
            data: [12, 19, 3, 5, 2, 3],
            options: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morado', 'Naranja'],
        },
        {
            question: '¿Cuál es tu fruta favorita?',
            data: [7, 12, 5, 15, 9, 2],
            options: ['Manzana', 'Plátano', 'Uva', 'Fresa', 'Naranja', 'Pera'],
        },
        {
            question: '¿Qué deporte practicas?',
            data: [20, 10, 5, 13, 1, 7],
            options: ['Fútbol', 'Baloncesto', 'Tenis', 'Béisbol', 'Golf', 'Otro'],
        },
    ];


    return (
        <>
            <Container className="d-flex mt-3"
                style={{ flexWrap: "wrap", justifyItems: "center" }}>
                {questionsData.map((question, i) => {
                    const data = {
                        labels: question.options,
                        datasets: [
                            {
                                label: question.question,
                                data: question.data,
                                backgroundColor: 'rgba(99, 255, 132, 0.2)',
                                borderColor: 'rgba(99, 255, 132, 1)',
                                borderWidth: 1,
                            },
                        ],
                    };

                    const options = {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            tooltip: {
                                enabled: true,
                            },
                        },
                    };

                    return (
                        <Card key={i} className="mb-3 "
                            style={{ width: "35rem", marginRight: "1rem" }}>
                            <Card.Body>
                                <h5>{question.question}</h5>
                                <Bar data={data} options={options} />
                            </Card.Body>
                        </Card>
                    );
                })}
            </Container>

            <Container className='d-grid gap-2 d-md-flex mt-3 justify-content-end mb-5'>
                <Button href='/forms'>Volver al Formulario</Button>
            </Container>
        </>
    );
};

export default Graphics;