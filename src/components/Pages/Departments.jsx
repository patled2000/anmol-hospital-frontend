import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle3 from '../Section/DepartmentSection/DepartmentSectionStyle3';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
import departmentpagebanner from './BannerSection_image/department_banner.webp'
import General_Surgery  from './Department/General Surgery Icon.webp'
import  Paediatric_Care  from './Department/Paediatric Care Icon.webp'
import   Burn_Care_Unit from './Department/Burn Care Unit Icon.webp'
import  Trauma_Department  from './Department/Trauma Department Icon.webp'
import  Road_Accident_Care  from './Department/Raod Accident Care Icon.webp'
import  Medical_Management  from './Department/Medical Management Icon.webp'
import  Urology_Department  from './Department/Urology Department Icon.webp'
import Cardiology_Department   from './Department/Cardiology Department Icon.webp'
import Obstetrics_and_Gynecology   from './Department/Obstetrics and Gynecology Icon.webp'
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
const departmentData = [
  {
    iconUrl:  General_Surgery,
    title: ' General Surgery',
    subTitle:
      ' This department handles surgical treatment for conditions like appendicitis, hernias, and abdominal injuries with expert care.',
    href: '/departments/department-details',
  },
  {
     iconUrl:  Paediatric_Care,
    title: 'Paediatric Care',
    subTitle:
      'This department offers medical services for infants, children, and adolescents including immunization and growth monitoring.',
    href: '/departments/department-details',
  },
  {
     iconUrl:  Burn_Care_Unit,
    title: 'Burn Care Unit',
    subTitle:
      'This department provides specialized treatment for minor to severe burns using wound management, pain relief, and skin care.',
    href: '/departments/department-details',
  },
  {
    iconUrl:  Trauma_Department,
    title: 'Trauma Department',
    subTitle:
      ' This department treats emergency injuries caused by accidents or violence and offers life-saving procedures and fast care.',
    href: '/departments/department-details',
  },
  {
    iconUrl:  Road_Accident_Care,
    title: 'Road Accident Care',
    subTitle:
      ' This department specializes in handling victims of road accidents with quick diagnostics, trauma care, and surgical response.',
    href: '/departments/department-details',
  },
  {
     iconUrl:  Medical_Management,
    title: 'Medical Management',
    subTitle:
      'This department manages chronic and acute conditions such as diabetes, hypertension, and infections through expert physicians.',
    href: '/departments/department-details',
  },
  {
    iconUrl:  Urology_Department,
    title: ' Urology Department',
    subTitle:
      ' This department deals with urinary tract and male reproductive issues, including kidney stones, infections, and prostate care.',
    href: '/departments/department-details',
  },
  {
    iconUrl:  Cardiology_Department,
    title: ' Cardiology Department',
    subTitle:
      ' This department treats heart conditions including hypertension, heart attacks, and arrhythmias with advanced cardiac care.',
    href: '/departments/department-details',
  },

 {
      iconUrl:  Obstetrics_and_Gynecology,
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

    <WhatsAppFloatingButton/>
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
