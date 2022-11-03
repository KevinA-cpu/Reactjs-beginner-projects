import ReactDOM from "react-dom/client";
import Info from "./components/Info";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/styles.css";
// const header = document.create Element("h1")
// header.textContent = "DUDE SHUT THE FUCK UP"
// header.className = "header"
// document.querySelector("#root").appendChild(header)
function App() {
  return (
    <div>
      <Info />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

//ReactDOM.render(navplus(),document.querySelector("#root"))
