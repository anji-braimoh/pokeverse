import React from 'react';
import { useState,useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;



function App() {

  const [poke,setPoke] = useState(0)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await fetch(pokeApi)
      result.json().then(json =>{
        console.log(json)
      })
    }
    fetchData()
  }, [])

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <PokemonCard />
    </div>
  );
}

export { App };
