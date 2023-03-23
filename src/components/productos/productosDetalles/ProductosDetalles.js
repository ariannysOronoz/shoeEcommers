import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "../productoItem/ProductoItem";
import './index.css';

export const ProductosDetalles = () => {
  
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    console.log(values)
    setImages(values) 
  },[url, params.id]) 

  //?
  const handleInput = (e) =>{
    const number = e.target.value.toString().padStart(2,'01')
    setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
      <>
        <div className="detalles">
          <div className='imgDetalle'>
          <img className='imgDetalle2' src={images} alt={detalle.title}/>
          </div>
          <div className='informacionProducto'>
            <h2 className='titulo'>{detalle.title}</h2>
            <h3 className="precio">${detalle.price}</h3>
            <div className="tamano">
              <p className='tamanoTxt'>Tamaño:</p>
              <select className='opciones' placeholder="Tamaño" >
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
              </select>
            </div>
            <button className='btnProductosDetalles' onClick={() => addCarrito(detalle.id)}>
                Añadir al carrito
            </button>
          </div> 
        </div>
        <div className="description">
            <p> 
              <b>Description</b> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! Sequi facere itaque,
            </p>
          </div>
        </> 
    }


    
    <h2 className="relacionados">Productos relacionados</h2>
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
