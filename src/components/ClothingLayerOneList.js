import React from "react";

function ClothingLayerOneList({ handleClick, totalClothingOne, selected }) {
  const clothingLayerOneList = [];
  for (let i = 1; i <= totalClothingOne; i++) {
    const clothingLayerOneItem = (
      <div
        onClick={() => handleClick({ clothesLayer1Index: i })}
        key={`clothing-layer-one-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/clothes/layer_1/${i}.png`}
          alt={`clothing-layer-one-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    clothingLayerOneList.push(clothingLayerOneItem);
  }
  return (
    <div className="list-section">
      <h2>Clothing (L1)</h2>
      <div className="list">{clothingLayerOneList}</div>
    </div>
  );
}

export default ClothingLayerOneList;
