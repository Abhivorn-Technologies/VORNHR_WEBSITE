
import React, { useState } from 'react';
import {
    Users, Briefcase, Building2,
    CheckCircle2, Clock, RefreshCw,
    FileText, Smartphone, Shield,
    BarChart3, ArrowRight,
    TrendingUp, Lock, PieChart
} from 'lucide-react';

const Solutions: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: "For HR Leaders",
            icon: <Users className="w-5 h-5" />,
            description: "Strategic HR management and compliance"
        },
        {
            name: "For Employees",
            icon: <Briefcase className="w-5 h-5" />,
            description: "Self-service and transparency"
        },
        {
            name: "For Executives",
            icon: <Building2 className="w-5 h-5" />,
            description: "Business insights and scalability"
        }
    ];

    const solutions = [
        // HR Leaders
        {
            title: "Strategic HR Management",
            description: "Streamline administrative tasks and focus on strategic initiatives that drive business growth.",
            features: [
                {
                    title: "Automated Attendance",
                    description: "Real-time sync from biometrics & mobile apps directly to payroll systems",
                    benefit: "95% reduction in manual data entry",
                    icon: <Clock className="w-6 h-6" />,
                    color: "from-[#39a4de] to-blue-500",
                    bg: "bg-gradient-to-br from-[#39a4de]/10 to-blue-100/20"
                },
                {
                    title: "Accurate Payroll",
                    description: "One-click payroll processing with automatic tax calculations and compliance",
                    benefit: "99.9% accuracy guarantee",
                    icon: <RefreshCw className="w-6 h-6" />,
                    color: "from-emerald-500 to-emerald-600",
                    bg: "bg-gradient-to-br from-emerald-100 to-emerald-50"
                }
            ],
            stats: [
                { value: "70%", label: "Time Saved", description: "On administrative tasks" },
                { value: "99%", label: "Accuracy", description: "Payroll and compliance" },
                { value: "24/7", label: "Support", description: "Dedicated HR support" }
            ]
        },
        // Employees
        {
            title: "Employee Empowerment",
            description: "Provide transparency and control to your workforce with self-service tools.",
            features: [
                {
                    title: "Self-Service Portal",
                    description: "Instant access to payslips, tax documents, and leave history via mobile app",
                    benefit: "24/7 access to personal data",
                    icon: <FileText className="w-6 h-6" />,
                    color: "from-[#b5a5fa] to-purple-500",
                    bg: "bg-gradient-to-br from-[#b5a5fa]/10 to-purple-100/20"
                },
                {
                    title: "Mobile Attendance",
                    description: "Geofenced self-check-in from smartphones with real-time tracking",
                    benefit: "95% mobile adoption rate",
                    icon: <Smartphone className="w-6 h-6" />,
                    color: "from-cyan-500 to-cyan-600",
                    bg: "bg-gradient-to-br from-cyan-100 to-cyan-50"
                }
            ],
            stats: [
                { value: "4.8/5", label: "Satisfaction", description: "Employee feedback" },
                { value: "85%", label: "Adoption", description: "Self-service usage" },
                { value: "50%", label: "Queries Reduced", description: "HR ticket volume" }
            ]
        },
        // Executives
        {
            title: "Business Intelligence",
            description: "Make data-driven decisions with real-time insights and predictive analytics.",
            features: [
                {
                    title: "Compliance Automation",
                    description: "System auto-updates with latest labor laws and tax regulations",
                    benefit: "Zero compliance penalties",
                    icon: <Shield className="w-6 h-6" />,
                    color: "from-amber-500 to-amber-600",
                    bg: "bg-gradient-to-br from-amber-100 to-amber-50"
                },
                {
                    title: "Advanced Analytics",
                    description: "Real-time dashboards showing workforce metrics and detailed cost analysis",
                    benefit: "30% better decisions",
                    icon: <BarChart3 className="w-6 h-6" />,
                    color: "from-indigo-500 to-indigo-600",
                    bg: "bg-gradient-to-br from-indigo-100 to-indigo-50"
                }
            ],
            stats: [
                { value: "40%", label: "Cost Savings", description: "Operational efficiency" },
                { value: "25%", label: "Productivity", description: "Workforce improvement" },
                { value: "99.9%", label: "Uptime", description: "System reliability" }
            ]
        }
    ];

    return (
        <section className="py-10 bg-gradient-to-b from-white to-[#fbfbfc] relative overflow-hidden" id="solutions">
            {/* Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#39a4de]/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#39a4de]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#b5a5fa]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-gray-700">Tailored Solutions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Designed for Every{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Stakeholder
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Custom solutions addressing the unique challenges faced by HR teams, employees, and business leaders.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`group flex flex-col items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${activeTab === index
                                ? 'bg-white border-2 border-[#39a4de] shadow-lg'
                                : 'bg-white border border-[#dfe0e2] hover:border-[#39a4de]/30 hover:shadow-md'
                                }`}
                        >
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${activeTab === index
                                ? 'bg-[#39a4de] text-white'
                                : 'bg-gray-100 text-gray-600'
                                } group-hover:bg-[#39a4de] group-hover:text-white transition-colors duration-300`}>
                                {tab.icon}
                            </div>
                            <div className="text-center">
                                <div className={`font-semibold ${activeTab === index ? 'text-[#39a4de]' : 'text-gray-900'}`}>
                                    {tab.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{tab.description}</div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="max-w-6xl mx-auto">
                    {/* Solution Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                            {solutions[activeTab].title}
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {solutions[activeTab].description}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {solutions[activeTab].features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-2xl p-5 border border-[#dfe0e2] hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden relative"
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        padding: '1px',
                                        background: `linear-gradient(45deg, #39a4de, #b5a5fa, #39a4de)`,
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude'
                                    }}
                                ></div>

                                <div className="relative">
                                    {/* Icon */}
                                    <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#39a4de] transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-500 mb-4 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Benefit */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span className="text-emerald-600 font-semibold">{feature.benefit}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#39a4de] group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white rounded-2xl border border-[#dfe0e2] p-5">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 text-gray-600 mb-2">
                                <TrendingUp className="w-4 h-4 text-[#39a4de]" />
                                <span className="text-sm font-medium">PROVEN RESULTS</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">Key Performance Metrics</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {solutions[activeTab].stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="text-center group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-[#39a4de] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#39a4de]/10 to-[#b5a5fa]/10 rounded-full px-6 py-2 mb-6">
                            <Lock className="w-4 h-4 text-[#39a4de]" />
                            <span className="text-sm font-medium text-gray-700">Enterprise-Grade Security Included</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#39a4de] to-[#2f8bc4] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[200px]">
                                <span>Get Custom Solution</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-white text-gray-700 px-6 py-2.5 rounded-xl font-medium border border-[#dfe0e2] hover:border-gray-300 transition-all duration-300 min-w-[200px]">
                                <PieChart className="w-5 h-5 text-[#39a4de]" />
                                <span>View Case Studies</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;