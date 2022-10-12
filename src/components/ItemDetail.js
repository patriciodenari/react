const ItemDetail = ({item}) => {
    return(
        <div className="itemDetailContainer">
            <article className="itemDetail">
                <img href={item.img} alt={item.title}/>
                <div className="card-info-detail">
                    <h2>{item.title}</h2>
                    <h3>$ {item.price},00</h3>
                </div>
            </article>
        </div>
        
    )
}

export default ItemDetail;