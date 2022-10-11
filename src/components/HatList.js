import React from "react";

function HatList({ handleClick, totalHat, selected }) {
  const hatList = [];
  for (let i = 1; i <= totalHat; i++) {
    const hatItem = (
      <div
        onClick={() => handleClick({ hatIndex: i })}
        key={`hat-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/accessories/hats/${i}.png`}
          alt={`hat-${i}`}
          height="60"
          className="img-center"
          style={{ top: "35px" }}
        />
      </div>
    );
    hatList.push(hatItem);
  }
  return (
    <div className="list-section">
      <h2>Hat</h2>
      <div className="list">{hatList}</div>
    </div>
  );
}

export default HatList;
