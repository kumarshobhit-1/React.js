import { useEffect, useState } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        //console.log(jsonResponse);
        setJoke({
            type : jsonResponse.type,
            setup : jsonResponse.setup,
            punchline : jsonResponse.punchline,
        });
    }


    useEffect(() => {
            async function getFirstJoke() { // (Also called first rendering) this is function only for first time show joke on when open main page 
                let response = await fetch(URL);
                let jsonResponse = await response.json();
                setJoke({
                    type : jsonResponse.type,
                    setup : jsonResponse.setup,
                    punchline : jsonResponse.punchline,
                });
            }
            getFirstJoke();
        }, []
    );

    return (
        <div>
            <h1>Joker!</h1>
            <h2>Type : {joke.type}</h2>
            <h2>Setup : {joke.setup}</h2>
            <h2>PunchLine : {joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}