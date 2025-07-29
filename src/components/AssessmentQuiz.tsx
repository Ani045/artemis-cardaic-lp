import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Heart, Calendar, FileText, MapPin, Clock, User, Phone, Mail } from 'lucide-react';

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contactData, setContactData] = useState({
    name: '',
    countryCode: '+91',
    phoneNumber: '',
    email: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'cancer_stage',
      name: 'cancer_stage',
      title: 'What is your current cancer stage?',
      subtitle: 'This helps us understand the extent of your condition',
      icon: <Heart className="w-5 h-5" />,
      options: [
        { value: 'stage-1', label: 'Stage 1', description: 'Early stage, localized', icon: 'I', color: 'green' },
        { value: 'stage-2', label: 'Stage 2', description: 'Locally advanced', icon: 'II', color: 'yellow' },
        { value: 'stage-3', label: 'Stage 3', description: 'Regional spread', icon: 'III', color: 'orange' },
        { value: 'stage-4', label: 'Stage 4', description: 'Advanced/Metastatic', icon: 'IV', color: 'red' },
        { value: 'unknown', label: 'Not sure/Need staging', description: "We'll help determine your stage", icon: '?', color: 'gray' }
      ]
    },
    {
      id: 'medical_reports',
      name: 'medical_reports',
      title: 'Do you have your medical reports and test results?',
      subtitle: 'Having your medical history helps us provide better care',
      icon: <FileText className="w-5 h-5" />,
      options: [
        { value: 'complete', label: 'Yes, I have all my medical reports', description: 'Complete medical documentation available', color: 'green' },
        { value: 'partial', label: 'Yes, but some reports are missing', description: 'Partial medical records available', color: 'yellow' },
        { value: 'digital', label: 'I have digital copies/scans', description: 'Electronic versions of medical records', color: 'blue' },
        { value: 'none', label: "No, I don't have my reports", description: "We'll help you obtain necessary records", color: 'red' }
      ]
    },
    {
      id: 'country_location',
      name: 'country_location',
      title: 'Which country are you traveling from?',
      subtitle: 'This helps us arrange travel and visa assistance',
      icon: <MapPin className="w-5 h-5" />,
      options: [
        { value: 'africa', label: 'African Countries', description: 'Nigeria, Kenya, Ethiopia, etc.', color: 'green' },
        { value: 'middle-east', label: 'Middle East', description: 'UAE, Saudi, Iraq, etc.', color: 'blue' },
        { value: 'asia', label: 'Asian Countries', description: 'Bangladesh, Myanmar, etc.', color: 'purple' },
        { value: 'other', label: 'Other Countries', description: 'Europe, Americas, Australia', color: 'gray' },
        { value: 'india', label: 'Already in India', description: 'No travel assistance needed', color: 'orange' }
      ]
    },
    {
      id: 'current_treatment',
      name: 'current_treatment',
      title: 'Are you currently receiving any cancer treatment?',
      subtitle: 'Understanding your current treatment helps us plan better',
      icon: <Calendar className="w-5 h-5" />,
      options: [
        { value: 'chemotherapy', label: 'Yes, chemotherapy', color: 'blue' },
        { value: 'radiation', label: 'Yes, radiation therapy', color: 'yellow' },
        { value: 'surgery', label: 'Recently had surgery', color: 'green' },
        { value: 'multiple', label: 'Multiple treatments', color: 'purple' },
        { value: 'none', label: 'No current treatment', color: 'gray' }
      ]
    },
    {
      id: 'treatment_urgency',
      name: 'treatment_urgency',
      title: 'How urgent is your need for treatment?',
      subtitle: 'This helps us prioritize your care appropriately',
      icon: <Clock className="w-5 h-5" />,
      options: [
        { value: 'emergency', label: 'Emergency - Need immediate care', description: 'Critical condition requiring urgent attention', color: 'red' },
        { value: 'urgent', label: 'Urgent - Within 1-2 weeks', description: 'Time-sensitive treatment needed', color: 'orange' },
        { value: 'soon', label: 'Soon - Within 1 month', description: 'Treatment needed in the near future', color: 'yellow' },
        { value: 'planned', label: 'Planned - Can wait 1-3 months', description: 'Scheduled treatment planning', color: 'blue' },
        { value: 'consultation', label: 'Just need consultation/second opinion', description: 'Expert advice and evaluation', color: 'green' }
      ]
    }
  ];

  const countryCodes = [
    // Major Countries
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+7', country: 'RU', flag: '🇷🇺' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+82', country: 'KR', flag: '🇰🇷' },
    
    // Middle East
    { code: '+971', country: 'AE', flag: '🇦🇪' },
    { code: '+966', country: 'SA', flag: '🇸🇦' },
    { code: '+974', country: 'QA', flag: '🇶🇦' },
    { code: '+965', country: 'KW', flag: '🇰🇼' },
    { code: '+968', country: 'OM', flag: '🇴🇲' },
    { code: '+973', country: 'BH', flag: '🇧🇭' },
    { code: '+964', country: 'IQ', flag: '🇮🇶' },
    { code: '+962', country: 'JO', flag: '🇯🇴' },
    { code: '+961', country: 'LB', flag: '🇱🇧' },
    { code: '+98', country: 'IR', flag: '🇮🇷' },
    
    // Africa
    { code: '+234', country: 'NG', flag: '🇳🇬' },
    { code: '+254', country: 'KE', flag: '🇰🇪' },
    { code: '+27', country: 'ZA', flag: '🇿🇦' },
    { code: '+20', country: 'EG', flag: '🇪🇬' },
    { code: '+233', country: 'GH', flag: '🇬🇭' },
    { code: '+251', country: 'ET', flag: '🇪🇹' },
    { code: '+256', country: 'UG', flag: '🇺🇬' },
    { code: '+255', country: 'TZ', flag: '🇹🇿' },
    { code: '+212', country: 'MA', flag: '🇲🇦' },
    { code: '+216', country: 'TN', flag: '🇹🇳' },
    
    // South Asia
    { code: '+880', country: 'BD', flag: '🇧🇩' },
    { code: '+92', country: 'PK', flag: '🇵🇰' },
    { code: '+94', country: 'LK', flag: '🇱🇰' },
    { code: '+977', country: 'NP', flag: '🇳🇵' },
    { code: '+975', country: 'BT', flag: '🇧🇹' },
    { code: '+960', country: 'MV', flag: '🇲🇻' },
    { code: '+93', country: 'AF', flag: '🇦🇫' },
    
    // Southeast Asia
    { code: '+95', country: 'MM', flag: '🇲🇲' },
    { code: '+66', country: 'TH', flag: '🇹🇭' },
    { code: '+60', country: 'MY', flag: '🇲🇾' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+62', country: 'ID', flag: '🇮🇩' },
    { code: '+63', country: 'PH', flag: '🇵🇭' },
    { code: '+84', country: 'VN', flag: '🇻🇳' },
    { code: '+855', country: 'KH', flag: '🇰🇭' },
    { code: '+856', country: 'LA', flag: '🇱🇦' },
    { code: '+673', country: 'BN', flag: '🇧🇳' },
    
    // Europe
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+31', country: 'NL', flag: '🇳🇱' },
    { code: '+41', country: 'CH', flag: '🇨🇭' },
    { code: '+43', country: 'AT', flag: '🇦🇹' },
    { code: '+32', country: 'BE', flag: '🇧🇪' },
    { code: '+45', country: 'DK', flag: '🇩🇰' },
    { code: '+46', country: 'SE', flag: '🇸🇪' },
    { code: '+47', country: 'NO', flag: '🇳🇴' },
    { code: '+48', country: 'PL', flag: '🇵🇱' },
    { code: '+420', country: 'CZ', flag: '🇨🇿' },
    
    // Americas
    { code: '+52', country: 'MX', flag: '🇲🇽' },
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+54', country: 'AR', flag: '🇦🇷' },
    { code: '+56', country: 'CL', flag: '🇨🇱' },
    { code: '+57', country: 'CO', flag: '🇨🇴' },
    { code: '+51', country: 'PE', flag: '🇵🇪' },
    { code: '+58', country: 'VE', flag: '🇻🇪' },
    
    // Oceania
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+64', country: 'NZ', flag: '🇳🇿' },
    { code: '+679', country: 'FJ', flag: '🇫🇯' }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleContactChange = (field, value) => {
    setContactData({ ...contactData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowForm(true);
    }
  };

  const prevStep = () => {
    if (showForm) {
      setShowForm(false);
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setContactData({ name: '', countryCode: '+91', phoneNumber: '', email: '' });
    setShowForm(false);
    setShowResults(false);
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    if (answers.cancer_stage === 'stage-4') {
      recommendations.push({
        icon: '🚨',
        title: 'Priority Care Program',
        description: 'Advanced stage cancer requires immediate specialist attention with our comprehensive oncology team.',
        color: 'red'
      });
    } else if (answers.cancer_stage === 'stage-1') {
      recommendations.push({
        icon: '🎯',
        title: 'Early Intervention Program',
        description: 'Early stage detection offers excellent treatment outcomes with minimally invasive procedures.',
        color: 'green'
      });
    }

    if (answers.treatment_urgency === 'emergency') {
      recommendations.push({
        icon: '⚡',
        title: 'Emergency Care Protocol',
        description: 'Immediate admission and emergency oncology consultation within 24 hours.',
        color: 'red'
      });
    } else if (answers.treatment_urgency === 'consultation') {
      recommendations.push({
        icon: '👨‍⚕️',
        title: 'Expert Second Opinion',
        description: 'Virtual consultation with our senior oncologists for comprehensive case review.',
        color: 'blue'
      });
    }

    if (answers.country_location !== 'india') {
      recommendations.push({
        icon: '✈️',
        title: 'Medical Tourism Package',
        description: 'Complete visa assistance, travel coordination, and accommodation arrangements.',
        color: 'purple'
      });
    }

    recommendations.push({
      icon: '🏥',
      title: 'Comprehensive Cancer Care',
      description: 'Multidisciplinary team approach with personalized treatment planning.',
      color: 'artemis'
    });

    return recommendations;
  };

  // Updated handleFormSubmit - removes preventDefault to allow natural form submission to Formester
  const handleFormSubmit = (e) => {
    // Let the form submit naturally to Formester
    // The form will redirect based on Formester configuration
    console.log('Form submitted to Formester with all data');
    
    // Optional: You can still show a loading state or confirmation here
    // but don't prevent the default form submission
  };

  const isFormValid = contactData.name.trim() && contactData.phoneNumber.trim() && contactData.email.trim();

  // Results View
  if (showResults) {
    const recommendations = generateRecommendations();
    
    return (
      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-rich-chocolate mb-3">Assessment Submitted Successfully!</h2>
                <p className="text-coffee-bean">Thank you for completing the assessment. Our team will contact you within 24 hours with your personalized care plan.</p>
              </div>

              <div className="space-y-4 mb-8">
                {recommendations.map((rec, index) => {
                  const colorClasses = {
                    red: 'bg-red-50 border-red-200 text-red-800',
                    green: 'bg-green-50 border-green-200 text-green-800',
                    blue: 'bg-blue-50 border-blue-200 text-blue-800',
                    purple: 'bg-purple-50 border-purple-200 text-purple-800',
                    artemis: 'bg-soft-beige border-golden-honey text-rich-chocolate'
                  };
                  
                  return (
                    <div key={index} className={`border-2 rounded-xl p-6 ${colorClasses[rec.color]} transition-all duration-300`}>
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{rec.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{rec.title}</h3>
                          <p className="text-sm leading-relaxed">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <button 
                  onClick={resetQuiz}
                  className="bg-golden-honey text-rich-chocolate px-8 py-4 rounded-lg font-semibold hover:bg-deep-copper transition-colors shadow-lg"
                >
                  Take Another Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Main form wrapper for entire quiz flow
  return (
    <section id="assessment" className="py-16 bg-warm-ivory">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-rich-chocolate mb-3">Cancer Care Assessment</h2>
            <p className="text-coffee-bean">Help us understand your situation so we can provide the most appropriate care</p>
          </div>

          <div className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg">
            
            {/* Contact Form View - UPDATED WITH PROPER FORM TAG */}
            {showForm ? (
              <form 
             accept-charset='UTF-8' 
             action='https://app.formester.com/forms/DZoBSP5fk/submissions' 
             method='POST'
            onSubmit={handleFormSubmit}
              >
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-coffee-bean mb-2">
                    <span>Final Step</span>
                    <span>100% Complete</span>
                  </div>
                  <div className="w-full bg-caramel/20 rounded-full h-2">
                    <div className="bg-golden-honey h-2 rounded-full w-full" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-rich-chocolate mb-3">Contact Information</h3>
                  <p className="text-coffee-bean">Please provide your contact details to receive your personalized care plan</p>
                </div>

                {/* Hidden fields for all quiz answers */}
                {Object.entries(answers).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                {/* ADDED: Quiz summary as hidden field for easier reading in Formester */}
                <input 
                  type="hidden" 
                  name="assessment_summary" 
                  value={Object.entries(answers).map(([key, value]) => {
                    const question = questions.find(q => q.id === key);
                    const option = question?.options.find(opt => opt.value === value);
                    return `${question?.title}: ${option?.label || value}`;
                  }).join(' | ')}
                />

                {/* ADDED: Submission timestamp */}
                <input 
                  type="hidden" 
                  name="submission_date" 
                  value={new Date().toISOString()}
                />

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <User className="w-5 h-5 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      value={contactData.name}
                      onChange={(e) => handleContactChange('name', e.target.value)}
                      className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Number *
                    </label>
                    <div className="flex">
                      <select
                        name="contact_country_code"
                        value={contactData.countryCode}
                        onChange={(e) => handleContactChange('countryCode', e.target.value)}
                        className="p-4 border-2 border-caramel/20 rounded-l-lg focus:border-golden-honey focus:outline-none bg-white"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code} {country.country}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="contact_phone_number"
                        value={contactData.phoneNumber}
                        onChange={(e) => handleContactChange('phoneNumber', e.target.value)}
                        className="flex-1 p-4 border-2 border-l-0 border-caramel/20 rounded-r-lg focus:border-golden-honey focus:outline-none"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                    {/* ADDED: Combined phone number for easier processing */}
                    <input
                      type="hidden"
                      name="contact_full_phone"
                      value={`${contactData.countryCode} ${contactData.phoneNumber}`}
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="contact_email"
                      value={contactData.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="mb-8 p-4 bg-soft-beige rounded-lg">
                  <h4 className="font-semibold text-rich-chocolate mb-3">Assessment Summary:</h4>
                  <div className="text-sm text-coffee-bean space-y-1">
                    {Object.entries(answers).map(([key, value]) => {
                      const question = questions.find(q => q.id === key);
                      const option = question?.options.find(opt => opt.value === value);
                      return (
                        <div key={key} className="flex">
                          <span className="font-medium mr-2">{question?.title}:</span>
                          <span>{option?.label || value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-coffee-bean hover:text-rich-chocolate hover:bg-soft-beige transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                      isFormValid
                        ? 'bg-golden-honey text-rich-chocolate hover:bg-deep-copper shadow-lg'
                        : 'bg-caramel/30 text-caramel cursor-not-allowed'
                    }`}
                  >
                    <span>Submit Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* Quiz Questions View - No form tag here */
              <>
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-coffee-bean mb-2">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-caramel/20 rounded-full h-2">
                    <div 
                      className="bg-golden-honey h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center text-rich-chocolate font-bold text-lg">
                      {currentStep + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-rich-chocolate">
                        {questions[currentStep].title}
                      </h3>
                      <p className="text-coffee-bean text-sm">{questions[currentStep].subtitle}</p>
                    </div>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="sr-only">{questions[currentStep].title}</legend>
                    {questions[currentStep].options.map((option) => {
                      const isSelected = answers[questions[currentStep].id] === option.value;
                      const colorClasses = {
                        green: 'bg-green-100 text-green-700',
                        yellow: 'bg-yellow-100 text-yellow-700',
                        orange: 'bg-orange-100 text-orange-700',
                        red: 'bg-red-100 text-red-700',
                        blue: 'bg-blue-100 text-blue-700',
                        purple: 'bg-purple-100 text-purple-700',
                        gray: 'bg-gray-100 text-gray-700'
                      };

                      return (
                        <label
                          key={option.value}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md cursor-pointer block ${
                            isSelected
                              ? 'border-golden-honey bg-golden-honey/10 shadow-md'
                              : 'border-caramel/20 bg-white hover:border-golden-honey/40'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name={questions[currentStep].name}
                              value={option.value}
                              checked={isSelected}
                              onChange={() => handleAnswer(questions[currentStep].id, option.value)}
                              className="sr-only"
                              required
                            />
                            {option.icon && (
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 font-semibold ${
                                isSelected ? 'bg-golden-honey text-rich-chocolate' : colorClasses[option.color]
                              }`}>
                                {option.icon}
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-rich-chocolate">{option.label}</h4>
                              {option.description && (
                                <p className="text-coffee-bean text-sm">{option.description}</p>
                              )}
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-golden-honey ml-2" />
                            )}
                          </div>
                        </label>
                      );
                    })}
                  </fieldset>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      currentStep === 0
                        ? 'text-caramel/50 cursor-not-allowed'
                        : 'text-coffee-bean hover:text-rich-chocolate hover:bg-soft-beige'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!answers[questions[currentStep].id]}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                      answers[questions[currentStep].id]
                        ? 'bg-golden-honey text-rich-chocolate hover:bg-deep-copper shadow-lg'
                        : 'bg-caramel/30 text-caramel cursor-not-allowed'
                    }`}
                  >
                    <span>{currentStep === questions.length - 1 ? 'Continue to Contact Form' : 'Next'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentQuiz;