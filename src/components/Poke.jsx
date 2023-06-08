import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../App.css"

function Poke() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonData(response.data.results);
        console.log(response);
      }
      fetchData();
    }, []);


  return (
    <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
            
            <div className="pokemon-cards">
                {pokemonData.map((pokemon, index) => (
                <div key={index} className="pokemon-card">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                    <h2>{pokemon.name}</h2>
                </div>
        ))}
            </div>
        </div>
    </div>
  )
}

export default Poke
