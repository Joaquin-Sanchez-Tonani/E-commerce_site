import React from "react";
import './header-horizontal.css'
import useStore from '../section-productos/useProducts';

function HeaderHorizontal(){
    const {toggleMode , Mode , Amount , resetCar , setCar , Car , barMenu} = useStore();
    return(
        <header className={Mode ? 'horizontal-header' : 'horizontal-header-dark'}>
            <div className={Mode ? 'logo' : 'logo-dark'}><i className="fi fi-brands-artstation"></i><h3 className="name-logo">MILEI 2023</h3></div>
            <div className='login'>
                <span style={{color:'orange', fontSize:'30px', padding:'0', cursor: ' pointer'}}>{Amount !== 0 && Amount}</span>
                <span style={{color:'red', fontSize:'30px', cursor: ' pointer'}} onClick={resetCar}>{Amount > 0 && 'X'}</span>
                <i onClick={setCar} className={Car ? 'fi fi-rr-cart-shopping-fast active-car' : 'fi fi-rr-cart-shopping-fast'}></i>
                <i onClick={toggleMode} className={Mode ? 'fi fi-rr-moon-stars' : 'fi fi-rr-sun'}></i>
                <a href="/userValidation"><i className="fi fi-rr-user"></i></a>
                <i onClick={barMenu} className="fi fi-rs-grid"></i>
            </div>
        </header>
    )
}

export default HeaderHorizontal