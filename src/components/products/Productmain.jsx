import React from 'react'
import products from '../../assets/images/productlist'
import ProductItem from './ProductItem'

const Productmain = () => {
    return (
        <>
            <ProductItem products={products}></ProductItem>
        </>
    )
}

export default Productmain
