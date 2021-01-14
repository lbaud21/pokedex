import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeam } from "../actions/fetchTeam";
import CreateTeam from "./CreateTeam";
import Loader from "../loader/loader";

export default function DisplayTeam() {
  const namesOfPokemonsInTeam = useSelector(
    (state) => state?.favoritePokemons?.favoritePokemonsList
  );

  const teamData = useSelector((state) => state?.team?.team);
  const loading = useSelector((state) => state?.team?.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam(namesOfPokemonsInTeam));
  }, [namesOfPokemonsInTeam, dispatch]);

  if (loading)
    return (
      <div className="cards-wrapper">
        <Loader />
      </div>
    );
  else if (teamData.length === 0) {
    return (
      <div
        className="cards-wrapper"
        style={{ flexFlow: "column nowrap", alignItems: "center" }}
      >
        <p style={{ margin: "2em" }}>Your team is empty</p>
        <div>
          <img src="./images/sad_emoji.png" alt="sad emoji" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cards-wrapper">
        {loading && <Loader />};
        {teamData.map((pokemon) => (
          <CreateTeam
            key={pokemon?.name}
            name={pokemon?.name}
            picURL={pokemon?.sprites?.other?.dream_world?.front_default}
            height={(pokemon?.height * 0.1).toFixed(1)}
            weight={(pokemon?.weight * 0.1).toFixed(1)}
            types={pokemon?.types}
          />
        ))}
      </div>
    );
  }
}
