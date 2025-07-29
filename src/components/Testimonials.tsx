import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    
    {
      title: "John's Experience",
      name: '69-year-old, Mrs. Maria Munjanja',
      location: 'Zimbabwe',
      description: 'She underwent a life-changing bone marrow transplant to combat multiple myeloma. Witness her triumphant journey to renewed health!',
      image: 'unnamed.webp'
    },
    {
      title: "Mary's Breakthrough",
      name: 'Master Emmanuel Kenyi',
      location: 'South Sudan',
      description: '13-year struggle through a life-saving bone marrow transplant at Artemis Hospital.',
      image: 'unnamed (1).webp'
    },
    // {
    //   title: "David's Testimonial",
    //   name: 'Mr. Chishimba Mukonde',
    //   location: 'Zambia',
    //   description: 'A diabetic patient, was suffering from Prostate Cancer for quite some time. He consulted Dr. Rajiv Yadav, Chairperson-Urology & Head-Urologic Oncology & Robotic Surgery at Artemis Hospitals.',
    //   image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   title: "Recovery Story",
    //   name: 'Mr. Duncan Kizito',
    //   location: 'Kenya',
    //   description: 'He overcomes a challenging glottic tumor with the expert care at Artemis Hospital.',
    //   image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    {
      title: "Hope & Healing",
      name: 'Patient Success Story',
      location: 'International Patient',
      description: 'Another inspiring journey of recovery and hope through world-class oncology care at Artemis Hospital.',
      image: 'Int-Patients.webp'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-soft-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-4">
            Patient Success Stories
          </h2>
          <p className="text-coffee-bean text-lg max-w-3xl mx-auto">
            Real stories from real patients who have experienced transformative results through our dedicated care and innovative treatment approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-soft-beige rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-rich-chocolate/60 flex items-center justify-center">
                  <div className="text-center text-cream-white">
                    <div className="w-16 h-16 bg-golden-honey/80 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-rich-chocolate" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="font-semibold text-lg">{testimonial.title}</p>
                    <p className="text-cream-white/80 text-sm">{testimonial.name}</p>
                    <p className="text-golden-honey text-sm">{testimonial.location}</p>
                  </div>
                </div> */}
              </div>
              {/* <p className="text-coffee-bean text-sm leading-relaxed">"{testimonial.description}"</p> */}
            </div>
          ))}
        </div>

        {/* Patient Reviews Section */}
        <div className="bg-soft-beige rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-rich-chocolate mb-4">Patient Reviews</h3>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-golden-honey fill-current" />
              ))}
              <span className="ml-2 text-coffee-bean font-semibold">4.9/5 Rating</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream-white rounded-xl p-8 text-center shadow-lg">
              <Quote className="w-12 h-12 text-golden-honey mx-auto mb-6" />
              <p className="text-coffee-bean text-lg leading-relaxed mb-6 italic">
                "Exceptional care and treatment. The doctors are highly skilled and compassionate. I felt confident throughout my treatment journey at Artemis Hospital."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Patient" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-golden-honey"
                />
                <div>
                  <p className="font-semibold text-rich-chocolate">Sarah Johnson</p>
                  <p className="text-coffee-bean text-sm">Cancer Survivor, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-rich-chocolate rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cream-white mb-4">
              Sharing the Incredible Story of a Cancer Survivor!
            </h3>
            <p className="text-cream-white/80 mb-6 text-lg">
              Get ready to be inspired as we honor the strength and courage of remarkable cancer survivors.
            </p>
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
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;