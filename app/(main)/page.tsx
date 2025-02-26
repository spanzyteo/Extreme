import Navbar from './component/Navbar'
import DiscoverSection from './component/DiscoverSection'
import FlightSection from './component/FlightSection'
import MessageSection from './component/MessageSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'

export default function Home() {
  return (
    <div className="relative bg-[#2E4053]">
      <DiscoverSection />
      <FlightSection />
      <MessageSection />
      <ContactSection />
    </div>
  )
}
