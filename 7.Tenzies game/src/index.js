import React from "react";
import ReactDOM from "react-dom/client";
import Die from "./components/Die";
import PlayerData from "./components/PlayerData";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import "./styles/styles.css";

function App() {
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      numArray.push(generateNewDie());
    }
    return numArray;
  }

  const [diceValue, setDiceValue] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  const [numberOfRolls, setNumberOfRolls] = React.useState(0);

  const [time, setTime] = React.useState(0);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const allHeld = diceValue.every((die) => die.isHeld);
    const allSame = diceValue.every((die) => die.value === diceValue[0].value);
    if (allHeld && allSame) {
      setTenzies(true);
      setStart(false);

      const data = localStorage.getItem("time");
      if (data) {
        if (time < data) {
          localStorage.setItem("time", time);
        }
      } else {
        localStorage.setItem("time", time);
      }
    }
  }, [diceValue]);

  React.useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  function rollDice(tenzies, stopwatch) {
    if (tenzies) {
      setDiceValue(allNewDice());
      setTenzies(false);
      setNumberOfRolls(0);
      setTime(0);
      setStart(false);
    } else {
      if (!start) setStart(true);
      setDiceValue((prevState) =>
        prevState.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setNumberOfRolls((prevState) => prevState + 1);
    }
  }

  function holdDice(id) {
    setDiceValue((prevState) =>
      prevState.map((die) => {
        return die.id === id
          ? {
              ...die,
              isHeld: !die.isHeld,
            }
          : die;
      })
    );
  }

  const diceElements = diceValue.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });
  let miliseconds = ("0" + ((time / 10) % 1000)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  return (
    <div>
      {tenzies && <Confetti />}
      <main>
        <PlayerData
          miliseconds={miliseconds}
          seconds={seconds}
          minutes={minutes}
          numberOfRolls={numberOfRolls}
        />
        <h1 className="title">Tenzies</h1>
        <p className="instruction">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button onClick={() => rollDice(tenzies)}>
          {tenzies ? "New game" : "Roll"}
        </button>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
