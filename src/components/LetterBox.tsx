import { CSSProperties } from "react";
import LetterStatus from "../enums/LetterStatus";
import { defaultColors } from "../styles/colors";

interface LetterBoxProps {
    letter?: string;
    styling?: CSSStyleSheet;
    letterStatus?: LetterStatus;
    checked: boolean;
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter, letterStatus, checked = false }: LetterBoxProps) => {
    let backgroundColor = defaultColors.white;
    let color = defaultColors.black;
    let borderColor = defaultColors.lightGrey;

    if (checked) {
        color = defaultColors.white;

        if (letterStatus === LetterStatus.exact) backgroundColor = defaultColors.green;
        else if (letterStatus === LetterStatus.contains) backgroundColor = defaultColors.yellow;
        else backgroundColor = defaultColors.darkGrey;

        borderColor = backgroundColor;
    }

    const LetterBoxStyles: CSSProperties = {
        backgroundColor,
        border: `2px solid ${borderColor}`,
        color,
        marginBottom: "0.2em",
        margin: "0 0.1em 0.2em 0.1em",
        fontSize: "2.5rem",
        height: "3rem",
        textAlign: "center",
        width: "3rem",
    }

    return <div
        style={LetterBoxStyles}
    >
        {letter}
    </div>
}

export default LetterBox;