import React from 'react';
import { Star, Calendar, Award, Clock } from 'lucide-react';
import { useState } from 'react';
import ConsultationPopup from './ConsultationPopup';

const DoctorProfiles = () => {
    const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);
  
    const openConsultationPopup = () => setIsConsultationPopupOpen(true);
  const closeConsultationPopup = () => setIsConsultationPopupOpen(false);
  const doctors = [
    {
      name: 'Dr. Mukesh Patekar',
      specialization: 'Senior Consultant, Medical Oncology',
      qualifications: 'MBBS, MD, DM (Medical Oncology)',
      expertise: 'Specializes in immunotherapy, targeted therapy, and hematological malignancies.',
      image: 'Dr. Mukesh-Patekar.png'
    },
    {
      name: 'Dr. Priya Tiwari',
      specialization: 'Consultant, Medical Oncology',
      qualifications: 'MBBS, MD, DM (Medical Oncology)',
      expertise: 'Expertise in breast, lung, gastrointestinal, and gynecological cancers.',
      image: 'Dr. Priya-Tiwari.png'
    },
    {
      name: 'Dr. Biswajyoti Hazarika',
      specialization: 'Director, Surgical Oncology',
      qualifications: 'MBBS, MS (ENT), MCh (Head & Neck Surgery)',
      expertise: 'Specialist in head and neck cancer surgeries, including robotic and reconstructive procedures.',
      image: 'Dr. Hazarika.png'
    },
    {
      name: 'Dr. Parveen Yadav',
      specialization: 'Consultant, Thoracic Oncology',
      qualifications: 'MBBS, MS, MCh (Thoracic Surgery)',
      expertise: 'Expert in minimally invasive thoracic and esophageal surgeries.',
      image: 'Dr. Parveen-Yadav.png'
    }
  ];

  return (
    <section id="doctors" className="py-8 sm:py-12 lg:py-16 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-amber-800 text-base sm:text-lg max-w-3xl mx-auto px-4">
            World-class specialists dedicated to providing exceptional oncology care with personalized treatment approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="group w-full">
              <div className="bg-soft-beige rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full">
                {/* Mobile Layout - Stack vertically */}
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Doctor Image */}
                  <div className="relative flex-shrink-0 self-center sm:self-start">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-amber-500"
                    />
                    <div className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Doctor Info */}
                  <div className="flex-1 text-center sm:text-left w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">{doctor.name}</h3>
                    <p className="text-amber-600 font-semibold mb-2 text-sm sm:text-base">{doctor.specialization}</p>
                    <p className="text-amber-800 text-xs sm:text-sm mb-3">{doctor.qualifications}</p>
                    <p className="text-amber-700 text-xs sm:text-sm mb-4 leading-relaxed">{doctor.expertise}</p>
                    
                    {/* Buttons - Responsive Layout */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                    <a
  href="https://wa.me/918929000217" // Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
>
  <span>💬</span>
  <span className="whitespace-nowrap">Chat on WhatsApp</span>
</a>
                      <button 
                         onClick={openConsultationPopup}
                        className="w-full sm:w-auto bg-amber-500 text-amber-900 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-amber-400 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">Book Appointment</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConsultationPopup 
  isOpen={isConsultationPopupOpen}
  onClose={closeConsultationPopup}
/>
    </section>
  );
};

export default DoctorProfiles;