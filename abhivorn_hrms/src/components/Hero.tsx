import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import QuickFeatures from './QuickFeatures';
import { motion, useInView, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  ArrowRight, CheckCircle, ShieldCheck, Users,
  Clock, Calendar, CreditCard, BarChart, MapPin,
  FileText, Globe, Lock, Zap, Star, TrendingUp,
  ChevronRight, Sparkles, Award, Users2,
  Briefcase, PieChart, Shield, Database,
  Smartphone, Laptop, Headphones, MessageSquare,
  Download, Bell, Settings,
  Folder, Search, Edit, Trash2,
  Share2, Printer, RefreshCw, Save,
  AlertCircle, Info, Video,
  Image, File, Inbox,
  Send, Key, Eye, EyeOff,
  Upload, Cloud, Server, Cpu,
  Wifi, Battery, Signal,
  Store, ShoppingCart, Tag, Percent, DollarSign,
  Calculator, Landmark as Bank, Wallet,
  Grid, List, Columns, Layout,
  Bold, Italic, AlignLeft, AlignCenter,
  AlignRight, CheckSquare, Circle,
  BarChart2,
  TrendingUp as TrendingIcon, TrendingDown,
  Watch, Timer, Map, Navigation,
  Compass, Flag, Trophy,
  Crown, Medal, Heart, ThumbsUp, Smile,
  Phone, Mail, Megaphone,
  Camera, Mic, Volume2,
  Music, Film, Monitor,
  Mouse, Keyboard, Bluetooth,
  Thermometer, Wind, Sun, Moon,
  CloudRain, CloudSnow, Coffee,
  Home, Building, Factory, Warehouse,
  User, UserCheck, UserPlus, Cog,
  BellOff, VolumeX, MicOff,
  Download as DownloadIcon, Upload as UploadIcon,
  CalendarDays, Navigation as NavIcon
} from "lucide-react";

