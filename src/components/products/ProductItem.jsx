import React from 'react'
import Productcard from './Productcard'

const ProductItem = ({ products }) => {
    return (
        <div className='container'>
            {products.length == 0 && <h1>No Product Found</h1>}
            <div className="row">
                {
                    products.map((products) => <Productcard key={products.id} product={products} />)
                }
            </div>

        </div>
    )
}

export default ProductItem
