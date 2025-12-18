import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    question: "Is there a contract?",
    answer: "No, all plans are month-to-month with no long-term contracts.",
  },
  {
    question: "How does billing work?",
    answer: "Billing is done monthly via your registered credit card.",
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes, we offer discounts for annual payments and non-profits.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Common questions about pricing and plans
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between
                             px-4 sm:px-5 py-4 sm:py-5
                             text-left focus:outline-none"
                >
                  <span
                    className={`text-sm sm:text-base font-medium ${
                      isOpen ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
  
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
};

export default FAQ;
