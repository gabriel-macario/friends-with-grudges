import React, { CSSProperties, useContext } from 'react';
import LetterBox from "./LetterBox";
import { AnswerContext, AnswerMapContext } from '../contexts/GameState';
import LetterStatus from '../enums/LetterStatus';

interface GameRowProps {
    children?: React.ReactNode;
    word?: string;
    checked: boolean;
}

const GameRowStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
};

const GameRow: React.FC<GameRowProps> = ({ word = '', checked = false }: GameRowProps) => {
    const answerMap = useContext(AnswerMapContext);
    const answer = useContext(AnswerContext);
    
    const boxes = [];

    for (let i = 0; i < word.length && i < 5; i++) {
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
                key={i}
                checked={checked}
            />
        )
    }
    for (let i = word.length; i < 5; i++) {
        boxes.push(<LetterBox checked={false} key={i}/>);
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