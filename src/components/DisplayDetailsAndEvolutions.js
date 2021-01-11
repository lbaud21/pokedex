import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PokemonDetails from "./PokemonDetails";
import EvolutionChain from "./EvolutionChain";
import Loader from "../loader/loader";

export default function ComponentsAssembly() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pokemonDetailsLoading = useSelector(
    (state) => state?.pokemonsDetails?.loading
  );
  const speciesLoading = useSelector((state) => state?.species?.loading);
  const evolutionChainLoading = useSelector(
    (state) => state?.evolutionChain?.loading
  );
  const evolutionImagesLoading = useSelector(
    (state) => state?.evolutionImages?.loading
  );

  return (
    <>
      {(pokemonDetailsLoading ||
        speciesLoading ||
        evolutionChainLoading ||
        evolutionImagesLoading) && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}

      <div className="details-wrapper">
        <PokemonDetails />
        <EvolutionChain />
      </div>
    </>
  );
}
