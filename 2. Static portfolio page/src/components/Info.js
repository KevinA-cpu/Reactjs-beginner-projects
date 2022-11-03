import Photo from "../images/photo.jpg";
import About from "./About";
import Interests from "./Interests";

function Info() {
  return (
    <div className="info">
      <img src={Photo} alt=""></img>
      <h1>Ly Bang</h1>
      <h2>Backend Developer</h2>
      <h3>https://www.facebook.com/lybang1410/</h3>
      <div className="buttons">
        <button className="email">
          <i class="bi bi-envelope-fill"></i>
          Email
        </button>
        <button className="linkedin">
          <i class="bi bi-linkedin"></i>
          LinkedIn
        </button>
      </div>
      <About />
      <Interests />
    </div>
  );
}

export default Info;
