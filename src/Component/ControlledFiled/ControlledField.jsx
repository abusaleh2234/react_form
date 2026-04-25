import { useState } from "react";

const ControlledField = () => {
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [passErr, setPassErr] = useState("")
    const handleOnForm =(e) => {
        e.preventDefault()
        console.log(password, email);
        
    }
    const handleOnEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
        
    }
    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        if(password.length < 6 ){
            setPassErr("Password must be 6 digit")
        }
        else{
            setPassErr("")
        }
        
    }
    return (
        <div>
            <form onSubmit={handleOnForm}>
                <input type="text" name="name" placeholder="Name" required/>
                <br />
                <input onChange={handleOnEmail} defaultValue={email}  type="email" name="email" placeholder="Email" />
                <br />
                <input onChange={handlePasswordOnChange} defaultValue={password} type="password" name="password" placeholder="Password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>{passErr}</small></p>
        </div>
    );
};

export default ControlledField;