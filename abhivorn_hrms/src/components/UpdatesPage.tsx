import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, CheckCircle, Clock, ArrowRight, 
  Zap, Calendar, Users, Target, Bell, ChevronRight,
  TrendingUp, Award, Star
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const UpdatesPage: React.FC = () => {
  const updates = [
    {
      id: 1,
      version: "v2.5.0",
      date: "March 2026",
      title: "Advanced Analytics Dashboard",
      description: "Introducing powerful analytics tools with customizable dashboards, real-time metrics, and exportable reports.",
      features: ["Custom dashboard builder", "Real-time metrics", "Export to PDF/Excel", "Predictive analytics"],
      icon: TrendingUp,
      highlight: true
    },
    {
      id: 2,
      version: "v2.4.0",
      date: "February 2026",
      title: "AI-Powered Recruitment",
      description: "Smart candidate screening, automated interview scheduling, and AI-driven talent matching.",
      features: ["AI candidate screening", "Auto-scheduling", "Talent matching", "Resume parser"],
      icon: Award
    },
    {
      id: 3,
      version: "v2.3.0",
      date: "January 2026",
      title: "Real-time Team Chat",
      description: "Seamless communication with built-in chat, file sharing, and team collaboration tools.",
      features: ["Team channels", "File sharing", "Video calls", "Message search"],
      icon: Zap
    },
    {
      id: 4,
      version: "v2.2.0",
      date: "December 2025",
      title: "Enhanced Notifications System",
      description: "Smart notifications with customization, priority levels, and multi-channel delivery.",
      features: ["Push notifications", "Email digests", "In-app alerts", "Custom schedules"],
      icon: Bell
    }
  ];

  const upcomingFeatures = [
    { icon: Calendar, title: "Resource Planning", desc: "AI-driven workforce planning" },
    { icon: Users, title: "Performance Reviews", desc: "360-degree feedback system" },
    { icon: Target, title: "Goal Tracking", desc: "OKR and KPI management" },
    { icon: Clock, title: "Time Off Requests", desc: "Streamlined approval workflow" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003973] via-[#004e92] to-[#003973] pt-32 pb-20 md:pt-40 md:pb-28 min-h-[300px] md:min-h-[350px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.03] [background-size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto z-10">
          <ScrollReveal direction="down">
            <div className="flex items-center justify-center gap-2 text-sky-400 mb-6 font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
              <RefreshCw className="w-5 h-5" />
              <span>What's New</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Product Updates
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
              Stay up to date with the latest features, improvements, and innovations in VornHR. We're constantly evolving to serve you better.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
             <div className="mt-8">
              <p className="text-sm text-sky-400 font-bold uppercase tracking-widest">
                Last updated: March 2026
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Latest Update Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <ScrollReveal direction="up" distance={30}>
          <div className="bg-gradient-to-r from-[#003973] to-[#2ab6ea] rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-grid-white/10 [background-size:20px_20px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sky-200 mb-2 font-semibold">
                <Star className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Latest Release</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                VornHR v2.5.0 - Advanced Analytics
              </h2>
              <p className="text-blue-50 mb-6 max-w-2xl text-lg">
                Transform your HR data into actionable insights with our powerful analytics dashboard. Customizable widgets, real-time metrics, and predictive analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#003973] rounded-xl font-bold hover:bg-sky-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  Upgrade Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500/20 text-white border border-white/20 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm shadow-lg"
                >
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Updates Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Updates</h2>
        
        <div className="space-y-8">
          {updates.map((update, index) => (
            <ScrollReveal key={update.id} delay={index * 0.1} direction="up" distance={30}>
              <div 
                className={`relative bg-white rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                  update.highlight 
                    ? 'border-blue-200 shadow-xl shadow-blue-500/5 ring-1 ring-blue-50' 
                    : 'border-slate-200 hover:border-blue-200'
                } h-full group`}
              >
                {update.highlight && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-[#003973] to-[#2ab6ea] text-white text-xs font-bold rounded-full shadow-lg">
                      <Zap className="w-3 h-3" /> LATEST
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      update.highlight 
                        ? 'bg-blue-50 group-hover:bg-[#003973] transition-colors' 
                        : 'bg-slate-50 group-hover:bg-[#39a4de]/10 transition-colors'
                    }`}>
                      <update.icon className={`w-6 h-6 transition-colors ${
                        update.highlight 
                          ? 'text-[#003973] group-hover:text-white' 
                          : 'text-slate-600 group-hover:text-[#39a4de]'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-[#003973] bg-blue-50 px-2.5 py-1 rounded-lg">
                          {update.version}
                        </span>
                        <span className="text-sm font-medium text-slate-500">{update.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#003973] mb-2">{update.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{update.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-[#003973] mb-4 uppercase tracking-wider">What's New:</h4>
                  <div className="flex flex-wrap gap-3">
                    {update.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/50 text-[#003973] text-sm font-medium rounded-xl border border-blue-100/50"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2ab6ea]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Coming Soon</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#39a4de] rounded-xl flex items-center justify-center transition-colors">
                    <feature.icon className="w-6 h-6 text-[#39a4de] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003973]">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-r from-[#003973] to-[#39a4de] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead with VornHR
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Get early access to new features and be the first to experience our latest innovations in HR technology.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003973] rounded-xl font-bold hover:bg-sky-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Contact Sales <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2ab6ea] text-white rounded-xl font-bold hover:bg-[#39a4de] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Explore More</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link 
            to="/features" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-slate-900 group-hover:text-indigo-600">Features</span>
            </div>
          </Link>
          <Link 
            to="/solutions" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-slate-900 group-hover:text-indigo-600">Solutions</span>
            </div>
          </Link>
          <Link 
            to="/security" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              <span className="font-medium text-slate-900 group-hover:text-indigo-600">Security</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
