import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Heart, CheckCircle, ArrowRight,
  Shield, Mail, Phone, MapPin,
  Lightbulb, Handshake, TrendingUp, Calendar, MessageSquare, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const AboutUsPage: React.FC = () => {
  const stats = [
    { value: "15+", label: "Clients Served", icon: Users },
    { value: "20+", label: "Team Members", icon: Heart },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
    { value: "24/7", label: "Support", icon: MessageSquare }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "To revolutionize HR management by providing intuitive, powerful tools that empower businesses to build thriving workplaces."
    },
    {
      icon: Heart,
      title: "People First",
      description: "We believe that great companies are built by great people. Every feature we create puts employees at the center."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous improvement drives everything we do. We constantly evolve our platform to meet the changing needs of modern workplaces."
    },
    {
      icon: Handshake,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication, reliable service, and unwavering commitment to our clients."
    }
  ];


  const timeline = [
    { year: "Oct 2025", title: "Company Founded", description: "Abhivorn Technologies Pvt Ltd established in Hyderabad" },
    { year: "Nov 2025", title: "First HRMS Deployment", description: "Successfully deployed VORN HR for first client" },
    { year: "Dec 2025", title: "15+ Companies Onboarded", description: "Steady growth with selected enterprise clients" },
    { year: "Jan 2027", title: "5,000+ migrations", description: "Platform scaling with high user adoption" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#003973] via-[#00509E] to-[#003973] min-h-[50vh] md:min-h-[60vh] flex items-center pt-40 pb-12 px-4 text-center">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" 
        />
        
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Abhivorn Technologies
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl md:text-2xl font-bold text-[#2ab6ea] mb-8 uppercase tracking-[0.2em]">
              Building the Future of Enterprise Software
            </h3>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-200 italic leading-relaxed opacity-90"> 
                Founded in 2025, headquartered in Hyderabad. We're a forward-thinking software company specializing in HR and healthcare solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-6 border border-blue-100 cursor-default"
                >
                  <Shield className="w-4 h-4 text-[#003973]" />
                  <span className="text-xs font-bold text-[#003973] uppercase tracking-wider">Our DNA</span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 underline decoration-[#2ab6ea]/30 underline-offset-8">Our Story</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Abhivorn Technologies was founded with a clear vision: <span className="text-slate-900 font-medium">to make enterprise-grade software accessible to businesses of all sizes across India.</span>
                  </p>
                  <p>
                    Starting with our flagship product <span className="text-[#003973] font-bold">VORN HR</span>, we've helped companies streamline their HR operations, reduce administrative overhead, and focus on what matters most—their people.
                  </p>
                  <p>
                    Today, we're expanding into healthcare with <span className="text-[#00509E] font-bold italic">VorQard</span>, bringing the same commitment to quality and innovation to the medical industry.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-[#2ab6ea]" />
                    <span className="font-semibold text-slate-900">20+ Team Members</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <TrendingUp className="w-5 h-5 text-[#2ab6ea]" />
                    <span className="font-semibold text-slate-900">Innovative Solutions</span>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-2 blur-2xl opacity-40"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <div className="text-4xl font-bold text-[#003973]">20+</div>
                      <div className="text-xs text-slate-500 font-bold uppercase mt-1">Experts</div>
                    </div>
                    <div className="p-6 bg-[#003973] rounded-2xl text-white text-center">
                      <div className="text-4xl font-bold">24/7</div>
                      <div className="text-xs text-blue-200 font-bold uppercase mt-1">Support</div>
                    </div>
                    <div className="col-span-2 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white relative">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Our Commitment
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed italic">
                        "Bringing innovation to HR and Healthcare across South Asia."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={0.1 * index} direction="up">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center h-full transition-shadow hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-[#003973]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="right">
            <motion.div 
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(0, 57, 115, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="bg-gradient-to-br from-[#003973] to-[#00509E] rounded-3xl p-10 text-white h-full relative overflow-hidden group border border-blue-400/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
              <Target className="w-12 h-12 mb-6 text-blue-300 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To democratize enterprise-grade HR management by providing accessible, intuitive, and powerful tools that enable businesses of all sizes to streamline their HR operations and focus on what matters most – their people.
              </p>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <motion.div 
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(5, 150, 105, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-10 text-white h-full relative overflow-hidden group border border-emerald-400/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
              <Lightbulb className="w-12 h-12 mb-6 text-emerald-300 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-emerald-50 text-lg leading-relaxed">
                To become the global leader in intelligent HR solutions, pioneering the use of AI and automation to create workplaces where every employee can thrive and every organization can reach its full potential.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={20}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#003973]/20 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#003973]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Key milestones in our growth story
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#003973] to-[#00509E] hidden md:block"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'right' : 'left'}
                delay={0.1}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:px-8">
                    <motion.div 
                      whileHover={{ scale: 1.03, x: index % 2 === 0 ? 5 : -5 }}
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <span className="inline-block px-3 py-1 bg-[#003973] text-white text-sm font-medium rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-[#003973] rounded-full items-center justify-center z-10">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#003973] to-[#00509E] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your HR?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Join hundreds of companies already using VornHR to build better workplaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing?trial=true"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#003973] bg-white rounded-xl hover:bg-slate-50 transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white hover:shadow-md">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Email</h3>
              <a 
                href="mailto:hello@abhivorn.com" 
                className="text-slate-600 hover:text-[#003973] transition-colors flex items-center gap-2 group"
              >
                hello@abhivorn.com
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white hover:shadow-md">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
              <a 
                href="tel:+919966629766" 
                className="text-slate-600 hover:text-[#003973] transition-colors flex items-center gap-2 group"
              >
                +91 9966629766
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white hover:shadow-md">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Location</h3>
              <p className="text-slate-600">Hyderabad, Telangana, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
