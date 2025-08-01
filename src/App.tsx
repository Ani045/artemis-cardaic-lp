import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AssessmentQuiz from './components/AssessmentQuiz';
import ServicesGrid from './components/ServicesGrid';
import JourneySection from './components/JourneySection';
import DoctorProfiles from './components/DoctorProfiles';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CardiacAssessment from './components/AssessmentQuiz';
import MobileFooter from './components/MobileFooter';

function App() {
  return (
    <div className="min-h-screen bg-cream-white">
      <Header />
      <Hero />
     < CardiacAssessment/>
      <AboutSection />
      <ServicesGrid />
      <JourneySection />
      <DoctorProfiles />
      <Testimonials />
      <FAQSection />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default App;