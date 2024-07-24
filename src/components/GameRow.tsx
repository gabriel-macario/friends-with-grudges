import React, { CSSProperties } from 'react';
import LetterBox from "./LetterBox";

interface GameRowProps {
    children?: React.ReactNode;
    word?: string
}

const GameRowStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly"
};

const GameRow: React.FC<GameRowProps> = ({ children, word = '' }: GameRowProps) => {
    let boxes = [];

    for (let i = 0; i < word.length; i++ ) {
        boxes.push(<LetterBox letter={word[i]} />)
    }
    for (let i = word.length; i < 5; i++) {
        boxes.push(<LetterBox/>);
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