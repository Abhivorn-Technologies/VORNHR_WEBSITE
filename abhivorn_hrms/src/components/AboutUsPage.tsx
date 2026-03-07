import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Award, Heart, CheckCircle, ArrowRight,
  Zap, Shield, Globe, Mail, Phone, MapPin, Star,
  Lightbulb, Handshake, TrendingUp, Calendar, MessageSquare
} from 'lucide-react';

const AboutUsPage: React.FC = () => {
  const stats = [
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "50+", label: "Team Members", icon: Heart },
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

  const team = [
    {
      name: "Abhishek Vorn",
      role: "Founder & CEO",
      image: "/abhivorn.webp",
      bio: "Visionary leader with 10+ years in HR technology"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "/teamlead.webp",
      bio: "Tech innovator specializing in enterprise solutions"
    },
    {
      name: "Michael Ross",
      role: "Head of Product",
      image: "/employees.webp",
      bio: "Product strategist focused on user experience"
    },
    {
      name: "Emily Watson",
      role: "VP of Customer Success",
      image: "/hr.webp",
      bio: "Customer advocate with deep HR expertise"
    }
  ];

  const timeline = [
    { year: "2020", title: "Foundation", description: "VornHR was founded with a vision to transform HR management" },
    { year: "2021", title: "Product Launch", description: "Launched our core HR platform with payroll & attendance" },
    { year: "2022", title: "Scale Up", description: "Expanded to 100+ enterprise clients across industries" },
    { year: "2023", title: "Innovation", description: "Introduced AI-powered recruitment & analytics" },
    { year: "2024", title: "Global Reach", description: "Serving clients in 20+ countries worldwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003973] via-[#00509E] to-[#003973] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About VornHR
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Empowering businesses to build better workplaces through intelligent HR solutions. We're on a mission to transform how organizations manage their most valuable asset – their people.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
              <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[#003973]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#003973] to-[#00509E] rounded-2xl p-8 text-white">
            <Target className="w-10 h-10 mb-4 text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-200">
              To democratize enterprise-grade HR management by providing accessible, intuitive, and powerful tools that enable businesses of all sizes to streamline their HR operations and focus on what matters most – their people.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
            <Lightbulb className="w-10 h-10 mb-4 text-emerald-300" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-emerald-100">
              To become the global leader in intelligent HR solutions, pioneering the use of AI and automation to create workplaces where every employee can thrive and every organization can reach its full potential.
            </p>
          </div>
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
              <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#003973]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#003973]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
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
            From a bold idea to a leading HR solution provider
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#003973] to-[#00509E] hidden md:block"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:px-8">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-[#003973] text-white text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-[#003973] rounded-full items-center justify-center z-10">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A team of passionate experts dedicated to transforming HR
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[#003973] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </div>
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
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-[#003973] bg-white rounded-xl hover:bg-slate-50 transition-colors"
            >
              Get Started
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
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Email</h3>
              <p className="text-slate-600">contact@abhivorn.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#003973]/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#003973]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Location</h3>
              <p className="text-slate-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
