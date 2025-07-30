 import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // ✅ Automatically switch between local and production
    const API_BASE_URL = process.env.NODE_ENV === 'production'
      ? 'https://anmol-hospital-backend.onrender.com'
      : 'http://localhost:5000';

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
        <div className="row">
          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Name</label>
            <input type="text" className="cs_form_field" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Email</label>
            <input type="email" className="cs_form_field" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
          </div>

          <div className="col-lg-6">
            <label className="cs_input_label cs_heading_color">Phone</label>
            <input type="tel" className="cs_form_field" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
          </div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Subject</label>
            <input type="text" className="cs_form_field" name="subject" value={form.subject} onChange={handleChange} placeholder="Your subject" required />
          </div>

          <div className="col-lg-12">
            <label className="cs_input_label cs_heading_color">Message</label>
            <textarea className="cs_form_field" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write something..." required />
          </div>

          <div className="col-lg-12" style={{ paddingTop: "15px" }}>
            <button className="cs_btn cs_style_1" type="submit">
              <span>Submit</span>
              <i>
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                <img src="/images/icons/arrow_white.svg" alt="Icon" />
              </i>
            </button>
            <p style={{ marginTop: '10px', color: '#28a745' }}>{status}</p>
          </div>
        </div>
      </div>
    </form>
  );
}
