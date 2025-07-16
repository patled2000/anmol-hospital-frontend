 import React from 'react';
import parse from 'html-react-parser';

export default function TextWidget({ logoUrl, text }) {
  return (
    <div className="cs_text_widget">
      {logoUrl && (
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            maxHeight: '75px',
            width: 'auto',
            marginBottom: '15px'
          }}
        />
      )}
      {text && <p className="cs_medium">{parse(text)}</p>}
    </div>
  );
}
