import React from 'react';
import { Plane, FileText, Heart } from 'lucide-react';

const JourneySection = () => {
  const journeySteps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Visa Process',
      description: 'Our experts help you in getting a medical visa which makes the process easier for international patients. We manage the visa papers and quicken the process for patients who are seeking cardiac treatment overseas and this helps in reducing the waiting period to commence your care.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Hassle-Free Travel',
      description: 'We understand that for residents traveling to India and the Artemis Hospitals for the purposes of surgery, there are challenges. That is why we include comprehensive travel support so as to ease your travel as much as possible. Everything from logistical support to focusing on only treatment is managed by us so that you can concentrate on the treatment and recovering.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Right Doctor, Right Care',
      description: 'At Artemis Hospitals, we attract a diverse international patient population seeking world-class cardiac care from our highly qualified cardiologists. Equipped with cutting-edge technology and utilizing a multidisciplinary approach, we ensure the highest standard of care for every patient.',
      image: 'artemis-image.png'
    }
  ];

  return (
    <section className="py-16 bg-cream-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-4">
            Your Journey to Recovery
          </h2>
          <p className="text-coffee-bean text-lg max-w-3xl mx-auto">
            We make your medical journey seamless with comprehensive support at every step
          </p>
        </div>

        <div className="space-y-16">
          {journeySteps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-soft-beige rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mr-4">
                      <div className="text-rich-chocolate">{step.icon}</div>
                    </div>
                    <div>
                      <div className="text-golden-honey font-semibold text-sm mb-1">Step {index + 1}</div>
                      <h3 className="text-2xl font-bold text-rich-chocolate">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-coffee-bean leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-chocolate/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 bg-cream-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-rich-chocolate font-semibold">{step.title}</div>
                    <div className="text-coffee-bean text-sm">Professional Support</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 bg-soft-beige rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-rich-chocolate text-center mb-8">
            Your Complete Care Timeline
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center mb-3">
                <span className="text-rich-chocolate font-bold">1</span>
              </div>
              <h4 className="font-semibold text-rich-chocolate mb-2">Initial Consultation</h4>
              <p className="text-coffee-bean text-sm">Medical assessment and treatment planning</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-golden-honey"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center mb-3">
                <span className="text-rich-chocolate font-bold">2</span>
              </div>
              <h4 className="font-semibold text-rich-chocolate mb-2">Travel Arrangements</h4>
              <p className="text-coffee-bean text-sm">Visa processing and travel coordination</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-golden-honey"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center mb-3">
                <span className="text-rich-chocolate font-bold">3</span>
              </div>
              <h4 className="font-semibold text-rich-chocolate mb-2">Treatment Phase</h4>
              <p className="text-coffee-bean text-sm">Comprehensive cardiac care and support</p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-golden-honey"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-golden-honey rounded-full flex items-center justify-center mb-3">
                <span className="text-rich-chocolate font-bold">4</span>
              </div>
              <h4 className="font-semibold text-rich-chocolate mb-2">Recovery & Follow-up</h4>
              <p className="text-coffee-bean text-sm">Ongoing care and monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;