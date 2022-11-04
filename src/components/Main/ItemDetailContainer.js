import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { collection, doc, getDoc } from "firebase/firestore";
import dataBase from "../../services/firebaseConfig";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {

       const collectionProd = collection(dataBase, 'products')
       const ref = doc(collectionProd, id);

       getDoc(ref)
       .then((res) => {
        setItem({
            id: res.id,
            ...res.data(),  
        })
        setLoading(false);
       })
       .catch((error) => {
        console.log('Error', error);        
       })
       return () => setLoading(true)
    }, [id]);

    return(
        <>
            {loading ?         
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '270px'
                }}
            >
                <FadeLoader color="rgb(255, 135, 157)"/>
            </div>
            :
            <ItemDetail item={item} key={item.id}/>}
        </>
    )
}

export default ItemDetailContainer;