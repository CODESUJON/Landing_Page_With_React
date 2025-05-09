import { AboutUs } from "./components/sections/AboutUs"
import { Brands } from "./components/sections/Brands"
import { CTA } from "./components/sections/CallToAction"
import { Hero } from "./components/sections/Hero"
import { Priceing } from "./components/sections/Priceing"
import { Services } from "./components/sections/Services"
import { Layout } from "./components/shared/Layout"

function App() {

  return (
    <Layout title="CromeAI">
      <Hero/>
      <Brands/>
      <Services/>
      <AboutUs/>
      <Priceing/>
      <CTA/>
    </Layout>
  )
}



export default App
