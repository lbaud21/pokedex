import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST } from ".";

export function addToFavoriteList(pokemonName) {
  return {
    type: ADD_TO_FAVORITE_LIST,
    payload: pokemonName,
  };
}

export function removeFromFavoriteList(pokemonName) {
  return {
    type: REMOVE_FROM_FAVORITE_LIST,
    payload: pokemonName,
  };
}
