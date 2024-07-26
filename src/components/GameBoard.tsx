import React, { CSSProperties, useContext, useEffect, useState } from "react";
import GameRow from "./GameRow";
import { AnswerContext } from "../contexts/GameState"
import { isEnter, isLetter } from "../helpers"
import WordStore from "../data/WordStore.ts";

const answerLength = 5;
const numTries = 6;

interface GameBoardState {
    currentRow: number;
    currentString: string;
    currentWords: Array<string>;
    gameFinished: boolean;
}

const GameBoardStyles: CSSProperties = {
    alignItems: "center",
    display: "flex",
    flexFlow: "row wrap",
    flexGrow: 1,
    justifyContent: "center",
    margin: "auto",
    overflow: "hidden",
    width: "320px",
}

const GameBoard: React.FC = () => {
    const answer = useContext(AnswerContext);

    const [boardState, setBoardState] = useState<GameBoardState>({
        currentRow: 0,
        currentString: "",
        currentWords: Array(numTries).fill(""),
        gameFinished: false
    });

    function submissionIsValid(word: string): boolean {
        return word.length === answerLength && WordStore.search(word);
    }

    function submissionIsCorrect(word: string): boolean {
        return submissionIsValid(word) && word === answer;
    }

    function submissionIsLast(word: string) {
        return submissionIsValid(word) && boardState.currentRow >= numTries - 1;
    }

    function handleLetterPress(e: KeyboardEvent) {
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;

        if (currentString.length < 5) {
            const newString: string = currentString + e.key;
            const newWords: Array<string> = [...currentWords];
            newWords[currentRow] = newString;

            const newBoardState: GameBoardState = {
                currentRow,
                currentString: newString,
                currentWords: newWords,
                gameFinished: false,
            }

            setBoardState(newBoardState)
        }
    }

    function handleBackspace() {
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;

        const newString: string = currentString.slice(0, currentString.length - 1);

        const newWords: Array<string> = [...currentWords];
        newWords[currentRow] = newString;

        const newBoardState: GameBoardState = {
            currentRow,
            currentString: newString,
            currentWords: newWords,
            gameFinished: false
        }

        setBoardState(newBoardState);
    }

    function handleEnterPress() {
        const {
            currentRow,
            currentString,
            currentWords
        } = boardState;

        // CH

        if (submissionIsCorrect(currentString.toUpperCase())) {
            
            setBoardState({
                currentRow: currentRow + 1,
                currentString: "",
                currentWords,
                gameFinished: true
            });
            alert(`You won! The solution was ${answer}`)
        } else if (submissionIsLast(currentString.toUpperCase())) {
            setBoardState({
                currentRow: currentRow + 1,
                currentString: "",
                currentWords,
                gameFinished: true
            });
            alert(`You lost. The solution was ${answer}`)
            console.log("SUBMISSION IS LAST");
        } else if (submissionIsValid(currentString)) {
            setBoardState({
                currentRow: currentRow + 1,
                currentString: "",
                currentWords,
                gameFinished: false
            });
        } else if (currentString.length === 5) {
            alert(`${currentString} is not a word.`)
        }
    }

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (isLetter(e)) {
                handleLetterPress(e)
            } else if (isEnter(e)) {
                handleEnterPress();
            } else if (e.key === `Backspace`) {
                handleBackspace();
            }
        }

        if (!boardState.gameFinished)
        document.addEventListener('keydown', handleKeyDown)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    const gameRows = boardState.currentWords.map((word, i) => <GameRow key={`${i}`} checked={i < boardState.currentRow} word={word.toUpperCase()} />)

    return <div
        style={GameBoardStyles}
    >
        {gameRows}
    </div>
}

export default GameBoard;