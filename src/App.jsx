import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from './Components/Footer';  // Import Footer component
import Navbar from './Components/Navbar';
import DOCMagnet from './Pages/DOCMagnet';
import CoinCraft from './Pages/CoinCraft';
import Service_Home from './Pages/Service_Home';
import AI_Consultancy from './Pages/AI_Consultancy';
import Devtrain_Index from './Pages/Devtrain_Index';
import Cloud_Integration from './Pages/Cloud_Integration';
import Mobile_Application from './Pages/Mobile_Application';
import Digital_Marketing from './Pages/Digital_Marketing';
import ECommerce from './Pages/ECommerce';
import Web_Application from './Pages/Web_Application';
import Sementic_SEO from './Pages/Sementic_SEO';
import WordPress from './Pages/WordPress';
import OrderManagement from './Pages/OMS';
import FlashTaxi from './Pages/FlashTaxi';
import GreenEats from './Pages/GreenEats';
import ScrollToTop from './Components/ScrollToTop';
import PortfolioSections from './Pages/PortfolioSections';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
import NotFoundPage from './Pages/NotFoundPage';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
import Tech_Trainings from './Pages/Tech_Trainings';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Devtrain_Index />} />
          <Route path="/Services" element={<Service_Home />} />
          <Route path="/AI_Consultancy" element={<AI_Consultancy />} />
          <Route path="/Cloud_Integration" element={<Cloud_Integration />} />
          <Route path="/MobileApplicationDevelopment" element={<Mobile_Application />} />
          <Route path="/DigitalMarketing" element={<Digital_Marketing />} />
          <Route path="/ECommerce" element={<ECommerce />} />
          <Route path="/WebApplication" element={<Web_Application />} />
          <Route path="/SEO" element={<Sementic_SEO />} />
          <Route path="/WordPress" element={<WordPress />} />
          <Route path="/TechTrainings" element={<Tech_Trainings />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/CoinCraft" element={<CoinCraft />} />
          <Route path="/DocMagnet" element={<DOCMagnet />} />
          <Route path="/OrderManagement" element={<OrderManagement />} />
          <Route path="/FlashTaxi" element={<FlashTaxi />} />
          <Route path="/GreenEats" element={<GreenEats />} />
          <Route path="/PortfolioSections" element={<PortfolioSections />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Trainings" element={<Tech_Trainings />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
