// src/front/js/component/localStorageCarrito.jsx
import React, { useState, useEffect } from 'react';

const LocalStorageCarrito = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Cargar el carrito desde localStorage al montar el componente
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        setProductos(carritoGuardado);
    }, []);

    const deleteProduct = (index) => {
        const nuevosProductos = [...productos];
        nuevosProductos.splice(index, 1);
        setProductos(nuevosProductos);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    };

    const incrementarCantidad = (index) => {
        const nuevosProductos = [...productos];
        nuevosProductos[index].cantidad++;
        setProductos(nuevosProductos);
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
    };

    const decrementarCantidad = (index) => {
        const nuevosProductos = [...productos];
        if (nuevosProductos[index].cantidad > 1) {
            nuevosProductos[index].cantidad--;
            setProductos(nuevosProductos);
            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
        }
    };

    return (
        <div>
            {productos.map((producto, index) => (
                <div key={index}>
                    <div className="row fila-vista-carrito">
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <img src={rigoBaby} alt="rigo" className="img-producto-vista-carrito" />
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                                <button onClick={() => decrementarCantidad(index)} type="button" className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
                                <label className="label-cantidad-carrito-hover px-2">{producto.cantidad}</label>
                                <button onClick={() => incrementarCantidad(index)} type="button" className="button-add-remove-carrito-hover add-carrito-hover">+</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 columna-vista-carrito-valor columna-vista-carrito-precio-articulo">
                            <h2>${producto.price * producto.cantidad}</h2>
                        </div>
                        <button onClick={() => deleteProduct(index)} className="col-1 columna-vista-carrito-valor icon-eliminar-producto-carrito"><i className="icon-hover-eliminar-producto fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
            ))}
            {/* Resto del código para mostrar subtotal, total y botón de confirmar pedido */}
        </div>
    );
};

export default LocalStorageCarrito;
