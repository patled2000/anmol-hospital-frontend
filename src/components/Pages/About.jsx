import React from 'react';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import AboutSectionStyle5 from '../Section/AboutSection/AboutSectionStyle5';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import Section from '../Section';
import FeaturesSectionStyle2 from '../Section/FeaturesSection/FeaturesSectionStyle2';
import FunFactSection from '../Section/FunFactSection';
import TeamSection from '../Section/TeamSection';
import AwardSectionStyle2 from '../Section/AwardSection/AwardSectionStyle2';
import FounderMessage from './FounderMessage';
import { pageTitle } from '../../helpers/PageTitle';
import about_page from './image/AboutPage.png'
import aboutSection from './image/aboutsection.png';
import waychoosesection from './image/wychooseSection.png'
const departmentData = [
  {
    title: 'Diagnostic testing',
    subTitle:
      'Blood tests, imaging studies, and other tests to diagnose health conditions',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Rehabilitation services',
    subTitle:
      'Physical therapy, occupational therapy, and other services to help patients recover from injuries',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Preventive care',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Treatment for acute and chronic conditions',
    subTitle:
      'Medication management, disease management, and other treatments to improve health outcomes',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Mental health services',
    subTitle:
      'Counseling, therapy, and other services to help patients manage mental health conditions',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
];

const featureListData = [
  {
    title: 'Experienced Medical Professionals',
    subTitle:
      'Our team includes experienced doctors, nurses, <br />and other healthcare professionals who are <br />dedicated to providing the best possible care to <br />our patients.',
    iconUrl: 'images/icons/professional.svg',
  },
  {
    title: 'Comprehensive <br />Services',
    subTitle:
      'We offer a wide range of healthcare services, <br />from preventive care to specialized treatment <br />for complex conditions.',
    iconUrl: 'images/icons/comprehensive.svg',
  },
  {
    title: 'Patient-centered <br />Approach',
    subTitle:
      'We believe in treating each patient as an <br />individual, and we take the time to understand <br />your unique health needs and concerns.',
    iconUrl: 'images/icons/patient.svg',
  },
  {
    title: 'State-of-the-art <br />Facilities',
    subTitle:
      'Our healthcare center is equipped with the <br />latest technology and equipment to provide our <br />patients with the most advanced care possible.',
    iconUrl: 'images/icons/facilities.svg',
  },
];

const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

const teamData = [
  {
    imgUrl: 'images/about/doctor_1.png',
    name: 'Dr. James Lee, MD',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_2.png',
    name: 'Dr. John Smith, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'With expertise in treating acute illnesses and injuries in medicine physician',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'images/about/doctor_3.png',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];


const awardData = [
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Malcolm Baldrige National Quality Award',
  },
  { iconUrl: '/images/icons/award.svg', title: 'HIMSS Davies Award' },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Healthgrades National’s Best Hospital',
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Joint Commission Gold Seal of Approval',
  },
];

export default function About() {
  pageTitle('About');
  return (
    <>
      
      <BannerSectionStyle3
            bgUrl={about_page}
            imgUrl={about_page}
            title="Welcome to <br />Anmol Hospital"
            subTitle="Your care in our hand "
          />

       <Section topMd={170} topLg={120} topXl={100}>
        <AboutSectionStyle5
          imgUrl={aboutSection}
          titleUp="ABOUT US"
          title="Anmol Hospital "
          subTitle="Founded by Dr. Jitendra Awasthi and Dr. Shivam Mishra, Anmol Hospital is built on a single promise — care that heals beyond treatment. Since its inception, Anmol Hospital has grown into a trusted name for compassionate and quality healthcare. With a patient-first approach, we provide advanced medical services including General Surgery, Gynaecology, Paediatrics, Emergency & Trauma Care, Cardiology, and more — all supported by modern diagnostic labs and a dedicated medical team. "
          supportTitle="24/7 Support"
          supportSubTitle="We are available when you want"
        />
      </Section>
      <Section> 
     <FounderMessage/>
     </Section>

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={waychoosesection}
          data={featureListData}
        />
      </Section>
   {/**    <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
   </Section>    */}
        {/**   <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>   */}
   {/**    <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>    */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
   {/**   <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>   */} 
    </>
  );
}
