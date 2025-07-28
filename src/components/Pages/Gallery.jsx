import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import Section from '../Section';
import GallerySectionStyle2 from '../Section/GallerySection/GallerySectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import imageg1 from './Gallery_image/Hospital_Building.jpeg'
import imageg2 from './Gallery_image/Hospital_Wards1.jpeg'
import imageg3 from './Gallery_image/Hospital_Wards2.jpeg'
import imageg4 from './Gallery_image/Hospital_Wards3.jpeg'
import imageg5 from './Gallery_image/Hospital_Wards4.jpeg'
import imageg6 from './Gallery_image/Hospital_Wards5.jpeg'
import imageg7 from './Gallery_image/Hospital_Wards6.jpeg'
import imageg8 from './Gallery_image/TestLaboratory1.jpeg'
import imageg9 from './Gallery_image/TestLaboratory2.jpeg'
import imageg10 from './Gallery_image/TestLaboratory3.jpeg'
import imageg11 from './Gallery_image/TestLaboratory5.jpeg'
 

 const galleryData = [
  { imgUrl: imageg1, category: 'Hospital Bullding' },
  { imgUrl: imageg2, category: 'Hospital Wards ' },
  { imgUrl: imageg3, category: 'Hospital Wards ' },
  { imgUrl: imageg4, category: 'Hospital Wards ' },
  { imgUrl: imageg5, category: 'Hospital Wards ' },
  { imgUrl: imageg6, category: 'Hospital Wards ' },
  { imgUrl: imageg7, category: 'Hospital Wards ' },
  { imgUrl: imageg8, category: 'Test Laboratory' },
  { imgUrl: imageg9, category: 'Test Laboratory' },
  { imgUrl: imageg10, category: 'Test Laboratory' },
  { imgUrl: imageg11, category: 'Test Laboratory' },
  
];


export default function Gallery() {
  pageTitle('Gallery');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={imageg10}
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
