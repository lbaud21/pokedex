import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavoriteList,
  removeFromFavoriteList,
} from "../actions/favoritePokemonsList";

export default function HandleFavoriteButtonClick({ pokemonName }) {
  const dispatch = useDispatch();
  const favoritePokemonsList = useSelector(
    (state) => state?.favoritePokemons?.favoritePokemonsList
  );

  const handleClick = (pokemonName) => {
    if (!favoritePokemonsList.includes(pokemonName)) {
      dispatch(addToFavoriteList(pokemonName));
    } else {
      dispatch(removeFromFavoriteList(pokemonName));
    }
  };

  const ButtonImage = () => {
    if (!favoritePokemonsList.includes(pokemonName)) {
      return (
        <img
          src="./images/star.png"
          alt="Click me to add a pokemon to your team"
        />
      );
    } else {
      return (
        <img
          src="./images/checked_star.png"
          alt="Click me to add a pokemon to your team"
        />
      );
    }
  };

  return (
    <button
      type="button"
      className="team-button"
      onClick={(event) => {
        event.preventDefault();
        handleClick(pokemonName);
      }}
    >
      <ButtonImage />
    </button>
  );
}
