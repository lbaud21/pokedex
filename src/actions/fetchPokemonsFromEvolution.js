import {
  FETCH_POKEMONS_FROM_EVOLUTION_REQUEST,
  FETCH_POKEMONS_FROM_EVOLUTION_SUCCESS,
  FETCH_POKEMONS_FROM_EVOLUTION_FAILLURE,
} from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

export function fetchPokemonsFromEvolutionRequest() {
  return {
    type: FETCH_POKEMONS_FROM_EVOLUTION_REQUEST,
  };
}

export function fetchPokemonsFromEvolutionSuccess(chain) {
  return {
    type: FETCH_POKEMONS_FROM_EVOLUTION_SUCCESS,
    payload: chain,
  };
}

export function fetchPokemonsFromEvolutionFaillure(error) {
  return {
    type: FETCH_POKEMONS_FROM_EVOLUTION_FAILLURE,
    payload: error,
  };
}

export function fetchPokemonsFromEvolution(pokemonsNamesList) {
  return async function (dispatch = useDispatch()) {
    dispatch(fetchPokemonsFromEvolutionRequest());

    const pokemonsImagesList = await Promise.all(
      pokemonsNamesList.map(async (name) => {
        try {
          const {
            sprites: {
              other: {
                dream_world: { front_default: imageUrl },
              },
            },
          } = await PokeAPI.getPokemonByName(name);
          return imageUrl;
        } catch (error) {
          dispatch(fetchPokemonsFromEvolutionFaillure(error));
        }
      })
    );
    dispatch(fetchPokemonsFromEvolutionSuccess(pokemonsImagesList));
  };
}
