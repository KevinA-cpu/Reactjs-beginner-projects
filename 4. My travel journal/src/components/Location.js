function Location(props) {
  return (
    <div className="location">
      <img src={props.imageUrl} alt=""></img>
      <div>
        <div className="url-section">
          <h1>
            <i class="bi bi-geo-alt-fill"></i>
            {props.location}
            <a href={props.googleMaps}>View on Google Maps</a>
          </h1>
        </div>
        <div className="des-section">
          <h1>{props.title}</h1>
          <h2>
            {props.startDate} - {props.endDate}
          </h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
