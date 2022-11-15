import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    return(
        <>
            <div>
                <FontAwesomeIcon icon={faCartShopping} className='fa-lg' />
                <span> {totalUnidades() >= 1 ? totalUnidades() : ''}</span>
            </div>
        </>
    )
}

export default CartWidget;