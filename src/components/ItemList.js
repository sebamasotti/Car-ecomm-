import Item from './Item';

const ItemList = ({products}) => {


    return (
        <div className="listado">
            {products.filter(el => el.id ===1).map(item => 
                <Item className ="card"
                key={item.id} 
                name={item.name} 
                modelos={item.modelos} 
                img= {item.img} />
                )}
        </div>
        
    );
    
}

export default ItemList;