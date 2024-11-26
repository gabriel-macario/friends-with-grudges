import React, { CSSProperties, useContext, useEffect, useState } from "react";
import GameRow from "./GameRow";
import { AnswerContext, AnswerMapContext } from "../contexts/GameState"
import { isEnter, isLetter } from "../helpers"
import Keyboard from "./Keyboard.tsx";
import { KeyButtonStatusEnum } from "../enums/KeyButtonStatuses.ts";
import { useGameStateStore } from "../stores/gameState.ts";
import { submissionIsCorrect, submissionIsLast, submissionIsValid } from "../helpers/submission.ts";

const GameRowsStyles: CSSProperties = {
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
    const answerMap = useContext(AnswerMapContext);

    const currentRow = useGameStateStore.use.currentRow();
    const currentWords = useGameStateStore.use.currentWords();
    const currentString = useGameStateStore.use.currentString();
    const gameFinished = useGameStateStore.use.gameFinished();
    const keyButtonStatuses = useGameStateStore.use.keyButtonStatuses();
    const incrementRow = useGameStateStore.use.incrementRow();
    const addLetter = useGameStateStore.use.addLetter();
    const removeLetter = useGameStateStore.use.removeLetter();
    const setWinState = useGameStateStore.use.setWinState();
    const setLossState = useGameStateStore.use.setLossState();

    function generateNewKeyButtonStatuses() {

        const newStatuses = new Map(keyButtonStatuses);

        for (let i = 0; i < currentString.length; i++) {
            const char = currentString[i].toUpperCase();

            if (char === answer[i]) {
                newStatuses.set(char, KeyButtonStatusEnum.CORRECT);
            } else if (answerMap.get(char) && newStatuses.get(char) !== KeyButtonStatusEnum.CORRECT) {
                newStatuses.set(char, KeyButtonStatusEnum.PRESENT);
            } else if (!answerMap.has(char)) {
                newStatuses.set(char, KeyButtonStatusEnum.ABSENT)
            }
        }

        return newStatuses
    }

    function handleLetterPress(e: KeyboardEvent) {
        addLetter(e.key);
    }

    function handleBackspace() {
        removeLetter();
    }

    function handleEnterPress() {
        if (submissionIsCorrect(currentString.toUpperCase(), answer.toUpperCase())) {
            const newKeyButtonStatuses = generateNewKeyButtonStatuses();
            
            setWinState(newKeyButtonStatuses);
            
            alert(`You won! The solution was ${answer}`)
        } else if (submissionIsLast(currentString.toUpperCase(), answer.toUpperCase())) {
            const newKeyButtonStatuses = generateNewKeyButtonStatuses();

            setLossState(newKeyButtonStatuses);
            
            alert(`You lost. The solution was ${answer}`)
        } else if (submissionIsValid(currentString.toUpperCase(), answer.toUpperCase())) {
            const newKeyButtonStatuses = generateNewKeyButtonStatuses();

            incrementRow(newKeyButtonStatuses);
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

        if (!gameFinished)
            document.addEventListener('keydown', handleKeyDown)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    const gameRows = currentWords.map((word, i) => <GameRow
        key={`${i}`}
        checked={i < currentRow}
        word={word.toUpperCase()}
    />)

    return (
        <div>
            <div
                style={GameRowsStyles}
            >
                {gameRows}
            </div>
            <Keyboard keyStatuses={keyButtonStatuses} />
        </div>
    )
}

export default GameBoard;