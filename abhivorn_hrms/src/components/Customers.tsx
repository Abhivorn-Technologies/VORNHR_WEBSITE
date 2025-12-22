import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star, Users, TrendingUp, Clock,
  Rocket, Target, Heart, Zap,
  Building2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  // ... rest of component ...
  // For animated numbers
  const [counts, setCounts] = useState({
    companies: 0,
    employees: 0,
    satisfaction: 0,
    onboarded: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Testimonials
  const testimonials = [
    {
      name: "Vishal Pratap",
      role: "HR Director",
      company: "Cred Marg",
      content: "Reduced our hiring time by 60% and improved candidate quality significantly.",
      rating: 5,
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sampath Nomula",
      role: "Talent Acquisition Head",
      company: "NextGen Hiring",
      content: "Automated our entire recruitment process. What used to take weeks now happens in days.",
      rating: 5,
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Dr. Ravikanth",
      role: "Admin Director",
      company: "Sai Sharanya Hospital",
      content: "Streamlined our staff management and payroll. Healthcare scheduling has never been this efficient.",
      rating: 5,
      icon: Clock,
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Anjali Sharma",
      role: "Tech Lead",
      company: "Innovate Tech",
      content: "The best HRMS we have used. The UI is so simple and intuitive for all our employees.",
      rating: 5,
      icon: Rocket,
      color: "from-amber-500 to-orange-500",
    }
  ];

  // Target numbers
  const targetNumbers = {
    companies: 4,
    employees: 157,
    satisfaction: 98,
    onboarded: 157
  };

  // Number counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1500;

          Object.keys(targetNumbers).forEach((key) => {
            const target = targetNumbers[key as keyof typeof targetNumbers];
            const startTime = Date.now();

            const updateCount = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(target * easeProgress);

              setCounts(prev => ({
                ...prev,
                [key]: current
              }));

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };

            requestAnimationFrame(updateCount);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            Customer Success Stories
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Hear from the teams that transformed their HR operations
          </p>
        </div>

        {/* Infinite Marquee Section */}
        <div className="relative w-full overflow-hidden mask-gradient-x mb-12">
          {/* Left/Right Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10 pointer-events-none" />

          <div className="flex w-max">
            <motion.div
              className="flex gap-6 px-3"
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30, // Adjust speed here
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => {
                const Icon = testimonial.icon;
                return (
                  <div
                    key={idx}
                    className="w-[350px] md:w-[400px] flex-shrink-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-sm`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div id="stats-section" className="mt-8 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              {
                label: "Companies",
                value: counts.companies,
                suffix: "",
                description: "Trusted partners",
                color: "from-blue-400 to-blue-500",
                icon: Building2
              },
              {
                label: "Employees",
                value: counts.employees,
                suffix: "",
                description: "Onboarded",
                color: "from-emerald-400 to-emerald-500",
                icon: Users
              },
              {
                label: "Satisfaction",
                value: counts.satisfaction,
                suffix: "%",
                description: "Client happiness",
                color: "from-amber-400 to-amber-500",
                icon: Heart
              },
              {
                label: "Onboarded",
                value: counts.onboarded,
                suffix: "",
                description: "Total employees",
                color: "from-purple-400 to-purple-500",
                icon: Zap
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition-shadow"
                >
                  <div className={`inline-flex p-2 bg-gradient-to-br ${stat.color} rounded-lg mb-2`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs font-medium text-gray-900 dark:text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            Ready to join them?
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto text-sm">
            Start with our free trial and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm"
              onClick={() => navigate('/pricing')}
            >
              <Target className="h-4 w-4 mr-2" />
              View Pricing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow transition-all text-sm"
              onClick={() => navigate('/contact')}
            >
              <Users className="h-4 w-4 mr-2" />
              Schedule a Demo
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;