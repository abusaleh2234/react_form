
import './App.css'
import FromAction from './Component/FromAction/FromAction';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    
    
  }
  return (
    <>
      <section id="center">
        <h1>React From</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name"placeholder='Enter Your Name' />
          <br />
          <input type="email" name="email" placeholder='Enter Your Email' />
          <br />
          <button type="submit">Submit</button>
        </form>

      </section>
      <FromAction></FromAction>



    </>
  )
}

export default App
