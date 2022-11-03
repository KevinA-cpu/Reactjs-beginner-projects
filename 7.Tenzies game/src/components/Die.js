function Die(props) {
  const dots = [];
  for (let i = 0; i < props.value; i++) {
    dots.push(<span key={i} className="pip"></span>);
  }

  return (
    <div
      onClick={props.holdDice}
      className={`die ${props.isHeld ? "die-lock" : ""}`}
    >
      {dots}
    </div>
  );
}

export default Die;
