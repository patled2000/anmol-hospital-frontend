import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle=" 0731 359 4048"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="anmolhospital123@gmail.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="123 Anywhere St., Any City, 12345"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117751.28255137823!2d75.84616341761084!3d22.73836473169221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963036d21badf7d%3A0x48fda517ec42ad42!2sAnmol%20Hospital!5e0!3m2!1sen!2sin!4v1752226657462!5m2!1sen!2sin "
          allowFullScreen
        />

      </div>
      {/* End Google Map */}
    </div>
  );
}
