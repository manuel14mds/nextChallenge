import NavBar from '@/components/NavBar/NavBar'
import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <hr />
                <nav className="bg-zinc-200">
                    <div className="flex items-center justify-center p-2">
                        <Link href="/products" className="text-zinc-900 hover:text-zinc-950 px-4 py-2">all</Link>
                        <Link href="/products/phone" className="text-zinc-900 hover:text-zinc-950 px-4 py-2">Phones</Link>
                        <Link href="/products/console" className="text-zinc-900 hover:text-zinc-950 px-4 py-2">Consoles</Link>
                        <Link href="/products/tv" className="text-zinc-900 hover:text-zinc-950 px-4 py-2">TVs</Link>
                        <Link href="/products/pc" className="text-zinc-900 hover:text-zinc-950 px-4 py-2">PCs</Link>
                    </div>
                </nav>
                
                {children}
            </main>
        </>
    )
}
