import {
  FETCH_EVOLUTION_CHAIN_REQUEST,
  FETCH_EVOLUTION_CHAIN_SUCCESS,
  FETCH_EVOLUTION_CHAIN_FAILLURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  evolutionChain: {},
  error: "",
};

export const evolutionChainReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_EVOLUTION_CHAIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVOLUTION_CHAIN_SUCCESS:
      return {
        ...state,
        evolutionChain: action.payload,
        loading: false,
      };
    case FETCH_EVOLUTION_CHAIN_FAILLURE:
      return {
        ...state,
        loading: false,
        evolutionChain: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
