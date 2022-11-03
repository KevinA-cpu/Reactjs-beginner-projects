import React from "react";
import StartMenu from "./components/StartMenu";
import QuizzSection from "./components/QuizzSection";

function App() {
  const [isMenu, setIsMenu] = React.useState(true);

  function startQuiz() {
    setIsMenu((prevState) => !prevState);
  }

  function resetMenu() {
    setIsMenu(true);
  }

  return (
    <main>
      {isMenu ? (
        <StartMenu startQuiz={startQuiz} />
      ) : (
        <QuizzSection resetMenu={resetMenu} />
      )}
    </main>
  );
}
export default App;
