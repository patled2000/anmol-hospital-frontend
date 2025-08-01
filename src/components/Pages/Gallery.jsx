import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import Section from '../Section';
import GallerySectionStyle2 from '../Section/GallerySection/GallerySectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';

import Hospital_Building1 from './Gallery_image/HospitalBuilding1.webp';
import Hospital_Building2 from './Gallery_image/HospitalBuilding2.webp';
import Hospital_Building3 from './Gallery_image/HospitalBuilding3.webp';
import Hospital_Wards from './Gallery_image/HospitalWards.webp';
 import Hospital_Ward1 from './Gallery_image/HospitalWards1.webp';
 import Hospital_Ward2 from './Gallery_image/HospitalWards2.webp';
 import Hospital_Ward3 from './Gallery_image/hospitalwards3.webp';
 import Hospital_Ward4 from './Gallery_image/HospitalWards4.webp';
 import Hospital_Ward5 from './Gallery_image/HospitalWards5.webp';
 import Hospital_Pharmacy from './Gallery_image/HospitalPharmacy.webp';
import Hospital_Reception from './Gallery_image/HospitalReception.webp';
import MajorSpecific from './Gallery_image/MajorSpecificWards.webp';
import MajorSpecific1 from './Gallery_image/MajorSpecificWards1.webp';
import MajorSpecific2 from './Gallery_image/MajorSpecificWards2.webp';
import TestLaboratory from './Gallery_image/TestLaboratory.webp';
import TestLaboratory1 from './Gallery_image/TestLaboratory1.webp';
import TestLaboratory2 from './Gallery_image/TestLaboratory2.webp';
import TestLaboratory3 from './Gallery_image/TestLaboratory3.webp';
import aboutbanner from './About_page_image/AboutPage.webp'
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
 
 
 

 const galleryData = [
  { imgUrl: Hospital_Building1 , category: 'Hospital Bullding' },
  { imgUrl: Hospital_Building2 , category: 'Hospital Bullding' },
  { imgUrl: Hospital_Building3, category: 'Hospital Bullding' },
  { imgUrl: Hospital_Pharmacy, category: 'Hospital Pharmacy' },
  { imgUrl: Hospital_Reception, category: 'Hospital Reception' },
  { imgUrl: MajorSpecific, category: 'Major Specific Wards' },
  { imgUrl: MajorSpecific1, category: 'Major Specific Wards' },
  { imgUrl: MajorSpecific2, category: 'Major Specific Wards' },
  { imgUrl: TestLaboratory, category: 'Test Laboratory' },
  { imgUrl: TestLaboratory1, category: 'Test Laboratory' },
  { imgUrl: TestLaboratory2, category: 'Test Laboratory' },
  { imgUrl: TestLaboratory3, category: 'Test Laboratory' },
  { imgUrl: Hospital_Wards , category: 'Hospital Wards' },
  { imgUrl: Hospital_Ward1 , category: 'Hospital Wards' },
  { imgUrl: Hospital_Ward2 , category: 'Hospital Wards' },
  { imgUrl: Hospital_Ward3 , category: 'Hospital Wards' },
  { imgUrl: Hospital_Ward4 , category: 'Hospital Wards' },
  { imgUrl: Hospital_Ward5 , category: 'Hospital Wards' },

];


export default function Gallery() {
  pageTitle('Gallery');
  return (
    <>

    <WhatsAppFloatingButton/>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={aboutbanner}
        title="Welcome to <br>Anmol Hospital Gallery"
        subTitle="The special moment of our hospital"
      />
      <Section
        topMd={170}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySectionStyle2 data={galleryData} />
      </Section>
    {/**  <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="images/doctors/banner_img_3.png"
        />
      </Section>   */} 
    </>
  );
}
