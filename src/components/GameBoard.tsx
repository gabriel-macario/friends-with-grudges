import  React, { CSSProperties, useContext, useEffect, useState } from "react";
import GameRow from "./GameRow";
import { AnswerContext } from "../contexts/GameState"
import { isEnter, isLetter } from "../helpers"

interface GameBoardProps {
    gameFinished?: boolean;
}

interface GameBoardState {
    currentRow: number,
    currentString: string,
    currentWords: Array<string>
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
    const [boardState, setBoardState] = useState<GameBoardState>({
        currentRow: 0,
        currentString: "",
        currentWords: Array(5).fill("")
    });

    function handleLetterPress(e: KeyboardEvent) {
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;

        if (currentString.length < 5) {
            
            console.log(e.key);
            
            let newString: string = currentString + e.key;
            let newWords: Array<string> = [...currentWords];
            newWords[currentRow] = newString;

            let newBoardState: GameBoardState = {
                currentRow,
                currentString: newString,
                currentWords: newWords
            }

            setBoardState(newBoardState)
        }
    }

    function handleBackspace(e: KeyboardEvent) {
        console.log("backspace pressed");
        
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;

        let newString: string = currentString.slice(0, currentString.length - 1);
        
        let newWords: Array<string> = [...currentWords];
        newWords[currentRow] = newString;

        let newBoardState: GameBoardState = {
            currentRow,
            currentString: newString,
            currentWords: newWords,
        }

        setBoardState(newBoardState);
    }

    function handleEnterPress() {
        console.log("ENTER PRESSED");
        
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;
        
        if (currentString.length === 5) {
            console.log("string valid for checking")
            setBoardState({
                currentRow: currentRow + 1,
                currentString: "",
                currentWords
            })
        } else {
            console.log("string invalid");
        }
    }

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (isLetter(e)) {
                handleLetterPress(e)
            } else if (isEnter(e)) {
                handleEnterPress();
            } else if (e.key === `Backspace`) {
                handleBackspace(e);
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    const answer = useContext(AnswerContext);

    let gameRows = boardState.currentWords.map((word, i) => <GameRow key={`${i}`} checked={i < boardState.currentRow} word={word.toUpperCase()} />)

    return <div
        style={GameBoardStyles}
    >
        {gameRows}
        <div>{`The correct word is ${answer}`}</div>
    </div>
}

export default GameBoard;