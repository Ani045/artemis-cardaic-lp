import React from 'react';
import { FaHome, FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const MobileFooter = () => {
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
          onClick={handleHome}
          className="flex flex-col items-center text-blue-600"
        >
          <FaHome className="text-xl" />
          <span className="text-xs mt-1">Home</span>
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
    </div>
  );
};

export default MobileFooter;