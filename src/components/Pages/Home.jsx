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
const faqData = [
  {
    title: 'What services does ProHealth offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with ProHealth?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
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
     iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Obstetrics and Gynaecology',
      iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Medical Management',
       iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Trauma Care',
     iconUrl: '/images/departments/slider2.jpeg',
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
     iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
  {
    title: 'Paediatric Care',
     iconUrl: '/images/departments/slider2.jpeg',
    href: '/departments/department-details',
  },
];


const testimonialData = [
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

const faqdata = [
  {
    title: 'What services does ProHealth offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with ProHealth?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];


const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

 

export default function Home() {
  pageTitle('Home');
  return (
    <>
      <HeroSlider/>
      <section> 
      <FunFactSection  bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}/>
      <FounderMessage/>
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
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>
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
                avatarListTitle="150+ patients are reviews about ProHealth"
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


            <InsurancePartnersSection/>
      {/* End Testimonial */}
      {/* Start Banner Section */}
    {/**   <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>   */}
{/** <section> 
 <BannerSectionStyle3
  bgUrl="/images/about/banner_bg.svg"
  title="Welcome to <br />ProHealth Medical & Healthcare Center"
  subTitle="Your Partner in Health and Wellness"
  btnText="Check Coverage"
  btnUrl="/insurance"
/>
</section>   */}
      
{/** 
             <Section topMd={185} topLg={145} topXl={105}>
                    <FaqSectionStyle4
                      sectionTitle="Frequently Asked <br />Questions"
                      data={faqData}
                      faqImgUrl="/images/home_4/faq_img.jpeg"
                      spiningImgUrl="/images/home_1/about_mini.svg"
                    />
                  </Section>

                   <Section>
                          <AppointmentSectionStyle2
                            bgUrl="/images/home_2/appointment_bg.svg"
                            imgUrl="/images/home_2/appointment_img.png"
                            sectionTitle="Appointment"
                            sectionTitleUp="BOOK AN"
                          />
                        </Section>   */}

      {/* End Banner Section */}
     
     
    </>
  );
}
