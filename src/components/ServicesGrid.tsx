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
    title: 'Minimally Invasive Heart Bypass Surgery',
    description: 'Surgical restoration of blood flow with smaller incisions for faster recovery.',
    features: ['Reduced trauma', 'Faster recovery', 'Lower infection risk'],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Angioplasty & Stent Placement (PTCA)',
    description: 'Opening blocked arteries using balloons and stents to improve blood flow.',
    features: ['Chest pain relief', 'Heart attack prevention', 'Quick recovery'],
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Heart Valve Repair (TAVI, TAVR)',
    description: 'Minimally invasive valve repair/replacement without open-heart surgery.',
    features: ['No open surgery', 'Short hospital stay', 'Improved valve function'],
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Surgery for Arrhythmias (Pacemaker/ICD Implantation)',
    description: 'Implantation of devices to regulate heart rhythm and prevent sudden arrest.',
    features: ['Heart rhythm control', 'Prevent fainting', 'Minimally invasive'],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Left Ventricular Assist Device (LVAD/VAD) Implantation',
    description: 'Mechanical support for heart function in advanced heart failure patients.',
    features: ['Improved heart output', 'Better quality of life', 'Extended survival'],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Minimally Invasive & Robotic-Assisted Cardiac Surgery',
    description: 'Precision heart surgery through small incisions with robotic assistance.',
    features: ['High precision', 'Less blood loss', 'Faster recovery'],
  },
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