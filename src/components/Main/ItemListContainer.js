import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import dataBase from "../../services/firebaseConfig";



const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryName } = useParams();


    useEffect(() => {
        const collectionProd = collection(dataBase, 'products')

        const referencia = categoryName
        ? query(collectionProd, where('category', '==', categoryName))
        : collectionProd
        
        getDocs(referencia)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data()
                };
            })
            setItems(products);
        })
        .catch(() => {
            console.log('ERROR');
        })
        .finally(() => {
            setLoading(false);
        })

        return () => setLoading(true)

    }, [categoryName])


    if (loading) {
        return(
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '270px'
                }}
            >
                <FadeLoader color="rgb(255, 135, 157)"/>
            </div>
        )
    }

    return (
        <div>
            <h2 className="greeting">{greeting}</h2>
            <ItemList style={{margin: 100}} items={items}/>
        </div>
    )
}

export default ItemListContainer;