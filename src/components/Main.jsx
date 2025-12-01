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
            <main>
                <div className='container'>
                    <h2>Product 1</h2>
                    <h2>Product 2</h2>
                    <h2>Product 3</h2>
                    <h2>Product 4</h2>
                    {/* need to do a list and map it later */}

                    <h2>{newProduct}</h2>

                    <form onSubmit={submitHandler}>

                        <label htmlFor="nome">Add to the list:

                            <input className='mx-10' id="name"
                                type="text"
                                name="name"
                                value={newProduct}
                                onChange={changeHandler} />

                        </label>

                        <button className='btn' type="submit">
                            Submit
                        </button>

                    </form>
                </div>
            </main>
        </>
    )
}

export default App