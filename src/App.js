import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './Nav.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar title='Atenti'/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidx al E-Commerce de Atenti!"/>} />
          <Route 
            path='/category/:categoryName' element={<ItemListContainer />} 
          />
          <Route 
            path='/item/:id' element={<ItemDetailContainer />}
          />
          <Route  path='/cart' element={<Cart />}/>
                
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
