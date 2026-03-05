import React, { useEffect, useRef, useState } from 'react';
import {
    Clock, Calendar, DollarSign, BarChart2, Users,
    Shield, Smartphone,
    Briefcase, FileText, MapPin, Layout,
    Bell, CheckCircle, TrendingUp
} from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// --- Brand Colors ---
// Primary: #003973
// Secondary: #2ab6ea

const CountUp = ({ to, prefix = "", suffix = "" }: { to: number, prefix?: string, suffix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: 2, ease: "easeOut" });
        }
    }, [inView, to, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const FeaturesOverview: React.FC = () => {
    const features = [
        // Using a more unified, professional palette while keeping distinct icons
        {
            icon: <Users className="w-6 h-6" />,
            title: "Employee Management",
            description: "Centralized profiles, document management, and complete lifecycle tracking.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/teamlead.webp"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Time & Attendance",
            description: "AI-powered GPS and biometric tracking with geo-fencing support.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/timetracking.webp"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Leave Management",
            description: "Automated leave workflows, multi-type balance tracking, and holiday calendars.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/leavemanagement.webp"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Automated Payroll",
            description: "Tax-compliant salary processing, one-click payslips, and compliance.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/automatedpayroll.webp"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Requests & Approvals",
            description: "Streamlined chains for assets, certificates, and employee requests.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/feature.webp"
        },
        // Advanced
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: "HR Analytics",
            description: "Real-time insights into trends, performance, and payroll expenses.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/hranalytics.webp"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Employee Portal",
            description: "Mobile-first self-service for leaves, payslips, and profiles.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/employeeportal.webp"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Bank-grade encryption, RBAC, and comprehensive audit logs.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/EnterpriseSecurity.webp"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Smart Work Mode",
            description: "Validate remote work with IP-based tracking and location verification for hybrid teams.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/hr_with_laptop.webp"
        },
        // Admin
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Admin Dashboard",
            description: "A centralized command center for workforce overview, alerts, and vital company stats.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/reports.webp"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Org Structure",
            description: "Flexible configuration for departments, designations, and complex reporting hierarchies.",
            activeColor: "bg-[#003973] text-white",
            inactiveIcon: "text-[#003973]",
            image: "/hr.webp"
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Communication",
            description: "Automated alerts, announcements, and push notifications to keep teams aligned.",
            activeColor: "bg-[#2ab6ea] text-white",
            inactiveIcon: "text-[#2ab6ea]",
            image: "/employees.webp"
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-16 bg-slate-50" id="features">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
                    >
                        <Layout className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">Platform Capabilities</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-[#003973]">
                        Everything You Need to <span className="text-[#2ab6ea]">Scale</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A complete suite of tools designed to manage your workforce from onboarding to exit, all in one unified platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Features List */}
                    {features.map((feature, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`group relative text-left p-6 rounded-2xl transition-all duration-300 border h-full flex flex-col ${activeTab === index
                                ? 'bg-[#e6f0fa] border-[#2ab6ea] shadow-xl scale-[1.02] border'
                                : 'bg-white border-gray-100 hover:border-[#2ab6ea] hover:shadow-lg hover:bg-[#f0f9ff]'
                                }`}
                        >


                            <div className="flex items-start justify-between mb-4">
                                <div className={`
                                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm
                                    ${activeTab === index ? feature.activeColor : 'bg-[#e6f0fa] text-[#003973] group-hover:bg-[#2ab6ea] group-hover:text-white'}
                                `}>
                                    {feature.icon}
                                </div>
                                <div className={`opacity-0 group-hover:opacity-100 transition-opacity text-[#2ab6ea]`}>
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                            </div>

                            <div>
                                <h3 className={`font-bold text-lg mb-2 transition-colors duration-200 ${activeTab === index ? 'text-[#003973]' : 'text-gray-800 group-hover:text-[#2ab6ea]'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm leading-relaxed transition-colors duration-200 ${activeTab === index ? 'text-gray-600' : 'text-gray-600'
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 pt-10 border-t border-gray-200"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Active Users", value: 100, suffix: "+", color: "text-[#003973]" },
                            { label: "Processed Payroll", value: 25, prefix: "₹", suffix: "L+", color: "text-[#2ab6ea]" },
                            { label: "Companies", value: 5, color: "text-[#003973]" },
                            { label: "Support Score", value: 99, suffix: "%", color: "text-[#2ab6ea]" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group cursor-default">
                                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 transform group-hover:scale-105 transition-transform duration-300`}>
                                    <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SmoothImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="relative w-full h-full flex items-center justify-center min-h-[250px]">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 z-10 transition-opacity duration-500">
                    <div className="w-8 h-8 border-4 border-[#2ab6ea] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <img
                loading="lazy"
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`${className} transition-all duration-1000 ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-[0.98]'}`}
            />
        </div>
    );
};

