import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Promo Spesial Hosting 2026</span>
          <h1 className="hero-title">
            Promo Web Hosting Murah Terbaik Indonesia
          </h1>
          <p className="hero-subtitle">
            Layanan hosting dan registrasi domain paling bisa diandalkan dengan support 24 jam. Dilengkapi dengan Turbo Booster agar website Anda lebih cepat diakses hingga 32x.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-primary btn-lg">Lihat Paket Promo</a>
            <a href="#" className="btn btn-outline-white btn-lg">Pindah Hosting Gratis</a>
          </div>
          <ul className="hero-guarantees mt-4">
            <li>✓ Gratis Domain</li>
            <li>✓ Gratis SSL</li>
            <li>✓ Server Super Cepat</li>
          </ul>
        </div>
        <div className="hero-image">
          <div className="server-illustration">
             <div className="server-rack"></div>
             <div className="server-rack"></div>
             <div className="server-rack"></div>
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
