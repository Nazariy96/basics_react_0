import { useState } from "react";

const initialValue=(0)

const Counter = () => {
    const[count,setCount] = useState(initialValue)

    const handleAdd = () =>{
        setCount(count +1)
    }
    const handleSubstract= () =>{
        setCount(count-1)
    }
    const handleMultiplication = () =>{
        setCount(count*2)
    }
    const handleDivision = () =>{
        setCount(count/2)
    }
    const handleRest = () =>{
        setCount(count%2)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleMultiplication}>*2</button>
            <button onClick={handleDivision}>/2</button>
            <button onClick={handleRest}>%2</button>
        </div>
    );
};

export default Counter;
