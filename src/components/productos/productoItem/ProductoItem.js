import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";
import './index.css';

export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (

    <div key={id} className="productoItem">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottomProductoItem">
        <button onClick={
          () => addCarrito(id)} className="btnAdd">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`}>
            <button className="btnVista">Vista</button>
        </Link>
        </div>
      </div>
    </div>
  );
};
