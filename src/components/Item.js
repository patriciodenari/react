import { Link } from "react-router-dom";

const Item = ({prod}) => {
    console.log();
    return(
        <div id="itemsContainer">
            <Link to={`/item/${prod.id}`}>
                <article className="itemListItems">
                    <img src={prod.img} alt={prod.title}/>
                    <div className="card-info">
                        <h2>{prod.title}</h2>
                        <h4>$ {prod.price},00</h4>
                    </div>
                </article>
            </Link>
        </div>
        
    )
}

export default Item;