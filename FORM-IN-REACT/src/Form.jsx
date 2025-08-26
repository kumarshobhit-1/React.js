import { useState } from "react"

export default function Form(){
     let [formData, setFormData] = useState({
        fullName : "",
        userName : "",
        password : "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData);
        setFormData({
            fullName : "",
            userName : "",
            password : "",
        });
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            &nbsp;&nbsp; : &nbsp;
            <input 
                type="text"
                placeholder="enter full name"
                value={formData.fullName} 
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
            />
            <br /><br />
            <label htmlFor="userName">User Name</label>
            &nbsp;&nbsp; : &nbsp;
            <input 
                type="text" 
                placeholder="enter username" 
                value={formData.userName} 
                onChange={handleInputChange}
                id="userName"
                name="userName"
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            &nbsp;&nbsp; : &nbsp;
            <input 
                type="password" 
                placeholder="enter password" 
                value={formData.password} 
                onChange={handleInputChange}
                id="password"
                name="password"
            />
            <br /><br />
            <button>submit</button>
        </form>
    )
}