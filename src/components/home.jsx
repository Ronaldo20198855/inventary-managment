import React from "react";
import "../css/home.css";
import {Link} from 'react-router-dom';

function Home(){
    return (
        <main>
            <div className="image">
                <div>
                    <h2>Gestion de inventario</h2>
                </div>
            </div>
            <section className="flex-container search">
                <article className="flex-item article-text ">
                    <h2>Ver los productos</h2>
                    <p>
                        Prodra ver los productos guardados y 
                        Prodra filtrar los productos por categoria y nombre<br/>
                        Dando click en el boton "Detalles" que tiene cada producto 
                        prodra ver mas informacion sobre este.                      
                    </p>
                    <Link to='/listProducts'><button className="btn btn-primary my-2">Ver productos</button></Link>
                </article>
                <article className="flex-item">
                    <img src="img/searchProduct.png" alt="ver productos" />
                </article>
            </section>

            <section className="flex-container edit">
                <article className="flex-item  article-text">
                    <h2>Edir producto</h2>
                    <p>
                        Si da click en "Detalles" del producto podra vizualizar un boton
                        para poder editar los datos el producto seleccionado.
                    </p>
                </article>
                <article className="flex-item">
                    <img src="img/editProduct.png" alt="editar productos" />
                </article>
            </section>

            <section className="flex-container delete">
                <article className="flex-item  article-text">
                    <h2>Eliminar producto</h2>
                    <p>
                        Si da click en "Detalles" del producto podra vizualizar un boton
                        para poder eliminar el producto seleccionado.
                    </p>
                </article>
                <article className="flex-item flex-order-1">
                    <img src="img/deleteProduct.png" alt="eliminar productos" />
                </article>
            </section>

            <section className="flex-container add">
                <article className="flex-item  article-text">
                    <h2>Agregar Producto</h2>
                    <p>Puede añadir un nuevo producto a su inventario sin clomplicaciones</p>
                    <Link to='/AddProducts'><button className="btn btn-primary my-2">Agregar producto</button></Link>
                    
                </article>
                <article className="flex-item">
                    <img src="img/addProduct.png" alt="agregar productos" />
                </article>
            </section>
        </main>
    );
}

export default Home;