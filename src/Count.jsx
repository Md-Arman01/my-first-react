import { useState } from "react"

export default function Count(){
    const [count, setCount] = useState(10)
    function add (){
        const newCount = count + 1;
        return setCount(newCount)
    }
    function reduce (){
        const newCount = count - 1;
        return setCount(newCount)
    }
    




    const stl = {
        border: "2px solid cyan",
        padding: '20px',
        margin: '20px',
        borderRadius: '15px'
      }
    return(
        <div style={stl}>
            <h1>Count: {count}</h1>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}