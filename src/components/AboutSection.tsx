
import { Award, Users, Globe, HeartPulse } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-8 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-6">
            India’s Leading Destination for World-Class Cardiac Care
          </h2>
          <div className="max-w-5xl mx-auto text-coffee-bean leading-relaxed text-lg">
            <p className="mb-6">
              At Artemis Hospitals, we provide advanced and compassionate heart care with a team of renowned cardiologists, cardiac surgeons, and multidisciplinary specialists. From preventive screenings to complex surgeries, our personalized cardiac programs ensure every patient receives the highest level of care.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Cutting-Edge Technology</h3>
            <p className="text-coffee-bean text-sm">Latest cardiac imaging, robotic surgeries, and AI-assisted diagnostics</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Team-Based Expertise</h3>
            <p className="text-coffee-bean text-sm">Cardiologists, surgeons, and rehab experts under one roof</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">International Heart Center</h3>
            <p className="text-coffee-bean text-sm">Trusted by patients across 40+ countries</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Compassionate Cardiac Care</h3>
            <p className="text-coffee-bean text-sm">Patient-first approach with continuous emotional and physical support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
