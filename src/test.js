import React, { useState } from 'react';

function Prueba() {
  // Estado para el arreglo de preguntas
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaTitulo, setPreguntaTitulo] = useState("");
  const [nuevaOpcion, setNuevaOpcion] = useState("");
  const [opciones, setOpciones] = useState([]);

  // Manejar cambios en el input de la pregunta
  const handlePreguntaChange = (e) => setPreguntaTitulo(e.target.value);

  // Manejar cambios en el input de las opciones
  const handleOpcionChange = (e) => setNuevaOpcion(e.target.value);

  // Función para agregar una nueva opción a la lista de opciones de la pregunta
  const agregarOpcion = () => {
    if (nuevaOpcion.trim() !== "") {
      setOpciones([...opciones, nuevaOpcion]);
      setNuevaOpcion("");
    } else {
      alert("Escribe una opción antes de agregarla.");
    }
  };

  // Función para agregar la pregunta con sus opciones
  const agregarPregunta = () => {
    if (preguntaTitulo.trim() !== "" && opciones.length > 0) {
      const nuevaPregunta = { titulo: preguntaTitulo, opciones: opciones };
      setPreguntas([...preguntas, nuevaPregunta]);
      setPreguntaTitulo("");
      setOpciones([]);
    } else {
      alert("La pregunta debe tener un título y al menos una opción.");
    }
  };

  return (
    <div>
      <h1>Crear cuestionario</h1>
      
      {/* Input para agregar el título de la pregunta */}
      <input
        type="text"
        value={preguntaTitulo}
        onChange={handlePreguntaChange}
        placeholder="Escribe la pregunta"
      />
      
      {/* Input para agregar una opción */}
      <input
        type="text"
        value={nuevaOpcion}
        onChange={handleOpcionChange}
        placeholder="Escribe una opción"
      />
      <button onClick={agregarOpcion}>Agregar opción</button>
      
      {/* Mostrar las opciones añadidas */}
      <ul>
        {opciones.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
      
      {/* Botón para guardar la pregunta con sus opciones */}
      <button onClick={agregarPregunta}>Agregar pregunta</button>

      <h2>Preguntas del cuestionario:</h2>
      
      {/* Mostrar las preguntas con sus opciones */}
      <ul>
        {preguntas.map((pregunta, index) => (
          <li key={index}>
            <strong>{pregunta.titulo}</strong>
            <ul>
              {pregunta.opciones.map((opcion, i) => (
                <li key={i}>{opcion}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Prueba;
