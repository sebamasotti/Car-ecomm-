// import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemlistContainer = () => {

    // const onAdd = (counter) => {
    //     console.log(counter);
    //     alert("Su cantidad agregada al carrito es de: " + counter)
    // }

    return (
        <div className="itemlistContainer">
            <ItemList />
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
        </div>
    );
    
}

export default ItemlistContainer;