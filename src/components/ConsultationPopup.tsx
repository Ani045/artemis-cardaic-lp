import React, { useState, ChangeEvent, KeyboardEvent, FC } from 'react';
import { Calendar, X } from 'lucide-react';

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  country: string;
  countryCode: string;
  message: string;
};

type ErrorsType = Partial<Record<keyof FormDataType, string>>;

type ConsultationPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (formData: FormDataType) => Promise<void> | void;
  title?: string;
  subtitle?: string;
};

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
  { name: 'Cambodia', code: '+855' },
  { name: 'Cameroon', code: '+237' },
  { name: 'Canada', code: '+1' },
  { name: 'Croatia', code: '+385' },
  { name: 'Cuba', code: '+53' },
  { name: 'Czech Republic', code: '+420' },
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
  { name: 'Jordan', code: '+962' },
  { name: 'Kazakhstan', code: '+7' },
  { name: 'Kenya', code: '+254' },
  { name: 'Kuwait', code: '+965' },
  { name: 'Kyrgyzstan', code: '+996' },
  { name: 'Laos', code: '+856' },
  { name: 'Lebanon', code: '+961' },
  { name: 'Libya', code: '+218' },
  { name: 'Luxembourg', code: '+352' },
  { name: 'Mexico', code: '+52' },
  { name: 'Mongolia', code: '+976' },
  { name: 'Morocco', code: '+212' },
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
  { name: 'Solomon Islands', code: '+677' },
  { name: 'South Africa', code: '+27' },
  { name: 'South Korea', code: '+82' },
  { name: 'Spain', code: '+34' },
  { name: 'Sri Lanka', code: '+94' },
  { name: 'Sudan', code: '+249' },
  { name: 'Sweden', code: '+46' },
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
  { name: 'Vietnam', code: '+84' },
  { name: 'Zimbabwe', code: '+263' },
  { name: 'Zambia', code: '+260' }
];

const ConsultationPopup: FC<ConsultationPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Get Expert Consultation",
  subtitle = "Connect with our oncology specialists today"
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    email: '',
    country: '',
    countryCode: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({});

  // Input change handler with typing
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear the error for this field as user types
    if (errors[name as keyof FormDataType]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Country selection change handler with typing
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
    if (errors.country) {
      setErrors(prev => ({
        ...prev,
        country: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: ErrorsType = {};

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        // Use custom submit handler if provided
        await onSubmit(formData);
      } else {
        // Default submission behavior

        // Here you can replace with actual POST request, e.g.:
        // await fetch('https://app.formester.com/forms/74CaRVAvR/submissions', {...})

        console.log('Form Data:', formData);
        await new Promise(res => setTimeout(res, 2000));

        alert(
          'Consultation request submitted successfully! We will contact you soon.'
        );
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        countryCode: '',
        message: ''
      });

      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') onClose();
  };

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close consultation form"
        >
          <X className="w-4 h-4 text-amber-800" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-amber-900" />
          </div>
          <h2 id="popup-title" className="text-xl font-bold text-amber-900 mb-1">
            {title}
          </h2>
          <p className="text-amber-800 text-sm">{subtitle}</p>
        </div>

        <form accept-charset='UTF-8' action='https://app.formester.com/forms/dFRtlEOCd/submissions' method='POST'
          
          className="space-y-4"
     
        >
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

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Country *
            </label>
            <select
              name="countrySelect"
              value={
                formData.country && formData.countryCode
                  ? `${formData.country}|${formData.countryCode}`
                  : ''
              }
              onChange={handleCountryChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-white text-sm ${
                errors.country
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-amber-300 focus:border-amber-500'
              }`}
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option
                  key={country.name}
                  value={`${country.name}|${country.code}`}
                >
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 text-amber-900 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>

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
