 import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@iconify/react';
import './AppointmentForm.css';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    recordNumber: '',
    date: null,
    time: '',
    reason: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        alert('Appointment Submitted Successfully!');
      } else {
        alert(result.message || 'Submission Failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input name="name" type="text" placeholder="David John" value={formData.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input name="phone" type="text" placeholder="(123) 456 - 789" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Medical Record Number</label>
        <input name="recordNumber" type="text" placeholder="123456-7890-0987" value={formData.recordNumber} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Preferred Date</label>
        <div className="input-icon">
          <DatePicker selected={formData.date} onChange={handleDateChange} dateFormat="dd/MM/yyyy" minDate={new Date()} isClearable placeholderText="dd/mm/yyyy" />
          <i><Icon icon="fa6-solid:calendar-days" /></i>
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Time</label>
        <div className="input-icon">
          <input name="time" type="time" value={formData.time} onChange={handleChange} />
          <i><Icon icon="fa6-regular:clock" /></i>
        </div>
      </div>

      <div className="form-group">
        <label>Reason for Visit</label>
        <div className="radio-group">
          {['Routine Checkup', 'New Patient Visit', 'Specific Concern'].map((option, idx) => (
            <label key={idx}>
              <input type="radio" name="reason" value={option} onChange={handleChange} checked={formData.reason === option} />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Department</label>
        <div className="radio-group">
          {['Pediatric', 'Obstetrics & Gynecology', 'Cardiology', 'Neurology'].map((dept, idx) => (
            <label key={idx}>
              <input type="radio" name="department" value={dept} onChange={handleChange} checked={formData.department === dept} />
              {dept}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <button className="submit-btn" type="submit">Submit</button>
      </div>
    </form>
  );
}
