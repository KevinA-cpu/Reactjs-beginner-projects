function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 ? (
        <div className="status">SOLD OUT</div>
      ) : (
        <div className="status">ONLINE</div>
      )}
      <img src={`images/${props.coverImg}`} alt=""></img>
      <div className="rating">
        <img src="images/star.png" alt=""></img>
        <p>{props.stats.rating}</p>
        <div className="score">
          <p>
            ({props.stats.reviewCount}) • {props.location}
          </p>
        </div>
      </div>

      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}

export default Card;
