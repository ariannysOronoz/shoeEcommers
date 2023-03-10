import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { Pago, PagoLista } from "./page/pago";
import { CardDetails } from "./page/pago/CardDetails";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";


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
       
			</Switch>
    </section>
  );
}
