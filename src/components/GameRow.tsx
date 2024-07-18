import React, { CSSProperties } from 'react';

interface GameRowProps {
    children?: React.ReactNode;
}

const GameRowStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly"
};

const GameRow: React.FC<GameRowProps> = ({ children }: GameRowProps) => {
    return (
        <div
            style={GameRowStyles}
        >
            {children}
        </div>
    )
}

export default GameRow;