import React from 'react'
// import products from '../../assets/images/productlist'

const Productcard = ({ product }) => {
    return (
        <div className='col-3 mb-3'>
            <div className="card">
                <img src={product.image} className="card-img-top" height='180px' />
                <div className="card-body">
                    <h5>{product.name}
                        <span className='float-end'>{product.stock > 0 ? <span
                            className="badge bg-success">In Stock</span> : <span className="badge bg-danger">Out of Stock</span>}</span>
                    </h5>
                    <h6>{product.category}</h6>
                    <p>${product.price}</p>
                    <button type="button" className='btn btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Productcard
