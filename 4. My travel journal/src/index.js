import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Location from "./components/Location";
import data from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/styles.css";

function App() {
  const Locations = data.map((local) => {
    return <Location {...local} />;
  });
  return (
    <div>
      <Header />
      {Locations}
    </div>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
