import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

// Countries data - you can move this to a separate constants file if needed
const countries = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Algeria', code: '+213' },
    { name: 'Argentina', code: '+54' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Brazil', code: '+55' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China', code: '+86' },
    { name: 'Colombia', code: '+57' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Croatia', code: '+385' },
    { name: 'Cuba', code: '+53' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Greece', code: '+30' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hong Kong', code: '+852' },
    { name: 'Hungary', code: '+36' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Ireland', code: '+353' },
    { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' },
    { name: 'Ivory Coast', code: '+225' },
    { name: 'Jamaica', code: '+1' },
    { name: 'Japan', code: '+81' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Laos', code: '+856' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Libya', code: '+218' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Mexico', code: '+52' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Morocco', code: '+212' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Norway', code: '+47' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Palau', code: '+680' },
    { name: 'Panama', code: '+507' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Peru', code: '+51' },
    { name: 'Philippines', code: '+63' },
    { name: 'Poland', code: '+48' },
    { name: 'Portugal', code: '+351' },
    { name: 'Qatar', code: '+974' },
    { name: 'Romania', code: '+40' },
    { name: 'Russia', code: '+7' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Samoa', code: '+685' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Senegal', code: '+221' },
    { name: 'Serbia', code: '+381' },
    { name: 'Singapore', code: '+65' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Korea', code: '+82' },
    { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Sudan', code: '+249' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Tajikistan', code: '+992' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Thailand', code: '+66' },
    { name: 'Tonga', code: '+676' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Turkey', code: '+90' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ukraine', code: '+380' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Vietnam', code: '+84' }
  ];

/**
 * ConsultationPopup Component
 * 
 * A reusable popup component for consultation form
 * 
 * Props:
 * @param {boolean} isOpen - Controls whether the popup is visible
 * @param {function} onClose - Callback function when popup is closed
 * @param {function} onSubmit - Optional callback function for form submission
 * @param {string} title - Optional custom title for the popup
 * @param {string} subtitle - Optional custom subtitle for the popup
 */
const ConsultationPopup = ({ 
  isOpen, 
  onClose, 
  onSubmit,
  title = "Get Expert Consultation",
  subtitle = "Connect with our oncology specialists today"
}) => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    countryCode: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle country selection
  const handleCountryChange = (e) => {
    const value = e.target.value;
    if (value) {
      const [country, countryCode] = value.split('|');
      setFormData(prev => ({
        ...prev,
        country,
        countryCode
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        country: '',
        countryCode: ''
      }));
    }
    
    // Clear country error
    if (errors.country) {
      setErrors(prev => ({
        ...prev,
        country: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        // Use custom submit handler if provided
        await onSubmit(formData);
      } else {
        // Default submission behavior
        console.log('Form Data:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // You can replace this with your actual API call
        // const response = await fetch('https://app.formester.com/forms/74CaRVAvR/submissions', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData)
        // });
        
        alert('Consultation request submitted successfully! We will contact you soon.');
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        countryCode: '',
        message: ''
      });
      
      // Close popup
      onClose();
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle clicking outside popup to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close popup
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Don't render anything if popup is not open
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 min-h-screen" 
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div 
        className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-amber-500/20 w-full max-w-md relative animate-in fade-in zoom-in duration-200"
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          margin: 'auto',
          transform: 'translate(0, 0)'
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close consultation form"
        >
          <X className="w-4 h-4 text-amber-800" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-amber-900" />
          </div>
          <h2 id="popup-title" className="text-xl font-bold text-amber-900 mb-1">
            {title}
          </h2>
          <p className="text-amber-800 text-sm">
            {subtitle}
          </p>
        </div>

        {/* Form */}
        <form accept-charset='UTF-8' action='https://app.formester.com/forms/74CaRVAvR/submissions' method='POST' className="space-y-4">
          
          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-white text-sm ${
                  errors.name 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-amber-300 focus:border-amber-500'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-white text-sm ${
                  errors.phone 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-amber-300 focus:border-amber-500'
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-white text-sm ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-amber-300 focus:border-amber-500'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Country *
            </label>
            <select
              name="countrySelect"
              value={formData.country && formData.countryCode ? `${formData.country}|${formData.countryCode}` : ''}
              onChange={handleCountryChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-white text-sm ${
                errors.country 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-amber-300 focus:border-amber-500'
              }`}
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country.name} value={`${country.name}|${country.code}`}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country}</p>
            )}
            {formData.country && formData.countryCode && (
              <div className="mt-2 text-xs text-amber-700">
                Selected: {formData.country} - Code: {formData.countryCode}
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors bg-white resize-none text-sm"
              placeholder="Tell us about your condition or any specific concerns..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 text-amber-900 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>

          {/* Privacy Notice */}
          <div className="text-center">
            <p className="text-xs text-amber-700/70">
              Your information is secure and confidential
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;