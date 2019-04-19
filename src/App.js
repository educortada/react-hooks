import React, { Component } from 'react'
import Contador from './Components/Contador'
import ShowWindowWidth from './Components/ShowWindowWidth'
import PokemonInfo from './Components/PokemonInfo'

class App extends Component {
  render () {
    return (
      <div>
        <Contador />
        <ShowWindowWidth />
        <PokemonInfo />
      </div>
    )
  }
}

export default App
