import { useEffect, useState } from "react";
import productos from "./mock/productsMock";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((resolve, reject) => {
                const producto = productos.find((prod) => prod.id === 1)
                setTimeout(() => {
                    resolve(producto)
                }, 2000)
            })
        }
        traerProducto()
        .then((res)=>{
            setItem(res)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <>
            <ItemDetail item={item} key={item.id}/>
        </>
    )



}

export default ItemDetailContainer;