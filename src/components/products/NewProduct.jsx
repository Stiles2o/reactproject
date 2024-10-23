import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

const NewProduct = () => {
    // let getData = () => {
    //     fetch("https://fakestoreapi.com/products")
    //         .then((result) => {
    //             return result.json().then((data) => console.log(data))
    //         })
    //         .catch((err) => console.log(err.message))
    // }
    let [NewProducts, setProduct] = useState([])
    let getData = async () => {
        try {
            let result = await fetch("https://fakestoreapi.com/products")
            let data = await result.json()
            // console.log(data)
            setProduct(data)
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => { getData() }, [])
    return (
        <>
            <ProductItem products={NewProducts}></ProductItem>
        </>
    )
}

export default NewProduct
