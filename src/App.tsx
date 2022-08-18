import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [side, setSide] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  const [style, setStyle] = useState(0);
  let heads = front;
  let tails = back;

  return (
    <div className="App">
      <div className="stats">
        <h3 id="heads-count">Head: {heads} </h3>
        <h3 id="heads-count">Tail: {tails} </h3>
      </div>
      <div className="coin">
        <div className="heads">
          <h2>
            {side === 1 ? (
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/780px-2006_Quarter_Proof.png" />
            ) : (
              <img src="https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png" />
            )}
          </h2>
        </div>
      </div>
      <div className="buttons">
        <button
          id="flip-button"
          onClick={() => {
            let frontorback = Math.floor(Math.random() * 2);
            if (frontorback === 1) setFront(front + 1);
            else if (frontorback === 0) setBack(back + 1);
            setSide(frontorback);
          }}
        >
          Flip Coin
        </button>
        <button
          id="reset-button"
          onClick={() => {
            setFront(0);
            setBack(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