// CountUp Component
const CountUp = ({ to, prefix = "", suffix = "", decimals = 0 }: { to: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// Smooth Image Loader
const SmoothHeroImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-sm z-10 transition-opacity duration-500">
          <div className="w-10 h-10 border-4 border-[#39a4de] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        fetchPriority="high"
        decoding="sync" 
        className={`${className} transition-all duration-1000 ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-[1.02]'}`}
      />
    </>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const isSection1InView = useInView(section1Ref, {  amount: 0.3 });
  const isSection2InView = useInView(section2Ref, {  amount: 0.2 });
  const isSection3InView = useInView(section3Ref, {  amount: 0.2 });
  const isSection4InView = useInView(section4Ref, {  amount: 0.2 });

  const modules = [
    {
      category: "Core HR",
      items: [
        { name: "Employee Database", icon: <Database className="w-5 h-5" /> },
        { name: "Org Chart", icon: <Users2 className="w-5 h-5" /> },
        { name: "Document Management", icon: <Folder className="w-5 h-5" /> },
        { name: "Self-Service Portal", icon: <User className="w-5 h-5" /> },
      ]
    },
    {
      category: "Time & Attendance",
      items: [
        { name: "GPS Tracking", icon: <MapPin className="w-5 h-5" /> },

        { name: "Shift Management", icon: <Clock className="w-5 h-5" /> },
        { name: "Overtime Calculation", icon: <Timer className="w-5 h-5" /> },
        { name: "Leave Management", icon: <CalendarDays className="w-5 h-5" /> },
      ]
    },
    {
      category: "Payroll",
      items: [
        { name: "Tax Automation", icon: <Calculator className="w-5 h-5" /> },
        { name: "Direct Deposit", icon: <Bank className="w-5 h-5" /> },
        { name: "Benefits Administration", icon: <Heart className="w-5 h-5" /> },
        { name: "Statutory Compliance", icon: <ShieldCheck className="w-5 h-5" /> },
      ]
    }
  ];

  const performanceMetrics = [
    { value: 80, suffix: "%", label: "Admin Time Reduced", description: "Average reduction in manual HR tasks", icon: <Clock className="w-8 h-8" /> },
    { value: 99.8, suffix: "%", label: "Payroll Accuracy", description: "Accuracy rate across all clients", icon: <CreditCard className="w-8 h-8" /> },
    { value: 60, suffix: "%", label: "Ticket Volume Down", description: "Reduction in HR support tickets", icon: <Headphones className="w-8 h-8" /> },
    { value: 40, suffix: "%", label: "Employee Satisfaction", description: "Increase in engagement scores", icon: <Users className="w-8 h-8" /> },
  ];

  const securityFeatures = [
    { icon: <UserCheck className="w-8 h-8" />, label: "Access Control", value: "Role-Based" },
    { icon: <ShieldCheck className="w-8 h-8" />, label: "Data Privacy", value: "Encrypted" },
    { icon: <FileText className="w-8 h-8" />, label: "Compliance", value: "Statutory" },
    { icon: <Database className="w-8 h-8" />, label: "Backups", value: "Daily Auto" },
  ];

  const ctaFeatures = [
    { icon: <Zap className="w-5 h-5" />, text: "Set up in days, not months" },
    { icon: <Download className="w-5 h-5" />, text: "No long-term contracts" },
    { icon: <Headphones className="w-5 h-5" />, text: "Dedicated onboarding support" },
    { icon: <Lock className="w-5 h-5" />, text: "Bank-grade security" },
    { icon: <Globe className="w-5 h-5" />, text: "Global compliance built-in" },
    { icon: <Users className="w-5 h-5" />, text: "Scalable for any team size" },
  ];

  const trustIndicators = [
    { text: "No credit card required", icon: <CreditCard className="w-5 h-5" /> },
    { text: "Cancel anytime", icon: <Calendar className="w-5 h-5" /> },
    { text: "24/7 support", icon: <Headphones className="w-5 h-5" /> },
    { text: "GDPR compliant", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39a4de] via-[#b5a5fa] to-[#39a4de] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ================= UPDATED HERO SECTION ================= */}
      <section
        ref={section1Ref}
        className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center pt-40 pb-12 bg-white"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-50 [background-size:40px_40px] opacity-60 pointer-events-none" />

        {/* Ambient Light / Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#39a4de]/10 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#b5a5fa]/20 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#39a4de]/10 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Smart HR Automation</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
                <span className="text-[#003973]">Simplifying</span>{' '}
                <span className="text-[#2ab6ea]">
                  HR Management
                </span>
              </h1>

              <ScrollReveal delay={0.2}>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-lg">
                  Empower your workforce with an intelligent, data-driven HR platform.
                  From payroll to performance, we automate it all with precision and ease.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up">
                <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                      <Link
                        to="/pricing?trial=true"
                      className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base font-bold text-white bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] rounded-xl shadow-lg shadow-[#003973]/25 transition-all duration-300"
                    >
                      Get Started Free
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base font-bold text-slate-700 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:border-[#39a4de]/30 hover:text-[#39a4de] transition-all duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-tr from-[#39a4de]/5 to-[#b5a5fa]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center gap-2">
                        <Video className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        Book Demo
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Social Proof & Stats */}
              <div className="flex items-center gap-8 py-6 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt={`User ${i}`}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div className="h-8 w-px bg-slate-300" />
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">15+ Companies</span>
                </div>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-100">
                {[
                  { value: 5000, suffix: "+", label: 'Active Users' },
                  { value: 99.9, suffix: "%", decimals: 1, label: 'Uptime SLA' },
                  { value: 4.9, suffix: "/5", decimals: 1, label: 'Rating' }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-slate-900">
                      <CountUp to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </p>
                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visuals */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isSection1InView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-square lg:aspect-auto h-full"
              >
                {/* Main Image Card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#39a4de]/20 to-[#b5a5fa]/20 rounded-[2.5rem] blur-3xl opacity-40"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SmoothHeroImage
                    src="/hr_with_laptop.webp"
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>





                {/* Scroll Indicator */}
                <motion.div
                  style={{ opacity, scale }}
                  className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block"
                  onClick={() => section2Ref.current?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold -rotate-90">Explore More</span>
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <QuickFeatures />

      {/* ================= FEATURES SECTION ================= */}
      <section
        ref={section2Ref}
        className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Cog className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Comprehensive Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#003973]">
              Everything You Need <span className="text-[#2ab6ea]">in One Platform</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From core HR management to advanced analytics, our platform provides a complete suite
              of tools to streamline your entire workforce operations.
            </p>
          </motion.div>

          {/* Modules Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <ScrollReveal
                  key={index}
                  delay={0.1 + index * 0.1}
                  direction="up"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        boxShadow: "0 20px 40px -15px rgba(0, 57, 115, 0.1)"
                    }}
                    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 mb-6">
                      {index === 0 && <Users2 className="w-7 h-7 text-[#39a4de]" />}
                      {index === 1 && <Clock className="w-7 h-7 text-[#39a4de]" />}
                      {index === 2 && <CreditCard className="w-7 h-7 text-[#39a4de]" />}
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-slate-900">{module.category}</h3>
                    <div className="space-y-5">
                      {module.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#39a4de]/5 to-[#b5a5fa]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="text-[#39a4de]">
                              {item.icon}
                            </div>
                          </div>
                          <span className="font-medium text-slate-700">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <TrendingIcon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Proven Results</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#003973]">
                Industry-Leading <span className="text-[#2ab6ea]">Performance</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <ScrollReveal
                  key={index}
                  delay={0.4 + index * 0.1}
                  direction="up"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSection2InView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 15px 30px -10px rgba(0, 57, 115, 0.1)"
                    }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center">
                        <div className="text-[#39a4de]">
                          {metric.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">
                          <CountUp to={metric.value} suffix={metric.suffix} decimals={1} />
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{metric.label}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">{metric.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECURITY SECTION ================= */}
      <section
        ref={section3Ref}
        className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-100 p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal direction="right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Enterprise Security</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#003973]">
                    Uncompromised <span className="text-[#2ab6ea]">HR Data Security</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Safeguard your most valuable asset—your people. Our platform ensures sensitive
                    employee data, compensation details, and personal records are protected with
                    industry-leading security standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      "Role-Based Access Control",
                      "Statutory Compliance Updates",
                      "Encrypted Payroll Data",
                      "Secure Document Vault",
                      "Complete Audit Trails",
                      "2FA & SSO Integration"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-6">
                  {securityFeatures.map((item, index) => (
                    <ScrollReveal
                      key={index}
                      delay={0.2 + index * 0.1}
                      direction="left"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg h-full"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center mb-4">
                          <div className="text-[#39a4de]">
                            {item.icon}
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-slate-900 mb-2">{item.label}</p>
                        <p className="text-lg font-bold text-slate-900">{item.value}</p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        ref={section4Ref}
        className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#39a4de]/5 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#b5a5fa]/5 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" distance={40}>
            <div className="text-center">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Unlock Efficiency</span>
                </div>
              </div>

              {/* Header with Icon Side-by-Side */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-[#39a4de]" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003973]">
                  Ready to <span className="text-[#2ab6ea]">Simplify HR?</span>
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 15+ forward-thinking organizations that have streamlined HR operations,
                reduced costs, and significantly improved employee satisfaction.
              </p>

              {/* Feature Highlights */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {ctaFeatures.map((feature, index) => (
                  <ScrollReveal
                    key={index}
                    delay={0.2 + index * 0.1}
                    direction="up"
                    distance={10}
                  >
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center">
                        <div className="text-[#39a4de]">
                          {feature.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* CTA Buttons */}
              <ScrollReveal delay={0.6} direction="up">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    to="/pricing?trial=true"
                    className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Start Free 7-Days Trial
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Trust Indicators */}
              <ScrollReveal delay={0.8} direction="up" distance={0}>
                <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-slate-200">
                  {trustIndicators.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#39a4de]/10 to-[#b5a5fa]/10 flex items-center justify-center">
                        <div className="text-[#39a4de]">
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Final Note */}
              <ScrollReveal delay={1} direction="up" distance={0}>
                <p className="mt-8 text-slate-500 text-sm">
                  Have questions?{" "}
                  <Link to="/contact" className="text-[#39a4de] font-semibold hover:text-[#2ab6ea] transition-colors">
                    Contact our sales team
                  </Link>{" "}
                  or call us at +91 9966629766
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Hero;