import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@iconify/react';
import "./AppointmentForm.css"

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <form className="row">
      <div className="col-lg-6">
        <label>Name</label>
        <input type="text" className="cs_form_field" placeholder="David John" />
      </div>
      <div className="col-lg-6">
        <label>Phone Number</label>
        <input type="text" className="cs_form_field" placeholder="(123) 456 - 789" />
      </div>
      <div className="col-lg-12">
        <label>Medical Record Number</label>
        <input type="text" className="cs_form_field" placeholder="123456-7890-0987" />
      </div>
      <div className="col-lg-6">
        <label>Preferred Date</label>
        <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          />
          <i><Icon icon="fa6-solid:calendar-days" /></i>
        </div>
      </div>
      <div className="col-lg-6">
        <label>Preferred Time</label>
        <div className="cs_with_icon_input">
          <input type="time" className="cs_form_field" />
          <i><Icon icon="fa6-regular:clock" /></i>
        </div>
      </div>
      <div className="col-lg-12">
        <label>Reason for Visit</label>
        <div className="cs_radio_group">
          <label><input type="radio" name="reason" /> Routine Checkup</label>
          <label><input type="radio" name="reason" /> New Patient Visit</label>
          <label><input type="radio" name="reason" /> Specific Concern</label>
        </div>
      </div>
      <div className="col-lg-12">
        <label>Department</label>
        <div className="cs_radio_group">
          <label><input type="radio" name="dept" /> Pediatric</label>
          <label><input type="radio" name="dept" /> Obstetrics & Gynecology</label>
          <label><input type="radio" name="dept" /> Cardiology</label>
          <label><input type="radio" name="dept" /> Neurology</label>
        </div>
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1" type="submit">
          <span>Submit</span>
          <i><img src="/images/icons/arrow_white.svg" alt="" /></i>
        </button>
      </div>
    </form>
  );
}
