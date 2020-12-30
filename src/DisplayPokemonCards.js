import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePokemonCards from "./CreatePokemonCards";
import { fetchPokemonList } from "./actions/fetchPokemonList";
import useScrollEventListener from "./hooks/useScrollEventListener";

export default function DisplayPokemonCards() {
  const pokemonList = useSelector((state) => state.pokemonList);
  const loading = useSelector((state) => state.loading);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();
  const limit = 21;
  const [offset, setOffset] = useState(0);

  const infiniteScroll = () => {
    return setOffset((prevState) => prevState + 22);
  };

  useScrollEventListener(infiniteScroll);

  useEffect(() => {
    dispatch(fetchPokemonList(limit, offset));
  }, [offset]);

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
