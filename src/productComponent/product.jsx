import React from "react";
import './product.css';
import useStore from '../section-productos/useProducts';

function Product(props){
    const {addToCar} = useStore()
    return (
        <div className="product-container">
            {/* {ListCar.map((item, index) => (<p key={index}>{item.Description} - ${item.Price}</p>))}  */}
            <button onClick={()=> addToCar(props.price,props.description)} className="car">Add to cart</button>
            <div className="product-container-image">
                <img className="product-container-image-img" src={props.img} alt={props.alt} />
            </div>
            <div className="product-container-title">
                <div className="product-container-title-prices">
                    <span className="product-container-title-prices-price">{`$${props.price}`}</span>
                    <div className="span-off">
                        {props.discount !== null && <span className="product-container-title-prices-discount">{`${props.discount} OFF`}</span>}
                        {props.before !== null &&<span className="product-container-title-prices-before">{`$${props.before}`}</span>}
                    </div>
                </div>
                {props.freeShipping && (
                    <span className="product-container-title-freeShipping">Free Shipping</span>
                )}
                <p className="product-container-title-freeShipping-description">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Product;

