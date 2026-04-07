import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DomainSearch from './components/DomainSearch'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <DomainSearch />
        <Pricing />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
