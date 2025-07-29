import React from 'react';
import { useState } from 'react'; 
import { Heart, Zap, Stethoscope, Brain, Shield, Activity } from 'lucide-react';
import ConsultationPopup from './ConsultationPopup';

const ServicesGrid = () => {
    const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);
  
    const openConsultationPopup = () => setIsConsultationPopupOpen(true);
  const closeConsultationPopup = () => setIsConsultationPopupOpen(false);
  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Medical Oncology for Adults',
      description: 'Comprehensive chemotherapy and immunotherapy treatments for adult cancer patients.',
      features: ['Chemotherapy', 'Immunotherapy']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Neuro-Oncology',
      description: 'Specialized treatment for brain and spinal cord cancers with advanced surgical techniques.',
      features: ['Brain Cancers', 'Spinal Cord Cancers']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Haemato-Oncology',
      description: 'Expert care for blood cancers including bone marrow transplantation services.',
      features: ['Blood Cancers', 'Bone Marrow Transplantation']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Gynecological Oncology',
      description: 'Comprehensive treatment for ovarian, cervical, and other gynecological cancers.',
      features: ['Ovarian Cancers', 'Cervical Cancers']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Radiation Oncology for Tumors',
      description: 'Advanced radiation therapy techniques for precise tumor targeting.',
      features: ['IMRT', 'CyberKnife Technology']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Prostate Cancer Treatment',
      description: 'Specialized care for prostate cancer with minimally invasive surgical options.',
      features: ['Robotic Surgery', 'Targeted Therapy']
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Gastro-Intestinal Oncology',
      description: 'Expert treatment for digestive system cancers with advanced surgical techniques.',
      features: ['GI Cancers', 'Minimally Invasive Surgery']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Breast Cancer Treatment',
      description: 'Comprehensive breast cancer care with personalized treatment approaches.',
      features: ['Surgical Oncology', 'Reconstructive Surgery']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Head & Neck Oncology',
      description: 'Specialized treatment for head and neck cancers with reconstructive options.',
      features: ['ENT Oncology', 'Reconstructive Surgery']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Thoracic Oncology',
      description: 'Expert care for lung and chest cancers with advanced surgical techniques.',
      features: ['Lung Cancer', 'Minimally Invasive Surgery']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Liver Cancer Treatment',
      description: 'Comprehensive liver cancer care with advanced treatment modalities.',
      features: ['Hepatic Surgery', 'Targeted Therapy']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Pediatric Oncology',
      description: 'Specialized cancer care for children with family-centered approach.',
      features: ['Childhood Cancers', 'Family Support']
    }
  ];

  return (
    <section id="services" className="py-16 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-4">
            Our Oncology Surgery Services
          </h2>
          <p className="text-coffee-bean max-w-3xl mx-auto text-lg">
            Comprehensive oncology services with advanced surgical techniques and personalized treatment approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-cream-white rounded-xl p-6 border border-caramel/20 hover:border-golden-honey/50 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-10 h-10 bg-golden-honey/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-golden-honey/30 transition-colors">
                  <div className="text-golden-honey">{service.icon}</div>
                </div>

                <h3 className="text-lg font-semibold text-rich-chocolate mb-3">
                  {service.title}
                </h3>
                <p className="text-coffee-bean text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-golden-honey rounded-full"></div>
                      <span className="text-coffee-bean text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
             onClick={openConsultationPopup}
            className="bg-golden-honey text-rich-chocolate px-8 py-4 rounded-lg font-semibold hover:bg-deep-copper transition-colors shadow-lg"
          >
            Schedule Your Appointment Today!
          </button>
        </div>
      </div>
      <ConsultationPopup 
  isOpen={isConsultationPopupOpen}
  onClose={closeConsultationPopup}
/>
    </section>
  );
};

export default ServicesGrid;