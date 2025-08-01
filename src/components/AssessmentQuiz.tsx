import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  Calendar,
  FileText,
  MapPin,
  Clock,
  User,
  Phone,
  Mail
} from 'lucide-react';

const cardiacQuestions = [
  {
    id: 'cardiac_condition',
    name: 'cardiac_condition',
    title: 'What is your primary cardiac concern?',
    subtitle: 'This helps us understand your heart condition and symptoms',
    icon: <Shield className="w-5 h-5" />,
    options: [
      { value: 'chest-pain', label: 'Chest Pain/Angina', description: 'Chest discomfort or pain', icon: '💔', color: 'red' },
      { value: 'heart-attack', label: 'Heart Attack (Recent/Past)', description: 'Myocardial infarction', icon: '🚨', color: 'red' },
      { value: 'heart-failure', label: 'Heart Failure', description: 'Weakened heart function', icon: '💙', color: 'blue' },
      { value: 'arrhythmia', label: 'Irregular Heartbeat', description: 'Arrhythmia or palpitations', icon: '⚡', color: 'yellow' },
      { value: 'valve-disease', label: 'Heart Valve Disease', description: 'Valve stenosis or regurgitation', icon: '🔄', color: 'purple' },
      { value: 'bypass-needed', label: 'Need Bypass Surgery', description: 'Coronary artery bypass required', icon: '🛤️', color: 'orange' },
      { value: 'preventive', label: 'Preventive Care/Screening', description: 'Risk assessment and prevention', icon: '🛡️', color: 'green' },
      
    ],
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

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  // Add more as needed
];

export default function CardiacAssessment() {
  const [currentStep, setCurrentStep] = useState(0); // 0-4 = questions, 5 = contact, 6 = submitted
  const [answers, setAnswers] = useState({});
  const [contactData, setContactData] = useState({
    name: '',
    countryCode: '+91',
    phoneNumber: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const isContactValid =
    contactData.name.trim() !== '' &&
    contactData.phoneNumber.trim() !== '' &&
    contactData.email.trim() !== '';

  const handleAnswer = (id, value) => {
    setAnswers(a => ({ ...a, [id]: value }));
  };

  const handleContactChange = (field, value) => {
    setContactData(cd => ({ ...cd, [field]: value }));
  };

  const handleSubmit = (e) => {
    if (currentStep === cardiacQuestions.length) {
      if (!isContactValid) {
        e.preventDefault();
        alert('Please fill out all contact fields.');
        return;
      }
      setSubmitted(true);
      // Allow native form submission to Formester
    } else {
      e.preventDefault(); // prevent submit if not in contact step
    }
  };

  if (submitted)
    return (
      <section className="py-8 bg-warm-ivory">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-rich-chocolate mb-3">
              Assessment Submitted Successfully!
            </h2>
            <p className="text-coffee-bean">
              Thank you for completing the cardiac assessment. Our team will contact you soon.
            </p>
          </div>
        </div>
      </section>
    );

  return (
    <section className="py-16 bg-warm-ivory" id="cardiac-assessment">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-rich-chocolate mb-3">Cardiac Care Assessment</h2>
          <p className="text-coffee-bean">
            Help us understand your heart condition so we can provide the most appropriate cardiac care
          </p>
        </div>

        <form
          acceptCharset="UTF-8"
          action="https://app.formester.com/forms/R4pvs0tX1/submissions"
          method="POST"
     
          className="bg-cream-white rounded-2xl p-8 border border-caramel/20 shadow-lg"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-coffee-bean mb-2">
              <span>
                {currentStep < cardiacQuestions.length
                  ? `Question ${currentStep + 1} of ${cardiacQuestions.length}`
                  : `Step ${cardiacQuestions.length + 1} of ${cardiacQuestions.length + 1}`}
              </span>
              <span>
                {Math.round(((currentStep + 1) / (cardiacQuestions.length + 1)) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-caramel/20 rounded-full h-2">
              <div
                className="bg-golden-honey h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentStep + 1) / (cardiacQuestions.length + 1)) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Steps */}
          {currentStep < cardiacQuestions.length && (
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center text-rich-chocolate font-bold text-lg">
                  {currentStep + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rich-chocolate">
                    {cardiacQuestions[currentStep].title}
                  </h3>
                  <p className="text-coffee-bean text-sm">{cardiacQuestions[currentStep].subtitle}</p>
                </div>
              </div>
              <fieldset className="space-y-3">
                <legend className="sr-only">{cardiacQuestions[currentStep].title}</legend>
                {cardiacQuestions[currentStep].options.map(option => {
                  const isSelected = answers[cardiacQuestions[currentStep].id] === option.value;
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
                      <input
                        type="radio"
                        name={cardiacQuestions[currentStep].name}
                        value={option.value}
                        checked={isSelected}
                        onChange={() => handleAnswer(cardiacQuestions[currentStep].id, option.value)}
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
                        <h4 className="font-semibold text-rich-chocolate">{option.label}</h4>
                        {option.description && (
                          <p className="text-coffee-bean text-sm">{option.description}</p>
                        )}
                      </div>
                      {isSelected && (
                        <CheckCircle className="w-5 h-5 text-golden-honey ml-2" />
                      )}
                    </label>
                  );
                })}
              </fieldset>
            </div>
          )}

          {/* Contact Form Step */}
          {currentStep === cardiacQuestions.length && (
            <div>
              {/* Quiz answers sent as hidden inputs */}
              {Object.entries(answers).map(([key, val]) => (
                <input key={key} type="hidden" name={key} value={val} />
              ))}

              {/* Summary & submission timestamp */}
              <input
                type="hidden"
                name="assessment_summary"
                value={Object.entries(answers)
                  .map(([key, val]) => {
                    const q = cardiacQuestions.find(qx => qx.id === key);
                    const o = q?.options?.find(o => o.value === val);
                    return `${q?.title}: ${o?.label || val}`;
                  })
                  .join(' | ')}
              />
              <input type="hidden" name="submission_date" value={new Date().toISOString()} />

              <div className="space-y-6">
                <div>
                  <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                    <User className="w-5 h-5 mr-2" /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="contact_name"
                    value={contactData.name}
                    onChange={e => handleContactChange('name', e.target.value)}
                    className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey"
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
                      name="contact_country_code"
                      value={contactData.countryCode}
                      onChange={e => handleContactChange('countryCode', e.target.value)}
                      className="p-4 border-2 border-caramel/20 rounded-l-lg bg-white"
                    >
                      {countryCodes.map(c => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} {c.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="contact_phone_number"
                      value={contactData.phoneNumber}
                      onChange={e => handleContactChange('phoneNumber', e.target.value)}
                      className="flex-1 p-4 border-2 border-l-0 border-caramel/20 rounded-r-lg focus:border-golden-honey"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <input
                    type="hidden"
                    name="contact_full_phone"
                    value={`${contactData.countryCode} ${contactData.phoneNumber}`}
                  />
                </div>
                <div>
                  <label className="flex items-center text-rich-chocolate font-semibold mb-3">
                    <Mail className="w-5 h-5 mr-2" /> Email Address *
                  </label>
                  <input
                    type="email"
                    name="contact_email"
                    value={contactData.email}
                    onChange={e => handleContactChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-caramel/20 rounded-lg focus:border-golden-honey"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
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
            {currentStep < cardiacQuestions.length ? (
              <button
                type="button"
                onClick={() => {
                  if (answers[cardiacQuestions[currentStep].id]) setCurrentStep(s => s + 1);
                  else alert('Please select an option to continue.');
                }}
                className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                  answers[cardiacQuestions[currentStep].id]
                    ? 'bg-golden-honey text-rich-chocolate hover:bg-deep-copper shadow-lg'
                    : 'bg-caramel/30 text-caramel cursor-not-allowed'
                }`}
              >
                <span>{currentStep === cardiacQuestions.length - 1 ? 'Continue to Contact Form' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isContactValid}
                className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isContactValid
                    ? 'bg-golden-honey text-rich-chocolate hover:bg-deep-copper shadow-lg'
                    : 'bg-caramel/30 text-caramel cursor-not-allowed'
                }`}
              >
                <span>Submit Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}


