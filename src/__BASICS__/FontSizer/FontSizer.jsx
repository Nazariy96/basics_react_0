import { useState } from "react";

const initialState = (20)
const FontSizer = () => {
    const[size,setSize] = useState(initialState)

    const handleGrow = () => {
        setSize(size+3)
    }
    const handleShrink = () => {
        setSize(size-3)
    }

  return (
    <div>
    <button onClick={handleGrow}>Grow</button>
    <button onClick={handleShrink}>Shrink</button>
    {/* {{}} -> object, {} -> variable, `${}` -> template string */}
    <p style={{fontSize : `${size}px`}}>{size}</p> 
    </div>
  );
};

export default FontSizer;
