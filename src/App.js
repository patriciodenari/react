import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './Nav.css'
 

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting="Bienvenidx al E-Commerce de Atenti!"/>
    </div>
  );
}

export default App;
