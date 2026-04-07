import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Next-Gen</span> Web Boilerplate
        </h1>
        <p className="hero-subtitle">
          A premium, high-performance starting point for your modern applications. Built with React, Vite, and an eye for exceptional design aesthetics.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">View Documentation</button>
        </div>
      </div>
      <div className="hero-glow"></div>
    </div>
  );
};

export default Hero;
