import Card from '@/components/Card/Card'
import React from 'react'
import products from '../../../data/data'

export default function Products() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card  key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}
