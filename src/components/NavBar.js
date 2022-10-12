import CartWidget from './CartWidget';
import NavBarItems from './NavBarItems';

const NavBar = ({title}) => {
    let secciones = ['Home', 'Productos', 'Nosotros', 'Contacto']
    return (
        <div id='navContainer'>
            <div id='navItems'>
                <h1 id='titulo'>{title}</h1>
                <nav>
                    <ul>
                        {
                            secciones.map((opt, index) => <NavBarItems key={index} opcion={opt}/>)
                        }
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;