import {
  FETCH_POKEMON_LIST_REQUEST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  pokemonList: [],
  error: "",
};

export const pokemonListReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POKEMON_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload],
        loading: false,
      };
    case FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        pokemonList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
