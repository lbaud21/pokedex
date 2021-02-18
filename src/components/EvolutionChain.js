import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvolutionChain } from "../actions/fetchEvolutionChain";
import OrganizeEvolutionChain from "./OrganizeEvolutionChain";

export default function EvolutionChain() {
  const dispatch = useDispatch();

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

  return <OrganizeEvolutionChain />;
}
