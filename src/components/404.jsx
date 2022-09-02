import '../css/404.css';
import {Link} from 'react-router-dom';

const Page404 = ()=>{
    return(
        <div className="container-404">
            <div className="404">
                <h1>404</h1>
            </div>
            <div className="text-404">
                <h2>Oh no! you're lost</h2>
                <p>The page you are trying to view does not exist or was removed.</p>
                <Link className='btn btn-primary' to='/'>Back to home</Link>
            </div>
        </div>
    );
}

export {
    Page404
}