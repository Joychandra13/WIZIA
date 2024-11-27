import './App.css'
import AllocateEffort from './components/AllocateEffort'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Embrace from './components/Embrace'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NevBar from './components/NevBar'
import Partners from './components/partners'
import Train from './components/Train'

function App() {

  return (
    <>
      <div className='bg-[#07292F] overflow-hidden'>
        <NevBar/>
        <Hero/>
        <Partners/>
        <Cards/>
        <Train/>
        <Carousel/>
        <AllocateEffort/>
        <Embrace/>
        <Footer/>
      </div>
    </>
  )
}

export default App
