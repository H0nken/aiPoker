import React, { useState, useRef } from "react";
import "./style.css";
import { Stack } from "./Stack";
import { Pot, handlePot } from "./Pot";
import { GameBoard, testGame2 } from "./GameBoard";
let startStack = 50;
let pot = 0;

function AiPlayer({ aiPlayerCard1, aiPlayerCard2 }) {
  const [stackData, setStackData] = useState([]);
  const [potData, setPotData] = useState([]);
  const [foldData, setFoldData] = useState([]);
  const inputRef = useRef();

  let playerRaise = 0;

  function handleFold() {
    console.log("Fold!");
    //player lose
    //ai.player win the pot
    //new round
  }

  function handleAiStack() {
    playerRaise = inputRef.current.value;
    testGame2(inputRef.current.value);
    startStack = startStack - playerRaise;
    pot = inputRef.current.value;
    setStackData(function () {
      return [startStack];
    });

    setPotData(function () {
      return [pot];
    });
    inputRef.current.value = null;
  }

  return (
    <>
      <div className="players">
        <h3>AI-Player</h3>
        <Stack stackProps={stackData} />
        <input ref={inputRef} type="text" />
        <button onClick={handleAiStack}>Bet</button>
        <button onClick={handleFold}>Fold</button>
        <cardDiv>{aiPlayerCard1}</cardDiv>
        <cardDiv>{aiPlayerCard2}</cardDiv>
      </div>
    </>
  );
}

export default AiPlayer;
