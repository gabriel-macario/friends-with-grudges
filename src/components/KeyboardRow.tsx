import React, { CSSProperties } from "react";
import KeyboardButton from "./KeyboardButton";
import { KeyButtonStatusEnum} from "../enums/KeyButtonStatuses";

interface KeyboardRowProps {
    rowString: Array<string>;
    rowIndex: number;
    keyStatuses: Map<string, KeyButtonStatusEnum>;
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

    const keyboardButtons = rowString.map((button, i) => {
        const keyStatus = keyStatuses.has(button) ? keyStatuses.get(button) : KeyButtonStatusEnum.UNUSED;
        return <KeyboardButton buttonString={button} key={i} keyStatus={keyStatus} />
    })


    return <div
        style={KeyboardRowStyles}
    >
        {keyboardButtons}
    </div>
}

export default KeyboardRowStyles;