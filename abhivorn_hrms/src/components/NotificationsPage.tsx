import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Settings, Mail, Smartphone, MessageSquare, 
  Check, X, Clock, AlertCircle, Info, CheckCircle,
  ArrowRight, Star, Shield, Globe, Zap, ChevronRight,
  UserPlus, Calendar, DollarSign, FileText, TrendingUp
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const NotificationsPage: React.FC = () => {
  const notificationTypes = [
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Instant notifications on your device",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Notifications",
      description: "Daily or weekly email digests",
      color: "sky"
    },
    {
      icon: Smartphone,
      title: "SMS Alerts",
      description: "Critical alerts via text message",
      color: "indigo"
    },
    {
      icon: MessageSquare,
      title: "In-App Messages",
      description: "Real-time alerts within the app",
      color: "blue"
    }
  ];

  const notificationCategories = [
    { 
      icon: UserPlus, 
      title: "Recruitment", 
      desc: "New applications, interviews scheduled",
      enabled: true 
    },
    { 
      icon: Calendar, 
      title: "Leave Management", 
      desc: "Leave requests, approvals, balances",
      enabled: true 
    },
    { 
      icon: DollarSign, 
      title: "Payroll", 
      desc: "Salary processed, tax documents",
      enabled: true 
    },
    { 
      icon: TrendingUp, 
      title: "Performance", 
      desc: "Reviews, goals, feedback",
      enabled: true 
    },
    { 
      icon: FileText, 
      title: "Documents", 
      desc: "Policy updates, announcements",
      enabled: false 
    },
    { 
      icon: Bell, 
      title: "System", 
      desc: "Maintenance, security alerts",
      enabled: true 
    }
  ];

  const sampleNotifications = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Leave Request Approved",
      message: "Your leave request for March 15-17 has been approved.",
      time: "2 hours ago",
      read: false
    },
    {
      type: "info",
      icon: Info,
      title: "New Message from HR",
      message: "Please review the updated company policy document.",
      time: "5 hours ago",
      read: false
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Timesheet Reminder",
      message: "Don't forget to submit your timesheet for this week.",
      time: "1 day ago",
      read: true
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Payroll Processed",
      message: "Your salary for March 2026 has been processed successfully.",
      time: "2 days ago",
      read: true
    },
    {
      type: "info",
      icon: Info,
      title: "Performance Review Due",
      message: "Your quarterly performance review is due next week.",
      time: "3 days ago",
      read: true
    }
  ];

  const features = [
    {
      icon: Settings,
      title: "Full Customization",
      description: "Choose exactly what notifications you want to receive"
    },
    {
      icon: Clock,
      title: "Scheduled Digests",
      description: "Get daily or weekly summaries at your preferred time"
    },
    {
      icon: Shield,
      title: "Priority Levels",
      description: "Urgent vs informational - never miss important updates"
    },
    {
      icon: Zap,
      title: "Smart Filtering",
      description: "AI-powered filtering to reduce notification fatigue"
    }
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
              <Bell className="w-5 h-5" />
              <span>Smart Notifications</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Stay Connected
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
              Stay informed with intelligent notifications. Customize your alerts, set priorities, and never miss important updates from your HR team.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
            <div className="mt-8">
              <p className="text-sm text-sky-400 font-bold uppercase tracking-widest">
                Always Stay Connected with Precision
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Notification Preview */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Notification Center */}
          <ScrollReveal direction="right" distance={40}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-full">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                <h3 className="font-bold text-[#003973]">Notification Center</h3>
                <button className="text-sm text-[#39a4de] hover:text-[#003973] font-bold">
                  Mark all as read
                </button>
              </div>
              <div className="divide-y divide-slate-100 max-h-[400px] overflow-y-auto">
                {sampleNotifications.map((notif, index) => (
                  <div 
                    key={index} 
                    className={`p-4 hover:bg-blue-50/30 transition-colors ${
                      !notif.read ? 'bg-blue-50/80 border-l-4 border-[#39a4de]' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notif.type === 'success' ? 'bg-green-100' :
                        notif.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'
                      }`}>
                        <notif.icon className={`w-5 h-5 ${
                          notif.type === 'success' ? 'text-green-600' :
                          notif.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-bold ${!notif.read ? 'text-[#003973]' : 'text-slate-700'}`}>{notif.title}</h4>
                          {!notif.read && (
                            <span className="w-2 h-2 bg-[#2ab6ea] rounded-full animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 truncate">{notif.message}</p>
                        <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Notification Settings */}
          <ScrollReveal direction="left" distance={40}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-[#003973]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#003973]">Notification Settings</h3>
                  <p className="text-sm text-slate-500">Manage your preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                {notificationCategories.slice(0, 4).map((cat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <cat.icon className="w-5 h-5 text-slate-600" />
                      <div>
                        <h4 className="font-medium text-slate-900 text-sm">{cat.title}</h4>
                        <p className="text-xs text-slate-500">{cat.desc}</p>
                      </div>
                    </div>
                    <button 
                      className={`w-12 h-6 rounded-full transition-all duration-300 relative ${
                        cat.enabled ? 'bg-[#2ab6ea]' : 'bg-slate-300'
                      }`}
                    >
                      <span className={`absolute top-0.5 block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${
                        cat.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}></span>
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 p-3 text-center text-[#003973] hover:text-white font-bold text-sm border border-blue-100 rounded-xl hover:bg-[#003973] transition-all duration-300">
                View All Settings
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Notification Channels */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Multiple Notification Channels
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Receive notifications your way - choose the channels that work best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notificationTypes.map((type, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up" distance={30}>
              <div 
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#39a4de] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 h-full"
              >
                <div className={`w-12 h-12 bg-${type.color}-50 group-hover:bg-[#39a4de] rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                  <type.icon className={`w-6 h-6 text-[#39a4de] group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-lg font-bold text-[#003973] mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Smart Notification Features
            </h2>
            <p className="text-slate-600">
              Designed to keep you informed without overwhelming you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-4 hover:border-[#39a4de] transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#39a4de] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#39a4de] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-[#003973]">{feature.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Do Not Disturb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Do Not Disturb</h3>
              <p className="text-slate-400">Set quiet hours</p>
            </div>
          </div>
          <p className="text-slate-300 mb-6">
            Set your quiet hours and only receive critical notifications during that time. Perfect for work-life balance.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-slate-700/50 rounded-lg px-4 py-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300 text-sm">Mon-Fri: 6 PM - 8 AM</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-700/50 rounded-lg px-4 py-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300 text-sm">Weekends: All Day</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-[#003973] to-[#39a4de] rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [background-size:20px_20px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Connected Always
            </h2>
            <p className="text-blue-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Customize your notification experience and never miss important updates from your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link 
              to="/pricing?trial=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 rounded-xl font-bold hover:bg-rose-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
              <Link 
                to="/features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2ab6ea] text-white rounded-xl font-bold hover:bg-[#39a4de] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Explore Features
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
            to="/chat" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-slate-900 group-hover:text-amber-600">Team Chat</span>
            </div>
          </Link>
          <Link 
            to="/ai" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-slate-900 group-hover:text-amber-600">AI Features</span>
            </div>
          </Link>
          <Link 
            to="/security" 
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-slate-900 group-hover:text-amber-600">Security</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
