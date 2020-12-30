import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePokemonCards from "./CreatePokemonCards";
import { fetchPokemonList } from "./actions/fetchPokemonList";
//import useScrollEventListener from "./hooks/useScrollEventListener";
import useIntersectionObserverScroll from "./hooks/useIntersectionObserverScroll";
import Loader from "./loader/loader";

export default function DisplayPokemonCards() {
  const pokemonList = useSelector((state) => state.pokemonList);
  const loading = useSelector((state) => state.loading);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();
  const limit = 21;
  const [offset, setOffset] = useState(1000);
  const observedRef = useRef();

  /*const infiniteScroll = () => {
    return setOffset((prevState) => prevState + 22);
  };

  useScrollEventListener(infiniteScroll);*/

  const changeOffset = () => {
    return setOffset((prevState) => prevState + 22);
  };

  useEffect(() => {
    dispatch(fetchPokemonList(limit, offset));
  }, [offset]);

  //useIntersectionObserverScroll(observedRef)

  const observer = useRef();
  const lastPokemonCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          changeOffset();
          console.log("intersecting");
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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
      <div id="observer" ref={lastPokemonCardRef}>
        ------------
      </div>
      {loading && <Loader />}
    </>
  );
}
