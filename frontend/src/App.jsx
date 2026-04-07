import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">DummyWeb</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <main>
        <Hero />
        <Features />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DummyWeb Boilerplate. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
