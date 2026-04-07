import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>HostingPedia</h3>
            <p>Layanan web hosting dengan teknologi cloud computing tangguh. DNS HostingPedia disebar secara geografis di berbagai regional.</p>
            <div className="contact-info mt-3">
              <p>📞 0274-88XXXX (Hunting)</p>
              <p>✉️ info@hostingpedia.com</p>
            </div>
          </div>
          <div className="footer-links">
            <h4>Layanan</h4>
            <ul>
              <li><a href="#">Hosting Murah</a></li>
              <li><a href="#">VPS Murah</a></li>
              <li><a href="#">Domain Murah</a></li>
              <li><a href="#">Cloud Hosting</a></li>
              <li><a href="#">Sertifikat SSL</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Bantuan</h4>
            <ul>
              <li><a href="#">Knowledgebase</a></li>
              <li><a href="#">Cara Pembayaran</a></li>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Buat Tiket</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HostingPedia Indonesia. Desain inspirasi oleh RumahWeb.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
