import React from "react";
import "./InsurancePartnersSection.css";

const partners = [
  { name: "HDFC ERGO", image: "/images/insurance/HDFC.webp" },
  { name: "IFFCO Tokio", image: "/images/insurance/iffco.webp" },
  { name: "SBI General", image: "/images/insurance/Sbi.webp" },
  { name: "Medi Assist", image: "/images/insurance/Mediassist.webp" },
];

const InsurancePartnersSection = () => {
  return (
    <section className="insurance-section">
      <div className="insurance-container">
        <h2 className="insurance-title">Our Insurance Partners</h2>
        <p className="insurance-subtitle">Trusted by top companies for quality healthcare coverage</p>

        <div className="insurance-grid">
          {partners.map((partner, index) => (
            <div className="insurance-card" key={index}>
              <img src={partner.image} alt={partner.name} className="insurance-img" />
              <p className="insurance-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartnersSection;
