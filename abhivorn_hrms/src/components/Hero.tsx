import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white">
            {/* 1. Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-50 [background-size:40px_40px] opacity-60 pointer-events-none" />

            {/* 2. Ambient Light / Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8"
                        >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-gray-700">#1 HR Platform for Enterprises</span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            <span className="text-[#003973]">Simplifying</span> <br />
                            <span className="text-[#2ab6ea]">
                                HR Management
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Empower your workforce with an intelligent, data-driven HR platform. From payroll to performance, we automate it all.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/pricing" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2ab6ea] rounded-xl shadow-lg shadow-[#003973]/25 hover:bg-[#003973] hover:shadow-[#003973]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                        </div>

                        <div className="flex items-center gap-8 py-6 border-t border-slate-100">
                            {[
                                { count: '194', label: 'Active Users' },
                                { count: '99.9%', label: 'Uptime SLA' },
                                { count: '4.9/5', label: 'Customer Rating' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl font-bold text-slate-900">{stat.count}</p>
                                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-square lg:aspect-auto h-full"
                        >
                            {/* Main Image Card */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-purple-500/20 rounded-[2.5rem] transform rotate-3 blur-3xl opacity-40" />
                            <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100">
                                <img
                                    src="/hr_with_laptop.png"
                                    alt="Dashboard Preview"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating Widget 1: Employee Satisfaction */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-[5%] left-0 md:top-[10%] md:-left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-64"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        <Star className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Team Morale</p>
                                        <p className="text-xs text-slate-500">Weekly Pulse Check</p>
                                    </div>
                                </div>
                                <div className="flex items-end gap-2 h-16 justify-between px-1">
                                    {[40, 65, 50, 80, 60, 90, 85].map((h, i) => (
                                        <div key={i} className="w-2 bg-orange-500 rounded-t-sm" style={{ height: `${h}%`, opacity: i > 3 ? 1 : 0.4 }} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating Widget 2: Payroll */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-[5%] right-0 md:bottom-[10%] md:-right-[5%] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 w-56"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 mb-1">$42,500</p>
                                    <p className="text-xs text-slate-500">Payroll Processed Today</p>
                                </div>
                                <div className="mt-4 flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+8</div>
                                </div>
                            </motion.div>

                            {/* Decoration Dots */}
                            <div className="absolute top-1/2 -right-12 grid grid-cols-2 gap-2 opacity-50">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;