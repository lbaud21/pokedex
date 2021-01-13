import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILLURE,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  team: [],
  error: "",
};

export const teamReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        team: action.payload,
        loading: false,
      };
    case FETCH_TEAM_FAILLURE:
      return {
        ...state,
        loading: false,
        team: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
