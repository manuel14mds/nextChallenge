import React from 'react'
import CartItem from '@/components/CartItem/CartItem';
export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      quantity: 2,
      imgURL:'https://picsum.photos/200/300?grayscale'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 29.99,
      quantity: 1,
      imgURL:'https://picsum.photos/200/300?grayscale'
    },
  ]

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">${calculateTotal()}</span>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Pagar
        </button>
      </div>
    </div>
  )
}
