import React, { useState } from 'react';
import rigoBaby from '../../img/rigo-baby.jpg'
import "../../styles/carrito.css";
import { Link } from 'react-router-dom';

const Carrito = () => {
    const [productos, setProductos] = useState([
        // ... productos iniciales
        { price: 5990 }, { price: 36790 }, { price: 14870 }, { price: 16980 } //ejemplos provisorios
    ]);

    const deleteProduct = (index) => {
        // Copia el array de productos y elimina el producto en el índice especificado
        const nuevosProductos = [...productos];
        nuevosProductos.splice(index, 1);
        setProductos(nuevosProductos); // Actualiza el estado con la nueva lista de productos
    };

    return (
        <div className="container-card-vista-carrito">
            <div className='container contenedor-vista-carrito my-4'>
                <div className="row">
                    <h2 className='col-3 vista-carrito-categories'>Item</h2>
                    <h2 className='col-6 vista-carrito-categories'>Cantidad</h2>
                    <h2 className='col-3 vista-carrito-categories-valor'>Valor</h2>
                </div>
                {productos.map((producto, index) => (
                    <div key={index}>

                        <div className="row fila-vista-carrito">
                            <div className="col-3 columna-vista-carrito d-flex justify-content-center">
                                <img src={rigoBaby} alt="rigo" className='img-producto-vista-carrito' />
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                {/* BOTON AÑADIR Y QUITAR + PRECIO REUTILIZADO */}
                                <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                                    <button type='button' className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
                                    <label className="label-cantidad-carrito-hover px-2">1</label>
                                    <button type='button' className="button-add-remove-carrito-hover add-carrito-hover ">+</button>
                                </div>
                            </div>
                            <div className="col-2 columna-vista-carrito-valor columna-vista-carrito-precio-articulo">
                                <h2>${producto.price}</h2>
                            </div>
                            <button onClick={() => deleteProduct(index)} className="col-1 columna-vista-carrito-valor icon-eliminar-producto-carrito btn btn-danger"><i class="text-danger fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>
                ))}

                <div className="row fila-vista-carrito-separador"></div>

                <div className="row">
                    <h2 className='col-5 vista-carrito-categories'></h2>
                    <h2 className='col-4 vista-carrito-categories'></h2>
                    <div className="col-3 vista-carrito-categories-valor">
                        <div className="row">
                            <div className="col-6 text-end">
                                <h5>Subtotal</h5>
                            </div>
                            <div className="col-6 ps-2">
                                <h5>$74.630</h5>
                            </div>
                            <div className="col-6 text-end">
                                <h4>Total</h4>
                            </div>
                            <div className="col-6 ps-2">
                                <h5>$74.630</h5>
                            </div>
                            <Link to="/detalles-pedido" type="button" href="#" className="col-12 btn-confirmar-pedido-carrito text-decoration-none text-center">
                                Confirmar
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Carrito;