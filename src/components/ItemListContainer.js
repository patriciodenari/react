import { useEffect, useState } from "react";
import productos from "./mock/productsMock";
import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    // estado



    // efecto
    useEffect(() => {
        const traerProductos = () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
                }, 1000);
            });
        };
        traerProductos()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []) ;

    // console.log(items);

    return (
        <>
            <h2 className="greeting">{greeting}</h2>
            <ItemList items={items}/>
        </>
        
    )
}

export default ItemListContainer;