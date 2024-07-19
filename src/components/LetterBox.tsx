import  { CSSProperties } from "react";

interface LetterBoxProps {
    letter?: string;
    styling?: CSSStyleSheet
}

const LetterBoxStyles: CSSProperties = {
    width: "3rem",
    height: "3rem",
    border: "2px solid grey",
}

const LetterBox: React.FC<LetterBoxProps> = ({ letter }: LetterBoxProps ) => {
    return <div
        style={LetterBoxStyles}
    >
        {letter}
    </div>
}

export default LetterBox;