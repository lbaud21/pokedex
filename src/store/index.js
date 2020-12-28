import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { pokemonListReducer } from "../reducers/pokemonListReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  pokemonListReducer,
  composeEnhancers(applyMiddleware(thunk))
);
