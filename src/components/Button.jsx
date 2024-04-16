import React from "react";
import "./Button.css";

const Button = ({ colorName, changeBackground }) => {
    const handleClick = () => {
        changeBackground(colorName);
    };
    return <button onClick={handleClick}>{colorName}</button>;
};

export default Button;