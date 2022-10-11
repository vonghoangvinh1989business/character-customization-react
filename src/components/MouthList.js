import React from "react";

function MouthList({ handleClick, totalMouth, selected }) {
  const mouthList = [];
  for (let i = 1; i <= totalMouth; i++) {
    const mouthItem = (
      <div
        onClick={() => handleClick({ mouthIndex: i })}
        key={`mouth-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/mouths/${i}.png`}
          alt={`mouth-${i}`}
          height="120"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    mouthList.push(mouthItem);
  }
  return (
    <div className="list-section">
      <h2>Mouth</h2>
      <div className="list">{mouthList}</div>
    </div>
  );
}

export default MouthList;
