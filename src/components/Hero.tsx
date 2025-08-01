import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Shield, Calendar } from 'lucide-react';

// Star icon component for rating stars
const Star = ({ className = '' }) => (
  <svg
    className={className}
    fill="gold"
    height="18"
    width="18"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.909l6.561-.955L10 0l2.951 5.954 6.561.955-4.756 4.636 1.122 6.545z" />
  </svg>
);

// Google Icon (simplified for UI use)
const GoogleIcon = ({ className = '' }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.4H272.1v95.5h146.9c-6.3 33.2-25 61.4-53.3 80.2v66.6h85.9c50.2-46.3 79.9-114.1 79.9-192z"
      fill="#4285f4"
    />
    <path
      d="M272.1 544.3c72.9 0 134-24.1 178.7-65.7l-85.9-66.6c-23.8 15.9-54.3 25.4-92.8 25.4-71 0-131.3-47.9-153-112.3h-90.5v70.5c44.6 88.2 136.1 148.7 243.5 148.7z"
      fill="#34a853"
    />
    <path
      d="M119.1 323.1c-10.3-30.9-10.3-64.2 0-95.1v-70.5h-90.5c-37.9 74.9-37.9 164.6 0 239.5l90.5-73.9z"
      fill="#fbbc05"
    />
    <path
      d="M272.1 107.7c39.5-.6 77.5 14.4 106.3 41.4l79.8-79.8C405 24.5 349.7 0 272.1 0 164.6 0 73.2 60.6 28.6 148.7l90.5 73.9c21.2-64.4 82-112.3 153-112.3z"
      fill="#ea4335"
    />
  </svg>
);

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  country: string;
  countryCode: string;
  message: string;
};

type CountryType = {
  name: string;
  code: string;
};

const countries: CountryType[] = [
  // ... (same as before, truncated here for brevity)
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
  { name: 'Zambia', code: '+260' },
].sort((a, b) => a.name.localeCompare(b.name));

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    email: '',
    country: '',
    countryCode: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleConsultationClick = () => {
    const heroForm = document.querySelector('#hero-contact-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const firstInput = heroForm.querySelector('input');
        if (firstInput) (firstInput as HTMLElement).focus();
      }, 500);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const [countryName, countryCode] = selectedValue.split('|');
      setFormData((prev) => ({
        ...prev,
        country: countryName,
        countryCode: countryCode,
      }));
    } else {
      setFormData((prev) => ({ ...prev, country: '', countryCode: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('phone', formData.phone);
      submitData.append('email', formData.email);
      submitData.append('country', formData.country);
      submitData.append('countryCode', formData.countryCode);
      submitData.append('message', formData.message);

      console.log('Form Data to Submit:', Object.fromEntries(submitData.entries()));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert('Thank you for your interest! Our cardiac team will contact you soon.');

      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        countryCode: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(Artemis.webp)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-white space-y-6 col-span-full lg:col-span-1">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-grey font-medium text-sm">
                JCI Accredited • 25+ Years of Cardiac Excellence
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl font-bold leading-tight mb-4 lg:hidden">
                Best Hospital for{' '}
                <span className="text-amber-400">Heart Treatment</span>
                <br />
                in India
              </h1>

              <h1 className="hidden lg:block text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Get Life-Saving Heart Surgery{' '}
                <span className="text-amber-400"> with 98% Success</span>
                <br />
                Rate — India's Most Trusted Cardiac Team{' '}
              </h1>

              <p className="text-white/90 text-lg max-w-lg leading-relaxed mb-6">
                Trusted Destination for Comprehensive Heart Care, Minimally Invasive
                Surgeries, and Cardiac Rehabilitation
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {[
                  '24x7 Cardiac Emergency and ICU Support',
                  'Minimally Invasive & Robotic Heart Surgeries',
                  'Comprehensive Diagnostics and Angioplasty Services',
                  'World-Class Electrophysiology and Cardiac Rehab',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* MOBILE ONLY: Combined Cardiac Patients & Google Rating */}
            {/* MOBILE ONLY: Combined Cardiac Patients & Google Rating */}
<div className="lg:hidden flex justify-center">
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-72 flex items-center justify-between space-x-4">
    {/* Patients Treated */}
    <div className="flex flex-col items-center flex-1 border-r border-white/20 pr-4 max-w-[45%]">
      <div className="text-2xl md:text-3xl font-bold text-amber-400 leading-tight break-words text-center">
        2,00,000+
      </div>
      <div className="text-white/80 text-xs sm:text-sm text-center break-words">
        Patients Treated
      </div>
    </div>

    {/* Rating */}
    <div className="flex flex-col items-center flex-1 pl-4 max-w-[45%]">
      <div className="flex items-center space-x-1">
        <GoogleIcon className="w-5 h-5" />
        <span className="text-xl md:text-2xl font-bold text-amber-400 leading-tight">4.9</span>
        <Star className="w-5 h-5" />
      </div>
      <div className="text-white/80 text-xs sm:text-sm mt-1 text-center break-words">
        Rating on Google
      </div>
    </div>
  </div>
</div>


              {/* Desktop Stats (unchanged) */}
              <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-amber-400">500+</div>
                  <div className="text-white/80 text-sm">Beds</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-amber-400">70+</div>
                  <div className="text-white/80 text-sm">Countries</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-amber-400">400+</div>
                  <div className="text-white/80 text-sm">Doctors</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-bold text-amber-400">40+</div>
                  <div className="text-white/80 text-sm">Super Specialties</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden lg:block mb-8">
              <button
                onClick={handleConsultationClick}
                className="bg-amber-500 text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center space-x-2 shadow-lg"
                type="button"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Free Cardiac Consultation</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:block bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-amber-500/20 w-full max-w-md mx-auto">
            <div id="hero-contact-form">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-amber-900" />
                </div>
                <h2 className="text-xl font-bold text-amber-900 mb-1">
                  Book a Cardiac Consultation
                </h2>
                <p className="text-amber-800 text-sm">Connect with our heart specialists today</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-white text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-white text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-white text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Country *</label>
                  <select
                    name="countrySelect"
                    value={
                      formData.country && formData.countryCode
                        ? `${formData.country}|${formData.countryCode}`
                        : ''
                    }
                    onChange={handleCountryChange}
                    required
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-white text-sm"
                  >
                    <option value="">Select your country</option>
                    {countries.map((c) => (
                      <option key={c.name} value={`${c.name}|${c.code}`}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                  {formData.country && formData.countryCode && (
                    <div className="mt-2 text-xs text-amber-700">
                      Selected: {formData.country} - Code: {formData.countryCode}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg bg-white text-sm resize-none"
                    placeholder="Describe your symptoms or condition..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 text-amber-900 py-3 rounded-lg font-semibold hover:bg-amber-400 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                <p className="text-xs text-amber-700/70 text-center mt-2">
                  Your information is secure and confidential
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
