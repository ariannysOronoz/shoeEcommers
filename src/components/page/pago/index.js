import React, {useContext} from 'react'
import { DataContext,DataProvider } from "context/DataProvider";
import { CardDetails } from "./CardDetails";
import { Link } from 'react-router-dom';
import './index.css';
import img12 from "images/img12.jpg"

export const PagoLista = () => {

    const value = useContext(DataContext)

	const [metodosPago] = value.metodosPago;
    

    return (
    <>
        <h1 className='metodoPago'>METODO DE PAGO</h1>
        <div className='tipoPago'>
            <div className='listaPagos'>
            {
                metodosPago.map(metodo =>(
        
                        <div>{metodo.number}</div>
                    
                    )
                )
            }
            </div>
            <div className='agregarPago'>
                <img className='imgCartao' src={img12} alt=""/>
                <Link to='/pago/agregarTarjeta'>
                    <button className='btnCartao'>Add card</button>
                </Link> 
            </div>       
        </div>
    </> 
    );
};

