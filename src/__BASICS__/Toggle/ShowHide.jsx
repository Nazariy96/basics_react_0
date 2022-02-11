import { useState } from "react";

const intialValue = (false)

const ShowHide = () => {
  const [show, setShow] = useState(intialValue)

  const handleShow = () =>{
    setShow(!show)
  }

  return (
    <div>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button> {/* true ? x : y -> ternary operator */}
      <h1>{show && "Hello!"}</h1> {/* && -> logical operator */}
    </div>
  );
};

export default ShowHide;
