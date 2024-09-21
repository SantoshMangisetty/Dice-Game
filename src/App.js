import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Startgame from "./Components/Startgame";
import { useState } from "react";
import Game from "./Components/Game";

function App() {
  let [started, setstarted] = useState(false);

  let toggleGame = () => {
    setstarted(!started);
  };
  return <>{started ? <Game /> : <Startgame toggle={toggleGame} />}</>;
}

export default App;
