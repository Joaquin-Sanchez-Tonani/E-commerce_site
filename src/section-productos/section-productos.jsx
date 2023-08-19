import React from "react";
import Product from "../productComponent/product";
import './section-productos.css';
import useStore from './useProducts'
import listOfProducts from './listOfProducts';

function SectionProducts() {
    const { products, state , removeFilter , Mode , Car , ListCar , BarMenu} = useStore();
    const { data } = listOfProducts();

    const filtered = data.filter(dat => state ? true : dat.division === products);
    var totalPrice = 0;
    return (
        <section className={Mode ? (!BarMenu ? 'section-products' : 'section-products menuActive') : (!BarMenu ? 'section-products-dark' : 'section-products-dark menuActive')}>
            <div>
                {Car ? (
                    <div className="contenedor-car">
                        <div className="div-car">
                            <h3 className="details-title">Details</h3>
                            {ListCar.map((item, index) => {
                                const itemPrice = parseFloat(item.Price.replace(/,/g, ''));
                                totalPrice += itemPrice;
                                return (
                                    <div className="div-car-p" key={index}> 
                                        <p className="description-car">{item.Description}</p> 
                                        <p className="price-car">${item.Price}</p>
                                    </div>
                                );
                            })}
                        </div> 
                        <div className="div-total-price">
                            <h3 className="title-total-price">Total price</h3><span className="total-price">${totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {!state && (
                            <button className={Mode ? 'button-remove' : 'button-remove-dark'} onClick={removeFilter}>
                                <i className="fi fi-rr-cross-circle"></i>
                            </button>
                        )}
                        {filtered.length === 0 ? (
                            <div className="div-no-products">
                                <h2 className={Mode ? 'no-products' : 'no-products-dark'}>No hay productos</h2>
                            </div>
                        ) : (
                            filtered.map((product, index) => (
                                <Product
                                    key={index}
                                    division={product.division}
                                    img={product.img}
                                    alt={product.alt}
                                    discount={product.discount}
                                    before={product.before}
                                    price={product.price}
                                    freeShipping={product.freeShipping}
                                    description={product.description}
                                />
                            ))
                        )}
                    </>
                )}
            </div>
        </section>

    );
}

export default SectionProducts;
