import  React, { CSSProperties } from "react";
import GameRow from "./GameRow";

interface GameBoardProps {
    gameFinished: boolean;
}
const GameBoardStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row wrap",
    flexGrow: 1,
    overflow: "hidden"
}

const GameBoard: React.FC<GameBoardProps> = ({ gameFinished = false }: GameBoardProps  ) => {
    const numRows = 5;

    let rows = [];

    for (let i = 0; i < numRows; i++ ) {
        rows.push(
            <GameRow>
                <div>{`Row${i}`}</div>
            </GameRow>
        )
    }
    return <div
        style={GameBoardStyles}
    >
        {rows}
    </div>
}

export default GameBoard;