import backLogo from "../images/logo512.png";

function MainContent() {
  return (
    <div className="main">
      <div className="main-content">
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <img className="back-logo" src={backLogo} alt=" "></img>
    </div>
  );
}

export default MainContent;
