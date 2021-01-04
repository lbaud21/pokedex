import {
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILLURE,
} from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

export function fetchSpeciesRequest() {
  return {
    type: FETCH_SPECIES_REQUEST,
  };
}

export function fetchSpeciesSuccess(specy) {
  return {
    type: FETCH_SPECIES_SUCCESS,
    payload: specy,
  };
}

export function fetchSpeciesFaillure(error) {
  return {
    type: FETCH_SPECIES_FAILLURE,
    payload: error,
  };
}

export function fetchSpecies(name) {
  return async function (dispatch = useDispatch()) {
    dispatch(fetchSpeciesRequest());
    try {
      const response = await PokeAPI.getPokemonSpeciesByName(name);
      dispatch(fetchSpeciesSuccess(response));
    } catch (error) {
      dispatch(fetchSpeciesFaillure(error));
    }
  };
}
