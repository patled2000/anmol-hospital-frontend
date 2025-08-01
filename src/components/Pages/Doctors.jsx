import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import Doctor_page  from './BannerSection_image/Find-Doctors-banner.webp'
import dr_ashwin_aouchat from './Doctor_image/Dr_ashwin_aouchat.webp'
import Dr_mahesh_goad from './Doctor_image/Dr_mahesh_goad.webp'
import Dr_shreya_agrawal from './Doctor_image/Dr_shreya_agrawal.webp'
import Dr_shubham_satsangi from './Doctor_image/Dr_shubham_satsangi.webp'
import Dr_icon from './Doctor_image/Dr. icon.webp'
import founder from './About_page_image/shivam.webp'
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
 



  const teamData = [
  {
    imgUrl: Dr_mahesh_goad,
    department: 'General Medicine',
    name: 'Dr. Mahesh Gaud, MBBS MD',
    designation: 'Physician',
    description: 'Expert in asthma, heart disease, diabetes, and thyroid treatment plans.',
    timing: 'Mon-Sat: 9:00 AM - 2:00 PM',
    category: 'general',
  },
  {
    imgUrl: Dr_icon,
    department: 'General Medicine',
    name: 'Dr. Kulbhushan Kanase, MBBS MD',
    designation: 'Physician',
    description: 'Handles asthma, thyroid, diabetes, and heart disease with clinical precision.',
    timing: 'Mon-Sat: 5:00 PM - 9:00 PM',
    category: 'general',
  },
  {
    imgUrl: Dr_shubham_satsangi,
    department: 'General Medicine',
    name: 'Dr. Shubham Satsangi, MBBS MD',
    designation: 'Physician',
    description: 'Specializes in treating asthma, thyroid disorders, diabetes, and chronic heart conditions.',
    timing: 'Mon-Sat: 10:00 AM - 4:00 PM',
    category: 'general',
  },
  {
    imgUrl: Dr_icon,
    department: 'ENT',
    name: 'Dr. K.P. Singh, (MBBS)DLO ',
    designation: 'ENT Specialist',
    description: 'Specialist in diagnosing and treating nose, throat, and ear conditions.',
    timing: 'Tue-Thu: 11:00 AM - 2:00 PM',
    category: 'ent',
  },
  {
    imgUrl: Dr_shreya_agrawal,
    department: 'Gynecology',
    name: 'Dr. Shreya Agrawal, MBBS DGO',
    designation: 'Gynecologist & Obstetrician',
    description: 'Expertise in pregnancy and female reproductive health issues.',
    timing: 'Mon-Sat: 10:00 AM - 1:00 PM',
    category: 'gynecology',
  },
  {
    imgUrl: dr_ashwin_aouchat,
    department: 'Surgery',
    name: 'Dr. Ashwin Aouchat, MBBS MS',
    designation: 'General Surgeon',
    description: 'Performs surgical care in abdominal and digestive system conditions.',
    timing: 'Mon-Fri: 6:00 PM - 9:00 PM',
    category: 'surgery',
  },
  {
    imgUrl: Dr_icon,
    department: 'Orthopedics',
    name: 'Dr. Akash Dev Naneriya, MBBS D Ortho',
    designation: 'Orthopedic Surgeon',
    description: 'Treats bone, joint, muscle issues, and orthopedic trauma management.',
    timing: 'Mon-Sat: 5:30 PM - 8:30 PM',
    category: 'orthopedics',
  },
  {
    imgUrl: Dr_icon,
    department: 'Pediatrics',
    name: 'Dr. Sachin Garg, MBBS MD',
    designation: 'Pediatrician',
    description: 'Expert in newborn care, child growth, and pediatric health.',
    timing: 'Mon-Sat: 12:00 PM - 3:00 PM',
    category: 'pediatrics',
  },
  {
    imgUrl: Dr_icon,
    department: 'Pediatrics',
    name: 'Dr. Vikash Porwal, MBBS MD',
    designation: 'Pediatrician',
    description: 'Experienced in newborn healthcare and childhood disease prevention.',
    timing: 'Mon-Sat: 4:00 PM - 7:00 PM',
    category: 'pediatrics',
  },
  {
    imgUrl: Dr_icon,
    department: 'Gynecology',
    name: 'Dr. Hemant Kansal, MBBS MS',
    designation: 'Gynecologist & Obstetrician (On Call)',
    description: 'Provides on-call support for maternity and female health concerns.',
    timing: 'On Call',
    category: 'gynecology',
  },
  {
    imgUrl: Dr_icon,
    department: 'Gynecology',
    name: 'Dr. Avinash Patwari, MBBS MS',
    designation: 'Gynecologist & Obstetrician (On Call)',
    description: 'On-call gynecologist for pregnancy and female wellness support.',
    timing: 'On Call',
    category: 'gynecology',
  },
  {
    imgUrl: founder,
    department: 'Founder & Director',
    name: 'Dr. Anmol Patidar, MBBS MD',
    designation: 'Founder - Anmol Hospital',
    description: 'Founder of Anmol Hospital, promoting ethical healthcare.',
    timing: 'N/A',
    category: 'founder',
  },
];




export default function Doctors() {
  pageTitle('Doctors');
  return (
    <>
    <WhatsAppFloatingButton/>
      <BannerSectionStyle5
        bgUrl={Doctor_page}
        imgUrl='d'
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
   {/**   <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/doctors/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>  */}  
    </>
  );
}
