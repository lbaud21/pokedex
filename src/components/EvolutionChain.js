import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvolutionChain } from "../actions/fetchEvolutionChain";
import OrganizeEvolutionChain from "./OrganizeEvolutionChain";

//import CreatePokemonDetails from "./CreatePokemonDetails";

export default function EvolutionChain() {
  const dispatch = useDispatch();
  const evolutionChainLoading = useSelector(
    (state) => state?.evolutionChain?.loading
  );
  const evolutionImagesLoading = useSelector(
    (state) => state?.evolutionImages?.loading
  );

  const extractIdFromUrl = (url) => {
    const splittedUrl = url?.split("/");
    return splittedUrl ? splittedUrl[splittedUrl.length - 2] : null;
  };
  const evolutionChainId = useSelector((state) =>
    extractIdFromUrl(state?.species?.species?.evolution_chain?.url)
  );

  useEffect(() => {
    if (evolutionChainId) dispatch(fetchEvolutionChain(evolutionChainId));
  }, [dispatch, evolutionChainId]);

  return (
    <OrganizeEvolutionChain
      loading={evolutionChainLoading || evolutionImagesLoading}
    />
  );
}
