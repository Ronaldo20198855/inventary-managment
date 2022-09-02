import '../css/AddProduct.css';
import { addProduct } from '../functions/AddProduct';


const AddProduct = () =>{
    const handleEvent = (e) =>{
        addProduct(e);
        e.preventDefault();
    }
 
    
        
    

    return(
        <>
        
        <form className='addForm border my-5' onSubmit={handleEvent}>
            <p className='message'></p>
            <h4>Agregar producto</h4>
            <input className='form-control m-3' type='text' name='name' placeholder="Escriba el nombre del producto" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <input className='form-control m-3' type='text' name='descripcion' placeholder="Escriba una descripcion del producto" title="La descripcion solo acepta letras, numeros y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9 _]*[A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9][A-Za-zÑñÁáÉéÍíÓóÚúÜü-z0-9 _]*$" required/>
            <input className='form-control m-3' type='text' name='categoria' placeholder="Escriba categoria para el producto" title="La categoria solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
            <input className='form-control m-3' type='number' name='precio' placeholder="Escriba precio por unidad del producto" title="El stock solo acepta numeros" pattern="^[0-9]+$" required/>
            <input className='form-control m-3' type='number' name='stock' placeholder="Escriba la cantidad de unidades del producto" title="El stock solo acepta numeros" pattern="^[0-9]+$" required/>
            <input type='submit' className='btn btn-primary w-25' />
            
             
        </form>
        </>
    )
}

export {
    AddProduct
}