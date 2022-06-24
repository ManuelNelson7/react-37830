import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ saludo }) => {

    const onAdd = () => {
        alert(`Gracias, por tu compra`)
    }

    return (
        <>
            <h1 className='text-3xl font-bold'>{saludo}</h1>
            <ItemCount maximo={5} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer