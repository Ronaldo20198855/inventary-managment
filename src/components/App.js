import '../css/app.css';
import {Route, Routes} from 'react-router-dom';
import Navegacion from './navbar';
import Home from './home';
import ListProduct from './ListProduct';
import { AddProduct } from './Addproduct';
import { Detail } from './Details';
import { EditProduct } from './EditProduct';
import { Footer } from './footer';
import { Page404 } from './404';
import { Mailer } from './Mailer';


function App() {
  
  return (
    <div className='page'>
        <Navegacion />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listProducts' element={<ListProduct />} />
          <Route path='/AddProducts' element={<AddProduct />} />
          <Route path='/Products/:id' element={<Detail />} />
          <Route path='/editProduct/:id' element={<EditProduct />} />
          <Route path='/send-mail' element={<Mailer />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    
   
  );
}





export default App;
