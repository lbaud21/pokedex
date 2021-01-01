import {
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  pokemonDetails: {},
  error: "",
};

export const pokemonDetailsReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        pokemonDetails: action.payload,
        loading: false,
      };
    case FETCH_POKEMON_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        pokemonDetails: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
