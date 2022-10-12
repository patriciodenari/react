import Item from "./Item";

const ItemList = (props) => {
    return(
        <div className="itemListContainer">
            {
                props.items.map((prod) => {
                    return(
                        <Item prod={prod} key={prod.id}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList;