import GameBoard from "./components/GameBoard";
import { AnswerContext, AnswerMapContext } from "./contexts/GameState";

const App: React.FC = () => {
  const answer = "tests".toUpperCase();

  let answerChars = [...answer];

  let answerMap = new Map();

  answerChars.forEach(char => answerMap.set(char, true));

  return (
    <AnswerContext.Provider value={answer}>
      <AnswerMapContext.Provider value = {answerMap}>
        <div>
          <h1 style={{
            textAlign: "center"
          }}>Wordle Clone</h1>
          <GameBoard gameFinished={false} />
        </div>
      </AnswerMapContext.Provider>
    </AnswerContext.Provider>
  )
}
// function App() {
//   return (
//   )
// }

export default App
