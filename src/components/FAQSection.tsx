import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are the major key points related to conditions treated in oncology?",
      answer: "Our oncology department treats all types of cancers including breast, lung, prostate, colorectal, brain, blood cancers, and many rare cancers. We provide comprehensive care from diagnosis to treatment and follow-up with advanced surgical techniques, chemotherapy, radiation therapy, and immunotherapy."
    },
    {
      question: "Under what circumstances do I seek the help of an oncologist?",
      answer: "You should consult an oncologist if you have been diagnosed with cancer, have suspicious symptoms, need a second opinion, require specialized cancer screening due to family history or genetic factors, or if your primary care physician refers you for further evaluation."
    },
    {
      question: "How many subtypes does oncology have and what are they?",
      answer: "Oncology includes medical oncology (chemotherapy, immunotherapy), surgical oncology (cancer surgery), radiation oncology (radiation therapy), and specialized areas like pediatric oncology, gynecologic oncology, neuro-oncology, hematology-oncology, and thoracic oncology."
    },
    {
      question: "What can be the alternative options towards surgical intervention in oncology?",
      answer: "Alternatives to surgery include chemotherapy, radiation therapy, immunotherapy, targeted therapy, hormone therapy, and newer treatments like CAR-T cell therapy. The best approach depends on cancer type, stage, patient's overall health, and individual factors."
    },
    {
      question: "What do you mean by minimally invasive cancer surgery and when can it be applied?",
      answer: "Minimally invasive surgery uses small incisions, laparoscopic or robotic techniques to remove tumors with less trauma, reduced pain, shorter hospital stays, and faster recovery compared to traditional open surgery. It can be applied when technically feasible and oncologically safe."
    },
    {
      question: "After undergoing cancer treatment, how much time does it take to recover?",
      answer: "Recovery time varies greatly depending on the type of cancer, treatment received, patient's overall health, and individual factors. It can range from weeks to months. Our team provides personalized recovery plans and ongoing support throughout the healing process."
    },
    {
      question: "While seeking treatment for cancer, is one prone to certain risks?",
      answer: "Like all medical treatments, cancer therapies carry potential risks and side effects. However, our experienced team carefully evaluates each patient to minimize risks while maximizing treatment benefits. We provide comprehensive support to manage any side effects that may occur."
    },
    {
      question: "What do I need to do before getting cancer treatment?",
      answer: "Before treatment, you'll need comprehensive evaluation including medical history, physical examination, diagnostic tests, and staging. We also recommend getting a second opinion, understanding treatment options, preparing mentally and emotionally, and arranging support systems."
    },
    {
      question: "What do I say when I first visit the doctor that treats cancer?",
      answer: "Be prepared to discuss your symptoms, medical history, family history of cancer, current medications, and any concerns you have. Bring all relevant medical records, test results, and a list of questions. Our doctors will guide you through the consultation process."
    },
    {
      question: "Are there ways I can stop myself from getting cancer?",
      answer: "While not all cancers can be prevented, you can reduce risk through healthy lifestyle choices: avoid tobacco, limit alcohol, maintain healthy weight, exercise regularly, eat a balanced diet, protect from sun exposure, get vaccinated, and undergo regular screenings as recommended."
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