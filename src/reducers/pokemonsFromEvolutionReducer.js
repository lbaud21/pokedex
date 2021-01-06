import {
  FETCH_POKEMONS_FROM_EVOLUTION_REQUEST,
  FETCH_POKEMONS_FROM_EVOLUTION_SUCCESS,
  FETCH_POKEMONS_FROM_EVOLUTION_FAILLURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  evolutionImages: [],
  error: "",
};

export const pokemonsFromEvolutionReducer = function (
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case FETCH_POKEMONS_FROM_EVOLUTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMONS_FROM_EVOLUTION_SUCCESS:
      return {
        ...state,
        evolutionImages: action.payload,
        loading: false,
      };
    case FETCH_POKEMONS_FROM_EVOLUTION_FAILLURE:
      return {
        ...state,
        loading: false,
        evolutionImages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
