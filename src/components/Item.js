const Item = ({prod}) => {
    console.log();
    return(
        <div>
            <article>
                <img href={prod.img} alt={prod.title}/>
                <div className="card-info">
                    <h2>{prod.title}</h2>
                    <h4>$ {prod.price},00</h4>
                </div>
            </article>
        </div>
        
    )
}

export default Item;