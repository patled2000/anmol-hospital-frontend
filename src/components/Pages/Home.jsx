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

const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Excellence',
    subTitle:
      'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Integrity',
    subTitle: `We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Teamwork',
    subTitle:
      'We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.',
  },
];
const brandData = [
    { imgUrl: '/images/insurance/HDFC.png', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/iffco.png', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/Sbi.webp', imgAlt: 'Brand' },
  { imgUrl: '/images/insurance/Mediassist.jpg', imgAlt: 'Brand' },
  
  
];
 
 
const awardData = [
  {
    title: 'Malcolm Baldrige National Quality Award',
    subTitle:
      'This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'HIMSS Davies Award',
    subTitle:
      'This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Healthgrades National’s Best Hospital',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Joint Commission Gold Seal of Approval',
    subTitle:
      'This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: 'images/icons/award.svg',
  },
];
 const departmentData = [
  {
    title: 'General Surgery',
     iconUrl:General1,
    href: '/departments/department-details',
  },
  {
    title: 'Obstetrics ',
      iconUrl: Obstetrics ,
    href: '/departments/department-details',
  },
  {
    title: 'Medical Management',
       iconUrl: Medical_management,
    href: '/departments/department-details',
  },
  {
    title: 'Trauma Care',
     iconUrl: Trauma,
    href: '/departments/department-details',
  },
  {
    title: 'Road Accident Unit',
      iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Burn Unit',
      iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Urology Department',
     iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Cardiology Department',
     iconUrl: Cardiology,
    href: '/departments/department-details',
  },
  {
    title: 'Paediatric Care',
     iconUrl: Paediatric_care,
    href: '/departments/department-details',
  },
];


const testimonialData = [
  {
    text: '"My mother was treated for a heart condition here, and the cardiology team was highly experienced, and the staff was extremely patient and supportive. If your looking for trusted cardiology care in Indore, I highly recommend them ”',
 
    ratingNumber: '5',
    avatarImgUrl: sohanTestimonial,
    avatarName: 'Sohan Agrwal',
    avatarDesignation: 'INDORE',
  },
  {
    text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: '5',
    avatarImgUrl: deelipTestimonial,
    avatarName: 'Deelip Wadhwani',
    avatarDesignation: 'Dewas',
  },
  {
    text: '“I had to undergo appendix surgery and was really anxious, but the surgical team at Anmol Hospital made me feel completely safe. The doctors explained the whole process and the recovery was smoother than I expected. I’d definitely recommend their surgical care to anyone in Indore”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_4.png',
    avatarName: 'Mahesh varma',
    avatarDesignation: 'bhopal',
  },
  {
    text: '"I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_2.png',
    avatarName: 'Sophia Torres',
    avatarDesignation: 'New York, USA',
  },
  {
    text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_3.png',
    avatarName: 'John Dupont',
    avatarDesignation: 'Manhattan, USA',
  },
  {
    text: '“I had a great experience with ProHealth. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/home_4/avatar_4.png',
    avatarName: 'Allen Duarte',
    avatarDesignation: 'California, USA',
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


const funFactData = [
  { number: '6+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5K+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
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


      
      
     
      <section> 
    {/**  <FunFactSection  bgUrl="images/about/fun_fact_bg.jpeg"  
          data={funFactData}/>   
    {/**    <FounderMessage/>  */}
      </section>
      
 {/**       
<Section>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="PRO HEALTH"
          featureList={[
            {
              featureListTitle:
                  
                   " ProHealth is a team of experienced medical professionals"  ,
                   
        
              featureListSubTitle:
                'Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.',
            },
          ]}
        />
      </Section>   */}
      {/* End About Section */}
      {/* Start Departments Section */}
    {/**   <Section topMd={185} topLg={150} topXl={80}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl={hospital}
          data={departmentData}
        />
      </Section>   */}
       <DirectorsSection/>
       <DoctorSlider/>

      {/* End Departments Section */}
     
      {/* Start Testimonial */}
      <Section
              topMd={190}
              topLg={150}
              topXl={105}
              bottomMd={200}
              bottomLg={150}
              bottomXl={110}
            >
              <TestimonialSectionStyle4
                sectionTitle="Discover the Stories of Health and Healing"
                sectionTitleUp="WHAT OUR PATIENTS SAY"
                avatarListTitle="150+ patients are reviews about Anmol hospital"
                avatarList={[
                  { imgUrl: '/images/home_4/avatar_1.png' },
                  { imgUrl: '/images/home_4/avatar_2.png' },
                  { imgUrl: '/images/home_4/avatar_3.png' },
                  { imgUrl: '/images/home_4/avatar_4.png' },
                  { imgUrl: '/images/home_4/avatar_5.png' },
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
