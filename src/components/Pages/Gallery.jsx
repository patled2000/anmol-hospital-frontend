import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import Section from '../Section';
import GallerySectionStyle2 from '../Section/GallerySection/GallerySectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import imageg1 from './Gallery_image/gl1.jpeg'
import imageg2 from './Gallery_image/gl2.jpeg'
import imageg3 from './Gallery_image/gl3.jpeg'
import imageg4 from './Gallery_image/gl4.jpeg'
import imageg5 from './Gallery_image/gl5.jpeg'
import imageg6 from './Gallery_image/gl6.jpeg'
import imageg7 from './Gallery_image/gl7.jpeg'
import imageg8 from './Gallery_image/gl8.jpeg'
import imageg9 from './Gallery_image/gl9.jpeg'
import imageg10 from './Gallery_image/gl10.jpeg'
import imageg11 from './Gallery_image/gl11.jpeg'
import imageg12 from './Gallery_image/gl12.jpeg'
import imageg13 from './Gallery_image/gl13.jpeg'
import imageg14 from './Gallery_image/gl14.jpeg'
import imageg15 from './Gallery_image/gl5.jpeg'
import imageg16 from './Gallery_image/gl6.jpeg'

const galleryData = [
  { imgUrl: imageg1 },
  { imgUrl: imageg2 },
  { imgUrl: imageg3 },
  { imgUrl: imageg4 },
  { imgUrl: imageg5 },
  { imgUrl: imageg6 },
  { imgUrl: imageg7 },
   { imgUrl: imageg8 },
  { imgUrl: imageg9 },
  { imgUrl: imageg10 },
  { imgUrl: imageg11 },
  { imgUrl: imageg12 },
  { imgUrl: imageg13 },
  { imgUrl: imageg14 },
  { imgUrl: imageg15 },
  { imgUrl: imageg16 },
];

export default function Gallery() {
  pageTitle('Gallery');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={imageg10}
        title="Welcome to <br>ProHealth Gallery"
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
