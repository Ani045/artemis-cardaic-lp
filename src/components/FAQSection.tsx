import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are the major key points related to conditions treated in cardiology?",
      answer: "Our cardiology department manages a wide spectrum of heart conditions including coronary artery disease, heart attacks, heart failure, arrhythmias, valvular heart diseases, congenital heart defects, and cardiomyopathies. We offer comprehensive evaluation, diagnostic testing, medical management, and advanced interventional and surgical procedures."
    },
    {
      question: "Under what circumstances should I consult a cardiologist?",
      answer: "You should seek a cardiologist if you experience chest pain, shortness of breath, palpitations, dizziness, high blood pressure, swelling of the legs, have a history of heart disease, or have significant risk factors such as diabetes, smoking, high cholesterol, or a strong family history of heart conditions."
    },
    {
      question: "How many subtypes does cardiology have and what are they?",
      answer: "Cardiology includes interventional cardiology (stent placement, angioplasty), electrophysiology (heart rhythm disorders), heart failure and transplant cardiology, pediatric cardiology (children's heart care), preventive cardiology, and non-invasive cardiology (diagnostic imaging and stress tests)."
    },
    {
      question: "What are alternative treatment options to cardiac surgery?",
      answer: "Alternatives to open-heart surgery may include lifestyle changes, medications, minimally invasive procedures like angioplasty and stenting, catheter-based therapies, and device implantation. The best approach depends on your specific condition, severity, and overall health status."
    },
    {
      question: "What does minimally invasive heart surgery mean and when is it used?",
      answer: "Minimally invasive heart surgery involves smaller incisions and advanced instruments (including robotic assistance) to treat cardiac conditions, resulting in less pain and faster recovery. It is used for select valve repairs, coronary bypasses, and other structural heart issues when appropriate."
    },
    {
      question: "How long does it take to recover after cardiac treatment?",
      answer: "Recovery varies based on the type of treatment, underlying heart condition, and your general health. Simple procedures may require a few days of rest, while major surgeries can require several weeks or months. Our team provides individualized recovery and rehabilitation plans to support your journey."
    },
    {
      question: "Are there risks involved in cardiac treatments?",
      answer: "All medical and surgical cardiac treatments carry potential risks and side effects, such as bleeding, infection, or arrhythmias. Our experienced team thoroughly assesses your risk to ensure safe and effective treatment, providing close monitoring and support throughout your care."
    },
    {
      question: "What should I do before starting cardiac treatment?",
      answer: "Before treatment, you’ll undergo thorough evaluation including history, examination, ECG, blood tests, echocardiography and other imaging. It’s important to discuss your concerns, understand your treatment options, prepare for required lifestyle adjustments, and arrange for support as needed."
    },
    {
      question: "What should I say during my first visit to a cardiologist?",
      answer: "Share your symptoms, medical history, family history of heart disease, medications, lifestyle habits, and any concerns you have. Bring all relevant test results, previous records, and list any questions. Our cardiologists will guide you through each step of the consultation."
    },
    {
      question: "How can I prevent heart disease?",
      answer: "While some risk factors can’t be changed, you can lower your risk by not smoking, maintaining a healthy diet, exercising regularly, controlling blood pressure and cholesterol, managing stress, limiting alcohol, and getting regular cardiac screenings as recommended by your doctor."
    }
  ];
  

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-cream-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-chocolate mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-coffee-bean text-lg max-w-3xl mx-auto">
            Get answers to common questions about oncology care and treatment at Artemis Hospital
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-soft-beige rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream-white transition-colors"
              >
                <span className="font-semibold text-rich-chocolate pr-4">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-golden-honey flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-golden-honey flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-caramel/20 pt-4">
                    <p className="text-coffee-bean leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;