import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavoriteList } from "../actions/favoritePokemonsList";

export default function DeleteButton({ pokemonName }) {
  const dispatch = useDispatch();
  const favoritePokemonsList = useSelector(
    (state) => state?.favoritePokemons?.favoritePokemonsList
  );

  const handleClick = (pokemonName) => {
    dispatch(removeFromFavoriteList(pokemonName));
  };

  const ButtonImage = () => {
    return (
      <img
        src="./images/trash_icon.png"
        alt="Click me to add a pokemon to your team"
      />
    );
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
