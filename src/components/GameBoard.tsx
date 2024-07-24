import  React, { CSSProperties, useContext } from "react";
import GameRow from "./GameRow";
import { AnswerContext } from "../contexts/GameState"

interface GameBoardProps {
    gameFinished?: boolean;
}
const GameBoardStyles: CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexFlow: "row wrap",
    flexGrow: 1,
    justifyContent: "center",
    margin: "auto",
    overflow: "hidden",
    width: "50%",
}

const GameBoard: React.FC<GameBoardProps> = ({}: GameBoardProps  ) => {
    const answer = useContext(AnswerContext);

    const currentWords = [
        "earth",
        "story",
        "adieu",
        "flops",
        "quits",
        "tests"
    ]

    let gameRows = currentWords.map(word => <GameRow word={word.toUpperCase()} />)

    return <div
        style={GameBoardStyles}
    >
        {gameRows}
        <div>{`The correct word is "${answer}"`}</div>
    </div>
}

export default GameBoard;