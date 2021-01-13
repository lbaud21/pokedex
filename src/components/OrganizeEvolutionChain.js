import _ from "lodash";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateEvolutionChain from "./CreateEvolutionChain";
import { fetchPokemonsFromEvolution } from "../actions/fetchPokemonsFromEvolution";

export default function OrganizeEvolutionChain() {
  const dispatch = useDispatch();
  const evolutionChain = useSelector(
    (state) => state?.evolutionChain?.evolutionChain?.chain
  );
  const imagesList = useSelector(
    (state) => state?.evolutionImages?.evolutionImages
  );

  const pokemonDetailsLoading = useSelector(
    (state) => state?.pokemonsDetails?.loading
  );
  const speciesLoading = useSelector((state) => state?.species?.loading);
  const evolutionChainLoading = useSelector(
    (state) => state?.evolutionChain?.loading
  );
  const evolutionImagesLoading = useSelector(
    (state) => state?.evolutionImages?.loading
  );

  const extractDataFromEvolutionChain = (chain) => {
    const dataList = [];
    let actualObject = chain;

    let hasMore = false;
    do {
      dataList.push(actualObject?.species?.name);
      if (actualObject?.evolves_to?.length > 0) {
        actualObject = actualObject?.evolves_to[0];
        hasMore = true;
      } else {
        hasMore = false;
      }
    } while (hasMore);
    return dataList;
  };

  const evolutionNameList = extractDataFromEvolutionChain(evolutionChain);

  useEffect(() => {
    //check if evolutionChain is empty to avoid unnecessary renders
    if (!_.isEmpty(evolutionChain)) {
      const evolutionNameList = extractDataFromEvolutionChain(evolutionChain);
      dispatch(fetchPokemonsFromEvolution(evolutionNameList));
    }
  }, [evolutionChain, dispatch]);

  return (
    <>
      <CreateEvolutionChain
        evolutionsNames={evolutionNameList}
        evolutionsImages={imagesList}
        loading={
          pokemonDetailsLoading ||
          speciesLoading ||
          evolutionChainLoading ||
          evolutionImagesLoading
        }
      />
    </>
  );
}
