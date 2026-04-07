import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Entry",
      badge: "Free SSL",
      price: "15.000",
      features: ["1 GB Space", "Unlimited Traffic", "Unlimited Email", "Unlimited MySQL DB", "3 Domains", "Entry Cloud Resource", "Security 360"]
    },
    {
      name: "Small",
      badge: "Free Domain",
      price: "25.000",
      isPopular: true,
      features: ["Unlimited Space", "Unlimited Traffic", "Unlimited Email", "Unlimited MySQL DB", "6 Domains", "Small Cloud Resource", "Security 360", "Turbo Booster (optional)"]
    },
    {
      name: "Medium",
      badge: "Promo!",
      price: "35.000",
      features: ["Unlimited Space", "Unlimited Traffic", "Unlimited Email", "Unlimited MySQL DB", "Unlimited Domains", "Medium Cloud Resource", "Monarx Security", "Turbo Booster (included)", "Akses SSH", "Redis Object Cache"]
    },
    {
      name: "Large",
      badge: "+ Premium WP Plugins",
      price: "65.000",
      features: ["Unlimited Space", "Unlimited Traffic", "Unlimited Email", "Unlimited MySQL DB", "Unlimited Domains", "Large Cloud Resource", "Monarx Security", "Turbo Booster (included)", "Akses SSH", "Redis Object Cache", "PHP X-Ray"]
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-title text-center">
          <h2>Paket Web Hosting Murah Terbaik</h2>
          <p>Dapatkan penawaran paket hosting terbaik dari HostingPedia dan tentukan pilihan Anda.</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Paling Laris</div>}
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <span className="plan-badge">{plan.badge}</span>
              </div>
              <div className="plan-price">
                <span className="currency">Rp</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/ bln</span>
              </div>
              <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline-primary'} w-100 mt-4 mb-4`}>Pesan Sekarang</button>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}><i className="icon-check">✓</i> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
