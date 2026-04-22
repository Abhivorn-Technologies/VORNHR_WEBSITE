import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, Mail, Clock, Star } from 'lucide-react';

const DemoPage: React.FC = () => {
  useEffect(() => {
    document.title = "Book Free HRMS Demo | VornHR";
  }, []);

  const benefits = [
    "30-minute personalized demo with our experts",
    "See how VornHR fits your specific requirements",
    "Get a custom pricing quote for your team size",
    "Learn best practices from 15+ successful implementations",
    "Q&A session with our product specialists"
  ];

  const features = [
    "Complete walkthrough of all HRMS modules",
    "Live demonstration of payroll automation",
    "Attendance tracking with GPS demo",
    "Mobile app experience",
    "Integration capabilities overview"
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden pt-40 pb-20 bg-gradient-to-br from-[#003973] to-[#2ab6ea]">
        <div className="absolute inset-0 bg-grid-white/10 [background-size:40px_40px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-white">Book Your Free Demo</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                See VornHR in Action
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Get a personalized demo and discover how VornHR can transform your HR operations.
              </p>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>30 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free for All</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Demo</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#39a4de] focus:border-transparent"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#39a4de] focus:border-transparent"
                    placeholder="rahul@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#39a4de] focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Size</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#39a4de] focus:border-transparent">
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] text-white font-bold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Book Free Demo
                </button>
              </form>
              <p className="text-sm text-slate-500 text-center mt-4">
                Our team will contact you within 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003973] mb-6">What You'll Get</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#39a4de]" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003973] mb-6">Demo Highlights</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-[#39a4de]" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003973] mb-6">Prefer Self-Service?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Start your free 7-day trial and explore VornHR at your own pace.
          </p>
          <Link
            to="/pricing?trial=true"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#39a4de]" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Call us at</p>
                <p className="font-bold text-slate-900">+91 99666 29766</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-xl p-6 shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#39a4de]" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email us at</p>
                <p className="font-bold text-slate-900">demo@vornhr.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
