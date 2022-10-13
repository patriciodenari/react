import { useEffect, useState } from "react";
import productos from "./mock/productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    // estado

    const { categoryName } = useParams();


    // efecto
    useEffect(() => {
        const traerProductos = () => {
            return new Promise ((resolve, reject) => {
                const prodFiltrados = productos.filter((prod) => prod.category === categoryName);
                const prod = categoryName ? prodFiltrados : productos;
                setTimeout(() => {
                    resolve(prod);
                }, 500);
            });
        };
        traerProductos()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryName]) ;

    // console.log(items);

    return (
        <>
            <h2 className="greeting">{greeting}</h2>
            <ItemList items={items}/>
        </>
        
    )
}

export default ItemListContainer;