import { useState } from "react";

const ChangeColor = () => {
    const [color, setColor] = useState("black")
    const [text, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleColor = () => {
        setColor(text)
    }

    return (
        <div>
            <h1 style={{ color: `${color}` }}>Color</h1>
            <input type="text" placeholder="color" value={text} onChange={handleText} /> {/* binding input to text-state, any time value change, onChanage happens */}
            <button
                onClick={handleColor}
            >Change
                {color === "" ? ""
                    : color === text ? ""
                        : text === "" ? ` from ${color} to black`
                            : ` from ${color}`}
                {text === "" ? ''
                    : ` to ${text}`}
            </button>
        </div>
    );
};

export default ChangeColor;
