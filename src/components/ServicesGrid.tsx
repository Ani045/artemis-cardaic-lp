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
      icon: <Heart className="w-6 h-6" />,
      title: 'Interventional Cardiology',
      description: 'Advanced procedures for diagnosing and treating coronary artery diseases using minimally invasive techniques.',
      features: ['Angioplasty', 'Stenting']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Electrophysiology',
      description: 'Diagnosis and treatment of heart rhythm disorders using state-of-the-art technology.',
      features: ['Pacemaker Implantation', 'Radiofrequency Ablation']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Cardiac Rehabilitation',
      description: 'Comprehensive rehab programs to support recovery after heart surgery or cardiac events.',
      features: ['Exercise Therapy', 'Lifestyle Counseling']
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Preventive Cardiology',
      description: 'Focused on early detection and prevention of heart disease through risk assessment and lifestyle management.',
      features: ['Heart Risk Screening', 'Lifestyle Modification']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Heart Failure Management',
      description: 'Personalized care for patients with heart failure to improve quality of life and outcomes.',
      features: ['Medication Optimization', 'Device Therapy']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Cardiac Imaging',
      description: 'Advanced diagnostic imaging for accurate evaluation of cardiac conditions.',
      features: ['Echocardiography', 'Cardiac MRI']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Pediatric Cardiology',
      description: 'Specialized care for infants and children with congenital or acquired heart conditions.',
      features: ['Congenital Heart Defects', 'Pediatric Echo']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Structural Heart Disease',
      description: 'Minimally invasive treatment for valve disorders and structural anomalies of the heart.',
      features: ['TAVR', 'MitraClip']
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Non-Invasive Cardiology',
      description: 'Heart evaluations through stress testing, ECGs, and other non-surgical diagnostics.',
      features: ['TMT', 'Holter Monitoring']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Emergency Cardiac Care',
      description: '24x7 cardiac emergency services with rapid response and expert intervention.',
      features: ['Heart Attack Response', 'Cardiac Arrest Management']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cardiothoracic Surgery',
      description: 'Advanced surgical treatment for complex heart and chest conditions.',
      features: ['Bypass Surgery', 'Valve Replacement']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Vascular Surgery',
      description: 'Comprehensive care for diseases of the blood vessels outside the heart.',
      features: ['Aneurysm Repair', 'Peripheral Bypass']
    }
  ];

  return (
    <section id="services" className="py-8 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-4">
  Our Cardiac Care Services
</h2>
<p className="text-coffee-bean max-w-3xl mx-auto text-lg">
  We offer world-class cardiac services with cutting-edge technology and experienced cardiologists to care for your heart.
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