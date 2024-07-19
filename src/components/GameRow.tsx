import React, { CSSProperties } from 'react';
import LetterBox from "./LetterBox";

interface GameRowProps {
    children?: React.ReactNode;
}

const GameRowStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly"
};

const GameRow: React.FC<GameRowProps> = ({ children }: GameRowProps) => {
    let boxes = [];

    for (let i = 0; i < 5; i++) {
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