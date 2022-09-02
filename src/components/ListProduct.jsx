import {React, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import  '../css/listProduct.css';
import {getData} from '../functions/list_product';
import {SearchProduct} from '../functions/SearchProduct';



const ListProduct = () =>{
    useEffect(()=>{
        getData();
    },[]) 
   
    return (
        <>
         <div className="listContent text-center py-5">
         <h1>Buscar Productos</h1>
          <p><b>Nota: </b>puede buscar los productos por nombre o categoria</p>
          <Form className="d-flex p-5 m-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-input"
              aria-label="Search"
              onKeyUp={SearchProduct}
            />
          </Form>
          <div className="content"></div>
          </div> 
        </>
        
        
    );

}

export default ListProduct;

    