const DetailedFeatures: React.FC = () => {
    // Keeping this section mostly consistent but with updated colors for cohesion
    const details = [
        {
            title: "Smart Recruitment & Onboarding",
            subtitle: "Build Your Dream Team",
            description: "Streamline your entire hiring process from job posting to offer letters. Our ATS helps you track applicants, schedule interviews, and onboard new hires with zero paperwork.",
            points: ["Customizable career pages", "Automated interview scheduling", "Digital offer letter generation", "Paperless onboarding workflows"],
            image: "/recruitment.webp",
            icon: <Briefcase className="w-5 h-5 text-white" />,
            color: "bg-[#003973]",
            direction: "lg:flex-row"
        },
        {
            title: "Performance Management",
            subtitle: "Drive Growth & Excellence",
            description: "Align individual goals with company objectives. Conduct meaningful reviews, track real-time feedback, and identify top performers with data-driven insights.",
            points: ["360-degree feedback loops", "OKR & KPI tracking", "Skill gap analysis", "Automated appraisal cycles"],
            image: "/performance.webp",
            icon: <TrendingUp className="w-5 h-5 text-white" />,
            color: "bg-[#2ab6ea]",
            direction: "lg:flex-row-reverse"
        },
        {
            title: "Mobile-First Experience",
            subtitle: "HR in Your Pocket",
            description: "Empower your workforce with a powerful mobile app. Employees can mark attendance, request leave, and view payslips anytime, anywhere.",
            points: ["Geo-fenced attendance marking", "Instant leave notifications", "Mobile payslip download", "Team directory access"],
            image: "/mobile_feature.webp",
            icon: <Smartphone className="w-5 h-5 text-white" />,
            color: "bg-[#003973]",
            direction: "lg:flex-row"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-[#f0f4f8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
                    >
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">Beyond the Basics</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-[#003973]"
                    >
                        Deep Dive into <span className="text-[#2ab6ea]">Advanced Features</span>
                    </motion.h2>
                </div>

                <div className="space-y-16">
                    {details.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col ${item.direction} items-center gap-8 lg:gap-12`}
                        >
                            {/* Image Side - SaaS Browser Style */}
                            <div className="flex-1 w-full relative group">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[#003973]/5 to-[#2ab6ea]/5 rounded-2xl transform scale-105 transition-all duration-500"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                />

                                <motion.div
                                    className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200/60 ring-1 ring-gray-900/5"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                >
                                    {/* Browser Header */}


                                    <div className="relative overflow-hidden bg-gray-50 transition-colors duration-500">
                                        {/* Browser Dots Overlay - Clean */}
                                        <div className="absolute top-4 left-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#fa5f57] shadow-sm ring-1 ring-black/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] shadow-sm ring-1 ring-black/10" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm ring-1 ring-black/10" />
                                        </div>
                                        <SmoothImage
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#003973]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </motion.div>

                                {/* Floating Badge */}
                                <div className={`absolute -bottom-6 ${item.direction === 'lg:flex-row' ? 'right-0' : 'left-0'} w-16 h-16 ${item.color} rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 z-20 ring-4 ring-white`}>
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">{item.subtitle}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#003973] mb-6 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {item.description}
                                </p>
                                <ul className="space-y-4">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-1 w-4 h-4 rounded-full ${item.color.replace('bg-', 'bg-opacity-10 bg-')} flex items-center justify-center flex-shrink-0`}>
                                                <CheckCircle className={`w-2.5 h-2.5 ${item.color.replace('bg-', 'text-')}`} />
                                            </div>
                                            <span className="text-gray-700 font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesPage: React.FC = () => {
    return (
        <div className="pt-20 bg-white">
            <FeaturesOverview />
            <DetailedFeatures />
        </div>
    );
};

export default FeaturesPage;
