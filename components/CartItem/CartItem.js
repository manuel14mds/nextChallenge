import React from 'react'

export default function CartItem({item}) {
    return (
        <div className="flex items-center justify-between border-b border-gray-300 py-4">
            <div className="flex items-center">
                <img
                    src={item.imgURL} // Reemplaza con la URL de la imagen del producto
                    alt={item.name}
                    className="mr-4 w-12 h-12 object-cover rounded"
                />
                <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Cantidad: {item.quantity}</p>
                </div>
            </div>
            <div>
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}
