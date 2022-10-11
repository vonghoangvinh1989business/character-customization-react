import React from "react";

function ClothingLayerTwoList({ handleClick, totalClothingTwo, selected }) {
  const clothingLayerTwoList = [];
  for (let i = 1; i <= totalClothingTwo; i++) {
    const clothingLayerTwoItem = (
      <div
        onClick={() => handleClick({ clothesLayer2Index: i })}
        key={`clothing-layer-two-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/clothes/layer_2/${i}.png`}
          alt={`clothing-layer-two-${i}`}
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    );
    clothingLayerTwoList.push(clothingLayerTwoItem);
  }
  return (
    <div className="list-section">
      <h2>Clothing (L2)</h2>
      <div className="list">{clothingLayerTwoList}</div>
    </div>
  );
}

export default ClothingLayerTwoList;
