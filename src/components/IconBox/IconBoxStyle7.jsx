import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
 

export default function IconBoxStyle6({ title, subTitle, iconUrl, href }) {
  return (
    <div className="cs_iconbox cs_style_7" >
       <div className="cs_iconbox_icon" style={{
  width: "60px",
  height: "60px",
  objectFit: "contain",
  marginBottom: "16px"
}}>
        <img src={iconUrl} alt="Icon" />
      </div> 
      <h2 className="cs_iconbox_title cs_fs_32" style={{color:"#000" , paddingRight:"0px"}}>{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0" style={{color:"#000"}}>{parser(subTitle)}</p>
     <div className="cs_iconbox_btn cs_center">
      {/**   <img src="images/icons/arrow_white.svg" alt="Icon" />   */}
      {/**    <img src="images/icons/arrow_white.svg" alt="Icon" />   */}
      </div>    
    </div>
  );
}
