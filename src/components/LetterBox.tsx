import { CSSProperties } from "react";
import LetterStatus from "../enums/LetterStatus";

interface LetterBoxProps {
    letter?: string;
    styling?: CSSStyleSheet,
    letterStatus?: LetterStatus
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter, letterStatus }: LetterBoxProps) => {


    let LetterBoxStyles: CSSProperties = {
        border: "2px solid grey",
        marginBottom: "0.2em",
        fontSize: "2.5rem",
        height: "3rem",
        textAlign: "center",
        width: "3rem",
    }

    if (letterStatus === LetterStatus.exact) {
        LetterBoxStyles.backgroundColor = "green";
    } else if (letterStatus === LetterStatus.contains) {
        LetterBoxStyles.backgroundColor = "yellow";
    }

    return <div
        style={LetterBoxStyles}
    >
        {letter}
    </div>
}

export default LetterBox;