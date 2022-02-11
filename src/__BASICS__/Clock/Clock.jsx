import { useEffect, useState } from "react";

const Clock = () => {
const [time,setTime] = useState(new Date())


/* mounting process, first thing after DOM has been loaded  */
useEffect(()=>{
    let interval = setInterval(()=>setTime(new Date()),1000) /* interval execute setTime (first callback arg) every second (second arg)*/
    return () => clearInterval(interval) /* function upon unmounting,prevent memory leak*/
},[]) /* [] -> render once*/

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1> {/* time -> cant render a Date object directly unless it is interpolated -> ${ new Date() }  */}
    </div>
  );
};

export default Clock;
