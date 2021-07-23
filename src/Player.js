import React, { useState, useRef } from "react";
import "./style.css";
import { Stack } from "./Stack";
import { Pot, handlePot } from "./Pot";
import { GameBoard, testGame } from "./GameBoard";
let startStack = 50;
let pot = 0;

function Player({ playerCard1, playerCard2 }) {
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

  function handleStack() {
    playerRaise = inputRef.current.value;
    testGame(inputRef.current.value);
    testGame(inputRef.current.value);
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
        <h3>Player</h3>
        <Stack stackProps={stackData} />
        <input ref={inputRef} type="text" />
        <button onClick={handleStack}>Bet</button>
        <button onClick={handleFold}>Fold</button>
        <cardDiv>{playerCard1}</cardDiv>
        <cardDiv>{playerCard2}</cardDiv>
      </div>
    </>
  );
}

export default Player;
