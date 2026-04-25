
import './App.css'
import ControlledField from './Component/ControlledFiled/ControlledField';
import FromAction from './Component/FromAction/FromAction';
import HookForm from './Component/HookForm/HookForm';
import ProductManagement from './Component/ProductManagement/ProductManagement';
import UnControlled from './Component/UnControlled/UnControlled';

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
        {/* <form onSubmit={handleSubmit}>
          <input type="text" name="name"placeholder='Enter Your Name' />
          <br />
          <input type="email" name="email" placeholder='Enter Your Email' />
          <br />
          <button type="submit">Submit</button>
        </form> */}

      </section>
      {/* <FromAction></FromAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlled></UnControlled> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>

    </>
  )
}

export default App
