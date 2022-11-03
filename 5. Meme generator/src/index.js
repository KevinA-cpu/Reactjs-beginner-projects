import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
