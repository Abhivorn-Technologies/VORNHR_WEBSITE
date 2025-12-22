import React, { useState, useEffect } from "react";
import { Upload, Settings, PlayCircle, BarChart, Zap, Clock, Shield, Target, Rocket, ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Setup & Import",
      description: "Import your employee data with our guided setup wizard.",
      details: [
        "No technical skills required",
        "Guided setup process",
        "Data migration support",
        "Automated validation",
      ],
      color: "from-blue-500 to-cyan-500",
      duration: "10 minutes",
    },
    {
      number: "02",
      icon: Settings,
      title: "Configure",
      description: "Tailor workflows and rules to match your business needs.",
      details: [
        "Set up payroll rules",
        "Define approval flows",
        "Configure notifications",
        "Custom permissions",
      ],
      color: "from-emerald-500 to-green-500",
      duration: "15 minutes",
    },
    {
      number: "03",
      icon: PlayCircle,
      title: "Launch",
      description: "Go live with your team and onboard employees.",
      details: [
        "Employee self-service",
        "Mobile app access",
        "Training materials",
        "24/7 support",
      ],
      color: "from-purple-500 to-violet-500",
      duration: "5 minutes",
    },
    {
      number: "04",
      icon: BarChart,
      title: "Optimize",
      description: "Grow your team with confidence using analytics.",
      details: [
        "Add new features",
        "Advanced analytics",
        "Performance insights",
        "Continuous improvement",
      ],
      color: "from-amber-500 to-orange-500",
      duration: "Ongoing",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container-clean">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            Simple Setup
          </div>
          
          <h2 className="heading-2 text-gray-900 dark:text-white mb-3">
            Get started in minutes
          </h2>
          
          <p className="body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our streamlined process gets you up and running quickly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-8 md:mb-12">
          <div className="hidden lg:block">
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
            <div 
              className="absolute top-16 left-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center z-20 transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-br ${step.color} text-white scale-110` 
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    <span className="font-bold text-base">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className={`card dark:bg-gray-800 dark:border-gray-700 p-5 pt-10 h-full transition-all duration-300 ${
                    isActive ? 'border-primary-300 dark:border-primary-500 shadow-lg' : 'hover:shadow-lg'
                  }`}>
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} mb-4 ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{step.description}</p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      <Clock className="h-3 w-3 text-gray-600 dark:text-gray-400" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{step.duration}</span>
                    </div>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Progress Indicators */}
          <div className="lg:hidden flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === index 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats & CTA Section */}
        <div className="max-w-4xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { 
                value: "10 minutes", 
                label: "Average setup", 
                icon: Zap,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                value: "24/7", 
                label: "Support available", 
                icon: Clock,
                color: "from-emerald-500 to-green-500"
              },
              { 
                value: "99.9%", 
                label: "Uptime SLA", 
                icon: Shield,
                color: "from-purple-500 to-violet-500"
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card dark:bg-gray-800 dark:border-gray-700 p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-3`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 md:p-8 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <Target className="h-10 w-10 mx-auto mb-4 opacity-80" />
              
              <h3 className="text-xl font-bold mb-3">
                Ready to transform your HR?
              </h3>
              
              <p className="text-primary-100 mb-4 text-sm">
                Join thousands of companies that have streamlined their HR processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#pricing" className="inline-flex items-center justify-center bg-white text-primary-700 font-semibold px-6 py-2.5 rounded-lg hover:shadow-xl transition-all hover:scale-105 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Start Free Trial
                </a>
                
                <a href="#contactform" className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-2.5 rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Watch Demo
                </a>
              </div>
              
              <p className="text-xs text-primary-200 mt-4">
                No credit card required • 30-day free trial • Setup assistance included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;