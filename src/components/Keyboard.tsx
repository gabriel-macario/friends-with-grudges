import React, { CSSProperties } from "react";
import KeyboardRow from "./KeyboardRow";

interface KeyboardProps {
    keyStatuses?: Map<string, number>;
}

const Keyboard: React.FC<KeyboardProps> = ({ keyStatuses }: KeyboardProps) => {
    const rows = [
        "qwertyuiop".toUpperCase().split(""),
        "asdfghjkl".toUpperCase().split(""),
        ["enter".toUpperCase(), ..."zxcvbnm".toUpperCase().split(""), "<"]
    ]

    const KeyboardStyles: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto 8px",
        width: "350px"
    }

    const keyboardRows = rows.map((row, i) => <KeyboardRow rowString={row} key={i} rowIndex={i} />)


    return <div
        style={KeyboardStyles}
    >
        {keyboardRows}
    </div>
}

export default Keyboard;