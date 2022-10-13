import { useEffect, useState } from "react";
import productos from "./mock/productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((resolve, reject) => {
                const producto = productos.find((prod) => prod.id === Number(id))
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
    }, [id]);

    return(
        <>
            <ItemDetail item={item} key={item.id}/>
        </>
    )



}

export default ItemDetailContainer;