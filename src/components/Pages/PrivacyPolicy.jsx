 // src/pages/PrivacyPolicy.jsx
import React from 'react';
import './PolicyStyles.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>Anmol Hospital</strong>, we value your privacy and are committed to safeguarding the personal information you share with us through our website, forms, and services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal and health-related data, including:
      </p>
      <ul>
        <li>Full name, age, gender</li>
        <li>Email address and contact number</li>
        <li>Medical history and symptoms (if submitted through forms)</li>
        <li>Browser, IP address, device information (for analytics)</li>
      </ul>

      <h2>2. Purpose of Collecting Information</h2>
      <p>We use your data for the following reasons:</p>
      <ul>
        <li>To schedule appointments and respond to inquiries</li>
        <li>To improve medical care and personalize patient experience</li>
        <li>To send updates or health-related reminders</li>
        <li>To ensure regulatory and legal compliance</li>
      </ul>

      <h2>3. Data Protection & Security</h2>
      <p>
        All personal and medical data is stored securely on encrypted servers. Access is limited to authorized healthcare and administrative personnel only.
      </p>

      <h2>4. Consent and User Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access or request a copy of your data</li>
        <li>Request correction of inaccurate information</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2>5. Use of Cookies</h2>
      <p>
        We use cookies to monitor website traffic, enhance UX, and optimize content. You may disable cookies via your browser settings.
      </p>

      <h2>6. Third-Party Disclosure</h2>
      <p>
        We do not sell or rent your data. Information is only shared with third parties in the following cases:
      </p>
      <ul>
        <li>When legally required (e.g., by law enforcement)</li>
        <li>When integrating appointment tools or healthcare systems</li>
      </ul>

      <h2>7. Children’s Privacy</h2>
      <p>
        We do not knowingly collect data from children under 13 without parental/guardian consent.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We reserve the right to update this policy anytime. Revisions will be posted on this page with an updated effective date.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For questions regarding your privacy, reach out:
      </p>
      <p><strong>Email:</strong> anmolhospital123@gmail.com</p>
      <p><strong>Phone:</strong> 0731-3597 048</p>
      <p><strong>Address:</strong> 26 B, Kila Maidan Rd, Nanda Nagar, Indore, MP – 452015</p>

      <div className="privacy-note">
        <strong>Thank you for trusting Anmol Hospital with your care and data.</strong>
      </div>
    </div>
  );
}
