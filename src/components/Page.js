import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { Pago } from "./page/pago";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/pago" exact component={Pago}/>
			</Switch>
    </section>
  );
}
