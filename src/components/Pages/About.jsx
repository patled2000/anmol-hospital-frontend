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
  
    </>
  );
}
