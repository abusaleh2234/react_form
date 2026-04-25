import { useState } from "react";

const ProductForm = ({handleAddProducts }) => {
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value

        if(name.length <= 0 ){
            setError("Please Provide Product name")
            return
        }
        else if(price.length === 0) {
            setError("Please Provide Product Price")
            return
        }
        else if(price < 0) {
            setError("Price can not be negative")
            return
        }
        else{
            setError("")
        }
        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProducts(newProduct)
    }

    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />
                <input type="text" name="price" placeholder="Product Price" />
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:"red"}}>{error}</p>
        </div>
    );
};

export default ProductForm;