import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; 
import dataBase from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

const Form = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [mail2, setMail2] = useState('');
    const [numero, setNumero] = useState('');


    const [loading, setLoading] = useState(false)

    const [compraId, setCompraId] = useState('');

    const { cart, totalPrecio, deleteAll } = useContext(CartContext)
    
    const handleSubmit = (e) => {

        setLoading(true);
        e.preventDefault();
        const compra = {
            comprador: {name, lastName, mail, numero},
            items: cart,
            total: totalPrecio(),
            fecha: serverTimestamp()
        }

        const compraCollection = collection(dataBase, 'compras')
        addDoc(compraCollection, compra)
        .then((res)=> {
            setCompraId(res.id);
            deleteAll();
        })
        .catch((error)=> {
            console.log(error);
        })
        .finally(() => setLoading(false))
    };
    

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    };

    const handleChangeMail2 = (e) => {
        setMail2(e.target.value);
        const mail1 = document.getElementById('mail1');
        const mail2 = document.getElementById('mail2');

        if (mail2.value !== mail1.value) {
            document.getElementById('btnEnviar').disabled = true;
        } else {
            document.getElementById('btnEnviar').disabled = false;
        }
    };

    const handleChangeNumero = (e) => {
        toString(setNumero(e.target.value));
    };


    if (compraId) {
        return(
            <div id="checkoutContainer">
                <div id="checkoutItem" >
                    <h1>¡Muchas gracias por su compra, {name}!</h1>
                    <p>Su código de seguimiento es: <strong>{compraId}</strong></p>
                    <p>Atenti Tienda Deco</p>
                    <Link to='/'>Volver al home</Link>
                </div>
            </div>
        )
    }
    
    return(
        <div id="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="label">
                    <label htmlFor="nombre">Ingrese su nombre</label>
                    <input type='text' name="nombre" onChange={handleChangeName} value={name} placeholder='Ej: Juan' required></input>
                </div>
                <div className="label">
                    <label htmlFor="apellido">Ingrese su apellido</label>
                    <input type='text' name="apellido" onChange={handleChangeLastName} value={lastName} placeholder='Ej: Gonzalez' required></input>
                </div>
                <div className="label">
                    <label htmlFor="mail1">Ingrese su E-mail</label>
                    <input id="mail1" type='text' name="mail" onChange={handleChangeMail} value={mail} placeholder='nombre@example.com' required></input>
                </div>
                <div className="label">
                    <label htmlFor="mail2">Ingrese nuevamente su E-mail</label>
                    <input id="mail2" type='text' name="mail" onChange={handleChangeMail2} value={mail2} placeholder='nombre@example.com' required></input>
                </div>
                <div className="label">
                    <label htmlFor="celular">Ingrese su N° de celular</label>
                    <input type='text' name="celular" onChange={handleChangeNumero} value={numero} placeholder='Ej: 11-7834-4532' required></input>
                </div>
                <button id="btnEnviar">{loading ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    )
}

export default Form;