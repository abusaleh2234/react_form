import { useState } from "react";

const ControlledField = () => {
    const [password, setPassword] = useState("")
    const [passErr, setPassErr] = useState("")
    const handleOnForm =(e) => {
        e.preventDefault()
        
    }
    const handlePasswordOnChange = (e) => {
        
        console.log(e.target.value);
        if(password.length < 6 ){
            setPassErr("Password must be 6 digit")
        }
        else{
            setPassErr("")
        }
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleOnForm}>
                <input type="text" name="name" placeholder="Name" required/>
                <br />
                <input onChange={handlePasswordOnChange} defaultValue={password} type="password" name="password" placeholder="Email" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>{passErr}</small></p>
        </div>
    );
};

export default ControlledField;