import React, { CSSProperties } from "react";
import KeyCodes from "../enums/KeyCodes";

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

    const onClickHandler = () => {
        let code = `Key${buttonString.toUpperCase()}`;
        let key = buttonString.toLowerCase();

        if (buttonString.toUpperCase() === `ENTER`) {
            code = KeyCodes.enter
            key = KeyCodes.enter
        } else if (buttonString === "<") {
            code = KeyCodes.backspace
            key = KeyCodes.backspace
        }

        const event = new KeyboardEvent("keydown", {
            code,
            key,
            bubbles: true
        })

        console.log("dispatching event from button")
        console.log(event)
        document.dispatchEvent(event)
    }

    return <button
        style={KeyboardButtonStyles}
        onClick={onClickHandler}
    >
        {buttonString.toUpperCase()}
    </button>
}

export default KeyboardButton;