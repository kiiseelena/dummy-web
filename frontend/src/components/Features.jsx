import React from 'react';

const Features = () => {
  const features = [
    { title: "Blazing Fast", desc: "Powered by Vite for near-instant rendering and lightning fast hot module replacement." },
    { title: "Glassmorphism", desc: "Beautiful modern UI elements with subtle background blurs and depth." },
    { title: "Responsive", desc: "Flawless layout across all screen sizes, from mobile to ultra-wide displays." },
  ];

  return (
    <div className="features">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
