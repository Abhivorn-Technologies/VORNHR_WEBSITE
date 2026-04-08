import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, DollarSign, TrendingUp, ShieldCheck, Smartphone } from 'lucide-react';

const features = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Smart Recruitment",
        desc: "Automate hiring workflows"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Time Tracking",
        desc: "Geo-fenced attendance"
    },
    {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Payroll Access",
        desc: "One-click processing"
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Performance",
        desc: "360° appraisals & OKRs"
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Compliance",
        desc: "100% statutory compliant"
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile App",
        desc: "ESS on the go"
    },
];

const QuickFeatures: React.FC = () => {
    return (
        <section className="py-10 bg-white border-b border-slate-100 relative overflow-hidden">
            {/* Subtle Background Blur */}
            <div className="absolute inset-0 bg-blue-50/30 opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.08, 
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 12 }
                            }}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#39a4de] mb-3 group-hover:bg-[#39a4de] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-sm font-bold text-[#003973] mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-slate-500 font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickFeatures;
