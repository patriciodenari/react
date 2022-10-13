import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div id='navContainer'>
            <div id='navItems'>
                <Link id='titulo' to='/'><h1>ATENTI</h1></Link>
                <nav>
                    <ul>
                        <NavLink to='/category/almohadones'>Almohadones</NavLink>
                        <NavLink to='/category/platos'>Platos</NavLink>
                        <NavLink to='/category/aromatizantes'>Aromatizantes</NavLink>

                    </ul>
                </nav>
                <div id='nav-cart'>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </div>
    )
}

/* {
    secciones.map((opt, index) => <NavBarItems key={index} opcion={opt}/>)
} */

export default NavBar;