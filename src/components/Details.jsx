import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom';
import { detail } from '../functions/getDetail';
import { deletProduct } from '../functions/deleteProduc';
import { Modal } from './Modal';
import '../css/detail.css'

const Detail = () =>{

    const {id} = useParams();
    
    useEffect(()=>{
        detail(id);
    },[id])
    
    const deleteClick = ()=>{
        deletProduct(id)
    }

    const [estadoModal,cambiarEstado] = useState(false);
    const url = `/editProduct/${id}`
    return(
        <>
          <div className='container-content  border'>
                <div className="detail-container">
                    <h1 className='my-5'>Detalles del producto</h1>
                </div>
                <div>
                    <button className='btn btn-primary'><Link to={url}>Editar</Link></button>
                    <button className='btn btn-danger' 
                        onClick={()=>{cambiarEstado(!estadoModal)}}                   
                    >Eliminar</button>
                </div>
          </div>

          <Modal 
            estado={estadoModal}
            cambiarEstado={cambiarEstado}
            action="Eliminar" 
            title="¿Seguro que desea eliminar el producto?" 
            body="(esta accion no se pude deshacer)" 
            borrar={deleteClick}/>
        </>
    );
}

export {
    Detail
}