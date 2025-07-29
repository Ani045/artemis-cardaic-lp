import React from 'react';
import { Phone, Mail, MapPin, Heart, Award, Shield, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rich-chocolate text-cream-white py-16">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            SKIP THE WAITING ROOM – REGISTER ONLINE!
          </h2>
          <p className="text-xl text-cream-white/80 mb-8 max-w-2xl mx-auto">
            Save time and avoid the hassle by registering online before your visit.
          </p>
          <button 
            onClick={() => {
              const heroForm = document.querySelector('#hero-contact-form');
              if (heroForm) {
                heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                  const firstInput = heroForm.querySelector('input');
                  if (firstInput) firstInput.focus();
                }, 500);
              }
            }}
            className="bg-golden-honey text-rich-chocolate px-12 py-4 rounded-lg text-xl font-bold hover:bg-deep-copper transition-all transform hover:scale-105 shadow-lg"
          >
            Book An Appointment
          </button>
        </div>

        {/* Contact Information */}
       
       
        {/* Bottom Footer */}
        <div className="border-t border-cream-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cream-white/60 mb-4 md:mb-0">
              © 2024 Artemis Hospital. All rights reserved. | JCI Accredited Healthcare Provider
            </div>
            {/* <div className="flex items-center space-x-1 text-cream-white/60">
              <Heart className="w-4 h-4 text-golden-honey" />
              <span>Made with care in India</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;