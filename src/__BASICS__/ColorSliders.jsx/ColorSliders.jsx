import { useState } from "react/cjs/react.development";


const initialState = ({
    r: 0,
    g: 0,
    b: 0,
    a: 1,
})

const ColorSliders = () => {
    /*  const[red,setRed] = useState(0)
        const[green,setGreen] = useState(0)
        const[blue,setBlue] = useState(0)
        const[alpha,setAlpha] = useState(0) */

    const [color, setColor] = useState(initialState)


    /*  const handleRed = (e) => {
            setRed(e.target.value)
        }
        const handleBlue = (e) => {
            setBlue(e.target.value)
        }
        const handleGreen = (e) => {
            setGreen(e.target.value)
        }
        const handleGreen = (e) => {
            setAlpha(e.target.value)
        } */

    const handleColor = (e) => {
        switch (e.target.name) {
            case "red":
                return setColor({ ...color, r: e.target.value })
            case "blue":
                return setColor({ ...color, b: e.target.value })
            case "green":
                return setColor({ ...color, g: e.target.value })
            case "alpha":
                return setColor({ ...color, a: e.target.value })
            default:
                return setColor({ ...color })
        }
    }

    return (
        <div>
            {/*<h1 style={{color: `rgb(${red},${blue},${green})`}}>Color: rgb({red},{blue},{green})</h1>
            <div style={{height:50,width:400,backgroundColor:`rgb(${red},${blue},${green})`}}></div>
            <input type="range" min="0" max="255" value={red} onChange={handleRed}/>
            <input type="range" min="0" max="255" value={blue} onChange={handleBlue}/>
            <input type="range" min="0" max="255" value={green} onChange={handleGreen}/>
            <input type="range" min="0" max="1" step="0.1" value={alpha} onChange={handleAlpha}/> */}
            <h1
                style={{
                    color: `rgb(${color.r},${color.b},${color.g},${color.a})`
                }}>Color: rgba({color.r},{color.b},{color.g},{color.a})</h1>

            <div
                style={{
                    height: "100px",
                    width: "100%",
                    backgroundColor: `rgb(${color.r},${color.b},${color.g},${color.a})`
                }}>

            </div>

            <input
                type="range"
                min="0"
                max="255"
                value={color.r} name="red" onChange={handleColor}/>
            <input
                type="range"
                min="0"
                max="255"
                value={color.b} name="blue" onChange={handleColor} />
            <input
                type="range"
                min="0"
                max="255"
                value={color.g} name="green" onChange={handleColor} />
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={color.a} name="alpha" onChange={handleColor} />
        </div>
    );
};

export default ColorSliders;
