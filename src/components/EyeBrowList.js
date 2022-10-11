import React from "react";

function EyeBrowList({ handleClick, totalEyebrows, selected }) {
  const eyeBrowList = [];
  for (let i = 1; i <= totalEyebrows; i++) {
    const eyeBrowItem = (
      <div
        onClick={() => handleClick({ eyeBrowIndex: i })}
        key={`eyebrow-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/eyebrows/${i}.png`}
          alt={`eyebrow-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    eyeBrowList.push(eyeBrowItem);
  }
  return (
    <div className="list-section">
      <h2>Eyebrows</h2>
      <div className="list">{eyeBrowList}</div>
    </div>
  );
}

export default EyeBrowList;
