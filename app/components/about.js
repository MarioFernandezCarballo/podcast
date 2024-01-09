import Link from "next/link"
export default function About() {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-gray-50">
            <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre el autor</h2>
            <div className="grid gap-8 lg:grid-cols-2 mt-8">
                <div className="flex items-center justify-center">
                <img
                    alt="Author"
                    className="w-full max-w-md rounded-full object-cover bg-white"
                    height="200"
                    src="img/about.png"
                    style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                    }}
                    width="200"
                />
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Mario Carballo</h3>
                    <p className="text-gray-500 mt-2">
                        Ingeniero de profesión y escritor de tiempo libre. Mis géneros son la Ciencia Ficción y la Fantasía, aunque me gusta probar con todo.
                        En 2020 publiqué Al otro lado de la esfera, que podéis encontrar en el siguiente enlace.
                    </p>
                    <p>
                        <Link className="text-grey-800 hover:underline" target="_blank" href="https://www.amazon.es/dp/B08B33M1WS?ref_=cm_sw_r_cp_ud_dp_KDGCQHD4TFYNR8QYYH29_1">
                            Al otro lado de la esfera
                        </Link>
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}