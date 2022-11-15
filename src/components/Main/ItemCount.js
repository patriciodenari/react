import React, { useState } from 'react';
import { useEffect } from 'react';


const ItemCount = ({stock, initial = 1, addOne}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > 1 && setCount(count - 1);
    };

    useEffect(() => {
        setCount(initial)
    }, [initial])
    
    return (
        <div className="contadorContainer">
            <div className="contador-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button disabled={count === stock} onClick={sumar}>+</button>
            </div>
            <button onClick={() => {addOne(count)}} className="agregar-cart">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;