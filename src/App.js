import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import BodyList from "./components/BodyList";
import EyeBrowList from "./components/EyeBrowList";
import EyeList from "./components/EyeList";
import HairList from "./components/HairList";
import MouthList from "./components/MouthList";
import ClothingLayerOneList from "./components/ClothingLayerOneList";
import ClothingLayerTwoList from "./components/ClothingLayerTwoList";
import ClothingLayerThreeList from "./components/ClothingLayerThreeList";
import HatList from "./components/HatList";
import GlassesList from "./components/GlassesList";
import Avatar from "./components/Avatar";

import { getRandomHumanPartIndex } from "../src/utils";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const [avatar, setAvatar] = useState({
    bodyIndex: 0,
    eyeIndex: 0,
    hairIndex: 0,
    clothesLayer1Index: 0,
    clothesLayer2Index: 0,
    clothesLayer3Index: 0,
    mouthIndex: 0,
    noseIndex: 1,
    eyeBrowIndex: 0,
    glassesIndex: 0,
    hatIndex: 0,
  });

  // random human part
  const randomAvatar = () => {
    const avatarInitial = {
      bodyIndex: getRandomHumanPartIndex(total.body),
      eyeIndex: getRandomHumanPartIndex(total.eyes),
      hairIndex: getRandomHumanPartIndex(total.hair),
      clothesLayer1Index: getRandomHumanPartIndex(total.clothing1),
      clothesLayer2Index: getRandomHumanPartIndex(total.clothing2),
      clothesLayer3Index: getRandomHumanPartIndex(total.clothing3),
      mouthIndex: getRandomHumanPartIndex(total.mouth),
      noseIndex: 1,
      eyeBrowIndex: getRandomHumanPartIndex(total.eyebrows),
      glassesIndex: getRandomHumanPartIndex(total.glasses),
      hatIndex: getRandomHumanPartIndex(total.hat),
    };
    setAvatar({ ...avatar, ...avatarInitial });
  };

  useEffect(() => {
    randomAvatar();
  }, []);

  // handle click
  const handleClick = (partObject) => {
    setAvatar({ ...avatar, ...partObject });
  };

  return (
    <>
      <div className="App">
        <Title />
      </div>
      <div className="avatar-group gap-40">
        <div>
          <Avatar avatar={avatar} ramdomizeClick={randomAvatar} />
        </div>
        <div>
          <BodyList
            handleClick={handleClick}
            totalBody={parseInt(total.body)}
            selected={avatar.bodyIndex}
          />
          <EyeBrowList
            handleClick={handleClick}
            totalEyebrows={parseInt(total.eyebrows)}
            selected={avatar.eyeBrowIndex}
          />
          <EyeList
            handleClick={handleClick}
            totalEyes={parseInt(total.eyes)}
            selected={avatar.eyeIndex}
          />
          <HairList
            handleClick={handleClick}
            totalHair={parseInt(total.hair)}
            selected={avatar.hairIndex}
          />
          <MouthList
            handleClick={handleClick}
            totalMouth={parseInt(total.mouth)}
            selected={avatar.mouthIndex}
          />
          <ClothingLayerOneList
            handleClick={handleClick}
            totalClothingOne={parseInt(total.clothing1)}
            selected={avatar.clothesLayer1Index}
          />
          <ClothingLayerTwoList
            handleClick={handleClick}
            totalClothingTwo={parseInt(total.clothing2)}
            selected={avatar.clothesLayer2Index}
          />
          <ClothingLayerThreeList
            handleClick={handleClick}
            totalClothingThree={parseInt(total.clothing3)}
            selected={avatar.clothesLayer3Index}
          />
          <HatList
            handleClick={handleClick}
            totalHat={parseInt(total.hat)}
            selected={avatar.hatIndex}
          />
          <GlassesList
            handleClick={handleClick}
            totalGlasses={parseInt(total.glasses)}
            selected={avatar.glassesIndex}
          />
        </div>
      </div>
    </>
  );
}

export default App;
