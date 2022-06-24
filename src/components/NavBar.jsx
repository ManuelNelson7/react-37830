import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='flex justify-center items-center bg-teal-600 py-2'>
            <div className='flex w-11/12 justify-between items-center'>
                <img className='h-12 w-12' src="https://images.vexels.com/media/users/3/223412/isolated/preview/bd3704cf52ba23499660b8bae7221daf-dise-o-plano-de-icono-de-tienda.png" alt="" />

                <ul className='flex gap-6 cursor-pointer text-white font-semibold'>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar