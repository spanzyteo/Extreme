import Navbar from './component/Navbar'
import DiscoverSection from './component/DiscoverSection'
import FlightSection from './component/FlightSection'
import MessageSection from './component/MessageSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'
import BuyModal from './component/BuyModal'

export default function Home() {
  return (
    <div className="relative bg-[#2E4053]">
      <BuyModal />
      <DiscoverSection />
      <FlightSection />
      <MessageSection />
      <ContactSection />
    </div>
  )
}
