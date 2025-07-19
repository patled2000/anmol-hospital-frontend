import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle3 from '../Section/DepartmentSection/DepartmentSectionStyle3';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
import departmentpagebanner from './image/department_banner.png'
const departmentData = [
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: ' General Surgery',
    subTitle:
      ' This department handles surgical treatment for conditions like appendicitis, hernias, and abdominal injuries with expert care.',
    href: '/departments/department-details',
  },
  {
     iconUrl: 'images/departments/icon_1.svg',
    title: 'Paediatric Care',
    subTitle:
      'This department offers medical services for infants, children, and adolescents including immunization and growth monitoring.',
    href: '/departments/department-details',
  },
  {
     iconUrl: 'images/departments/icon_1.svg',
    title: 'Burn Care Unit',
    subTitle:
      'This department provides specialized treatment for minor to severe burns using wound management, pain relief, and skin care.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Trauma Department',
    subTitle:
      ' This department treats emergency injuries caused by accidents or violence and offers life-saving procedures and fast care.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Road Accident Care',
    subTitle:
      ' This department specializes in handling victims of road accidents with quick diagnostics, trauma care, and surgical response.',
    href: '/departments/department-details',
  },
  {
     iconUrl: 'images/departments/icon_1.svg',
    title: 'Medical Management',
    subTitle:
      'This department manages chronic and acute conditions such as diabetes, hypertension, and infections through expert physicians.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: ' Urology Department',
    subTitle:
      ' This department deals with urinary tract and male reproductive issues, including kidney stones, infections, and prostate care.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: ' Cardiology Department',
    subTitle:
      ' This department treats heart conditions including hypertension, heart attacks, and arrhythmias with advanced cardiac care.',
    href: '/departments/department-details',
  },

 {
      iconUrl: 'images/departments/icon_1.svg',
    title: 'Obstetrics and Gynecology',
    subTitle:
      'This department provides care for pregnancy, childbirth, and female reproductive health using advanced treatment and technology.',
    href: '/departments/department-details',
  },


];

export default function Departments() {
  pageTitle('Departments');
  return (
    <>
      <BannerSectionStyle5
        bgUrl={departmentpagebanner}
        imgUrl="/images/departments/banner_img.png"
        title="Get to Know <br>Anmol Hospital Departments"
        subTitle="At Anmol Hospital, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
     {/** <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>   */} 
    </>
  );
}
