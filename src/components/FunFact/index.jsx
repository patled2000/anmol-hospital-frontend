import React from 'react';

export default function FunFact({ number, title }) {
  return (
    <div className="cs_funfact cs_style_1 text-center " style={{padding:"4px 15px"}}>
      <h2 className="cs_funfact_number cs_fs_72">{number}</h2>
      <p className="cs_funfact_title m-0 cs_heading_color" style={{lineHeight:"1.1" ,marginTop:"6px"}}>{title}</p>
    </div>
  );
}
