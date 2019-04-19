// INFO: https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes

import React, { useEffect, useState } from 'react'

const ShowWindowWidth = () => {
  const [width, setWidth] = useState(0)

  // Por defecto los useEffect() se disparan cada vez que se realiza un nuevo renderizado
  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const width = document.body.clientWidth
      setWidth(width)
    }
    // Actualizaremos el width al montar el componente
    updateWidth()
    // Nos suscribimos al evento resize() de window
    window.addEventListener('resize', updateWidth)
    // Devolvemos una función para anular la suscripción al evento y evitar los memory leaks!
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, []) // Este useEffect() se ejecuta sólo al montarse el componente

  return (
    <div>
      <span>Width es de {width}px</span>
    </div>
  )
}

export default ShowWindowWidth
