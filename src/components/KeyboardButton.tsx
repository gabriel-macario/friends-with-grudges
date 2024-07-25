import React, { CSSProperties } from "react";

export interface KeyboardButtonProps {
    key: string;
    keyStatus?: string;
};

const KeyboardButton: React.FC<KeyboardButtonProps> = ({ key, keyStatus }: KeyboardButtonProps) => {
    const KeyboardButtonStyles: CSSProperties = {
        backgroundColor: "#d3d6dA",
        borderRadius: "4px",
        color: "black",
        height: "58px",
        width: "30.5px"
    }

    return <button
        style={KeyboardButtonStyles}
    >
        {key}
    </button>
}

export default KeyboardButton;