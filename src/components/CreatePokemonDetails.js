import React from "react";
//import "../styles/pokemonDetails.css";

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
    return <div></div>;
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
              src={
                picURL
                  ? picURL
                  : `${process.env.PUBLIC_URL}./images/no-image.jpg`
              }
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
                src={`${process.env.PUBLIC_URL}/images/types/${item.type.name}.svg`}
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
            <p>
              <span>height:</span> {height} m
            </p>
            <p>
              <span>weight:</span> {weight} m
            </p>
          </div>

          <div className="abilities">
            <p>
              <span>Abilities:</span>
            </p>
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
            <div key={`${stat.stat.name}`} className="progress-wrapper">
              <p className="stat-name">{stat.stat.name}</p>
              <progress max="100" value={stat.base_stat} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
