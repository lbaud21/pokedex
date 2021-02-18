import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePokemonCards from "./CreatePokemonCards";
import { fetchPokemonList } from "../actions/fetchPokemonList";
import useIntersectionObserverScroll from "../hooks/useIntersectionObserverScroll";
import Loader from "../loader/loader";
import "../styles/DisplayPokemonCards.css";

export default function DisplayPokemonCards() {
  const pokemonList = useSelector((state) => state.pokemonList.pokemonList);
  const loading = useSelector((state) => state.pokemonList.loading);
  const hasMore = useSelector((state) => state.pokemonList.hasMore);
  const dispatch = useDispatch();
  const limit = 21;
  const [offset, setOffset] = useState(0);
  console.log(offset);
  const changeOffset = () => {
    dispatch(fetchPokemonList(limit, offset + limit));
    setOffset(pokemonList.length + limit);
  };

  useEffect(() => {
    if (pokemonList.length === 0) {
      console.log("useEffect entered");

      dispatch(fetchPokemonList(limit, 0));
    }
  }, [offset, dispatch, pokemonList.length]);

  const lastPokemonCardRef = useIntersectionObserverScroll(
    loading,
    hasMore,
    changeOffset
  );

  return (
    <div className="cards-wrapper">
      {pokemonList.map((pokemon, index) => (
        <CreatePokemonCards
          key={pokemon.name}
          name={pokemon.name}
          picURL={pokemon.sprites.other.dream_world.front_default}
          height={(pokemon?.height * 0.1).toFixed(1)}
          weight={(pokemon?.weight * 0.1).toFixed(1)}
          types={pokemon.types}
          callbackFunc={lastPokemonCardRef}
          index={index}
          listLength={pokemonList.length}
        />
      ))}
      {loading && <Loader />}
    </div>
  );
}
