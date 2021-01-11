import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST } from "../actions";

const INITIAL_STATE = {
  favoritePokemonsList: [],
};

export const favoritePokemonsListReducer = function (
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case ADD_TO_FAVORITE_LIST:
      return {
        favoritePokemonsList: [...state.favoritePokemonsList, action.payload],
      };
    case REMOVE_FROM_FAVORITE_LIST:
      return {
        favoritePokemonsList: state.favoritePokemonsList.filter(
          (name) => name !== action.payload
        ),
      };

    default:
      return state;
  }
};
