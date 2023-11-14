import React from 'react'

export default function ProductList({ products }) {
    return (
        <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">${product.price}</td>
                    <td className="py-2 px-4 border-b">{product.detail}</td>
                    <td className="py-2 px-4 border-b">{product.stock}</td>
                    <td className="py-2 px-4 border-b">
                        <img
                            src={product.imgURL}
                            alt={product.name}
                            className="h-16 w-16 object-cover"
                        />
                    </td>
                    <td className="py-2 px-4 border-b">{product.id}</td>
                    <td className="py-2 px-4 border-b">{product.category}</td>
                </tr>
            ))}
        </tbody>
    )
}
