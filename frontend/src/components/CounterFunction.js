import React, { useState } from "react";

function CounterFunction() {
//constructor ne render ne

let [number,setNumber] = useState(0)


function increment(){
    setNumber(number+1)
}

    return(

        <div>
            <h1>Functional Component</h1>
            <h1>Counter={number}</h1>
            <button onClick={e => increment()} >increment</button>
            
        </div>
    )
}

export default CounterFunction; 