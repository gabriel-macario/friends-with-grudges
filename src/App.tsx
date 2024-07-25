import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import { AnswerContext, AnswerMapContext } from "./contexts/GameState";
import words from "./data/words.json";

const App: React.FC = () => {
  // let [answer, setAnswer] = useState("");
  let answerIndex = Math.floor(Math.random() * words.length);
  let answer = words[answerIndex].toUpperCase();
  let answerMap = new Map();

  useEffect(() => {
    let answerChars = [...answer];
    answerChars.forEach(char => answerMap.set(char, true));
  }, [])

  return (
    <AnswerContext.Provider value={answer} >
      <AnswerMapContext.Provider value={answerMap}>
        <div>
          <h1 style={{
            textAlign: "center",
            fontFamily: "monospace"
          }}>Wordle Clone</h1>
          <GameBoard gameFinished={false} />
        </div>
      </AnswerMapContext.Provider>
    </AnswerContext.Provider >
  )
}
export default App
