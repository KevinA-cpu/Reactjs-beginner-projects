import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import "./styles/styles.css";
// const header = document.create Element("h1")
// header.textContent = "DUDE SHUT THE FUCK UP"
// header.className = "header"
// document.querySelector("#root").appendChild(header)
function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

//ReactDOM.render(navplus(),document.querySelector("#root"))
