import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
import Doctor_page  from './image/find doctor.png'
import dr_ashwin_aouchat from './Doctor_image/Dr ashwin aouchat.png'
import Dr_mahesh_goad from './Doctor_image/Dr mahesh goad.png'
import Dr_shreya_agrawal from './Doctor_image/Dr shreya agrawal.png'
import Dr_shreya from './Doctor_image/Dr shreya.jpeg'
import Dr_shubham_satsangi from './Doctor_image/Dr shubham.satsangi.png'
const teamData = [
  {
    imgUrl: Dr_mahesh_goad,
    department: 'General Medicine Department',
    name: 'Dr. Mahesh Gaud MBBS,MD',
    designation: 'Physician',
    description:
      'Specialist in Asthma, Heart Disease, Diabetes, and Thyroid treatment.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'general',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_2.png',
    department: 'General Medicine Department',
    name: 'Dr. Kulbhushan Kanase, MBBS,MD',
    designation: 'Physician',
    description:
      ' Experienced in managing Asthma, Heart, Diabetes, and Thyroid .',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'general',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: Dr_shubham_satsangi,
    department: 'General Medicine Department',
    name: 'Dr. Shubham Satsangi, MBBS MD',
    designation: ' Physician',
    description:
       "Focuses on Asthma, Heart Disease, Thyroid, and Diabetes treatment.",
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'general',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_4.png',
    department: 'ENT  Department',
    name: 'Dr. K.P. Singh, MBBS, DLO',
    designation: 'Ear, Nose, and Throat',
    description:
      ' Expert in ear, nose, and throat disorders.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'ent',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: Dr_shreya_agrawal,
    department: 'Gynecology Department',
    name: 'Dr. Shreya Agrawal, MBBS DGO',
    designation: 'Gynecologist & Obstetrician',
    description:
      ' Treats women’s health and pregnancy-related conditions.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'gynecology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: dr_ashwin_aouchat,
    department: 'Gastroenterology Department',
    name: 'Dr. Ashwin Aouchat, MBBS MS',
    designation: 'Surgeon',
    description:
      'Performs abdominal surgeries and treats digestive system disorders.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'surgery',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_7.png',
    department: 'Orthopedics Department',
    name: 'Dr. Akash Dev Naneriya, MBBS D Ortho',
    designation: 'Orthopedic Surgeon',
    description:
      'Specialist in bone and joint problems.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'orthopedics',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_8.png',
    department: 'Pediatrics Department',
    name: 'Dr. Sachin Garg, MBBS MD',
    designation: 'Pediatrician',
    description:
      'Newborn and child healthcare expert.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'pediatrics ',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_9.png',
    department: 'Pediatrics Department',
    name: 'Dr. Vikash Porwal, MBBS MD',
    designation: 'Pediatrician',
    description:
      'newborn and pediatric care.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'Pediatrics',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_10.png',
    department: 'Gynecology Department',
    name: 'Dr. Hemant Kansal, MBBS MS',
    designation: 'Gynecologist & Obstetrician',
    description:
      ' Available on call for maternity and women’s health.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'gynecology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_11.png',
    department: ' Gynecology Department',
    name: 'Dr. Avinash Patwari, MBBS MS',
    designation: 'Gynecologist & Obstetrician',
    description:
      'Provides on-call care for women’s health and pregnancy.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'gynecology',
    href: '/doctors/doctor-details',
  },
 {
    imgUrl: '/images/doctors/doctor_12.png',
    department: 'Psychiatry Department',
    name: 'Dr. Maria Rodriguez,MBBS MD',
    designation: 'Psychiatrist',
    description:
      'Dr. Chen is a skilled psychiatrist with expertise psychiatrist with expertise   ',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'pediatric',
    href: '/doctors/doctor-details',
  },   
];

export default function Doctors() {
  pageTitle('Doctors');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl={Doctor_page}
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
