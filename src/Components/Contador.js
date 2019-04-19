// INFO: https://midu.dev/react-hooks-use-state-anadiendo-estado-a-nuestro-componente-funcional

import React, { useState, useEffect } from 'react'

const Contador = () => {
  // useState recibe un parámetro: el valor inicial del estado (que será 0)
  // y devuelve un array de dos posiciones:
  //  la primera (count), tiene el valor del estado
  //  la segunda (setCount), el método para actualizar el estado
  const [count, setCount] = useState(0)

  // const counterState = useState(0) // ejecutar useState devuelve un array
  // const counter = counterState[0] // el primer elemento es el valor del state
  // const setCounter = counterState[1] // el segundo elemento es el método para actualizar el state

  useEffect(() => {
    // Actualiza el title de la página en cada click!
    document.title = `Has hecho clic ${count} veces`
  })

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz click!
      </button>
    </div>
  )
}

export default Contador
