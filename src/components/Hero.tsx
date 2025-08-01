import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Shield, Calendar } from 'lucide-react';

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
].sort((a, b) => a.name.localeCompare(b.name));

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    email: '',
    country: '',
    countryCode: '',
    message: ''
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const [countryName, countryCode] = selectedValue.split('|');
      setFormData(prev => ({
        ...prev,
        country: countryName,
        countryCode: countryCode
      }));
    } else {
      setFormData(prev => ({ ...prev, country: '', countryCode: '' }));
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
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert('Thank you for your interest! Our cardiac team will contact you soon.');

      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        countryCode: '',
        message: ''
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
        style={{ backgroundImage: 'url(Artemis.webp)' }} // Replace with appropriate cardiac banner
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
                <br />in India
              </h1>

              <h1 className="hidden lg:block text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Get Life-Saving Heart Surgery 
                <span className="text-amber-400"> with 98% Success</span>
                <br />Rate — India's Most Trusted Cardiac Team{' '}
              </h1>

              <p className="text-white/90 text-lg max-w-lg leading-relaxed mb-6">
                Trusted Destination for Comprehensive Heart Care, Minimally Invasive Surgeries, and Cardiac Rehabilitation
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {[
                  '24x7 Cardiac Emergency and ICU Support',
                  'Minimally Invasive & Robotic Heart Surgeries',
                  'Comprehensive Diagnostics and Angioplasty Services',
                  'World-Class Electrophysiology and Cardiac Rehab'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
 <div className="mb-8">
              {/* Mobile Stats - Single Stat */}
              <div className="lg:hidden flex justify-center">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 w-64">
                  <div className="text-3xl font-bold text-amber-400">2,00,000+</div>
                  <div className="text-white/80 text-sm">Cardiac Patients Treated</div>
                </div>
              </div>
              
              {/* Desktop Stats - All Four Stats */}
              <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                <p className="text-amber-800 text-sm">
                  Connect with our heart specialists today
                </p>
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
                    {countries.map(c => (
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
