import { CSSProperties } from "react";
import LetterStatus from "../enums/LetterStatus";

interface LetterBoxProps {
    letter?: string;
    styling?: CSSStyleSheet,
    letterStatus?: LetterStatus,
    checked: boolean
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter, letterStatus, checked = false }: LetterBoxProps) => {
    let backgroundColor = "#fff";
    let color = "#000";
    let borderColor = "#787C7E";

    if (checked) {
        color = "#fff";

        if (letterStatus === LetterStatus.exact) backgroundColor = "#6aaa64";
        else if (letterStatus === LetterStatus.contains) backgroundColor = "#c9b458";
        else backgroundColor = "#787C7E";

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
    // if (letterStatus === LetterStatus.exact && checked) {
    //     LetterBoxStyles.backgroundColor = "#6aaa64";
    //     LetterBoxStyles.color = "#fff";
    // } else if (letterStatus === LetterStatus.contains && checked) {
    //     LetterBoxStyles.backgroundColor = "#c9b458";
    //     LetterBoxStyles.color = "#fff";
    // } else if (letterStatus === LetterStatus.incorrect && checked) {
    //     LetterBoxStyles.backgroundColor = "#787C7E";
    //     LetterBoxStyles.color = "#fff";
    // }



    return <div
        style={LetterBoxStyles}
    >
        {letter}
    </div>
}

export default LetterBox;