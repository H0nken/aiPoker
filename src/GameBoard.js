import React, { useState, useRef } from "react";
import "./style.css";
import { deck, shuffledDeck } from "./Deck";
import Player from "./Player";
import AiPlayer from "./AiPlayer";
import { Pot } from "./Pot";
import { Stack } from "./Stack";
import styled from "styled-components";

let gameDeck = deck();
shuffledDeck(gameDeck);
let playerBet;
let aiPlayerBet;
let totPot;

export function testGame(bet) {
  playerBet = 0;
  playerBet = parseInt(bet);
  console.log("Sum of bet: " + playerBet);
  return playerBet;
}

export function testGame2(bet) {
  aiPlayerBet = 0;
  aiPlayerBet = parseInt(bet);
  return aiPlayerBet;
}

function GameBoard() {
  const [playerData, setPlayerData] = useState([]);
  const [potData, setPotData] = useState(0);
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [showTurn, setShowTurn] = useState(false);
  const [showRiver, setShowRiver] = useState(false);

  const cardDiv = {
    display: "none",
    width: "20%",
    padding: "1rem",
    margin: "10px",
    border: "2px solid black",
    width: "20%",
  };

  function handleDeck() {
    if (gameDeck[0].Value === gameDeck[2].Value) {
      console.log("Player have pair!");
    }
    let toPot = playerBet;
    let toPot2 = aiPlayerBet;
    //totPot = parseInt(totPot + pot);
    console.log("To Pot: " + toPot);
    let test = gameDeck[0].Value + " " + gameDeck[0].Suit;
    let test2 = gameDeck[1].Value + " " + gameDeck[1].Suit;
    let test3 = gameDeck[2].Value + " " + gameDeck[2].Suit;
    let test4 = gameDeck[3].Value + " " + gameDeck[3].Suit;
    let test5 = gameDeck[4].Value + " " + gameDeck[4].Suit;
    let test6 = gameDeck[5].Value + " " + gameDeck[5].Suit;
    let test7 = gameDeck[6].Value + " " + gameDeck[6].Suit;
    let test8 = gameDeck[7].Value + " " + gameDeck[7].Suit;
    let test9 = gameDeck[8].Value + " " + gameDeck[8].Suit;

    setPlayerData(function () {
      return [test, test2, test3, test4, test5, test6, test7, test8, test9];
    });
    setPotData(function () {
      return [toPot + toPot2];
    });
  }

  return (
    <>
      <div className="gameBoard">
        <h1>ai-poker</h1>
        <button onClick={handleDeck}>Deal</button>
        <button onClick={() => setShow(true)}>Flop</button>
        <button onClick={() => setShowTurn(true)}>Turn</button>
        <button onClick={() => setShowRiver(true)}>River</button>
        <Pot potProps={potData} />
        {show ? (
          <cardDiv>
            {gameDeck[4].Value + " "}
            {gameDeck[4].Suit + " "}
          </cardDiv>
        ) : null}
        {show ? (
          <cardDiv>
            {gameDeck[5].Value + " "}
            {gameDeck[5].Suit + " "}
          </cardDiv>
        ) : null}
        {show ? (
          <cardDiv>
            {gameDeck[6].Value + " "}
            {gameDeck[6].Suit + " "}
          </cardDiv>
        ) : null}
        {showTurn ? (
          <cardDiv>
            {gameDeck[7].Value + " "}
            {gameDeck[7].Suit + " "}
          </cardDiv>
        ) : null}
        {showRiver ? (
          <cardDiv>
            {gameDeck[8].Value + " "}
            {gameDeck[8].Suit + " "}
          </cardDiv>
        ) : null}
      </div>
      <Player playerCard1={playerData[0]} playerCard2={playerData[2]} />
      <AiPlayer aiPlayerCard1={playerData[1]} aiPlayerCard2={playerData[3]} />
    </>
  );
}
export default GameBoard;
