import { use, useState } from 'react'


function App() {
  const [newProduct, setNewProduct] = useState('New product');


  function changeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'name') {
      setNewProduct(value);
    } 
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>{newProduct}</h1>
      
      <form onSubmit={submitHandler}>

        <label htmlFor="nome">Add to the list:

          <input id="nome"
            type="text"
            name="name"
            value={newProduct}
            onChange={changeHandler} />

        </label>
        
        <button className='' type="submit">
          Submit
        </button>

      </form>
    </>
  )
}

export default App