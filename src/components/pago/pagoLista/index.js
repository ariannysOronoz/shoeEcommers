import React, {useContext} from 'react'
import { DataContext,DataProvider } from "context/DataProvider";
import { CardList } from "../lista/CardList";
import { Link } from 'react-router-dom';
import './index.css';
import img12 from "images/img12.jpg"
import { CardDetails } from '../detalle/CardDetails';

export const PagoLista = () => {

    const value = useContext(DataContext)

	const [metodosPago] = value.metodosPago;
    

    return (
    <div className='pago'>
        <div className='metodoPago'>
            <h1 className='tituloMetodoPago'>METODO DE PAGO</h1>
                <div className='agregarPago'>
                    <CardDetails></CardDetails>
                </div>
        </div>   
       
        <div className='tarjetasAgredadas'>
            <h1 className='agregado'>TARJETA AGREGADA</h1>
                <div className='listaPagos'>
                {
                    metodosPago.map(
                        metodo =>(
                        <CardList
                                number={metodo.number}
                                cvc={metodo.cvc}
                                expiry={metodo.expiry}
                        />
                        )
                    )
                }
                </div>    
        </div>
    </div> 
    );
};

