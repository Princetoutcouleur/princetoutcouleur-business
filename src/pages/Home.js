import React from 'react'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import About from '../Components/About'
import Services from '../Components/Services'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <div className="banner vh-100">
        <Navigation />
        <Header />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home
