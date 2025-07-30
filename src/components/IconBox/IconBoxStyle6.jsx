 import React from 'react';
import parser from 'html-react-parser';

export default function IconBoxStyle6({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_6">
      <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle"  style={{
    width: '75px',           // 🔼 change width
    height: '75px',          // 🔼 change height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 0 15px rgba(0,0,0,0.05)',
  }}>
        <img
          src={iconUrl}
          alt="Icon"
          style={{
            width: '200px',         // bada karne ke liye yeh adjust karo
            height: '200px',
            objectFit: 'contain',
          }}
        />
      </div>
      <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0" style={{ color: '#444' }}>
        {parser(subTitle)}
      </p>
    </div>
  );
}
