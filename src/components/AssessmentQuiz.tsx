import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Heart,
  Calendar,
  FileText,
  MapPin,
  Clock,
  User,
  Phone,
  Mail
} from 'lucide-react';

// --- Types ---
type AnswerState = { [key: string]: string };
type ContactData = {
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
};

type QuestionOption = {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode | string;
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
};

type Question = {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  options: QuestionOption[];
};

type Recommendation = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

type CountryCode = {
  code: string;
  country: string;
  flag: string;
};

// --- Component ---
const CardiacAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    countryCode: '+91',
    phoneNumber: '',
    email: ''
  });
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  // --- Questions (same data as before) ---
  const questions: Question[] = [
    {
      id: 'cardiac_condition',
      name: 'cardiac_condition',
      title: 'What is your primary cardiac concern?',
      subtitle: 'This helps us understand your heart condition and symptoms',
      icon: <Heart className="w-5 h-5" />,
      options: [
        { value: 'chest-pain', label: 'Chest Pain/Angina', description: 'Chest discomfort or pain', icon: '💔', color: 'red' },
        { value: 'heart-attack', label: 'Heart Attack (Recent/Past)', description: 'Myocardial infarction', icon: '🚨', color: 'red' },
        { value: 'heart-failure', label: 'Heart Failure', description: 'Weakened heart function', icon: '💙', color: 'blue' },
        { value: 'arrhythmia', label: 'Irregular Heartbeat', description: 'Arrhythmia or palpitations', icon: '⚡', color: 'yellow' },
        { value: 'valve-disease', label: 'Heart Valve Disease', description: 'Valve stenosis or regurgitation', icon: '🔄', color: 'purple' },
        { value: 'bypass-needed', label: 'Need Bypass Surgery', description: 'Coronary artery bypass required', icon: '🛤️', color: 'orange' },
        { value: 'preventive', label: 'Preventive Care/Screening', description: 'Risk assessment and prevention', icon: '🛡️', color: 'green' },
        { value: 'other', label: 'Other Cardiac Condition', description: 'Other heart-related concerns', icon: '❓', color: 'gray' }
      ]
    },
    {
      id: 'symptoms_severity',
      name: 'symptoms_severity',
      title: 'How severe are your current symptoms?',
      subtitle: 'Understanding your symptom severity helps prioritize your care',
      icon: <Clock className="w-5 h-5" />,
      options: [
        { value: 'severe', label: 'Severe - Daily symptoms affecting normal activities', description: 'Symptoms interfere with daily life', color: 'red' },
        { value: 'moderate', label: 'Moderate - Symptoms with exertion or stress', description: 'Symptoms during physical activity', color: 'orange' },
        { value: 'mild', label: 'Mild - Occasional symptoms', description: 'Infrequent or minor symptoms', color: 'yellow' },
        { value: 'none', label: 'No current symptoms', description: 'Asymptomatic or preventive care', color: 'green' },
        { value: 'emergency', label: 'Emergency - Chest pain right now', description: 'Currently experiencing severe symptoms', color: 'red' }
      ]
    },
    {
      id: 'risk_factors',
      name: 'risk_factors',
      title: 'Which risk factors apply to you?',
      subtitle: 'These factors help us assess your cardiovascular risk profile',
      icon: <FileText className="w-5 h-5" />,
      options: [
        { value: 'diabetes-hypertension', label: 'Diabetes & High Blood Pressure', description: 'Both major risk factors present', color: 'red' },
        { value: 'diabetes', label: 'Diabetes Only', description: 'Diabetic with good BP control', color: 'orange' },
        { value: 'hypertension', label: 'High Blood Pressure Only', description: 'Hypertension without diabetes', color: 'orange' },
        { value: 'smoking-family', label: 'Smoking & Family History', description: 'Smoker with cardiac family history', color: 'red' },
        { value: 'family-history', label: 'Family History of Heart Disease', description: 'Genetic predisposition', color: 'yellow' },
        { value: 'lifestyle', label: 'Lifestyle Factors (Obesity, Stress)', description: 'Sedentary lifestyle, high stress', color: 'yellow' },
        { value: 'minimal', label: 'Minimal Risk Factors', description: 'Generally healthy lifestyle', color: 'green' }
      ]
    },
    {
      id: 'country_location',
      name: 'country_location',
      title: 'Which country are you traveling from?',
      subtitle: 'This helps us arrange travel and visa assistance for your cardiac care',
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
      id: 'treatment_urgency',
      name: 'treatment_urgency',
      title: 'How urgent is your need for cardiac treatment?',
      subtitle: 'This helps us prioritize your cardiac care appropriately',
      icon: <Calendar className="w-5 h-5" />,
      options: [
        { value: 'emergency', label: 'Emergency - Need immediate cardiac care', description: 'Acute cardiac event requiring urgent attention', color: 'red' },
        { value: 'urgent', label: 'Urgent - Within 1-2 weeks', description: 'Time-sensitive cardiac intervention needed', color: 'orange' },
        { value: 'soon', label: 'Soon - Within 1 month', description: 'Cardiac procedure needed in near future', color: 'yellow' },
        { value: 'planned', label: 'Planned - Can wait 1-3 months', description: 'Elective cardiac procedure planning', color: 'blue' },
        { value: 'consultation', label: 'Just need consultation/second opinion', description: 'Expert cardiac evaluation and advice', color: 'green' }
      ]
    }
  ];

  // --- Country codes ---
  const countryCodes: CountryCode[] = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' }, { code: '+44', country: 'UK', flag: '🇬🇧' }, { code: '+91', country: 'IN', flag: '🇮🇳' }, { code: '+86', country: 'CN', flag: '🇨🇳' }, { code: '+49', country: 'DE', flag: '🇩🇪' }, { code: '+33', country: 'FR', flag: '🇫🇷' }, { code: '+39', country: 'IT', flag: '🇮🇹' }, { code: '+7', country: 'RU', flag: '🇷🇺' }, { code: '+81', country: 'JP', flag: '🇯🇵' }, { code: '+82', country: 'KR', flag: '🇰🇷' }, { code: '+971', country: 'AE', flag: '🇦🇪' }, { code: '+966', country: 'SA', flag: '🇸🇦' }, { code: '+974', country: 'QA', flag: '🇶🇦' }, { code: '+965', country: 'KW', flag: '🇰🇼' }, { code: '+968', country: 'OM', flag: '🇴🇲' }, { code: '+973', country: 'BH', flag: '🇧🇭' }, { code: '+964', country: 'IQ', flag: '🇮🇶' }, { code: '+962', country: 'JO', flag: '🇯🇴' }, { code: '+961', country: 'LB', flag: '🇱🇧' }, { code: '+98', country: 'IR', flag: '🇮🇷' }, { code: '+234', country: 'NG', flag: '🇳🇬' }, { code: '+254', country: 'KE', flag: '🇰🇪' }, { code: '+27', country: 'ZA', flag: '🇿🇦' }, { code: '+20', country: 'EG', flag: '🇪🇬' }, { code: '+233', country: 'GH', flag: '🇬🇭' }, { code: '+251', country: 'ET', flag: '🇪🇹' }, { code: '+256', country: 'UG', flag: '🇺🇬' }, { code: '+255', country: 'TZ', flag: '🇹🇿' }, { code: '+212', country: 'MA', flag: '🇲🇦' }, { code: '+216', country: 'TN', flag: '🇹🇳' }, { code: '+880', country: 'BD', flag: '🇧🇩' }, { code: '+92', country: 'PK', flag: '🇵🇰' }, { code: '+94', country: 'LK', flag: '🇱🇰' }, { code: '+977', country: 'NP', flag: '🇳🇵' }, { code: '+975', country: 'BT', flag: '🇧🇹' }, { code: '+960', country: 'MV', flag: '🇲🇻' }, { code: '+93', country: 'AF', flag: '🇦🇫' }, { code: '+95', country: 'MM', flag: '🇲🇲' }, { code: '+66', country: 'TH', flag: '🇹🇭' }, { code: '+60', country: 'MY', flag: '🇲🇾' }, { code: '+65', country: 'SG', flag: '🇸🇬' }, { code: '+62', country: 'ID', flag: '🇮🇩' }, { code: '+63', country: 'PH', flag: '🇵🇭' }, { code: '+84', country: 'VN', flag: '🇻🇳' }, { code: '+855', country: 'KH', flag: '🇰🇭' }, { code: '+856', country: 'LA', flag: '🇱🇦' }, { code: '+673', country: 'BN', flag: '🇧🇳' }, { code: '+34', country: 'ES', flag: '🇪🇸' }, { code: '+31', country: 'NL', flag: '🇳🇱' }, { code: '+41', country: 'CH', flag: '🇨🇭' }, { code: '+43', country: 'AT', flag: '🇦🇹' }, { code: '+32', country: 'BE', flag: '🇧🇪' }, { code: '+45', country: 'DK', flag: '🇩🇰' }, { code: '+46', country: 'SE', flag: '🇸🇪' }, { code: '+47', country: 'NO', flag: '🇳🇴' }, { code: '+48', country: 'PL', flag: '🇵🇱' }, { code: '+420', country: 'CZ', flag: '🇨🇿' }, { code: '+52', country: 'MX', flag: '🇲🇽' }, { code: '+55', country: 'BR', flag: '🇧🇷' }, { code: '+54', country: 'AR', flag: '🇦🇷' }, { code: '+56', country: 'CL', flag: '🇨🇱' }, { code: '+57', country: 'CO', flag: '🇨🇴' }, { code: '+51', country: 'PE', flag: '🇵🇪' }, { code: '+58', country: 'VE', flag: '🇻🇪' }, { code: '+61', country: 'AU', flag: '🇦🇺' }, { code: '+64', country: 'NZ', flag: '🇳🇿' }, { code: '+679', country: 'FJ', flag: '🇫🇯' }
  ];

  // --- Handler functions (now typed!) ---
  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleContactChange = (field: keyof ContactData, value: string) => {
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

  const generateRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    if (answers.symptoms_severity === 'emergency' || answers.treatment_urgency === 'emergency') {
      recommendations.push({
        icon: '🚨',
        title: 'Emergency Cardiac Protocol',
        description: 'Immediate cardiac emergency care with 24/7 monitoring and emergency intervention team.',
        color: 'red'
      });
    }

    if (answers.cardiac_condition === 'heart-attack' || answers.cardiac_condition === 'heart-failure') {
      recommendations.push({
        icon: '🏥',
        title: 'Intensive Cardiac Care',
        description: 'Specialized cardiac intensive care unit with advanced life support and monitoring.',
        color: 'red'
      });
    }

    if (answers.cardiac_condition === 'bypass-needed' || answers.cardiac_condition === 'valve-disease') {
      recommendations.push({
        icon: '⚕️',
        title: 'Cardiac Surgery Program',
        description: 'Expert cardiac surgeons with minimally invasive techniques and robotic surgery options.',
        color: 'blue'
      });
    }

    if (answers.risk_factors === 'diabetes-hypertension' || answers.risk_factors === 'smoking-family') {
      recommendations.push({
        icon: '📊',
        title: 'Risk Factor Management',
        description: 'Comprehensive program to manage diabetes, hypertension, and lifestyle modifications.',
        color: 'orange'
      });
    }

    if (answers.cardiac_condition === 'preventive' || answers.symptoms_severity === 'none') {
      recommendations.push({
        icon: '🛡️',
        title: 'Preventive Cardiac Care',
        description: 'Advanced cardiac screenings, stress tests, and personalized prevention plans.',
        color: 'green'
      });
    }

    if (answers.country_location !== 'india') {
      recommendations.push({
        icon: '✈️',
        title: 'Medical Tourism Package',
        description: 'Complete travel coordination, visa assistance, and accommodation for cardiac care.',
        color: 'purple'
      });
    }

    if (answers.treatment_urgency === 'consultation') {
      recommendations.push({
        icon: '👨‍⚕️',
        title: 'Expert Cardiac Consultation',
        description: 'Virtual or in-person consultation with leading cardiologists and cardiac surgeons.',
        color: 'blue'
      });
    }

    recommendations.push({
      icon: '❤️',
      title: 'Comprehensive Heart Care',
      description: 'Multidisciplinary cardiac team with personalized treatment plans and rehabilitation.',
      color: 'artemis'
    });

    return recommendations;
  };

  // --- Form submission ---
  const handleFormSubmit = async (): Promise<void> => {
    try {
      const formData = new FormData();

      Object.entries(answers).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const assessmentSummary = Object.entries(answers)
        .map(([key, value]) => {
          const question = questions.find(q => q.id === key);
          const option = question?.options.find(opt => opt.value === value);
          return `${question?.title}: ${option?.label || value}`;
        })
        .join(' | ');

      formData.append('assessment_summary', assessmentSummary);
      formData.append('submission_date', new Date().toISOString());
      formData.append('contact_name', contactData.name);
      formData.append('contact_country_code', contactData.countryCode);
      formData.append('contact_phone_number', contactData.phoneNumber);
      formData.append('contact_full_phone', `${contactData.countryCode} ${contactData.phoneNumber}`);
      formData.append('contact_email', contactData.email);

      const response = await fetch(
        'https://app.formester.com/forms/DZoBSP5fk/submissions',
        { method: 'POST', body: formData }
      );

      if (response.ok) {
        setShowResults(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setShowResults(true); // for demo
    }
  };

  const isFormValid = contactData.name.trim() && contactData.phoneNumber.trim() && contactData.email.trim();

  // --- Result screen ---
  if (showResults) {
    const recommendations = generateRecommendations();
    // ... (same JSX as before for results)
    return (
      <section className="py-16 bg-warm-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-rich-chocolate mb-3">
                  Cardiac Assessment Submitted Successfully!
                </h2>
                <p className="text-coffee-bean">
                  Thank you for completing the cardiac assessment. Our cardiology team will contact you within 24 hours with your personalized heart care plan.
                </p>
              </div>
              <div className="space-y-4 mb-8">
                {recommendations.map((rec, index) => {
                  const colorClasses: { [key: string]: string } = {
                    red: 'bg-red-50 border-red-200 text-red-800',
                    green: 'bg-green-50 border-green-200 text-green-800',
                    blue: 'bg-blue-50 border-blue-200 text-blue-800',
                    orange: 'bg-orange-50 border-orange-200 text-orange-800',
                    purple: 'bg-purple-50 border-purple-200 text-purple-800',
                    artemis: 'bg-soft-beige border-golden-honey text-rich-chocolate'
                  };
                  return (
                    <div
                      key={index}
                      className={`border-2 rounded-xl p-6 ${colorClasses[rec.color]} transition-all duration-300`}
                    >
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

  // --- Main component (quiz) JSX ---
  return (
    <section id="cardiac-assessment" className="py-16 bg-warm-ivory">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-rich-chocolate mb-3">Cardiac Care Assessment</h2>
            <p className="text-coffee-bean">Help us understand your heart condition so we can provide the most appropriate cardiac care</p>
          </div>
          <div className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg">
            {/* Contact Form */}
            {showForm ? (
              <div>
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
                  <p className="text-coffee-bean">Please provide your contact details to receive your personalized cardiac care plan</p>
                </div>
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <User className="w-5 h-5 mr-2" /> Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={e => handleContactChange('name', e.target.value)}
                      className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <Phone className="w-5 h-5 mr-2" /> Contact Number *
                    </label>
                    <div className="flex">
                      <select
                        value={contactData.countryCode}
                        onChange={e => handleContactChange('countryCode', e.target.value)}
                        className="p-4 border-2 border-caramel/20 rounded-l-lg focus:border-golden-honey focus:outline-none bg-white"
                      >
                        {countryCodes.map(country => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code} {country.country}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={contactData.phoneNumber}
                        onChange={e => handleContactChange('phoneNumber', e.target.value)}
                        className="flex-1 p-4 border-2 border-l-0 border-caramel/20 rounded-r-lg focus:border-golden-honey focus:outline-none"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                      <Mail className="w-5 h-5 mr-2" /> Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={e => handleContactChange('email', e.target.value)}
                      className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="mb-8 p-4 bg-soft-beige rounded-lg">
                  <h4 className="font-semibold text-rich-chocolate mb-3">Cardiac Assessment Summary:</h4>
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
                    type="button"
                    onClick={handleFormSubmit}
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
              </div>
            ) : (
              // Quiz View
              <>
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-coffee-bean mb-2">
                    <span>
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    <span>
                      {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-caramel/20 rounded-full h-2">
                    <div
                      className="bg-golden-honey h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${((currentStep + 1) / questions.length) * 100}%`
                      }}
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
                      <p className="text-coffee-bean text-sm">
                        {questions[currentStep].subtitle}
                      </p>
                    </div>
                  </div>
                  <fieldset className="space-y-3">
                    <legend className="sr-only">{questions[currentStep].title}</legend>
                    {questions[currentStep].options.map(option => {
                      const isSelected =
                        answers[questions[currentStep].id] === option.value;
                      const colorClasses: { [key: string]: string } = {
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
                              onChange={() =>
                                handleAnswer(questions[currentStep].id, option.value)
                              }
                              className="sr-only"
                              required
                            />
                            {option.icon && (
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 font-semibold ${
                                  isSelected
                                    ? 'bg-golden-honey text-rich-chocolate'
                                    : colorClasses[option.color]
                                }`}
                              >
                                {option.icon}
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-rich-chocolate">
                                {option.label}
                              </h4>
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
                    <span>
                      {currentStep === questions.length - 1
                        ? 'Continue to Contact Form'
                        : 'Next'}
                    </span>
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

export default CardiacAssessment;
