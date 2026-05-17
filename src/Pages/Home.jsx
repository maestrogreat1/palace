import React from 'react'
import Carousel from '../Components/Carousel'
import Choose from '../Components/Choose'
import Services from '../Components/Services'
import People from '../Components/People'
import Community from '../Components/Community'
import Contact from '../Components/Contact'
import Areas from '../Components/Areas'
import Faqs from '../Components/Faqs'
import Brands from '../Components/Brands'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Choose />
      <Services />
      <People />
      <Community />
      <Contact />
      <Areas />
      <Faqs />
      <Brands />
    </div>
  )
}

export default Home
