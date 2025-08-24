import "./Product.css";

function handleClick() {
    console.log("button was clicked");
}

export default function Button(){
    return (
        <div className="button">
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}