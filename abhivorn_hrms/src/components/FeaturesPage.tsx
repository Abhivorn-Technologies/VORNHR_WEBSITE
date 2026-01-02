import React from 'react';
import {
    Clock, Calendar, DollarSign, BarChart2, Users,
    Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components Merged: FeaturesOverview, AIAssistant ---

const FeaturesOverview: React.FC = () => {
    const features = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Time Tracking",
            description: "AI-powered GPS and biometric tracking for precise attendance.",
            color: "text-blue-600",
            bg: "bg-blue-50",
            borderColor: "group-hover:border-blue-200",
            hoverBg: "group-hover:bg-blue-50/50",
            hoverTitleColor: "group-hover:text-blue-600",
            image: "/feature1.jpg"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Leave Management",
            description: "Automated scheduling with instant approval workflows.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            borderColor: "group-hover:border-emerald-200",
            hoverBg: "group-hover:bg-emerald-50/50",
            hoverTitleColor: "group-hover:text-emerald-600",
            image: "/feature2.jpg"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Automated Payroll",
            description: "Tax-compliant salary processing in just a few clicks.",
            color: "text-amber-600",
            bg: "bg-amber-50",
            borderColor: "group-hover:border-amber-200",
            hoverBg: "group-hover:bg-amber-50/50",
            hoverTitleColor: "group-hover:text-amber-600",
            image: "/feature3.jpg"
        },
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: "HR Analytics",
            description: "Real-time insights to optimize workforce performance.",
            color: "text-purple-600",
            bg: "bg-purple-50",
            borderColor: "group-hover:border-purple-200",
            hoverBg: "group-hover:bg-purple-50/50",
            hoverTitleColor: "group-hover:text-purple-600",
            image: "/feature4.jpg"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Employee Portal",
            description: "Self-service access for payslips, leaves, and requests.",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            borderColor: "group-hover:border-indigo-200",
            hoverBg: "group-hover:bg-indigo-50/50",
            hoverTitleColor: "group-hover:text-indigo-600",
            image: "/feature5.jpg"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Bank-grade encryption keeping your data fully protected.",
            color: "text-red-600",
            bg: "bg-red-50",
            borderColor: "group-hover:border-red-200",
            hoverBg: "group-hover:bg-red-50/50",
            hoverTitleColor: "group-hover:text-red-600",
            image: "/feature6.jpg"
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden" id="features">
            {/* Background Elements - Minimal */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header - Clean & Direct */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6"
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Key Features</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        <span className="text-[#003973]">Core</span>{' '}
                        <span className="text-[#2ab6ea]">
                            Capabilities
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Everything you need to manage your workforce efficiently.
                    </motion.p>
                </div>

                {/* Features Grid - 3 Columns, Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative h-full"
                        >
                            <div className={`
                                relative bg-white rounded-2xl shadow-sm overflow-hidden
                                border border-gray-100
                                ${feature.borderColor}
                                group-hover:shadow-xl group-hover:shadow-blue-500/10
                                transition-all duration-300 
                                cursor-default
                                h-full
                                flex flex-col
                            `}>
                                {/* Image Container */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Icon Badge */}
                                    <div className={`absolute bottom-4 left-4 z-20 ${feature.bg} p-2 rounded-lg shadow-lg`}>
                                        <div className={`${feature.color}`}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 bg-white">
                                    <h4 className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 pt-8 border-t border-gray-100"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Active Users", value: "194", color: "text-blue-600" },
                            { label: "Processed Payroll", value: "₹1.5Cr+", color: "text-emerald-600" },
                            { label: "Companies", value: "4", color: "text-purple-600" },
                            { label: "Support Score", value: "98%", color: "text-amber-600" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group cursor-default">
                                <div className={`text-3xl font-bold ${stat.color} mb-2 transform group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">
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



const FeaturesPage: React.FC = () => {
    return (
        <div className="pt-20">
            <FeaturesOverview />
        </div>
    );
};

export default FeaturesPage;
