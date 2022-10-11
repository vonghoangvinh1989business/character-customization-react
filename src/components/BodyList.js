import React from "react";

function BodyList({ handleClick, totalBody, selected }) {
  const bodyList = [];
  for (let i = 1; i <= totalBody; i++) {
    const bodyItem = (
      <div
        onClick={() => handleClick({ bodyIndex: i })}
        key={`body-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/body/${i}.png`}
          alt={`body-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );

    bodyList.push(bodyItem);
  }

  return (
    <div className="list-section">
      <h2>Body</h2>
      <div className="list">{bodyList}</div>
    </div>
  );
}

export default BodyList;
