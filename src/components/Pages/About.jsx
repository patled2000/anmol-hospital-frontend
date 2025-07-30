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
import about_page from './About_page_image/AboutPage.png'
import aboutSection from './About_page_image/aboutsection.webp';
import waychoosesection from './About_page_image/why_choose_us.png'
 import Supportive_Professionals from './About_page_image/Untitled design (19).png'
 import Medical_Services from './About_page_image/2.png'
 import Patient_Centric_Approach from './About_page_image/Comprehensive Services Icon.png'
 import Personalized_Attention from './About_page_image/Personalized Attention.png'

const featureListData = [
  {
    title: 'Experienced and Supportive Professionals',
    subTitle:
      ' Our hospital is home to a team of renowned doctors, skilled surgeons, and dedicated healthcare staff. With years of clinical expertise and a commitment to continued learning, we ensure every patient receives the highest standard of medical care.',
    iconUrl:  Supportive_Professionals,
  },
  {
    title: 'Wide Range of Medical Services',
    subTitle:
      ' From routine health check-ups and diagnostics to specialized treatments and surgeries, we offer a full spectrum of medical services across multiple departments  all designed to provide seamless, integrated care under one roof. ',
    iconUrl: Medical_Services,
  },
  {
    title: ' Compassionate, Patient-Centric Approach',
    subTitle:
      ' We believe healing begins with empathy. Our team takes the time to listen, understand, and involve you in your care decisions. Every treatment plan is customized to meet your unique needs, ensuring comfort, dignity, and trust at every step.',
   iconUrl: Patient_Centric_Approach ,
  },
  {
    title: 'Personalized Attention',
    subTitle:
      ' We understand that every patient’s needs are different. From consultation to recovery, our team is here to guide and support you with one-on-one attention and clear communication.',
    iconUrl: Personalized_Attention  ,
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
          sectionTitle=" Accreditations & Recognitions"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
  
    </>
  );
}
