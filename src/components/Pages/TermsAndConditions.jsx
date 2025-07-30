 // src/pages/TermsAndConditions.jsx
import React from 'react';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to <strong>Anmol Hospital</strong>. These terms govern your use of our website and services. Please read them carefully.
      </p>

      <h2>1. Website Usage</h2>
      <p>
        You agree not to misuse the content, copy or reverse engineer any part of this website. You may only use the content for lawful purposes.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        All logos, branding, images, text, videos, and content on this website are the property of Anmol Hospital. Reuse without permission is strictly prohibited.
      </p>

      <h2>3. Medical Disclaimer</h2>
      <p>
        The content provided is for general informational purposes only and does not constitute medical advice. Please consult our doctors for accurate diagnosis and treatment.
      </p>

      <h2>4. Appointments & Consultations</h2>
      <ul>
        <li>Appointments are subject to doctor availability.</li>
        <li>In rare cases, appointments may be rescheduled in emergencies.</li>
        <li>It is your responsibility to provide correct personal and medical details.</li>
        <li>We reserve the right to deny service if false information is submitted.</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>
        We are not responsible for any delays, data loss, or technical interruptions while using this website. Use at your own risk.
      </p>

      <h2>6. External Links</h2>
      <p>
        Our website may contain links to third-party websites. Anmol Hospital is not responsible for the privacy or content of these websites.
      </p>

      <h2>7. Policy Updates</h2>
      <p>
        We may update these terms and conditions at any time without prior notice. You are encouraged to review this page regularly.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms are governed by the laws of India. Any disputes will be subject to jurisdiction in Indore, Madhya Pradesh.
      </p>

      <h2>9. Contact Information</h2>
      <p>
        For questions regarding these terms, please contact us at:
      </p>
      <p><strong>Email:</strong> anmolhospital123@gmail.com</p>
      <p><strong>Phone:</strong> 0731-3597 048</p>

      <div className="terms-note">
        <strong>Thank you for choosing Anmol Hospital – Your care in our hands.</strong>
      </div>
    </div>
  );
}
