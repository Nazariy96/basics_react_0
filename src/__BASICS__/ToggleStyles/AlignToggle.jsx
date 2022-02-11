import { useState } from "react";

const initialValue = ("left")
const AlignToggle = () => {
const [alignment,setAlignment] = useState(initialValue)

const handleAlignmentLeft = () =>{
setAlignment("left")
}
const handleAlignmentCenter = () =>{
setAlignment("center")
}
const handleAlignmentRight = () =>{
setAlignment("right")
}

  return (
    <div>
    <button onClick={handleAlignmentLeft}>Left</button>
    <button onClick={handleAlignmentCenter}>Center</button>
    <button onClick={handleAlignmentRight}>Right</button>
        <h1 style={{textAlign:`${alignment}`}}>Alignment</h1>
    </div>
  );
};

export default AlignToggle;
