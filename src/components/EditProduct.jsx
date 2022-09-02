import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import '../css/AddProduct.css';
import { editProduct, getName, } from '../functions/editProduct';



const EditProduct = () =>{
    const {id} = useParams();
    useEffect(()=>{
        getName(id);      
    },[id]) 

    const handleEvent = (e) =>{
        editProduct(id,e);
        e.preventDefault();
    }

 
    
        
    return(
        <>
        
        <form className='addForm border ' onSubmit={handleEvent}>
            <p className='message'></p>
            <h4 className='titulo'>Editar</h4>
            <input className='form-control m-3 name' type='text' name='name' placeholder="Escriba el nombre del producto" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <input className='form-control m-3 description' type='text' name='descripcion' placeholder="Escriba una descripcion del producto" title="La descripcion solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9 _]*[A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9][A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9 _]*$" required/>
            <input className='form-control m-3 category' type='text' name='categoria' placeholder="Escriba categoria para el producto" title="La categoria solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <input className='form-control m-3 price' type='number' name='precio' placeholder="Escriba precio por unidad del producto" title="El stock solo acepta numeros" pattern="^[0-9]+$" required/>
            <input className='form-control m-3 stock' type='number' name='stock' placeholder="Escriba la cantidad de unidades del producto" title="El stock solo acepta numeros" pattern="^[0-9]+$" required/> 
            <input type='submit' className='btn btn-primary' />                    
        </form>
        </>
    )
}

export {
    EditProduct
}