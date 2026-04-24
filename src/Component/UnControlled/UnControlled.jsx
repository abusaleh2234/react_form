import { useRef } from "react";

const UnControlled = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        console.log(email,password);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
          <input type="email" ref={emailRef} name="email" placeholder='Enter Your Email' />
          <br />
          <input type="password" ref={passRef} name="password" placeholder="Password" />
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default UnControlled;