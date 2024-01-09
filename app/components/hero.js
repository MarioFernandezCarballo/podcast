import Link from "next/link"
export default function Hero() {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-gray-50">
            <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        De Historias y Voces
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Bienvenidos a De Historias y Voces. Un espacio donde daremos rienda suelta a nuestra imaginación y nos adentraremos en infinidad de historias y reflexiones.
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Si te parece interesante, te invito a acompañarme en esta travesía. La cual, sabemos de dónde parte pero no tenemos ni idea a hacia dónde nos lleva.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        target="_blank"
                        href="https://open.spotify.com/show/41FbIFuVBXCTaANrvAHDkQ"
                        >
                        Spotify
                        </Link>
                        <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        target="_blank"
                        href="https://geo.itunes.apple.com/us/podcast/id1705408008?ct=rephonic&mt=2"
                        >
                        Apple Podcasts
                        </Link>
                        <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        target="_blank"
                        href="https://go.ivoox.com/sq/2107328"
                        >
                        Ivoox
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        alt="Podcast cover"
                        className="w-full max-w-md rounded-full object-cover"
                        height="400"
                        src="img/logo.png"
                        style={{
                        aspectRatio: "400/400",
                        objectFit: "cover",
                        }}
                        width="400"
                    />
                </div>
            </div>
            </div>
        </section>
    )
}