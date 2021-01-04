import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecies } from "../actions/fetchSpecies.js";

export default function Species({ pokemonName }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecies(pokemonName));
  }, [dispatch, pokemonName]);
}
