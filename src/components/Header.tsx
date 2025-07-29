import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-white/95 backdrop-blur-md shadow-sm border-b border-caramel/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img className='w-40 h-30' src='artemis-logo.png'></img>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Services', 'Doctors', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-black hover:text-golden-honey transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <button className="flex items-center space-x-2 text-coffee-bean hover:text-golden-honey transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Emergency</span>
            </button> */}
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
                        }} className="bg-golden-honey text-rich-chocolate px-4 py-2 rounded-lg text-sm font-medium hover:bg-deep-copper transition-colors">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-coffee-bean hover:text-golden-honey transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-cream-white border-b border-caramel/20 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              {['Services', 'Doctors', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-medium text-coffee-bean hover:text-golden-honey transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-caramel/20">
                <button 
                  className="w-full bg-golden-honey text-rich-chocolate px-4 py-2 rounded-lg text-sm font-medium"
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
                >
                  Book Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;