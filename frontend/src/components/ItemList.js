import Item from '../components/Item';

function ItemList(props) {
    
    function deleteItem(itemId) {
        props.onDeleteItem(itemId);
    }

    return (
        <div className="list">
            {props.items.map(item => (
                <Item
                id = {item.id}
                key = {item.id}
                name = {item.name}
                price = {item.price}
                category = {item.category}
                isAddToCartButton = {props.isAddToCart}
                deleteItem = {deleteItem} />
            ))}
        </div>
    )
}

export default ItemList;