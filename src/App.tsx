import GameBoard from "./components/GameBoard";
import { AnswerContext, AnswerMapContext } from "./contexts/GameState";
import words from "./data/words.json";

const App: React.FC = () => {
  const answerIndex = Math.floor(Math.random() * words.length);
  const answer = words[answerIndex].toUpperCase();
  const answerMap = new Map();
  const answerChars = [...answer];
  answerChars.forEach(char => answerMap.set(char, true));

  return (
    <AnswerContext.Provider value={answer} >
      <AnswerMapContext.Provider value={answerMap}>
        <div>
          <h1 style={{
            textAlign: "center",
            fontFamily: "sans-serif"
          }}>WORD GUESSER</h1>
          <GameBoard />
        </div>
      </AnswerMapContext.Provider>
    </AnswerContext.Provider >
  )
}
export default App
