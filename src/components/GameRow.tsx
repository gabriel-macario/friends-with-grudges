import React, { CSSProperties, useContext } from 'react';
import LetterBox from "./LetterBox";
import { AnswerContext, AnswerMapContext } from '../contexts/GameState';
import LetterStatus from '../enums/LetterStatus';

interface GameRowProps {
    children?: React.ReactNode;
    word?: string
}

const GameRowStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
};

const GameRow: React.FC<GameRowProps> = ({ word = '' }: GameRowProps) => {
    const answerMap = useContext(AnswerMapContext);
    const answer = useContext(AnswerContext);
    
    let boxes = [];

    for (let i = 0; i < word.length; i++) {
        let status: LetterStatus;

        if (word[i] === answer[i]) {
            status = LetterStatus.exact;
        } else if (answerMap.get(word[i])) {
            status = LetterStatus.contains;
        } else {
            status = LetterStatus.incorrect;
        }

        boxes.push(
            <LetterBox
                letter={word[i]}
                letterStatus={status}
            />
        )
    }
    for (let i = word.length; i < 5; i++) {
        boxes.push(<LetterBox />);
    }

    return (
        <div
            style={GameRowStyles}
        >
            {boxes}
        </div>
    )
}

export default GameRow;