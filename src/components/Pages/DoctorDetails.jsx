import React from 'react';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import Section from '../Section';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import DoctorDetailsSection from '../Section/DoctorDetailsSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
import TermsAndConditions from './TermsAndConditions';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';

export default function DoctorDetails() {
  pageTitle(' Terms & Conditions');
  return (
    <>
<WhatsAppFloatingButton/>
    <TermsAndConditions/>
       
    </>
  );
}
