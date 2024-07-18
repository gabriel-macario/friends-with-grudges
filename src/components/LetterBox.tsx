import  { CSSProperties } from "react";

interface LetterBoxProps {
    letter?: string;
    styling?: CSSStyleSheet
}

const LetterBoxStyles: CSSProperties = {
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