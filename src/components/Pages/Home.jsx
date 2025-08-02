import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import TestimonialSectionStyle4 from '../Section/TestimonialSection/TestimonialSectionStyle4';
  import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
 import DepartmentSection from '../Section/DepartmentSection';

import FaqSectionStyle4 from '../Section/FaqSection/FaqSectionStyle4';
import { pageTitle } from '../../helpers/PageTitle';
import { Link } from 'react-router-dom';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import HeroSlider from './HeroSlider';
import FounderMessage from './FounderMessage';
import DoctorSlider from './DoctorSlider';
import FunFactSection from '../Section/FunFactSection';
import InsurancePartnersSection from './InsurancePartnersSection';
import FacilitiesSection from './FacilitiesSection';
import Specialties from './Specialties';
import SpecialtySlider from './Specialties';
import HospitalIntroSection from './HospitalIntroSection';
import DirectorsSection from './DirectorsSection';
 
 
 
import TeamGroupSection from './TeamGroupSection';
import sohanTestimonial from './testimonual_image/sohanTestimonial.png';
import deelipTestimonial from './testimonual_image/deelipTestimonial.png';


import mahesh from './testimonual_image/Mahesh varma.png';
import priya from './testimonual_image/priya.png';
import sophia from './testimonual_image/sophia.png';
import Ankit from './testimonual_image/Ankit.png';
import faq1 from './testimonual_image/1.png';
import faq2 from './testimonual_image/2.png';
import faq3 from './testimonual_image/3.png';
import faq4 from './testimonual_image/4.png';
import faq5 from './testimonual_image/5.png';
import Faqimage from './Home_page_image/Faq.webp';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
 

 
 
const testimonialData = [
  {
    text: '" My mother was treated for a heart condition here, and the cardiology team was highly experienced, and the staff was extremely patient and supportive. If you are looking for trusted cardiology care in Indore, I highly recommend them ”',
 
    ratingNumber: '5',
    avatarImgUrl: sohanTestimonial,
    avatarName: 'Sohan Agrwal',
    avatarDesignation: 'Indore',
  },
  {
    text: '" My mother had a heart issue that scared us, but the cardiology team at Anmol Hospital made us feel safe from the start. The doctors were calm, kind, and caring, truly trustworthy heart care in Indore. ” ' ,
    ratingNumber: '5',
    avatarImgUrl: deelipTestimonial,
    avatarName: 'Deelip Wadhwani',
    avatarDesignation: 'Dewas',
  },
  {
    text: '“ After my father was injured in a road accident, the emergency team at Anmol Hospital responded within minutes. Their trauma care was life-saving. I can confidently say this is one of the best emergency care hospitals in Indore. ”',
    ratingNumber: '5',
    avatarImgUrl: mahesh,
    avatarName: 'Mahesh varma',
    avatarDesignation: 'Bhopal',
  },
  {
    text: '" We brought our 5-year-old to Anmol Hospital for a high fever. The paediatricians were gentle, cheerful, and kept her calm. It’s rare to find such dedicated childcare in Indore. Highly recommended! ”',
    ratingNumber: '5',
    avatarImgUrl:  sophia,
    avatarName: 'Sophia Tiwari',
    avatarDesignation: 'Indore',
  },
  {
    text: '" I had appendix surgery and was anxious, but the surgical team at Anmol Hospital made me feel safe. The doctors explained everything clearly, and my recovery was smooth. Highly recommend their surgical care in Indore. ”',
    ratingNumber: '5',
    avatarImgUrl: priya,
    avatarName: 'Priya Patidar',
    avatarDesignation: 'Ujjain',
  },
  {
    text: '“ My son was admitted for a high fever and the pediatric care was top-notch. The doctors explained everything clearly and kept us informed. This hospital is a blessing for parents in Indore. ”',
    ratingNumber: '5',
    avatarImgUrl: Ankit,
    avatarName: 'Ankit Nagar',
    avatarDesignation: 'Indore',
  },


 
];

const faqData = [
  {
    title: ' How can I book an appointment with a doctor?',
    content:
      ' Patient or his/her attendant can get the appointment by calling us at number 0731 3594 048 or can also come to appointment-cum-registration counters in the hospital. ',
  },
  {
    title: ' Do you provide emergency services?',
    content:
      ' Yes, our emergency department operates 24×7 with trained doctors, nurses, and advanced equipment. For emergencies, please contact us at [ 0731 3594 048 ] or come directly to the Emergency entrance.',
  },
  {
    title: ' Do you accept health insurance?',
    content:
      'Yes, we are partnered with several leading health insurance providers. To know if your insurance is accepted, please refer to our Insurance Partners section or contact our billing department for assistance. ',
  },
  {
    title: ' What are the services available at Anmol Hospital?',
    content:
      ' At Anmol Hospital, we offer a wide range of medical services to provide complete and quality care to our patients. Our key specialties include: [ General Surgery, Obstetrics & Gynaecology, Medical Management of Chronic and Acute Conditions, Trauma Care & Emergency Services, Road Accident Injury Treatment, Burn Management & Recovery, Urology Services, Cardiology (Heart Care), Paediatric Care (Children’s Health) ] Our team of experienced doctors and specialists ensures personalized treatment and round-the-clock support for every patient.',
  },
   {
    title: ' What are the visiting hours for patients relatives?' ,
    content: ' At Anmol Hospital, we understand the importance of family during recovery. To ensure a balance between patient rest and family support, our visiting hours are: Morning: 10:00 AM – 12:00 PM , Evening: 5:00 PM – 7:00 PM. We kindly request all visitors to follow these timings strictly to maintain a peaceful healing environment for all patients.'
  }, 
  
  
];


 
 

export default function Home() {
  pageTitle('Home');
  return (
    <>
    <WhatsAppFloatingButton/>
      <HeroSlider/>
      <HospitalIntroSection/>
        <SpecialtySlider/>
          <FacilitiesSection/>
       <InsurancePartnersSection/>
       <DirectorsSection/>
       <DoctorSlider/>
 
      <Section
              topMd={190}
              topLg={150}
              topXl={105}
              bottomMd={200}
              bottomLg={150}
              bottomXl={110}
            >
              <TestimonialSectionStyle4
                sectionTitle=" Healing journeys shared by those who trusted Anmol Hospital"
                sectionTitleUp="Patient Testimonials"
                avatarListTitle="150+ patients are reviews about Anmol hospital"
              
                avatarList={[
                 { imgUrl:  faq1 },
                  { imgUrl:  faq2 },
                  { imgUrl:  faq3 },
                  { imgUrl:  faq4},
                  { imgUrl:  faq5 },
                ]}
                data={testimonialData}
              />
            </Section>
              <Section topMd={185} topLg={145} topXl={105}>
                    <FaqSectionStyle4
                      sectionTitle="Frequently Asked <br />Questions"
                      data={faqData}
                      faqImgUrl= {Faqimage}
                      spiningImgUrl="/images/home_1/about_mini.svg"
                    />
                  </Section>          
            <TeamGroupSection/>
            
    </>
  );
}
