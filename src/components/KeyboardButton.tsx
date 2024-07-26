import React, { CSSProperties } from "react";

export interface KeyboardButtonProps {
    buttonString: string;
    keyStatus?: string;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ buttonString: buttonString, keyStatus }: KeyboardButtonProps) => {
    let fontSize = "1em";
    let width = "25px";

    if (buttonString === "enter".toUpperCase()) {
        fontSize = "0.7em";
        width = "40px";
    }

    const KeyboardButtonStyles: CSSProperties = {
        backgroundColor: "#d3d6dA",
        border: "none",
        borderRadius: "4px",
        color: "black",
        fontSize,
        height: "58px",
        padding: "0",
        width,
    }

    return <button
        style={KeyboardButtonStyles}
    >
        {buttonString.toUpperCase()}
    </button>
}

export default KeyboardButton;