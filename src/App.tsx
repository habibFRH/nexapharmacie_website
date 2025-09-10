import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
import ForInvestors from './components/ForInvestors'
import DiscoverStories from './components/DiscoverStories'
import Footer from './components/Footer'
import SliderSection from './components/SliderSection'
function App() {

  return (
    <div>
      <Navbar />
      <Hero/>
      <ContentSection/>
      <ForInvestors/>
      <DiscoverStories/>
      <SliderSection/>
      <Footer/>
    </div>
  )
}

export default App
