// Comments Form

import { useState } from "react"

export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username : "",
        remarks: "",
        rating: 5,
    });


    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };


    let handleSubmit = (event) =>{
        //console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remarks: "",
            rating: 5,
        });
    };

    return (
        <div>
            <h2>Give a comment</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" placeholder="usrname" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br />
                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
                <br />
                <label htmlFor="rating">Rating :  </label>
                <input type="number" min={1} max={5} placeholder="rating" value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br /><br />
                <button>Add Comment</button>
            </form>
        </div> 
    )
}