import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Home/Footer'
import HomePage from './Component/Home/HomePage';
import SEOMarketingPage from './Component/ServicesPage/SEOMarketingPage';
import PPCAdvertisingPage from './Component/ServicesPage/PPCAdvertisingPage';
import SocialMediaPage from './Component/ServicesPage/SocialMediaPage';
import EmailMarketingPage from './Component/ServicesPage/EmailMarketingPage';
import ContentMarketingPage from './Component/ServicesPage/ContentMarketingPage';
import MobileAppDevelopmentPage from './Component/ServicesPage/MobileAppDevelopmentPage';
import WebDevelopmentComponent from './Component/ServicesPage/WebDevelopmentComponent';
import SoftwareDevPage from './Component/ServicesPage/SoftwareDevPage';
import AboutPage from './Component/About/About';
import DigitalMarketingBlog from './Component/About/DigitalMarketingBlog';
import PortfolioPage from './Component/About/PortfolioPage';
import ContactPage from './Component/About/ContactPage';
import AnalyticsReportingPage from './Component/ServicesPage/AnalyticsReportingPage';
import DigitalMediaPlanning from './Component/ServicesPage/DigitalMediaPlanning';
import DigitalDesign from './Component/ServicesPage/DigitalDesign';
import WebsiteMaintanence from './Component/ServicesPage/WebsiteMaintanence';
import UiUx from './Component/ServicesPage/UiUx';
import Graphic from './Component/ServicesPage/Graphic';
import Branding from './Component/ServicesPage/Branding';
import Photography from './Component/ServicesPage/Photography';
import ScrollToTop from './Component/About/ScrollToTop';
import ThankYou from './Component/About/ThankYou';
const Approutes = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/seo" element={<SEOMarketingPage />} />
          <Route path="/services/ppc" element={<PPCAdvertisingPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/digital-media" element={<DigitalMediaPlanning />} />
          <Route path="/services/analysis" element={<EmailMarketingPage />} />
          <Route path="/services/content" element={<ContentMarketingPage />} />
          <Route path="/services/analytics" element={<AnalyticsReportingPage />} />
          <Route path="/services/web" element={<WebDevelopmentComponent />} />
          <Route path="/services/video-content" element={<DigitalDesign />} />
          <Route path="/services/uiux" element={<UiUx />} />
          <Route path="/services/graphic" element={<Graphic />} />
              <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/mobile" element={<MobileAppDevelopmentPage />} />
          <Route path="/services/software" element={<SoftwareDevPage />} />
          <Route path="/services/maintenance" element={<WebsiteMaintanence />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<DigitalMarketingBlog />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default Approutes
