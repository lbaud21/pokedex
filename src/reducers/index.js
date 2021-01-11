import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { evolutionChainReducer } from "./evolutionChainReducer";
import { speciesReducer } from "./speciesReducer";
import { pokemonsFromEvolutionReducer } from "./pokemonsFromEvolutionReducer";
import { favoritePokemonsListReducer } from "./favoritePokemonsListReducer";

export default function rootReducer() {
  return combineReducers({
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer,
    species: speciesReducer,
    evolutionChain: evolutionChainReducer,
    evolutionImages: pokemonsFromEvolutionReducer,
    favoritePokemons: favoritePokemonsListReducer,
  });
}
