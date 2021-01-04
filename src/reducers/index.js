import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { evolutionChainReducer } from "./evolutionChainReducer";
import { speciesReducer } from "./speciesReducer";

export default function rootReducer() {
  return combineReducers({
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer,
    species: speciesReducer,
    evolutionChain: evolutionChainReducer,
  });
}
