import {
  FETCH_POKEMON_LIST_REQUEST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILURE,
} from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

export function fetchPokemonListRequest() {
  return {
    type: FETCH_POKEMON_LIST_REQUEST,
  };
}

export function fetchPokemonListSuccess(data) {
  return {
    type: FETCH_POKEMON_LIST_SUCCESS,
    payload: data,
  };
}

export function fetchPokemonListFailure(error) {
  return {
    type: FETCH_POKEMON_LIST_FAILURE,
    payload: error,
  };
}

export function fetchPokemonList({ limit, offset }) {
  return async function (dispatch = useDispatch()) {
    dispatch(fetchPokemonListRequest());
    const interval = {
      limit: limit,
      offset: offset,
    };

    try {
      const response = await PokeAPI.getPokemonsList(interval);
      const pokemonList = await Promise.all(
        response.results.map(async (pokemon) => {
          try {
            return await PokeAPI.getPokemonByName(pokemon.name);
          } catch (error) {
            dispatch(fetchPokemonListFailure(error));
          }
        })
      );
      dispatch(fetchPokemonListSuccess(pokemonList));
    } catch (error) {
      dispatch(fetchPokemonListFailure(error));
    }
  };
}
