function PlayerData(props) {
  return (
    <div className="playing-data">
      <div className="stopwatch">
        <p>
          Timer: <span>{props.minutes}:</span>
          <span>{props.seconds}:</span>
          <span>{props.miliseconds}</span>
        </p>
      </div>
      <div className="rolls-number">Number of rolls: {props.numberOfRolls}</div>
    </div>
  );
}

export default PlayerData;
