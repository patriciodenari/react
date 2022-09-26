import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div id='navContainer'>
            <div id='navItems'>
            <h1 id='titulo'>Atenti</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>        
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;