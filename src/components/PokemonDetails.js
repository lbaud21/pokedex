import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../actions/fetchPokemonDetails";
import { fetchSpecies } from "../actions/fetchSpecies";
import CreatePokemonDetails from "./CreatePokemonDetails";

export default function DisplayPokemonDetails() {
  const pokemon = useSelector((state) => state.pokemonDetails.pokemonDetails);
  const species = useSelector((state) => state.species.species);

  const URL = window.location.href; //get actual url to extract pokemon name
  const splittedURL = URL.split("/");
  const pokemonName = splittedURL[splittedURL.length - 1];

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonName));
    dispatch(fetchSpecies(pokemonName));
  }, [pokemonName, dispatch]);

  const extractEnglishText = (textList) => {
    const filteredList = textList?.filter(
      (entry) => entry.language.name === "en"
    );
    return filteredList?.[0];
  };

  return (
    <CreatePokemonDetails
      name={pokemon?.name}
      picURL={pokemon?.sprites?.other?.dream_world?.front_default}
      height={(pokemon?.height * 0.1).toFixed(1)}
      weight={(pokemon?.weight * 0.1).toFixed(1)}
      types={pokemon?.types}
      abilities={pokemon?.abilities}
      stats={pokemon?.stats}
      descriptionText={extractEnglishText(
        species?.flavor_text_entries
      )?.flavor_text?.replace("", " ")}
      loading={
        pokemonDetailsLoading ||
        speciesLoading ||
        evolutionChainLoading ||
        evolutionImagesLoading
      }
    />
  );
}
