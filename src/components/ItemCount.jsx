import React, { useState } from 'react'

// Contador que no baje del numero 2 y tampoco suba del stock

const ItemCount = ({ maximo, initial = 2, onAdd }) => {
    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {
        cuenta < maximo && setCuenta(cuenta + 1)
        cuenta >= maximo && alert('No hay stock')
        //condicion entonces ejecuta esto
    }

    const restar = () => {
        setCuenta(Math.max(cuenta - 1, 2))
    }

    return (
        <>
            <div className='flex gap-6 py-6 px-10'>
                <button className='text-xl' onClick={restar}>-</button>
                <p className='text-xl font-bold'>{cuenta}</p>
                <button className='text-xl' onClick={sumar}>+</button>
            </div>
            <button
                className='bg-indigo-600 p-3 text-white'
                onClick={onAdd}
            >
                Comprar
            </button>
        </>
    )
}

export default ItemCount