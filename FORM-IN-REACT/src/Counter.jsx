import { useEffect, useState } from "react";

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () =>{
        setCountx((currCount) => currCount  + 1 );
    };

    let incCounty = () =>{
        setCounty((currCount) => currCount  + 1 );
    };

    useEffect(
        function sideEffect() {
            console.log("this is the side effect");
        },
        [] // is parameter se sirf render honee pe ek baar hi effect print hoga
        //[countx] // is parameter se sirf countX hi trigger karne pe effect print hoga
        //[countx, county] // is parameter se countX and countY (both) hi trigger karne pe effect print hoga
    );

    return (
        <div>
            <h1>CountX = {countx}</h1>
            <button onClick={incCountx}>+1</button>
            &nbsp; &nbsp;
            <h1>CountY = {county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}