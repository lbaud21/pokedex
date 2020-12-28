import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePokemonCards from "./CreatePokemonCards";
import { fetchPokemonList } from "./actions/fetchPokemonList";

export default function DisplayPokemonCards() {
  const pokemonList = useSelector((state) => state.pokemonList);
  const dispatch = useDispatch();
  const [interval, setInterval] = useState({ limit: 21, offset: 0 });

  useEffect(() => {
    dispatch(fetchPokemonList(interval));
  }, [interval]);

  console.log(pokemonList);

  return (
    <>
      {pokemonList.map((pokemon) => (
        <CreatePokemonCards
          key={pokemon.name}
          name={pokemon.name}
          picURL={pokemon.sprites.other.dream_world.front_default}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      ))}
    </>
  );
}
