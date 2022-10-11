import React from "react";
import RandomizeButton from "./RandomizeButton";

function Avatar({ avatar, ramdomizeClick }) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img
          src={`/character/body/${avatar.bodyIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "0",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/eyes/${avatar.eyeIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "1",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/hair/${avatar.hairIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "6",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/clothes/layer_1/${avatar.clothesLayer1Index}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "2",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/clothes/layer_2/${avatar.clothesLayer2Index}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "3",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/clothes/layer_3/${avatar.clothesLayer3Index}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "4",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/mouths/${avatar.mouthIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "4",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/noses/${avatar.noseIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "4",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/eyebrows/${avatar.eyeBrowIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "4",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/accessories/glasses/${avatar.glassesIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "5",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
        <img
          src={`/character/accessories/hats/${avatar.hatIndex}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "6",
            position: "absolute",
            left: "0px",
            top: "-15px",
          }}
        />
      </div>
      <RandomizeButton ramdomizeClick={ramdomizeClick} />
    </div>
  );
}

export default Avatar;
