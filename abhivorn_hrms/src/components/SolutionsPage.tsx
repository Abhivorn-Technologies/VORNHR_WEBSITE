import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Users, Clock,
    FileText, Smartphone, Shield, BarChart3, Target, ArrowRight,
    TrendingUp, Lock, PieChart, LayoutDashboard, CreditCard, Zap,
    Calendar, Star, Quote, Activity, DollarSign, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserRole } from '../types';



const RoleBenefits: React.FC = () => {
    const navigate = useNavigate();
    const [activeRole, setActiveRole] = useState<UserRole>(UserRole.HR_ADMIN);

    const roles = [
        {
            id: UserRole.HR_ADMIN,
            label: 'HR Manager',
            icon: <LayoutDashboard size={20} />,
            color: 'from-blue-500 to-cyan-400',
            stat: '85% time saved'
        },
        {
            id: UserRole.EMPLOYEE,
            label: 'Employee',
            icon: <Users size={20} />,
            color: 'from-blue-500 to-cyan-400',
            stat: '94% satisfaction'
        },
        {
            id: UserRole.TEAM_LEAD,
            label: 'Team Lead',
            icon: <BarChart3 size={20} />,
            color: 'from-blue-500 to-cyan-400',
            stat: '40% productivity boost'
        },
        {
            id: UserRole.PAYROLL_MANAGER,
            label: 'Finance',
            icon: <CreditCard size={20} />,
            color: 'from-blue-500 to-cyan-400',
            stat: '99.9% accuracy'
        },
    ];

    const benefitsByRole = {
        [UserRole.HR_ADMIN]: {
            title: "Modern HR Management Suite",
            subtitle: "Transform your HR operations with intelligent automation and powerful insights",
            icon: <Shield className="w-6 h-6" />,
            features: [
                {
                    title: "Unified Workforce Hub",
                    description: "Centralized employee data management with AI-powered analytics",
                    icon: <Users className="w-5 h-5" />
                },
                {
                    title: "Smart Compliance Engine",
                    description: "Automated regulatory compliance with real-time updates and alerts",
                    icon: <Shield className="w-5 h-5" />
                },
                {
                    title: "Performance Analytics",
                    description: "Advanced people analytics with predictive insights and reporting",
                    icon: <TrendingUp className="w-5 h-5" />
                },
                {
                    title: "Talent Development",
                    description: "Integrated learning management and career path planning",
                    icon: <Target className="w-5 h-5" />
                }
            ],
            metrics: [
                { value: "85%", label: "Time Saved", change: "+15%" },
                { value: "99.9%", label: "Accuracy", change: "+5%" },
                { value: "500+", label: "HR Teams", change: "Using Now" }
            ],
            cta: "Schedule HR Demo",
            image: "/hr.jpg"
        },
        [UserRole.EMPLOYEE]: {
            title: "Intuitive Employee Experience Platform",
            subtitle: "Empower your workforce with seamless self-service and engagement tools",
            icon: <Smartphone className="w-6 h-6" />,
            features: [
                {
                    title: "Mobile-First Portal",
                    description: "Access everything from any device with native mobile experience",
                    icon: <Smartphone className="w-5 h-5" />
                },
                {
                    title: "Instant Time Tracking",
                    description: "One-tap clock in/out with GPS verification and overtime alerts",
                    icon: <Clock className="w-5 h-5" />
                },
                {
                    title: "Smart Leave Management",
                    description: "AI-powered leave recommendations and instant approval workflows",
                    icon: <Calendar className="w-5 h-5" />
                },
                {
                    title: "Document Vault",
                    description: "Secure access to payslips, tax forms, and personal documents",
                    icon: <Lock className="w-5 h-5" />
                }
            ],
            metrics: [
                { value: "94%", label: "User Satisfaction", change: "+22%" },
                { value: "70%", label: "Time Saved", change: "+25%" },
                { value: "85%", label: "Mobile Adoption", change: "+30%" }
            ],
            cta: "Try Employee Portal",
            image: "/employees.jpg"
        },
        [UserRole.TEAM_LEAD]: {
            title: "Advanced Team Management Tools",
            subtitle: "Optimize team performance with real-time insights and automated workflows",
            icon: <BarChart3 className="w-6 h-6" />,
            features: [
                {
                    title: "Team Performance Dashboard",
                    description: "Real-time KPI tracking with predictive analytics and alerts",
                    icon: <BarChart3 className="w-5 h-5" />
                },
                {
                    title: "Smart Scheduling",
                    description: "AI-powered shift planning with fatigue management and fairness scoring",
                    icon: <Clock className="w-5 h-5" />
                },
                {
                    title: "Goal Alignment",
                    description: "OKR tracking with team contribution analysis and progress insights",
                    icon: <Target className="w-5 h-5" />
                },
                {
                    title: "Resource Optimization",
                    description: "Capacity planning with skill matching and workload distribution",
                    icon: <PieChart className="w-5 h-5" />
                }
            ],
            metrics: [
                { value: "40%", label: "Productivity Boost", change: "+18%" },
                { value: "65%", label: "Time Saved", change: "+20%" },
                { value: "88%", label: "Team Satisfaction", change: "+15%" }
            ],
            cta: "Explore Team Tools",
            image: "/teamlead.jpg"
        },
        [UserRole.PAYROLL_MANAGER]: {
            title: "Intelligent Payroll & Finance Suite",
            subtitle: "Automated, accurate, and compliant financial operations",
            icon: <CreditCard className="w-6 h-6" />,
            features: [
                {
                    title: "Automated Payroll Processing",
                    description: "End-to-end automation with tax compliance and audit trails",
                    icon: <Zap className="w-5 h-5" />
                },
                {
                    title: "Real-Time Integration",
                    description: "Seamless sync with attendance, benefits, and accounting systems",
                    icon: <TrendingUp className="w-5 h-5" />
                },
                {
                    title: "Advanced Reporting",
                    description: "Comprehensive financial analytics and statutory reporting",
                    icon: <FileText className="w-5 h-5" />
                },
                {
                    title: "Multi-Currency Support",
                    description: "Global payroll processing with local compliance and payments",
                    icon: <CreditCard className="w-5 h-5" />
                }
            ],
            metrics: [
                { value: "92%", label: "Faster Processing", change: "+35%" },
                { value: "99.9%", label: "Accuracy", change: "+8%" },
                { value: "100%", label: "Compliance", change: "Always" }
            ],
            cta: "View Finance Features",
            image: "/payroll.jpg"
        }
    };

    const currentBenefits = benefitsByRole[activeRole];

    return (
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-slate-100/50 [background-size:40px_40px]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Role Specific Benefits</span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        <span className="text-[#003973]">Built for</span>{' '}
                        <span className="text-[#2ab6ea]">
                            Every Role
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Tailored experiences that adapt to your team's needs.
                    </motion.p>
                </div>

                {/* Role Selector */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 md:gap-3 mb-8">
                    {roles.map((role) => {
                        const isActive = activeRole === role.id;
                        return (
                            <motion.button
                                key={role.id}
                                onClick={() => setActiveRole(role.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative flex items-center justify-center gap-2 md:gap-3 px-3 py-3 md:px-5 md:py-3 rounded-xl md:rounded-2xl font-medium text-xs md:text-base transition-all duration-300 w-full md:w-auto ${isActive
                                    ? 'text-white shadow-xl'
                                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-xl md:rounded-2xl shadow-lg`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <div className="relative z-10 flex items-center gap-2 md:gap-3">
                                    <div className={`${isActive ? 'text-white' : 'text-gray-500'}`}>
                                        {role.icon}
                                    </div>
                                    <span className="font-semibold">{role.label}</span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Column: Content */}
                                <div className="space-y-8">
                                    <div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
                                        >
                                            {currentBenefits.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-lg text-gray-600 leading-relaxed"
                                        >
                                            {currentBenefits.subtitle}
                                        </motion.p>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {currentBenefits.metrics.map((metric, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + 0.2 }}
                                                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                                                    {metric.label}
                                                </div>
                                                <div className="text-xs text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-0.5 rounded-full">
                                                    {metric.change}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.button
                                        onClick={() => navigate('/contact')}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#003973] to-[#2ab6ea] rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 group"
                                    >
                                        {currentBenefits.cta}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>

                                {/* Right Column: Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                                        <img
                                            src={currentBenefits.image}
                                            alt={currentBenefits.title}
                                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/50 shadow-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-brand-primary/10 p-2 rounded-lg text-brand-primary">
                                                    {currentBenefits.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium">Focus Area</p>
                                                    <p className="text-sm font-bold text-gray-900">{roles.find(r => r.id === activeRole)?.label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements behind image */}
                                    <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
                                    <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                                </motion.div>
                            </div>

                            {/* Features Grid below */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                {currentBenefits.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 + 0.4 }}
                                        className="group bg-white border border-gray-100/50 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 text-brand-primary">
                                            {feature.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>


                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const SocialProof: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const clients = [
        {
            id: 0,
            company: "Abhivorn",
            fullCompany: "Abhivorn Technologies",
            industry: "Technology",
            logo: "/abhivorn.png",
            color: "blue",
            gradient: "from-blue-500 to-cyan-500",
            quote: "We reduced our payroll processing time from 3 days to just under 2 hours. The ROI was immediate.",
            author: "Neelam Arun",
            role: "CEO & Founder",
            metrics: [
                { label: "Time Saved", value: "95%", icon: <Clock className="w-4 h-4" />, color: "bg-white/10 text-blue-200" },
                { label: "Efficiency", value: "3x", icon: <Activity className="w-4 h-4" />, color: "bg-white/10 text-cyan-200" },
                { label: "Errors", value: "0%", icon: <ArrowUpRight className="w-4 h-4" />, color: "bg-white/10 text-emerald-200" }
            ]
        },
        {
            id: 1,
            company: "Sai Sharanya",
            fullCompany: "Sai Sharanya Hospital",
            industry: "Healthcare",
            logo: "/ss_hospital.jpeg",
            color: "emerald",
            gradient: "from-emerald-500 to-teal-500",
            quote: "Managing shifts for 500+ hospital staff was a nightmare. Abhivorn made it automated and seamless.",
            author: "Dr. Ravikanth",
            role: "Administrator",
            metrics: [
                { label: "Staff Covered", value: "500+", icon: <Users className="w-4 h-4" />, color: "bg-white/10 text-emerald-200" },
                { label: "Uptime", value: "99.9%", icon: <Activity className="w-4 h-4" />, color: "bg-white/10 text-teal-200" },
                { label: "Compliance", value: "100%", icon: <Shield className="w-4 h-4" />, color: "bg-white/10 text-purple-200" }
            ]
        },
        {
            id: 2,
            company: "Next Gen",
            fullCompany: "Next Gen Hiring",
            industry: "Recruitment",
            logo: "/nextgen.jpeg",
            color: "violet",
            gradient: "from-violet-500 to-purple-500",
            quote: "The automated onboarding workflows helped us scale our recruitment drive without adding HR headcount.",
            author: "Sampath Nomula",
            role: "HR Director",
            metrics: [
                { label: "Onboarding", value: "10min", icon: <Clock className="w-4 h-4" />, color: "bg-white/10 text-violet-200" },
                { label: "Growth", value: "200%", icon: <ArrowUpRight className="w-4 h-4" />, color: "bg-white/10 text-purple-200" },
                { label: "Paperwork", value: "None", icon: <FileText className="w-4 h-4" />, color: "bg-white/10 text-pink-200" }
            ]
        },
        {
            id: 3,
            company: "Cred Marg",
            fullCompany: "Cred Marg",
            industry: "Fintech",
            logo: "/cred.jpeg",
            color: "amber",
            gradient: "from-amber-500 to-orange-500",
            quote: "A distinct competitive advantage. Our employees love the transparency of the self-service portal.",
            author: "Vishal Prathap",
            role: "Operations Head",
            metrics: [
                { label: "Adoption", value: "98%", icon: <Users className="w-4 h-4" />, color: "bg-white/10 text-amber-200" },
                { label: "Rating", value: "4.9/5", icon: <Star className="w-4 h-4" />, color: "bg-white/10 text-orange-200" },
                { label: "Cost Saving", value: "25%", icon: <DollarSign className="w-4 h-4" />, color: "bg-white/10 text-red-200" }
            ]
        }
    ];

    // Auto-rotation
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % clients.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, clients.length]);

    const gradientVariants: { [key: string]: string } = {
        blue: "from-blue-900 via-blue-800 to-indigo-900",
        emerald: "from-emerald-900 via-emerald-800 to-teal-900",
        violet: "from-violet-900 via-purple-900 to-indigo-900",
        amber: "from-amber-900 via-amber-800 to-orange-900"
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Enhanced Background - Tighter Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Trusted by Industry Leaders</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        <span className="text-[#003973]">Real Stories.</span>{' '}
                        <span className="text-[#2ab6ea]">
                            Real Impact.
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how companies are transforming their HR operations with Abhivorn.
                    </p>
                </motion.div>

                {/* Interactive Success Stories Section - Optimized Height */}
                <div className="grid lg:grid-cols-12 gap-6 h-auto lg:h-[400px] mb-10">
                    {/* Compact Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {clients.map((client, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                onMouseLeave={() => setIsAutoPlaying(true)}
                                className={`
                                    w-full text-left p-2.5 rounded-lg transition-all duration-300 border
                                    flex items-center gap-3 group relative overflow-hidden
                                    ${activeTab === index
                                        ? 'bg-white border-blue-200 shadow-md scale-100 z-10 ring-1 ring-blue-100'
                                        : 'bg-white/60 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm'
                                    }
                                `}
                            >
                                {/* Active Background */}
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="active-tab-bg"
                                        className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-white"
                                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                    />
                                )}

                                {/* Logo - Smaller */}
                                <div className={`
                                    relative w-9 h-9 rounded-lg flex items-center justify-center p-1.5
                                    transition-all duration-300 z-10 shrink-0
                                    ${activeTab === index
                                        ? 'bg-white shadow-sm border border-blue-100'
                                        : 'bg-white shadow-sm border border-gray-100'
                                    }
                                `}>
                                    <img
                                        src={client.logo}
                                        alt={client.company}
                                        className={`w-full h-full object-contain transition-all duration-300 ${activeTab === index ? 'grayscale-0' : 'grayscale'}`}
                                    />
                                </div>

                                <div className="z-10 flex-1 min-w-0">
                                    <h4 className={`font-bold text-sm truncate ${activeTab === index ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {client.company}
                                    </h4>
                                    <span className={`text-[10px] font-medium uppercase tracking-wider ${activeTab === index ? 'text-blue-600' : 'text-gray-400'}`}>
                                        {client.industry}
                                    </span>
                                </div>

                                {activeTab === index && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="z-10 w-1.5 h-1.5 rounded-full bg-blue-500" />
                                )}
                            </motion.button>
                        ))}

                        {/* Trust Badge - Compact */}
                        <div className="mt-auto pt-3 border-t border-gray-200/50">
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/50 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                    <span className="text-sm font-bold text-gray-900">4.9/5</span>
                                </div>
                                <span className="text-[10px] text-gray-500 font-medium">194+ Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area - Super Compact */}
                    <div
                        className="lg:col-span-8 relative"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <div className={`
                                    h-full relative rounded-2xl overflow-hidden shadow-xl
                                    flex flex-col justify-between p-6 md:p-8
                                    bg-gradient-to-br ${gradientVariants[clients[activeTab].color]}
                                    text-white
                                `}>
                                    {/* Background Animation */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                                        className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-white/10 dashed-circle rounded-full pointer-events-none"
                                    />

                                    {/* Top Row */}
                                    <div className="relative z-10 flex justify-between items-start mb-4">
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/20">
                                            <img src={clients[activeTab].logo} alt="logo" className="w-8 h-8 object-contain" />
                                        </div>
                                        <div className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider">
                                            Success Story
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="relative z-10 mb-6 flex-1">
                                        <Quote className="w-6 h-6 text-white/40 mb-3" />
                                        <blockquote className="text-xl md:text-2xl font-medium leading-normal text-white mb-4 line-clamp-3">
                                            "{clients[activeTab].quote}"
                                        </blockquote>
                                        <div>
                                            <div className="text-base font-bold">{clients[activeTab].author}</div>
                                            <div className="text-xs text-white/70">{clients[activeTab].role}</div>
                                        </div>
                                    </div>

                                    {/* Metrics Grid - Very Compact */}
                                    <div className="relative z-10 grid grid-cols-3 gap-3">
                                        {clients[activeTab].metrics.map((metric, i) => (
                                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20">
                                                <div className="flex items-center gap-1.5 mb-0.5 opacity-80">
                                                    {React.cloneElement(metric.icon as React.ReactElement<{ className?: string }>, { className: "w-3 h-3" })}
                                                    <span className="text-[9px] uppercase font-bold tracking-wider">{metric.label}</span>
                                                </div>
                                                <div className="text-lg font-bold">{metric.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Stats - Integrated Tighter */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Active Users", value: "194+", color: "text-blue-600" },
                            { label: "Payroll Processed", value: "₹1.5Cr", color: "text-emerald-600" },
                            { label: "Hours Saved", value: "50k+", color: "text-amber-600" },
                            { label: "Uptime SLA", value: "99.9%", color: "text-purple-600" },
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default p-3 hover:bg-white rounded-lg transition-colors">
                                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SolutionsPage: React.FC = () => {
    return (
        <div className="pt-20">

            <RoleBenefits />
            <SocialProof />
        </div>
    );
};

export default SolutionsPage;
