import ItemCount from './ItemCount';

const ItemlistContainer = () => {

    const onAdd = (counter) => {
        console.log(counter);
        alert("Su cantidad agregada al carrito es de: " + counter)
    }

    return (
        <div className="itemlistContainer">
            <h1>Contador para el desafio</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}

export default ItemlistContainer;