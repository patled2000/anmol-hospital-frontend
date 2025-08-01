 // components/WhatsAppFloatingButton.jsx
import React from 'react';
import { Icon } from '@iconify/react';
import './WhatsAppFloatingButton.css';

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon="fa6-brands:whatsapp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppFloatingButton;
