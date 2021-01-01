import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "./actions/fetchPokemonDetails";
import CreatePokemonDetails from "./CreatePokemonDetails";

export default function DisplayPokemonDetails() {
  const URL = window.location.href; //get actual url to extract pokemon name
  const splittedURL = URL.split("/");
  const pokemonName = splittedURL[splittedURL.length - 1];
  const pokemon = useSelector((state) => state.pokemonDetails.pokemonDetails);
  const loading = useSelector((state) => state.pokemonDetails.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonName));
  }, [dispatch]);
  console.log(pokemon);
  return (
    <>
      {!loading && (
        <CreatePokemonDetails
          key={pokemonName}
          name={pokemonName}
          picURL={pokemon?.sprites?.other?.dream_world?.front_default}
          height={pokemon?.height}
          weight={pokemon?.weight}
          types={pokemon?.types}
          abilities={pokemon?.abilities}
          moves={pokemon?.moves}
          stats={pokemon?.stats}
        />
      )}
      <div></div>
    </>
  );
}
