import React, { createContext, useState, useEffect } from "react";
import Data from "Data2.js";

export const DataContext = createContext();

export const DataProvider = (props) => {

	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] = useState([])
	const [metodosPago, setMetodosPago] = useState([])
	const [total, setTotal] = useState(0)

	console.log(carrito)

  	useEffect(() => {
		const producto = Data.items 
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);

	const addCarrito = (id) => {
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}

	const addMetodoPago = (metodo) => {
		console.log("metodo para agregar: "+JSON.stringify(metodo))
		console.log("metodosPago("+metodosPago.length+"): "+JSON.stringify(metodosPago))
		//ya existe este metodo de pago?
		//const check = true
		const check = metodosPago.every(item =>{
			return item.number !== metodo.number
		})
		//sino existe, es nuevo, lo agregamos
		if(check){
			metodosPago.push(metodo)
			console.log("addicionando("+metodosPago.length+"): "+JSON.stringify(metodosPago))
			setMetodosPago([...metodosPago])
		}else{
			alert("El metodo de pago ya existe")
		}
	}

	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos],
		metodosPago: [metodosPago],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		addMetodoPago: addMetodoPago,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};
