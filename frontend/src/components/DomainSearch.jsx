import React from 'react';

const DomainSearch = () => {
  return (
    <section className="domain-search">
      <div className="container">
        <div className="domain-search-box">
          <h2>Cari Nama Domain Spesial Untuk Bisnismu!</h2>
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Ketik nama domain incaranmu di sini..." className="search-input" />
            <select className="domain-extension">
              <option value=".com">.com</option>
              <option value=".id">.id</option>
              <option value=".co.id">.co.id</option>
              <option value=".net">.net</option>
            </select>
            <button type="submit" className="btn btn-primary search-btn">Cari Domain</button>
          </form>
          <div className="domain-promo">
            <span><strong>.COM</strong> Rp 125.000</span>
            <span><strong>.ID</strong> Rp 189.000</span>
            <span><strong>.WEB.ID</strong> Rp 49.000</span>
            <a href="#">Lihat Semua Ekstensi &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSearch;
