import Hero from "../components/hero/Hero"
import Video from "../components/Video"
import Offers from "../components/Offers"
import Facilities from "../components/Facilities"
import Property from "../components/Property"
import Testimonial from "../components/Testimonial"
import Gestarted from "../components/Gestarted"
import FAQ from "../components/FAQ"
import FooterTop from "../components/FooterTop"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Video />
      <Offers />
      <Facilities />
      <Property />
      <Testimonial />
      <Gestarted />
      <FAQ />
      <FooterTop />
      <Footer />
    </div>
  )
}
