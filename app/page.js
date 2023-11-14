import NavBar from "@/components/NavBar/NavBar"
import React from "react"

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="mx-auto max-w-2xl py-32 sm:py-15 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Retrogadget Store: Your Gateway to Nostalgia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Step back in time and rediscover the magic of yesteryear with Retrogadget Store, your one-stop shop for all things retro. We're passionate about preserving and sharing the incredible history of technology, and we've curated a collection of iconic gadgets that will transport you back to a simpler time.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're a seasoned collector or just someone who appreciates the classics, our selection of retro gadgets is sure to amaze you. From vintage video game consoles and handhelds to classic computers and iconic audio equipment, we have something for everyone.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're not just about selling gadgets; we're about creating an experience. Each of our products comes with a detailed description and history, so you can learn about the innovation and legacy behind it. We also offer repair and restoration services to help you keep your retro gadgets in top condition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </main>

    </>
  )
}
