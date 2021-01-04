import {
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILLURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  species: {},
  error: "",
};

export const speciesReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SPECIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.payload,
        loading: false,
      };
    case FETCH_SPECIES_FAILLURE:
      return {
        ...state,
        loading: false,
        species: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
