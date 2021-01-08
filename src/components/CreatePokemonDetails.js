import React from "react";
import "../styles/pokemonDetails.css";
import Loader from "../loader/loader";

export default function CreatePokemonDetails({
  name,
  picURL,
  height,
  weight,
  types,
  abilities,
  stats,
  descriptionText,
  loading,
}) {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="pokemon-presentation container">
        <div className="container-title">
          <h2>{name}</h2>
        </div>
        <div className="container-content">
          <div className="image-container">
            <img
              className="pokemon-image"
              src={picURL ? picURL : "/./images/no-image.jpg"}
              alt={name}
            ></img>
          </div>
          <div className="pokemon-description">
            <p>{descriptionText}</p>
          </div>
        </div>
      </div>

      <div className="pokemon-types container">
        <div className="container-title">
          <h3>Types</h3>
        </div>
        <div className="container-content">
          <div className="image-container">
            {types?.map((item) => (
              <img
                key={`${name}${item.type.name}`}
                src={`/./images/types/${item.type.name}.svg`}
                alt={`${item.type.name} type`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pokemon-caracteristics container">
        <div className="container-title">
          <h3>Caracteristics</h3>
        </div>
        <div className="container-content">
          <div className="mensurations">
            <p>{`height: ${height} m`}</p>
            <p>{`weight: ${weight} kg`}</p>
          </div>

          <div className="abilities">
            <p>Abilities</p>
            {abilities?.map((ability) => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="pokemon-stats container">
        <div className="container-title">
          <h3>Stats</h3>
        </div>
        <div className="container-content">
          {stats?.map((stat, index) => (
            <div key={`${stat.stat.name}`}>
              <p className="stat-name">{stat.stat.name}</p>
              <progress max="100" value={stat.base_stat} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}