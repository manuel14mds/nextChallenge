import ProductList from '@/components/Admin/Products/ProductList'
import React from 'react'
import products from '@/data/data'

export default function page() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Detalle</th>
                        <th className="py-2 px-4 border-b">Stock</th>
                        <th className="py-2 px-4 border-b">Imagen</th>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Categoría</th>
                    </tr>
                </thead>
                <ProductList products={products}/>
            </table>
        </div>
    )
}
