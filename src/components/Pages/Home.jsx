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
import General1 from './image/General surgery.png'
import Obstetrics from './image/Obstetrics and gynaecology.png'
import Medical_management from './image/Medical management.png'
import Trauma from './image/Trauma.png'
import Cardiology from './image/Cardiology.png'
import Paediatric_care  from './image/Paediatric care.png'
import TeamGroupSection from './TeamGroupSection';
import sohanTestimonial from './testimonual_image/Untitled design.png'
import deelipTestimonial from './testimonual_image/Untitled design (1).png'
import hospital from './image/a7cbedf730a5dcc233171380bd84a9f6.jpg'
import Faqimage from './image/fuq.png'
import mahesh from './image/Mahesh varma.png'
import priya from './image/priya.png'
import sophia from './image/sophia.png'
import Ankit from './image/Ankit.png'
import faq1 from './image/1.png'
import faq2 from './image/2.png'
import faq3 from './image/3.png'
import faq4 from './image/4.png'
import faq5 from './image/5.png'

 
const brandData = [
    { imgUrl: '/images/insurance/HDFC.png', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/iffco.png', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/Sbi.webp', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/Mediassist.jpg', imgAlt: 'Brand' },
  
  
];
 
const testimonialData = [
  {
    text: '" My mother was treated for a heart condition here, and the cardiology team was highly experienced, and the staff was extremely patient and supportive. If your looking for trusted cardiology care in Indore, I highly recommend them ”',
 
    ratingNumber: '5',
    avatarImgUrl: sohanTestimonial,
    avatarName: 'Sohan Agrwal',
    avatarDesignation: 'Indore',
  },
  {
    text: '" My mother had a heart issue that really scared us, but the cardiology team at Anmol Hospital made us feel safe from the very first moment. The doctors were calm, kind, and explained everything so patiently. They treated her like family. If your in Indore and need heart care you can truly trust this hospital ” ' ,
    ratingNumber: '5',
    avatarImgUrl: deelipTestimonial,
    avatarName: 'Deelip Wadhwani',
    avatarDesignation: 'Dewas',
  },
  {
    text: '“ After my father was injured in a road accident, the emergency team at Anmol Hospital responded within minutes. Their trauma care was life-saving. I can confidently say this is one of the best emergency care hospitals in Indore.”',
    ratingNumber: '5',
    avatarImgUrl: mahesh,
    avatarName: 'Mahesh varma',
    avatarDesignation: 'Bhopal',
  },
  {
    text: '" We brought our 5-year-old here for a high fever that wouldnt go down. The paediatricians were gentle, cheerful, and kept our child calm. They treated her like their own. Its challenging to find such dedicated childcare in Indore. I would totally recommend Anmol Hospital.”',
    ratingNumber: '5',
    avatarImgUrl:  sophia,
    avatarName: 'Sophia Tiwari',
    avatarDesignation: 'Indore',
  },
  {
    text: '" I had to undergo appendix surgery and was really anxious, but the surgical team at Anmol Hospital made me feel completely safe. The doctors explained the whole process and the recovery was smoother than I expected. I’d definitely recommend their surgical care to anyone in Indore.”',
    ratingNumber: '5',
    avatarImgUrl: priya,
    avatarName: 'Priya Patidar',
    avatarDesignation: 'Ujjain',
  },
  {
    text: '“ My son was admitted for a high fever and the pediatric care was top-notch. The doctors explained everything clearly and kept us informed. This hospital is a blessing for parents in Indore.”',
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
      ' You can book an appointment online through our website’s Book Appointment page, call our reception desk, or visit the hospital directly. For your convenience, we also offer appointment booking via WhatsApp and walk-ins, subject to availability. ',
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
    content: ' At Anmol Hospital, we understand the importance of family during recovery. To ensure a balance between patient rest and family support, our visiting hours are: 🕘 Morning: 10:00 AM – 12:00 PM , Evening: 5:00 PM – 7:00 PM We kindly request all visitors to follow these timings strictly to maintain a peaceful healing environment for all patients.'
  }, 
  
  
];


 
 

export default function Home() {
  pageTitle('Home');
  return (
    <>
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
