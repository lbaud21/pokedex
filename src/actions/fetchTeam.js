import {
  FETCH_EVOLUTION_CHAIN_REQUEST,
  FETCH_EVOLUTION_CHAIN_SUCCESS,
  FETCH_EVOLUTION_CHAIN_FAILLURE,
} from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

export function fetchEvolutionChainRequest() {
  return {
    type: FETCH_EVOLUTION_CHAIN_REQUEST,
  };
}

export function fetchEvolutionChainSuccess(chain) {
  return {
    type: FETCH_EVOLUTION_CHAIN_SUCCESS,
    payload: chain,
  };
}

export function fetchEvolutionChainFaillure(error) {
  return {
    type: FETCH_EVOLUTION_CHAIN_FAILLURE,
    payload: error,
  };
}

export function fetchEvolutionChain(id) {
  return async function (dispatch = useDispatch()) {
    dispatch(fetchEvolutionChainRequest());
    try {
      const response = await PokeAPI.getEvolutionChainById(id);
      dispatch(fetchEvolutionChainSuccess(response));
    } catch (error) {
      dispatch(fetchEvolutionChainFaillure(error));
    }
  };
}
