import React from "react";

function EyeList({ handleClick, totalEyes, selected }) {
  const eyeList = [];
  for (let i = 1; i <= totalEyes; i++) {
    const eyeItem = (
      <div
        onClick={() => handleClick({ eyeIndex: i })}
        key={`eye-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/eyes/${i}.png`}
          alt={`eye-${i}`}
          height="150"
          className="img-center"
          style={{ top: "35px" }}
        />
      </div>
    );
    eyeList.push(eyeItem);
  }
  return (
    <div className="list-section">
      <h2>Eyes</h2>
      <div className="list">{eyeList}</div>
    </div>
  );
}

export default EyeList;
