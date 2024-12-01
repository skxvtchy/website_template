import React from "react";
import "../ui/hero.css"; // Make sure to create this CSS file

function Hero() {
  return (
    <div className="app-container">
      <main className="main-content">
        <section className="hero-section">
          <h2 className="hero-title">This is my navbar</h2>
          <p className="hero-subtitle">created by James Li</p>
          <button className="cta-button">
            <a href="https://jamesli.dev">Visit my website</a>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Hero;
