import React,{useState,useEffect} from 'react'
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;



function App() {
  const [pokemons, setPokemons] = useState([]); //settting initial pokemons to empty array
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        pokeApi
      );
      const data = await response.json();

      setPokemons(data.results);
    };
    fetchData();
  }, []); // adding an empty list so it runs only once instead of infinitly

  





  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>
      <section>
      {pokemons.map(({ name, url }) => (
        <p key={url}>{url}</p>
      ))}
    </section>

      <PokemonCard />
    </div>
  );
}

export { App };
