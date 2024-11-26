import React, { CSSProperties } from "react";
import KeyCodes from "../enums/KeyCodes";
import { defaultColors } from "../styles/colors";
import { KeyButtonStatusEnum} from "../enums/KeyButtonStatuses";

export interface KeyboardButtonProps {
    buttonString: string;
    keyStatus?: KeyButtonStatusEnum;
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

    if (keyStatus !== KeyButtonStatusEnum.UNUSED) {
        color = defaultColors.white
    }

    if (keyStatus === KeyButtonStatusEnum.CORRECT) {
        backgroundColor = defaultColors.green
    } else if (keyStatus === KeyButtonStatusEnum.PRESENT) {
        backgroundColor = defaultColors.yellow
    } else if (keyStatus === KeyButtonStatusEnum.ABSENT) {
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