import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "../inicio";
import { Pago, PagoLista } from "../pago/pagoLista/index";
import { CardDetails } from "../pago/detalle/CardDetails";
import {Card} from '../pago/card/Card'
import { ProductosList } from "../productos/productsList/index";
import { ProductosDetalles } from "../productos/productosDetalles/ProductosDetalles";
import './index.css';


export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/pago" exact component={PagoLista}/>
        <Route path="/pago/listaTarjetas" exact component={PagoLista}/>
        <Route path="/pago/agregarTarjeta" exact component={CardDetails}/>
        <Route path="/pago/card" exact component={Card}/>
			</Switch>
    </section>
  );
}
