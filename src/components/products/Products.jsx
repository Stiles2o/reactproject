import React from 'react'
import products from '../../assets/images/productlist'

const Products = () => {
    // const fruits = ["apple", "banana", "pear", "papaya", "mango", "kiwi", "stobery", "guava"]

    return (
        <>
            {/* {fruits.map((item, i) => <h1 key={i}>{item}</h1>)} */}
            {/* {products.map((product) => <p key={product.id}>{JSON.stringify(product)}</p>)} */}

            <div class="table-responsive">
                <table class="table table-bordered table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length == 0 && <tr><td colSpan={6}>No Product Found  </td></tr>}
                        {
                            products.map((product) =>
                                <tr key={product.id}>
                                    <td scope="row">{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} height={50} width={50} /></td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Products
