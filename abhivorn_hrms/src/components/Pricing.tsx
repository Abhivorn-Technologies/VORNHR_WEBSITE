import React, { useState } from "react";
import { Check, Star, Zap, Users, Shield, Globe, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for small teams",
      icon: Users,
      employees: "Up to 50 employees",
      monthlyPrice: 1999,
      popular: false,
      isFree: false,
      features: [
        "Up to 50 employees",
        "Basic HR features",
        "Email support",
        "Mobile app",
        "5GB storage",
        "Basic analytics",
      ],
      cta: "Get Started",
      color: "blue",
    },
    {
      name: "Professional",
      tagline: "Best for growing companies",
      icon: Zap,
      employees: "Up to 200 employees",
      monthlyPrice: 4999,
      popular: true,
      isFree: false,
      features: [
        "Up to 200 employees",
        "Advanced analytics",
        "Priority support",
        "Payroll processing",
        "Compliance management",
        "API access",
        "Custom workflows",
        "Training modules",
      ],
      cta: "Most Popular",
      color: "purple",
    },
    {
      name: "Enterprise",
      tagline: "For large organizations",
      icon: Globe,
      employees: "Unlimited employees",
      monthlyPrice: null,
      popular: false,
      isFree: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "Custom onboarding",
      ],
      cta: "Contact Sales",
      color: "gray",
    },
    {
      name: "Free Trial",
      tagline: "Try everything risk-free",
      icon: Sparkles,
      employees: "Up to 50 employees",
      monthlyPrice: 0,
      popular: false,
      isFree: true,
      features: [
        "30-day free trial",
        "Up to 50 employees",
        "All core HR features",
        "Email & chat support",
        "Mobile app access",
        "Basic reports",
      ],
      cta: "Start Free Trial",
      color: "green",
    },
  ];

  const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section id="pricing" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-clean">
        {/* HEADER */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
          >
            <TrendingUp className="h-4 w-4" />
            Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-gray-900 dark:text-white mb-3"
          >
            Simple, transparent pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Start free, scale as you grow. No hidden fees.
          </motion.p>

          {/* TOGGLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 mb-8"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all ${!isAnnual
                ? "bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-1.5 rounded-md text-sm font-medium transition-all flex items-center ${isAnnual
                ? "bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                Save 10%
              </span>
            </button>
          </motion.div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const annualPrice = plan.monthlyPrice !== null ? plan.monthlyPrice * 12 * 0.9 : null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative rounded-lg border transition-all duration-300 hover:shadow-xl h-full flex flex-col ${plan.popular
                  ? "border-primary-300 dark:border-primary-500 bg-white dark:bg-gray-800 shadow-md"
                  : plan.isFree
                    ? "border-green-200 dark:border-green-700 bg-white dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  }`}
              >
                {/* BADGE */}
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-medium rounded-full shadow">
                    <Star className="h-3 w-3 inline mr-1" />
                    Most Popular
                  </div>
                )}

                {plan.isFree && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-600 text-white text-xs font-medium rounded-full shadow">
                    Free Trial
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  {/* PLAN HEADER */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex p-2 rounded-lg ${plan.popular ? "bg-primary-50 dark:bg-primary-900/30" :
                      plan.isFree ? "bg-green-50 dark:bg-green-900/30" :
                        "bg-gray-100 dark:bg-gray-700"
                      } mb-3`}>
                      <Icon className={`h-5 w-5 ${plan.popular ? "text-primary-600 dark:text-primary-400" :
                        plan.isFree ? "text-green-600 dark:text-green-400" :
                          "text-gray-600 dark:text-gray-400"
                        }`} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{plan.tagline}</p>

                    <div className="mb-2">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {plan.monthlyPrice === null
                          ? "Custom"
                          : plan.isFree
                            ? "₹0"
                            : isAnnual
                              ? formatINR(annualPrice!)
                              : formatINR(plan.monthlyPrice)}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {plan.isFree
                          ? "30 days free trial"
                          : plan.monthlyPrice === null
                            ? "Tailored pricing"
                            : isAnnual
                              ? "per year"
                              : "per month"}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-xs font-medium">{plan.employees}</p>
                  </div>

                  {/* FEATURES */}
                  <div className="space-y-2 mb-4 flex-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Includes:</div>
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className={`h-3 w-3 ${plan.popular ? "text-primary-500" :
                          plan.isFree ? "text-green-500" :
                            "text-gray-500"
                          } mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-xs text-gray-700 dark:text-gray-300 leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.features.length > 5 && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 italic">
                        + {plan.features.length - 5} more features
                      </div>
                    )}
                  </div>

                  {/* CTA BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 rounded-lg font-medium text-white transition-all shadow-sm hover:shadow-lg text-sm ${plan.popular
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                      : plan.isFree
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        : "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-950"
                      }`}
                  >
                    {plan.cta}
                  </motion.button>

                  {/* SAVINGS NOTE */}
                  {!plan.isFree && plan.monthlyPrice !== null && isAnnual && (
                    <div className="mt-2 text-center">
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        Save ₹{Math.round(plan.monthlyPrice * 12 * 0.1).toLocaleString('en-IN')} annually
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST BADGES */}
        <div className="mt-8 md:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { text: "No setup fees", icon: Check },
              { text: "Cancel anytime", icon: Check },
              { text: "Free trial", icon: Sparkles },
              { text: "24/7 support", icon: Shield },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition-all"
              >
                <item.icon className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;