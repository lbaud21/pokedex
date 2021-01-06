import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import EvolutionChain from "./EvolutionChain";

export default function ComponentsAssembly() {
  /* const pokemon = PokemonDetails();
  const pokemonName = pokemon.name;*/

  //const species = Species("bulbasaur");

  /*const pokemonPresentationText = species?.flavor_text_entries?.[0].flavor_text;
  const evolutionChainUrl = species?.evolution_chain?.url;
  const evolutionChainId = evolutionChainUrl?.split("/")[
    evolutionChainUrl?.split("/").length - 1
  ]; //extract evolution chain id from url*/

  return (
    <>
      <PokemonDetails />
      <EvolutionChain />
    </>
  );
}
