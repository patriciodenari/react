import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  const { cart, deleteAll, deleteOne, totalPrecio } = useContext(CartContext);

  if (cart.length === 0) {
    return(
        <div className="sinProdContainer">
            <div className="sinProdItems">
                <h2>Aún no hay productos en el carrito 😕</h2>
                <Link to='/'>
                <button>
                    Ir al Home
                </button>
                </Link>
            </div>
        </div>
    )
  }
  
  
  return (
    <div id="cartContainer">
        <div className="cartItemsContainer">
            {cart.map((prod) => (
                <div id="cartItems" key={prod.id}>
                    <img src={prod.img} alt={prod.title} />
                    <div id="cartItemsInfo">
                        <h2>{prod.title}</h2>
                        <h3>Precio: ${prod.price},00</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Subtotal: ${prod.price * prod.cantidad},00</h3>
                    </div>
                    <FontAwesomeIcon icon={faTrashCan} className='fa-lg' style={{color: 'red', cursor: 'pointer', marginLeft: '30px', marginRight:'10px'}} onClick={() => deleteOne(prod.id)}></FontAwesomeIcon>
                </div>
            ))}
        </div>
        <div className="totalContainer">
            <div className="totalItems">
                <h1>Resumen de compra</h1>
                <div className="total">
                    <h2>Total:</h2><span>$ {totalPrecio()}</span>
                </div>
                <div className="finalizarCompra">
                    <Link to='/checkout'>
                        <button className="btn-finalizar">Finalizar compra</button>
                    </Link>
                    <button onClick={deleteAll}><FontAwesomeIcon icon={faTrashCan} className='fa-lg' style={{color: 'red', cursor: 'pointer', marginRight:'10px'}}></FontAwesomeIcon>Eliminar todo el carrito</button>
                </div>
            </div>
        </div>

    </div>
);
};

export default Cart;
