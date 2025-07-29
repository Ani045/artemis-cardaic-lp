import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-8 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-6">
            Discover India's Top-Rated Cancer Care at Artemis Hospitals Today
          </h2>
          <div className="max-w-5xl mx-auto text-coffee-bean leading-relaxed text-lg">
            <p className="mb-6">
              Artemis Hospitals take immense pride in providing world-class oncology services and have a very well qualified and experienced team of oncologists to treat all types of cancer. Our expert, board-certified oncologists work together with our board-certified Radiation Oncologists and other specialists in a team to formulate a personalized plan for treating each patient based on their specific disease and clinical needs.
            </p>
            
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Advanced Technology</h3>
            <p className="text-coffee-bean text-sm">State-of-the-art equipment and innovative treatment methods</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Multidisciplinary Team</h3>
            <p className="text-coffee-bean text-sm">Collaborative approach with specialists across all fields</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Global Patient Care</h3>
            <p className="text-coffee-bean text-sm">Comprehensive support for international patients</p>
          </div>
          <div className="bg-cream-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-golden-honey rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-rich-chocolate" />
            </div>
            <h3 className="font-bold text-rich-chocolate mb-2">Compassionate Care</h3>
            <p className="text-coffee-bean text-sm">Patient-centered approach with emotional support</p>
          </div>
        </div>

        {/* Hassle-Free Treatment Section */}
        {/* <div className="bg-cream-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-rich-chocolate mb-4">
              Hassle-Free Oncology Treatment Plan
            </h3>
            <p className="text-coffee-bean leading-relaxed text-lg max-w-4xl mx-auto">
              Because becoming a patient overseas can be rather challenging, Artemis Hospitals has developed simple and advanced oncology treatment plans tailored to each patient. We guarantee that individual members of every family's needs are addressed in the framework of the latest scientific achievements in medicine and relevant advancements in surgery.
            </p>
          </div>
          
          <div className="bg-soft-beige rounded-xl p-6 mb-8">
            <p className="text-coffee-bean leading-relaxed text-center">
              A work group of over four hundred trained health care professionals, we emphasize personalized care which makes it possible to care for every cancer patient throughout his/her treatment period. So if you're looking for oncology experts, Artemis Hospitals are the best place. Your healthy life is our top priority as we provide all the resources and focus.
            </p>
          </div>

          <div className="text-center">
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
              }}
              className="bg-golden-honey text-rich-chocolate px-8 py-4 rounded-lg font-semibold hover:bg-deep-copper transition-colors shadow-lg"
            >
              Start Your Treatment Journey Today!
            </button>
          </div>
        </div> */}

        {/* Right Doctor, Right Care Section */}
        {/* <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-rich-chocolate mb-6">
              Right Doctor, Right Care
            </h3>
            <p className="text-coffee-bean leading-relaxed mb-6">
              At Artemis Hospitals, we attract a diverse international patient population seeking world-class cancer care from our highly qualified oncologists. Equipped with cutting-edge technology and utilizing a multidisciplinary approach, including advanced diagnostic techniques and complex surgical interventions, we ensure the highest standard of care for every patient.
            </p>
            <p className="text-coffee-bean leading-relaxed">
              Our dedicated oncology departments are designed with patient comfort, safety, and well-being as a top priority, staffed by skilled professionals trained to address the specific needs of those undergoing cancer treatment. Our vision is to provide unparalleled oncology services, combining state-of-the-art facilities with compassionate care.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Doctor with patient" 
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-golden-honey rounded-xl p-4 shadow-lg">
              <div className="text-rich-chocolate font-bold text-lg">400+</div>
              <div className="text-rich-chocolate text-sm">Expert Doctors</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;