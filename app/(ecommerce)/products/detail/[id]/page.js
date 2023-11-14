import React from 'react'
import products from '@/data/data'

export default function Detail({ params }) {
    const { id } = params
    const product = products.find(product => product.id == id)

    return (
        <>
        {product?
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <div className="flex">
                    <div className="w-1/2">
                        <img src={product.imgURL} alt={product.name} className="w-full h-auto" />
                    </div>
                    <div className="w-1/2 p-4">
                        <p className="text-gray-700">{product.detail}</p>
                        <p className="text-gray-800 font-bold mt-4">Precio: ${product.price}</p>
                        <p className="text-gray-800 font-bold">Stock: {product.stock}</p>
                    </div>
                </div>
            </div>
            :
            <p>Product no found</p>
        }
        </>
        )
}
