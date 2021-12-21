import { useState, useEffect } from "react";
function Copied({ colorID }) {
    const [text,setText] = useState(colorID)
    function handleClick(event){
        navigator.clipboard.writeText(colorID);
        setText("Copied");
        setTimeout(() => {
            setText(colorID)
        }, 1500);
    }
    return (
        <span onClick={handleClick}>{text}</span>
    )
}
export default Copied;