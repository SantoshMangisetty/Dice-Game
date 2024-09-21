import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Dice from "./Dice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "./Button";

export default function Game() {
  const [select, setselect] = useState();
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [rule, setrule] = useState(false);

  const generate = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roll = () => {
    if (select == undefined) {
      toast.error("select a number");
      return;
    }
    const random = generate(1, 7);
    setDice(random);
    if (select == random) {
      toast.success("Congrats finally u got it");
      setScore(score + random);
    } else {
      setScore(score - 1);
    }
    setselect();
  };

  return (
    <MainContainter>
      <ToastContainer />
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector select={select} setselect={setselect} />
      </div>
      <Dice dice={dice} roll={roll} />
      <div className="btns">
        <Button
          onClick={() => {
            setScore(0);
          }}
        >
          Reset Score
        </Button>
        <Button
          onClick={() => {
            setrule(!rule);
          }}
        >
          {rule ? "Hide" : "Show"} Rules
        </Button>
        {rule ? (
          <Rulescontainer>
            <div>
              <h2>How to play dice Game</h2>
              <p>Select any Number</p>
              <p>Click on Dice Image to roll Dice</p>
              <p>
                If the Selected Number is equal to Dice u get same Point as Dice
              </p>
              <p>If u get Wrong guess 1 point is deducted from ur Score</p>
            </div>
          </Rulescontainer>
        ) : (
          ""
        )}
      </div>
    </MainContainter>
  );
}

const MainContainter = styled.div`
  padding-top: 50px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Rulescontainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  background-color: wheat;
  border: 1px solid black;
  padding: 20px;
  box-shadow: 0px 0px 10px gray;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;

// const Rules = () => {
//   return (

//   );
// };
