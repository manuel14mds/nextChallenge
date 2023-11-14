import NavBar from "@/components/NavBar/NavBar"
import React from "react"

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="bg-custom">
        <div className="mx-auto max-w-2xl py-30 sm:py-15 lg:py-30 bg-black bg-opacity-80 p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-white">
              Retrogadget Store: Your Gateway to Nostalgia
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Step back in time and rediscover the magic of yesteryear with Retrogadget Store, your one-stop shop for all things retro. We're passionate about preserving and sharing the incredible history of technology, and we've curated a collection of iconic gadgets that will transport you back to a simpler time.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Whether you're a seasoned collector or just someone who appreciates the classics, our selection of retro gadgets is sure to amaze you. From vintage video game consoles and handhelds to classic computers and iconic audio equipment, we have something for everyone.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              We're not just about selling gadgets; we're about creating an experience. Each of our products comes with a detailed description and history, so you can learn about the innovation and legacy behind it. We also offer repair and restoration services to help you keep your retro gadgets in top condition.
            </p>
          </div>
        </div>

      </main>

    </>
  )
}
