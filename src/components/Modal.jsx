
import  '../css/modal.css';

const Modal = (props) => {

    return(
        <>
            {props.estado && 
            <div className='overlay'>
                <div className='modal-container'>
                    <div className="modal-head">
                        <h3>{props.action}</h3>
                    </div>
                    <button className='btn-close' onClick={()=>{props.cambiarEstado(false)}}></button>
                    <div className="body">
                        <h4>{props.title}</h4>
                        <p><i>{props.body}</i></p>
                    </div>
                    <button className='btn btn-danger' onClick={props.borrar}><a href='/listProducts'>{props.action}</a></button>
                </div>
            </div>
            }
        </>
    )
}

export {
    
    Modal

}