import React from "react";

export default function CreateEvolutionChain({
  evolutionsNames,
  evolutionsImages,
}) {
  return (
    <div>
      {evolutionsNames.map((name, index) => {
        return (
          <div key={`evolution ${name}`}>
            <p>{name}</p>
            <div>
              <img
                src={
                  evolutionsImages[index]
                    ? evolutionsImages[index]
                    : "../../public/images/no-image.jpg"
                }
                alt={name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
