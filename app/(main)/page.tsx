import Image from 'next/image'
import Navbar from './component/Navbar'
import DiscoverSection from './component/DiscoverSection'

export default function Home() {
  return (
    <div className="relative bg-[#2E4053]">
      <Navbar />
      <DiscoverSection />
      Hello world
    </div>
  )
}
