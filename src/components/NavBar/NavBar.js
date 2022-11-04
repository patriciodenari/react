import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import dataBase from '../../services/firebaseConfig';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const collectionCat = collection(dataBase, 'categorias')
        getDocs(collectionCat)
        .then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data()
                }
            })
            setCategories(categorias)
        })
        .catch((error) => {
            console.log(error);
        })


    }, []);

    return (
        <Navbar id='navContainer' expand="lg">
            <Container id='navItems'>
                <Link id='titulo' to="/">Atenti</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='categorias' className="me-auto">
                        {categories.map((cat) => (
                            <NavLink key={cat.id} to={`/category/${cat.path}`}>{cat.name}</NavLink>
                        ))}
                    </Nav>
                    <div id='nav-cart'>
                        <Link to='/cart'>
                            <CartWidget />
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;