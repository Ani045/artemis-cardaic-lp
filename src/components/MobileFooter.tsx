import { Calendar } from 'lucide-react';
import React , {useState}from 'react';
import { FaHome, FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import ConsultationPopup from './ConsultationPopup';

const MobileFooter = () => {
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);
      
        const openConsultationPopup = () => setIsConsultationPopupOpen(true);
      const closeConsultationPopup = () => setIsConsultationPopupOpen(false);
  const handleCall = () => {
    window.location.href = 'tel:+918929000217'; // Replace with your phone number
  };

  const handleWhatsApp = () => {
    const message = "Hello, I'd like more information";
    const url = `https://wa.me/+918929000217?text=${encodeURIComponent(message)}`; // Replace number
    window.open(url, '_blank');
  };

  
  const handleHome = () => {
    window.location.href = '/';
    // Or use React Router: navigate('/');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        <button 
           onClick={openConsultationPopup}
          className="flex flex-col items-center text-blue-600"
        >
          <Calendar className="text-xl" />
          <span className="text-xs mt-1">Book</span>
        </button>
        
       
        
        <button 
          onClick={handleWhatsApp}
          className="flex flex-col items-center text-green-600"
        >
          <FaWhatsapp className="text-xl" />
          <span className="text-xs mt-1">WhatsApp</span>
        </button>
        
        <button 
          onClick={handleCall}
          className="flex flex-col items-center text-blue-600"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="text-xs mt-1">Call</span>
        </button>
      </div>
      <ConsultationPopup 
  isOpen={isConsultationPopupOpen}
  onClose={closeConsultationPopup}
/>
    </div>
  );
};

export default MobileFooter;