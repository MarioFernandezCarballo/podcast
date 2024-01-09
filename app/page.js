import Hero from "./components/hero"
import Chapters from "./components/chapters"
import About from "./components/about"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
    <main>
      <Hero/>
      <Chapters/>
      <About/>
    </main>
    <Footer />
    </>
  )
}
