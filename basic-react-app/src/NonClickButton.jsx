function handleMouse(){
    console.log("Non-Click Button");
}

export default function NonButton(){
    return(
        <div>
            <p onMouseOver={handleMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Excepturi ullam iure earum ab tempore maxime.
                Similique ea, repudiandae nesciunt possimus tenetur debitis nihil, 
                eius earum excepturi maiores magni et provident!</p>
        </div>
    );
}