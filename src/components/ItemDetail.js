import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="itemDetailContainer">
            <article className="itemDetail">
                <img src={item.img} alt={item.title}/>
                <div className="card-info-detail">
                    <h2>{item.title}</h2>
                    <h3>$ {item.price},00</h3>
                    <ItemCount stock={10} initial={1}/>
                </div>
            </article>
        </div>
        
    )
}

export default ItemDetail;