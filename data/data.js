const products = [
        {
            name: "Nintendo Entertainment System",
            price: 199,
            detail: "La Nintendo Entertainment System (NES) es una consola de videojuegos doméstica de 8 bits desarrollada y fabricada por Nintendo. Fue lanzada en Japón el 10 de julio de 1983 y en Norteamérica el 15 de octubre de 1985. La NES fue la primera consola de videojuegos doméstica de gran éxito, y ayudó a revitalizar la industria de los videojuegos.",
            stock: 10,
            imgURL: "https://picsum.photos/200/300/?blur",
            id: "123456789",
            category: "console",
        },
        {
            name: "Super Nintendo Entertainment System",
            price: 299,
            detail: "La Super Nintendo Entertainment System (SNES) es una consola de videojuegos doméstica de 16 bits desarrollada y fabricada por Nintendo. Fue lanzada en Japón el 21 de noviembre de 1990 y en Norteamérica el 23 de agosto de 1991. La SNES fue una de las consolas de videojuegos más vendidas de todos los tiempos, y fue responsable de popularizar muchos géneros de videojuegos, como los juegos de acción y los juegos de rol.",
            stock: 15,
            imgURL: "https://picsum.photos/200/300/?blur",
            id: "987654321",
            category: "console",
        },
        {
            name: "Sega Genesis",
            price: 249,
            detail: "La Sega Genesis, también conocida como Mega Drive en Europa y Asia, es una consola de videojuegos doméstica de 16 bits desarrollada y fabricada por Sega. Fue lanzada en Japón el 29 de octubre de 1988 y en Norteamérica el 14 de agosto de 1989. La Genesis fue una de las consolas de videojuegos más vendidas de todos los tiempos, y fue responsable de popularizar muchos géneros de videojuegos, como los juegos de acción y los juegos de rol.",
            stock: 12,
            imgURL: "https://picsum.photos/200/300/?blur",
            id: "abcdefghij",
            category: "console",
        },
        {
            name: "Atari 2600",
            price: 149,
            detail: "La Atari 2600, también conocida como Atari VCS, es una consola de videojuegos doméstica de 8 bits desarrollada y fabricada por Atari. Fue lanzada en Norteamérica el 11 de septiembre de 1977 y en Europa el 2 de diciembre de 1978. La Atari 2600 fue una de las consolas de videojuegos más vendidas de todos los tiempos, y fue responsable de popularizar la industria de los videojuegos.",
            stock: 20,
            imgURL: "https://picsum.photos/200/300/?blur",
            id: "klmnopqrs",
            category: "console",
        },
        {
            name: "ColecoVision",
            price: 199,
            detail: "La ColecoVision es una consola de videojuegos doméstica de 8 bits desarrollada y fabricada por Coleco Industries. Fue lanzada en Norteamérica el 1 de agosto de 1982 y en Europa el 1 de diciembre de 1982. La ColecoVision fue una de las consolas de videojuegos más vendidas de todos los tiempos, y fue responsable de popularizar muchos géneros de videojuegos, como los juegos de deportes y los juegos de acción.",
            stock: 17,
            imgURL: "https://picsum.photos/200/300/?blur",
            id: "uvwxyz01",
            category: "console",
        },
        {
            name: "Sony Trinitron KV-21FS120",
            price: 150,
            detail: "El Sony Trinitron KV-21FS120 es un televisor CRT de 21 pulgadas desarrollado y fabricado por Sony. Fue lanzado en 1995. El KV-21FS120 tiene una resolución de 640 x 480 y un tiempo de respuesta de 28 ms.",
            stock: 10,
            imgURL: "https://i.imgur.com/123456789.jpg",
            id: "abcdefghij",
            category: "tv",
        },
        {
            name: "Panasonic CT-21AX10",
            price: 129,
            detail: "El Panasonic CT-21AX10 es un televisor CRT de 21 pulgadas desarrollado y fabricado por Panasonic. Fue lanzado en 1993. El CT-21AX10 tiene una resolución de 640 x 480 y un tiempo de respuesta de 32 ms.",
            stock: 15,
            imgURL: "https://i.imgur.com/987654321.jpg",
            id: "klmnopqrs",
            category: "tv",
        },
        {
            name: "Toshiba 21AF20",
            price: 149,
            detail: "El Toshiba 21AF20 es un televisor CRT de 21 pulgadas desarrollado y fabricado por Toshiba. Fue lanzado en 1994. El 21AF20 tiene una resolución de 640 x 480 y un tiempo de respuesta de 26 ms.",
            stock: 12,
            imgURL: "https://i.imgur.com/01234567.jpg",
            id: "abcdefghij",
            category: "tv",
        },
        {
            name: "JVC AV-2150",
            price: 199,
            detail: "El JVC AV-2150 es un televisor CRT de 21 pulgadas desarrollado y fabricado por JVC. Fue lanzado en 1996. El AV-2150 tiene una resolución de 640 x 480 y un tiempo de respuesta de 24 ms.",
            stock: 20,
            imgURL: "https://i.imgur.com/ghijk012.jpg",
            id: "klmnopqrs",
            category: "tv",
        },
        {
            name: "Sansui XR-21F1",
            price: 179,
            detail: "El Sansui XR-21F1 es un televisor CRT de 21 pulgadas desarrollado y fabricado por Sansui. Fue lanzado en 1997. El XR-21F1 tiene una resolución de 640 x 480 y un tiempo de respuesta de 22 ms.",
            stock: 17,
            imgURL: "https://i.imgur.com/mnopqrst.jpg",
            id: "uvwxyz01",
            category: "tv",
        },
        {
            name: "AKG K240 Studio",
            price: 129,
            detail: "Los AKG K240 Studio son unos auriculares de estudio semiabiertos desarrollados y fabricados por AKG. Fueron lanzados en 1978. Los K240 Studio tienen una respuesta de frecuencia de 10 Hz a 30 kHz y una impedancia de 55 ohmios.",
            stock: 10,
            imgURL: "https://i.imgur.com/123456789.jpg",
            id: "abcdefghij",
            category: "headphones",
        },
        {
            name: "Motorola DynaTAC 8000X",
            price: 3.995,
            detail: "El Motorola DynaTAC 8000X es el primer teléfono celular comercialmente disponible. Fue lanzado en 1983. El DynaTAC 8000X pesaba 2.5 libras y tenía una duración de batería de 30 minutos.",
            stock: 10,
            imgURL: "https://i.imgur.com/123456789.jpg",
            id: "abcdefghij",
            category: "phone",
        },
        {
            name: "Nokia 1011",
            price: 599,
            detail: "El Nokia 1011 es el primer teléfono celular de Nokia. Fue lanzado en 1987. El Nokia 1011 pesaba 475 gramos y tenía una duración de batería de 5 horas.",
            stock: 15,
            imgURL: "https://i.imgur.com/987654321.jpg",
            id: "klmnopqrs",
            category: "phone",
        },
        {
            name: "Ericsson GH 388",
            price: 799,
            detail: "El Ericsson GH 388 es el primer teléfono celular con pantalla a color. Fue lanzado en 1992. El Ericsson GH 388 pesaba 200 gramos y tenía una duración de batería de 3 horas.",
            stock: 12,
            imgURL: "https://i.imgur.com/01234567.jpg",
            id: "abcdefghij",
            category: "phone",
        },
        {
            name: "Motorola StarTAC",
            price: 995,
            detail: "El Motorola StarTAC es un teléfono celular plegable que fue lanzado en 1996. El StarTAC fue uno de los teléfonos celulares más populares de todos los tiempos.",
            stock: 20,
            imgURL: "https://i.imgur.com/ghijk012.jpg",
            id: "klmnopqrs",
            category: "phone",
        },
        {
            name: "Nokia 3310",
            price: 129,
            detail: "El Nokia 3310 es un teléfono celular indestructible que fue lanzado en 2000. El 3310 fue uno de los teléfonos celulares más vendidos de todos los tiempos.",
            stock: 17,
            imgURL: "https://i.imgur.com/mnopqrst.jpg",
            id: "uvwxyz01",
            category: "phone",
        },
        {
            name: "Apple Macintosh 128K",
            price: 2.495,
            detail: "El Apple Macintosh 128K es el primer ordenador personal de Apple. Fue lanzado en 1984. El Macintosh 128K tenía una pantalla de 9 pulgadas y un procesador MOS 6502 de 8 bits.",
            stock: 10,
            imgURL: "https://i.imgur.com/123456789.jpg",
            id: "abcdefghij",
            category: "pc",
        },
        {
            name: "Commodore 64",
            price: 599,
            detail: "El Commodore 64 es uno de los ordenadores personales más vendidos de todos los tiempos. Fue lanzado en 1982. El Commodore 64 tenía una pantalla de 16 colores y un procesador MOS 6510 de 8 bits.",
            stock: 15,
            imgURL: "https://i.imgur.com/987654321.jpg",
            id: "klmnopqrs",
            category: "pc",
        },
        {
            name: "Atari 800XL",
            price: 699,
            detail: "El Atari 800XL es un ordenador personal de 8 bits desarrollado y fabricado por Atari. Fue lanzado en 1985. El Atari 800XL tenía una pantalla de 16 colores y un procesador MOS 6502 de 8 bits.",
            stock: 12,
            imgURL: "https://i.imgur.com/01234567.jpg",
            id: "abcdefghij",
            category: "pc",
        },
        {
            name: "IBM PC XT",
            price: 1.595,
            detail: "El IBM PC XT es un ordenador personal de 8 bits desarrollado y fabricado por IBM. Fue lanzado en 1983. El IBM PC XT tenía una pantalla de monocromo y un procesador Intel 8088 de 8 bits.",
            stock: 20,
            imgURL: "https://i.imgur.com/ghijk012.jpg",
            id: "klmnopqrs",
            category: "pc",
        },
        {
            name: "Apple IIe",
            price: 1.295,
            detail: "El Apple IIe es un ordenador personal de 8 bits desarrollado y fabricado por Apple. Fue lanzado en 1983. El Apple IIe tenía una pantalla de 16 colores y un procesador MOS 6510 de 8 bits.",
            stock: 17,
            imgURL: "https://i.imgur.com/mnopqrst.jpg",
            id: "uvwxyz01",
            category: "pc",
        },
    ]

export default products