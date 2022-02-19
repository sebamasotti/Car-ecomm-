import Item from './Item';

const ItemList = ({products}) => {


    return (
        <div className="listado">
            {products.map(item => 
                <Item className ="card"
                key={item.id} 
                name={item.name} 
                modelos={item.modelos} 
                img= {item.img}
                valor= {item.valor}
                id= {item.id} />
                )}
        </div>
        
    );
    
}

export default ItemList;