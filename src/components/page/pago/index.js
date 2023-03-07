import React from 'react'
import './index.css';
import img12 from "images/img12.jpg"

export const Pago = () => {
    return (
        <>
        <h1 className='metodoPago'>METODO DE PAGO</h1>
        <div className='tipoPago'>
            <img className='imgCartao' src={img12} alt=""/>
            <button className='btnCartao'>
                Add card
            </button>
        </div>
        
        </> 
    );
};

