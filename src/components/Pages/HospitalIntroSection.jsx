import React from 'react';
import './HospitalIntroSection.css';
import img1 from './image/MRI Scan.jpg';
import img2 from './image/Lab Work.jpg';
import img3 from './image/Microscope.jpg';
import img4 from './image/ICU Unit.jpg';
import { Link } from 'react-router-dom';


export default function HospitalIntroSection() {
  return (
    <section className="hospital-intro">
      <div className="intro-left">
        <h2>Anmol Hospital & Research Center</h2>
        <p>
          <strong>Anmol Hospital</strong> is a trusted multi-specialty hospital located in <span className='highlight-green'>Kamla Nehru Nagar, Indore</span >, serving the community since <strong>2019</strong> We started with a clear and honest mission — to provide <span className='highlight-green'>affordable, ethical, and 
            compassionate healthcare</span> to every individual and family.
           
        </p>
        <p>
           Founded by <strong>Dr. Jitendra Awasthi (BHMS, PGDEMS, MHA)</strong> and <strong>Dr. Shivam Mishra (BHMS, CMSED)</strong>, the hospital is built on a strong foundation of<span className="highlight-green"> medical expertise, patient care, and community trust.</span> Both doctors
            bring years of hands-on experience and a deep commitment to healing with empathy.
           </p>
           <p>Over the years, we have earned the trust of many families by being available in
             their time of need. Whether it's a <span className='highlight-green'>general consultation, emergency</span>, or <span  className='highlight-green'>specialized treatment</span>, our team ensures every patient receives <span className='highlight-green'>personal attention, respect, and quality care</span>.

       </p>
        
        <p className="tagline">“Anmol Hospital – Your care in our hands.”</p>
      </div>

      <div className="intro-right">
        <div className="img-grid"> 
      <Link to="/gallery">   <img src={img1} alt="MRI Scan" /></Link> 
      <Link to="/gallery">     <img src={img2} alt="Lab work" /></Link>
        <Link to="/gallery">   <img src={img3} alt="Microscope" /></Link>
        <Link to="/gallery">   <img src={img4} alt="ICU Unit" /> </Link>
        </div>
      </div>
    </section>
  );
}
