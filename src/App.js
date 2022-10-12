import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './Nav.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar title='Atenti'/>
        </header>
        <ItemListContainer greeting="Bienvenidx al E-Commerce de Atenti!"/>
        <ItemDetailContainer />      
      </div>
    </BrowserRouter>
  );
}

export default App;
