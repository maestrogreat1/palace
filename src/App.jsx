// import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Choose from './Components/Choose'
import Services from './Components/Services'
import People from './Components/People'
import Community from './Components/Community'
import Contact from './Components/Contact'
import Areas from './Components/Areas'
import Faqs from './Components/Faqs'
import Brands from './Components/Brands'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ServicesPage from './Pages/ServicesPage'
import Prayers from './Pages/Prayers'
import GalleryPage from './Pages/GalleryPage'

function App() {

  
  

  return (
    <Router className=" w-full overflow-x-hidden">
      <Navbar />
      <Routes className="">
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/prayers' element={<Prayers />} />
        <Route path='/events' element={<GalleryPage />} />
      </Routes>
      {/* <Carousel />
      <Choose />
      <Services />
      <People />
      <Community />
      <Contact />
      <Areas />
      <Faqs />
      <Brands /> */}
      <Footer />
    </Router>
  )
}

export default App
