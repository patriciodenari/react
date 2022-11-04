import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <div className="itemListContainer">
            {
                items.map((prod) => {
                    return(
                        <Item prod={prod} key={prod.id}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList;