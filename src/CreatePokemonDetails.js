import React from "react";
import "./styles/DisplayPokemonDetails.css";

export default function CreatePokemonDetails({
  name,
  picURL,
  height,
  weight,
  types,
  abilities,
  moves,
  stats,
}) {
  return (
    <div className="details-wrapper">
      <div className="pokemon-presentation container">
        <h2>{name}</h2>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "/./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
      </div>

      <div className="pokemon-types container">
        <h3>Types</h3>
        <div className="types">
          {types?.map((item) => (
            <img
              key={`${name}${item.type.name}`}
              src={`/./images/types/${item.type.name}.svg`}
              alt={`${item.type.name} type`}
            />
          ))}
        </div>
      </div>

      <div className="pokemon-caracteristics container">
        <h3>Caracteristics</h3>
        <div className="mensurations">
          <p>{`height: ${height} m`}</p>
          <p>{`weight: ${weight} kg`}</p>
        </div>

        <div className="abilities">
          {abilities?.map((ability) => (
            <p key={ability.ability.name}>{ability.ability.name}</p>
          ))}
        </div>
      </div>

      <div className="pokemon-stats container">
        <h3>Stats</h3>
        {stats?.map((stat, index) => (
          <div key={`${stat.stat.name}`}>
            <p className="stat-name">{stat.stat.name}</p>
            <progress max="100" value={stat.base_stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
