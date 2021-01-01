import {
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

export function fetchPokemonDetailsRequest() {
  return {
    type: FETCH_POKEMON_DETAILS_REQUEST,
  };
}

export function fetchPokemonDetailsSuccess(data) {
  return {
    type: FETCH_POKEMON_DETAILS_SUCCESS,
    payload: data,
  };
}

export function fetchPokemonDetailsFailure(error) {
  return {
    type: FETCH_POKEMON_DETAILS_FAILURE,
    payload: error,
  };
}

export function fetchPokemonDetails(PokemonName) {
  return async function (dispatch = useDispatch()) {
    dispatch(fetchPokemonDetailsRequest());
    try {
      const response = await PokeAPI.getPokemonByName(PokemonName);
      console.log(response);
      dispatch(fetchPokemonDetailsSuccess(response));
    } catch (error) {
      dispatch(fetchPokemonDetailsFailure(error));
      console.log(error);
    }
  };
}
