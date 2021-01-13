import { FETCH_TEAM_REQUEST, FETCH_TEAM_SUCCESS, FETCH_TEAM_FAILLURE } from ".";

import { PokeAPI } from "../config";
import { useDispatch } from "react-redux";

import _ from "lodash";

export function fetchTeamRequest() {
  return {
    type: FETCH_TEAM_REQUEST,
  };
}

export function fetchTeamSuccess(team) {
  return {
    type: FETCH_TEAM_SUCCESS,
    payload: team,
  };
}

export function fetchTeamFaillure(error) {
  return {
    type: FETCH_TEAM_FAILLURE,
    payload: error,
  };
}

export function fetchTeam(pokemonNamesList) {
  return async function (dispatch = useDispatch()) {
    if (_.isEmpty(pokemonNamesList)) {
      dispatch(fetchTeamSuccess([]));
    } else {
      const teamList = await Promise.all(
        pokemonNamesList.map(async (name) => {
          try {
            const pokemonName = await PokeAPI.getPokemonByName(name);
            return pokemonName;
          } catch (error) {
            dispatch(fetchTeamFaillure(error));
          }
        })
      );
      dispatch(fetchTeamSuccess(teamList));
    }
  };
}
