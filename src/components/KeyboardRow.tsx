import React, { CSSProperties } from "react";
import KeyboardButton from "./KeyboardButton";

interface KeyboardRowProps {
    rowString: Array<string>;
    rowIndex: number;
    keyStatuses?: Map<string, number>;
}

const KeyboardRowStyles: React.FC<KeyboardRowProps> = ({ rowString, rowIndex, keyStatuses }: KeyboardRowProps) => {
    let justifyContent = "space-between";

    if (rowIndex === 1) {
        justifyContent = "space-around"
    }

    const KeyboardRowStyles: CSSProperties = {
        display: "flex",
        justifyContent,
        flexWrap: "nowrap",
        flexShrink: 3,
        margin: "0 auto 8px",
        width: "100%"
    }

    const keyboardButtons = rowString.map((button, i) => <KeyboardButton buttonString={button} key={i} />)


    return <div
        style={KeyboardRowStyles}
    >
        {keyboardButtons}
    </div>
}

export default KeyboardRowStyles;