import React from "react";
import { decode } from "html-entities";
import { nanoid } from "nanoid";

function QuizzSection(props) {
  const [quizzes, setQuizzes] = React.useState([]);

  const [checkResult, setCheckResult] = React.useState(false);

  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  function randomizer(arr) {
    let i, j, tmp;

    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function generateAnswers(array) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      tempArray.push({
        value: array[i],
        isClick: false,
        isCorrect: false,
      });
    }
    randomizer(tempArray);
    return tempArray;
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        const tempData = data.results;
        setQuizzes({
          array_of_quiz: tempData.map((item) => {
            const answerArray = [
              ...item.incorrect_answers,
              item.correct_answer,
            ];
            return {
              question: item.question,
              correct_answer: item.correct_answer,
              all_answers: generateAnswers(answerArray),
            };
          }),
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(quizzes);

  function answerClick(quiz, answer) {
    for (let i = 0; i < quiz.all_answers.length; i++) {
      if (quiz.all_answers[i].isClick === true) {
        quiz.all_answers[i].isClick = false;
      }
      if (quiz.all_answers[i].value === answer.value) {
        quiz.all_answers[i].isClick = true;
      }
    }
    setQuizzes((prevState) => ({
      array_of_quiz: prevState.array_of_quiz.map((prevQuiz) =>
        prevQuiz.question === quiz.question ? { ...quiz } : prevQuiz
      ),
    }));

    //console.log(quiz, answer);
  }

  function answerClickToggle(answer) {
    if (answer.isClick && !checkResult) return "answer-clicked";
    else if (answer.isClick && answer.isCorrect) return "answer-right";
    else if (answer.isClick && !answer.isCorrect) return "answer-wrong";
    else if (!answer.isClick && checkResult) return "answer-blur";
    return "";
  }

  function checkAnswers() {
    setCheckResult(true);
    setQuizzes((prevState) => ({
      array_of_quiz: prevState.array_of_quiz.map((prevQuiz) => {
        const quiz = prevQuiz;
        for (let i = 0; i < prevQuiz.all_answers.length; i++) {
          if (
            quiz.all_answers[i].value === prevQuiz.correct_answer &&
            quiz.all_answers[i].isClick
          ) {
            quiz.all_answers[i].isCorrect = true;
            setCorrectAnswers((prevState) => prevState + 1);
            return { ...quiz };
          }
        }
        return prevQuiz;
      }),
    }));
  }

  function playAgain() {
    props.resetMenu();
  }

  const quizzElements =
    quizzes.length === 0
      ? []
      : quizzes.array_of_quiz.map((quiz) => {
          const answerElements = quiz.all_answers.map((answer) => {
            return (
              <p
                key={nanoid()}
                className={`${answerClickToggle(answer)}`}
                onClick={() => answerClick(quiz, answer)}
              >
                {decode(answer.value)}
              </p>
            );
          });
          return (
            <div key={nanoid()} className="quizz">
              <h6>{decode(quiz.question)}</h6>
              <div className="answers">{answerElements}</div>
            </div>
          );
        });

  return (
    <div className="quiz-page">
      <svg
        width="130"
        height="124"
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0,1300)"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-38.919 2.96445C-10.8241 1.07254 20.4974 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909921 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z"
          fill="#DEEBF8"
        />
      </svg>

      <svg
        width="252"
        height="262"
        viewBox="0 0 126 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(1140)"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.4095 71.3947C35.1213 40.8507 -2.68211 11.7816 1.17274 -29.6933C5.4394 -75.599 39.8541 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.539 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z"
          fill="#FFFAD1"
        />
      </svg>
      <div className="quizz-section">{quizzElements}</div>

      {!checkResult ? (
        <div className="quiz-button">
          {quizzElements.length === 0 ? (
            ""
          ) : (
            <button onClick={checkAnswers}>Check Answers</button>
          )}
        </div>
      ) : (
        <div className="play-again">
          <p>You scored {correctAnswers}/5 answers</p>
          <button onClick={playAgain}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default QuizzSection;
