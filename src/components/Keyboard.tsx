import React, { CSSProperties } from "react";
import KeyboardRow from "./KeyboardRow";
import KeyButtonStatuses from "../enums/KeyButtonStatuses";

interface KeyboardProps {
    keyStatuses: Map<string, KeyButtonStatuses>;
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
        margin: "10px auto 8px",
        width: "350px"
    }

    const keyboardRows = rows.map((row, i) => <KeyboardRow
        keyStatuses={keyStatuses}
        rowString={row}
        key={i}
        rowIndex={i}
    />)


    return <div
        style={KeyboardStyles}
    >
        {keyboardRows}
    </div>
}

export default Keyboard;