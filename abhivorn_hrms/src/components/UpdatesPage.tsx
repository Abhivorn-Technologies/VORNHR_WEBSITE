import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, CheckCircle, Clock, ArrowRight, 
  Zap, Calendar, Users, Target, Bell, ChevronRight,
  TrendingUp, Award, Star
} from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-indigo-400 mb-4">
            <RefreshCw className="w-5 h-5" />
            <span className="text-sm font-medium">What's New</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Product Updates
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Stay up to date with the latest features, improvements, and innovations in VornHR. We're constantly evolving to serve you better.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Last updated: March 2026
          </p>
        </div>
      </div>

      {/* Latest Update Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-2 text-indigo-200 mb-2">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Latest Release</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            VornHR v2.5.0 - Advanced Analytics
          </h2>
          <p className="text-indigo-100 mb-6 max-w-2xl">
            Transform your HR data into actionable insights with our powerful analytics dashboard. Customizable widgets, real-time metrics, and predictive analytics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Upgrade Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>

      {/* Updates Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Updates</h2>
        
        <div className="space-y-8">
          {updates.map((update) => (
            <div 
              key={update.id} 
              className={`relative bg-white rounded-2xl p-6 md:p-8 border ${
                update.highlight 
                  ? 'border-indigo-200 shadow-lg shadow-indigo-100' 
                  : 'border-slate-200'
              }`}
            >
              {update.highlight && (
                <div className="absolute -top-3 -right-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                    <Zap className="w-3 h-3" /> Latest
                  </span>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    update.highlight 
                      ? 'bg-indigo-100' 
                      : 'bg-slate-100'
                  }`}>
                    <update.icon className={`w-6 h-6 ${
                      update.highlight 
                        ? 'text-indigo-600' 
                        : 'text-slate-600'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {update.version}
                      </span>
                      <span className="text-sm text-slate-500">{update.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{update.title}</h3>
                    <p className="text-slate-600">{update.description}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">New Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {update.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Coming Soon</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
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
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Ahead with VornHR
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get early access to new features and be the first to experience our latest innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              View Pricing
            </Link>
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
