import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonDetails from "./PokemonDetails";
import EvolutionChain from "./EvolutionChain";

export default function ComponentsAssembly() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="details-wrapper">
      <PokemonDetails />
      <EvolutionChain />
    </div>
  );
}
