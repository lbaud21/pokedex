import React from "react";

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
    <>
      <div className="pokemon-presentation">
        <h2>{name}</h2>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "/./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} in weight: ${weight} lb`}</p>
        <div>
          {types?.map((item) => (
            <img
              key={`${name}${item.type.name}`}
              src={`/./images/types/${item.type.name}.svg`}
              alt={`${item.type.name} type`}
            />
          ))}
        </div>
      </div>
      <div className="pokemon-stats">
        {abilities?.map((ability) => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
        {/*moves?.map((move) => (
          <p key={move.move.name}>{move.move.name}</p>
        ))*/}
        {stats?.map((stat, index) => (
          <div key={`${stat.stat.name}`}>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </>
  );
}
