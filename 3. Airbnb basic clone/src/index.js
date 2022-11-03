import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./styles/styles.css";

function App() {
  const Cards = data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="cards">{Cards}</div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
