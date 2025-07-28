import { Route, Routes, useLocation } from 'react-router-dom';
 
// index.js ya App.js ke top me:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';


 
 
import Home from './components/Pages/Home';
  
import About from './components/Pages/About';
import Doctors from './components/Pages/Doctors';
 
import Departments from './components/Pages/Departments';
import DepartmentDetails from './components/Pages/DepartmentDetails';
 
import DoctorDetails from './components/Pages/DoctorDetails';
import PricingPlan from './components/Pages/PricingPlan';
import Gallery from './components/Pages/Gallery';
 
import Contact from './components/Pages/Contact';
import { useEffect } from 'react';
import ErrorPage from './components/Pages/ErrorPage';
 
 
 
 
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import TeamSectionStyle4 from './components/Section/TeamSection/TeamSectionStyle4';
import Layout4 from './components/Layout/Layout4';




function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    
    <Routes>
     
      <Route path="/" element={<Layout4 />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:doctorId" element={<DoctorDetails />} />
     
     {/**   <Route path="appointments" element={<Appointments />} />   */}
        
        <Route path="departments" element={<Departments />} />
        <Route path='TestimonialSection' element={<TeamSectionStyle4/>}/>
        <Route
          path="departments/:departmentId"
          element={<DepartmentDetails />}
        />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="gallery" element={<Gallery />} />
       
        <Route path="contact" element={<Contact />} />
        <Route path='appointment' element={<AppointmentForm/>} />
      </Route>
  {/**     <Route element={<Layout2 />}>
        <Route path="home-v2" element={<HomeStyle2 />} />
        <Route path="home-v6" element={<HomeStyle6 />} />
      </Route> */}
  {/**     <Route path="home-v3" element={<Layout3 />}>
        <Route index element={<HomeStyle3 />} />
      </Route>  */}
  {/**     <Route path="home-v4" element={<Layout4 />}>
        <Route index element={<HomeStyle4 />} />
      </Route>   */}
  {/**     <Route path="home-v5" element={<Layout5 />}>
        <Route index element={<HomeStyle5 />} />
      </Route>    */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>  
  );
}

export default App;
