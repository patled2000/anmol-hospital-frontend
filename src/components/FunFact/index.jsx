 import React, { useEffect, useState } from 'react';

export default function FunFact({ number, title }) {
  const [count, setCount] = useState(0);
  const finalNumber = parseInt(number.replace(/[^\d]/g, '')); // remove +, K, %, etc.

  useEffect(() => {
    let start = 0;
    const duration = 2500; // in ms
    const stepTime = Math.max(10, Math.floor(duration / finalNumber));
    const interval = setInterval(() => {
      start += 1;
      if (start >= finalNumber) {
        clearInterval(interval);
        setCount(finalNumber);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [finalNumber]);

  // suffix handling (like +, %, K)
  const suffix = number.replace(/[0-9]/g, '');

  return (
    <div className="cs_funfact cs_style_1 text-center" style={{ padding: '4px 15px' }}>
      <h2 className="cs_funfact_number cs_fs_72">
        {count}
        {suffix}
      </h2>
      <p className="cs_funfact_title m-0 cs_heading_color" style={{ lineHeight: '1.1', marginTop: '6px' }}>
        {title}
      </p>
    </div>
  );
}
