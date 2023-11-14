import Image from 'next/image'
import React from 'react'
import menu from '../../../app/assets/menu.svg'
import Link from 'next/link'

export default function Sidenav() {
    return (
        <>
            <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-36 bg-gray-800">
                <div className="flex-grow">
                    <ul className="flex flex-col mt-6">
                        <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                            <Link href="/admin">Home</Link>
                        </li>
                        <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                            <Link href="/admin/products">Products</Link>
                        </li>
                        <li className="py-2 px-3 text-gray-500 hover:text-gray-700">
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
