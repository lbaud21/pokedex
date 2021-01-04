import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePokemonCards from "./CreatePokemonCards";
import { fetchPokemonList } from "../actions/fetchPokemonList";
//import useScrollEventListener from "./hooks/useScrollEventListener";
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

  /*const infiniteScroll = () => {
    return setOffset((prevState) => prevState + 22);
  };

  useScrollEventListener(infiniteScroll);*/

  const changeOffset = () => {
    return setOffset((prevState) => prevState + 22);
  };

  useEffect(() => {
    dispatch(fetchPokemonList(limit, offset));
  }, [offset, dispatch]);

  //useIntersectionObserverScroll(observedRef)

  const observer = useRef();
  const lastPokemonCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          changeOffset();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="cards-wrapper">
      {pokemonList.map((pokemon) => (
        <CreatePokemonCards
          key={pokemon.name}
          name={pokemon.name}
          picURL={pokemon.sprites.other.dream_world.front_default}
          height={pokemon?.height * (0.1).toFixed(1)}
          weight={pokemon?.weight * (0.1).toFixed(1)}
          types={pokemon.types}
        />
      ))}
      <div id="observer" ref={lastPokemonCardRef}>
        ------------
      </div>
      {loading && <Loader />}
    </div>
  );
}
