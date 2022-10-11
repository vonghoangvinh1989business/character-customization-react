import React from "react";

function HairList({ handleClick, totalHair, selected }) {
  const hairList = [];
  for (let i = 1; i <= totalHair; i++) {
    const hairItem = (
      <div
        onClick={() => handleClick({ hairIndex: i })}
        key={`hair-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/hair/${i}.png`}
          alt={`hair-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    hairList.push(hairItem);
  }
  return (
    <div className="list-section">
      <h2>Hair</h2>
      <div className="list">{hairList}</div>
    </div>
  );
}

export default HairList;
