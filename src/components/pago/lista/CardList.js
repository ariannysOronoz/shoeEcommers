import React from "react";
import { Link } from "react-router-dom";

export const CardList = ({number, cvc, expiry}) => {

    return (
        <div className='datosTarjetas'>
            <div className='datoNumero'>
                NUMERO: {number}
            </div>
            <div className='datoCvc'>
                CVC: {cvc}
            </div>
            <div className='datoExpiry'>
                EXPIRY: {expiry}
            </div>
            <div className='eliminarTarjeta'>
                <button className='btnEliminar'>Eliminar</button>
            </div>
        </div>
    );
};
  
