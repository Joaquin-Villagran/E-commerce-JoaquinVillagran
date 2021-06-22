import React from 'react';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';



const ItemListContainer = () => {
    const onAdd=(cantidad) =>{
        alert('Agregar al carrito: '+cantidad+' Productos');    
    }
    return (  
        <>
        <ItemList />
        <ItemCount stock="6" 
                    initial="0"
                    minValue='0'
                    maxValue="6"
                    onAdd={onAdd}/>

        </>
        
    );
}
 
export default ItemListContainer;