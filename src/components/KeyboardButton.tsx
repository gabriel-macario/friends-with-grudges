import React, { CSSProperties } from "react";
import KeyCodes from "../enums/KeyCodes";
import { defaultColors } from "../styles/colors";
import KeyButtonStatuses from "../enums/KeyButtonStatuses";

export interface KeyboardButtonProps {
    buttonString: string;
    keyStatus?: KeyButtonStatuses;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ buttonString: buttonString, keyStatus }: KeyboardButtonProps) => {
    let fontSize = "1em";
    let width = "25px";
    let backgroundColor = defaultColors.lightGrey;
    let color = defaultColors.black;

    if (buttonString === "enter".toUpperCase()) {
        fontSize = "0.7em";
        width = "40px";
    }

    if (keyStatus !== KeyButtonStatuses.unused) {
        color = defaultColors.white
    }

    if (keyStatus === KeyButtonStatuses.correct) {
        backgroundColor = defaultColors.green
    } else if (keyStatus === KeyButtonStatuses.present) {
        backgroundColor = defaultColors.yellow
    } else if (keyStatus === KeyButtonStatuses.absent) {
        backgroundColor = defaultColors.darkGrey
    }

    const KeyboardButtonStyles: CSSProperties = {
        backgroundColor,
        border: "none",
        borderRadius: "4px",
        color,
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