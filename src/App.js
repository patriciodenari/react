import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer';
import './Nav.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import Provider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider>
      <BrowserRouter>
          <NavBar title='Atenti'/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidx al E-Commerce de Atenti!"/>} />
            <Route 
              path='/category/:categoryName' element={<ItemListContainer />} 
            />
            <Route 
              path='/item/:id' element={<ItemDetailContainer />}
            />
            <Route  path='/cart' element={<Cart />}/>
            <Route  path='/checkout' element={<Form />}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
