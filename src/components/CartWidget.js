import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <>
            <div>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>0</span>
            </div>
        </>
    )
}

export default CartWidget;