import React from "react";

function GlassesList({ handleClick, totalGlasses, selected }) {
  const glassesList = [];
  for (let i = 1; i <= totalGlasses; i++) {
    const glassesItem = (
      <div
        onClick={() => handleClick({ glassesIndex: i })}
        key={`glasses-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/accessories/glasses/${i}.png`}
          alt={`glasses-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    glassesList.push(glassesItem);
  }
  return (
    <div className="list-section">
      <h2>Glasses</h2>
      <div className="list">{glassesList}</div>
    </div>
  );
}

export default GlassesList;
