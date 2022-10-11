import React from "react";
import Button from "react-bootstrap/Button";

function RandomizeButton({ ramdomizeClick }) {
  return (
    <div className="buttonGroup">
      <Button
        onClick={() => {
          ramdomizeClick();
        }}
        variant="info"
        size="sm"
        className="randomizeButton"
      >
        Randomize!
      </Button>
    </div>
  );
}

export default RandomizeButton;
