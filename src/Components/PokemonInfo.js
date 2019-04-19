// INFO: https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes

import React, { useEffect, useState } from 'react'

const PokemonInfo = ({ name = 'pikachu' }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null)

  // Por defecto los useEffect() se disparan cada vez que se realiza un nuevo renderizado
  useEffect(() => {
    // Async Function inside of your effect.
    const fetchPikachu = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const json = await response.json()
      setPokemonInfo(json)
    }

    fetchPikachu()
  }, [name]) // Este useEffect() sólo lo querremos renderizar cuando el nombre del Pokémon que queremos buscar cambie por props.

  return (
    pokemonInfo && (
      <p>La pokeId es <strong>{pokemonInfo.id}</strong> y su nombre es <strong>{pokemonInfo.name}</strong></p>
    )
  )
}

export default PokemonInfo
