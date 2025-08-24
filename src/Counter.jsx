import { useState } from "react";


function initNum(){
    console.log("init was executed");
    return Math.random();
}

export default function Counter(){
    let [count, setCount] = useState(initNum); //initialization
    // console.log("Component is rendered!");
    // console.log(`count = ${count}`);
    

    let incCount = () =>{

        // callback 
        setCount((currCount) =>{
            return currCount + 1;
        });
        // setCount(count + 17); // this line for table of 17
        // console.log(`inside incount, count = ${count}`);
    };
    

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}