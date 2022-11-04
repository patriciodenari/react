import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {

    const [unidades, setUnidades] = useState(0)

    const { addToCart, cantProdCarrito } = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(item, numero);
    }

    const cantidad = cantProdCarrito(item.id)

    return(
        <div className="itemDetailContainer">
            <article className="itemDetail">
                <img src={item.img} alt={item.title}/>
                <div className="card-info-detail">
                    <h2>{item.title}</h2>
                    <p>{item.description}.</p>
                    <p>Stock: {item.stock} unidades.</p>
                    <h3>$ {item.price},00</h3>
                    {
                        unidades === 0 ? <ItemCount prueba={prueba} stock={item.stock} initial={cantidad}/> : <Link to='/cart'>Ir al carrito</Link>
                    }
                </div>
            </article>
        </div>
    )
}

export default ItemDetail;