import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  CheckCircle, ArrowRight, Star, Users, ShieldCheck,
  Clock, IndianRupee, Smartphone, Database, BarChart,
  CalendarDays, Fingerprint, ChartLine, Building2,
  Rocket, Building, MapPinned, BadgeIndianRupee,
  Zap, Lock, Globe, Headphones, CreditCard
} from 'lucide-react';

export interface LandingPageProps {
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAPrimary: { text: string; link: string };
  heroCTASecondary: { text: string; link: string };
  sections: Section[];
  features?: Feature[];
  stats?: Stat[];
  testimonials?: Testimonial[];
}

export interface SectionItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface Section {
  type: 'features' | 'benefits' | 'audience' | 'comparison' | 'faq' | 'trust';
  title: string;
  subtitle?: string;
  items: SectionItem[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

const CountUp = ({ to, suffix = "" }: { to: number, suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const SEOLandingPage: React.FC<LandingPageProps> = ({
  title,
  metaDescription,
  heroHeadline,
  heroSubheadline,
  heroCTAPrimary,
  heroCTASecondary,
  sections,
  features,
  stats,
  testimonials
}) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metaDescription);
    }
  }, [title, metaDescription]);

  const trustIndicators = [
    { icon: <CreditCard className="w-5 h-5" />, text: "No credit card required" },
    { icon: <CalendarDays className="w-5 h-5" />, text: "Cancel anytime" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 support" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "GDPR compliant" },
  ];

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'features':
        return (
          <section key={index} className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-50 [background-size:40px_40px] opacity-40 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003973]">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">{section.subtitle}</p>
                )}
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 57, 115, 0.15)" }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg transition-all duration-300"
                  >
                    {item.icon && (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center mb-4 text-[#39a4de]">
                        {item.icon}
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'benefits':
        return (
          <section key={index} className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003973]">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">{section.subtitle}</p>
                )}
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center flex-shrink-0 text-[#39a4de]">
                      {item.icon || <CheckCircle className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'audience':
        return (
          <section key={index} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003973]">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">{section.subtitle}</p>
                )}
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center mx-auto mb-4 text-[#39a4de]">
                      {item.icon || <Users className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center pt-40 pb-12 bg-white">
        <div className="absolute inset-0 bg-grid-slate-50 [background-size:40px_40px] opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#39a4de]/10 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#b5a5fa]/20 rounded-full blur-[100px] mix-blend-multiply opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Trusted by 15+ Companies</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                <span className="text-[#003973]">{heroHeadline}</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                {heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to={heroCTAPrimary.link}
                  className="group inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] rounded-xl shadow-lg shadow-[#003973]/25 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  {heroCTAPrimary.text}
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to={heroCTASecondary.link}
                  className="group inline-flex items-center justify-center px-6 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:border-[#39a4de]/30 hover:text-[#39a4de] transition-all duration-300"
                >
                  {heroCTASecondary.text}
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-slate-200">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center text-[#39a4de]">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600">{item.text}</span>
                  </div>
                ))}
               </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-4xl lg:text-5xl font-bold text-[#003973] mb-2">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Sections */}
      {sections.map((section, index) => renderSection(section, index))}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003973]">
                Powerful Features
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Everything you need to manage your workforce efficiently.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 57, 115, 0.15)" }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center mb-4 text-[#39a4de]">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003973]">
                What Our Customers Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl p-8"
                >
                  <div className="flex text-yellow-400 gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://i.pravatar.cc/100?img=${index + 20}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003973] to-[#2ab6ea]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 15+ companies using VornHR to streamline their workforce management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#003973] bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOLandingPage;
