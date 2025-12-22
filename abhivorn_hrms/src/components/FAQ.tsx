import React, { useState } from "react";
import { ChevronDown, MessageCircle, Mail, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your bill accordingly.",
    category: "Billing",
  },
  {
    question: "Is there a contract?",
    answer: "No, all plans are month-to-month with no long-term contracts. You can cancel anytime with no hidden fees.",
    category: "Billing",
  },
  {
    question: "How does billing work?",
    answer: "Billing is done monthly via your registered credit card. You'll receive an invoice via email, and we accept all major credit cards. We process payments securely through Stripe.",
    category: "Billing",
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! We offer a 20% discount for annual payments. We also have special pricing programs for non-profits, students, and educational institutions.",
    category: "Pricing",
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely. We offer a 14-day free trial on all paid plans with full access to all features. No credit card is required to start your trial.",
    category: "Pricing",
  },
  {
    question: "What support is included?",
    answer: "All plans include email support with a guaranteed 24-hour response time. Pro and Enterprise plans also get access to priority chat support and dedicated account management.",
    category: "Support",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", "Billing", "Pricing", "Support"];

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="h-3 w-3" />
            Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the product and billing.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          layout
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  key={`${activeCategory}-${idx}`} // Force re-render on category change for animation
                  className={`group rounded-2xl border transition-all duration-300 ${isOpen
                    ? "bg-white dark:bg-gray-800 border-primary-200 dark:border-primary-800 shadow-md"
                    : "bg-gray-50 dark:bg-gray-800/30 border-transparent hover:bg-white dark:hover:bg-gray-800 hover:shadow-md dark:hover:border-gray-700"
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-start justify-between p-5 text-left focus:outline-none"
                  >
                    <span className={`text-base sm:text-lg font-semibold pr-8 transition-colors ${isOpen ? "text-primary-600 dark:text-primary-400" : "text-gray-900 dark:text-white"
                      }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${isOpen
                      ? "border-primary-600 text-primary-600 bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:bg-primary-900/20 rotate-180"
                      : "border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400 group-hover:border-primary-400 group-hover:text-primary-500"
                      }`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-4 mt-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-10 border-t border-gray-100 dark:border-gray-800 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;