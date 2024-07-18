import LetterBox from "./components/LetterBox";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{
        textAlign: "center"
      }}>Wordle Clone</h1>
      <GameBoard gameFinished={false} />
    </div>
  )
}
// function App() {
//   return (
//   )
// }

export default App
