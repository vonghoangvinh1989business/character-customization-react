import React from "react";

function ClothingLayerThreeList({ handleClick, totalClothingThree, selected }) {
  const clothingLayerThreeList = [];
  for (let i = 1; i <= totalClothingThree; i++) {
    const clothingLayerThreeItem = (
      <div
        onClick={() => handleClick({ clothesLayer3Index: i })}
        key={`clothing-layer-three-${i}`}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
      >
        <img
          src={`/character/clothes/layer_3/${i}.png`}
          alt={`clothing-layer-three-${i}`}
          height="120"
          className="img-center"
          style={{ top: "-15px" }}
        />
      </div>
    );
    clothingLayerThreeList.push(clothingLayerThreeItem);
  }
  return (
    <div className="list-section">
      <h2>Clothing (L3)</h2>
      <div className="list">{clothingLayerThreeList}</div>
    </div>
  );
}

export default ClothingLayerThreeList;
