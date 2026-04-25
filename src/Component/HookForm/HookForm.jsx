import useInputFild from '../../hooks/useInputFild';

const HookForm = () => {
    const [name, nameOnChange] = useInputFild("")
    const [email, emailOnChange] = useInputFild("")
    const [pass, passOnChange] = useInputFild("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameOnChange}  defaultValue={name} type="text" name='name' placeholder='Name' />
                <br />
                <input onChange={emailOnChange} defaultValue={email}  name='email' placeholder='Email' />
                <br />
                <input onChange={passOnChange} defaultValue={pass} type="password" name="password" placeholder='Password' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;