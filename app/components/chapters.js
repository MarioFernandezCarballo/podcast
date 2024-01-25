import Link from "next/link"
import Slider from "./slider"

export default function Chapters() {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-white">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">...Y de letras</h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Aquí encontrarás los relatos dramatizados para que también puedas leerlos.
                    </p>
                </div>
                <div className="w-full mx-auto">
                    <Slider/>
                </div>
            </div>
        </section>
    )
}