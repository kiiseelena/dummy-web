import React from 'react';

const Features = () => {
  const advancedFeatures = [
    { title: "Turbo Booster", desc: "Berbasis Litespeed, membuat website Anda 32x lebih cepat dibanding Apache.", icon: "⚡" },
    { title: "Optimized PHP", desc: "Mendukung multi-versi PHP (5.x hingga 8.x) untuk eksekusi script super cepat dengan LSAPI.", icon: "🐘" },
    { title: "SSD / NVME Storage", desc: "Menjamin kecepatan I/O tertinggi untuk akses file dan query database.", icon: "💾" },
    { title: "DNS Tersebar di 8 Lokasi", desc: "Resolve domain super cepat di Asia, Eropa, dan US untuk koneksi stabil dari belahan dunia.", icon: "🌍" },
    { title: "Malware Detection", desc: "Mendeteksi dan membersihkan malware secara otomatis secara realtime.", icon: "🛡️" },
    { title: "LiteSpeed Cache", desc: "Akses memori instan untuk mengoptimalkan pengunjung dari seluruh penjuru.", icon: "💨" },
  ];

  return (
    <section className="features-section bg-light">
      <div className="container">
        <div className="section-title text-center">
          <h2>Teknologi Canggih Dibalik Server Kami</h2>
          <p>Kenyamanan Anda adalah prioritas kami. Nikmati fitur canggih dan keamanan mutakhir.</p>
        </div>
        <div className="features-grid">
          {advancedFeatures.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
