import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Check, ArrowRight, ChevronDown, HelpCircle,
    LayoutGrid, Clock, ShieldCheck, CreditCard, Users,
    Zap, Calendar, FileText, BarChart, Lock, Database,
    Code, AlertCircle, Wallet, RefreshCw, MessageSquare, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components Merged: PricingCalculator, FAQ ---

const plans = [
    {
        name: 'Starter',
        price: '₹1,999',
        description: 'Up to 50 employees',
        features: [
            'Core HR Database',
            'Leave Management',
            'Employee Self Service',
            'Basic Reports',
            'Mobile App Access',
            'Email Support'
        ]
    },
    {
        name: 'Professional',
        price: '₹4,999',
        description: 'Up to 200 employees',
        features: [
            'Everything in Starter',
            'Payroll Integration',
            'Attendance with GPS',
            'Document Management',
            'Expense Tracking',
            '24/7 Priority Support',
            'Slack/Teams Integration'
        ]
    }
];

const PricingCalculator: React.FC = () => {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

    const getPrice = (planName: string) => {
        if (billingCycle === 'monthly') {
            return planName === 'Starter' ? '₹1,999' : '₹4,999';
        }
        return planName === 'Starter' ? '₹1,799' : '₹4,499';
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4" id="pricing-container">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Flexible Plans</span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    <span className="text-[#003973]">Simple,</span>{' '}
                    <span className="text-[#2ab6ea]">
                        Transparent Pricing
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Start with a 30-day free trial. No credit card needed. Cancel anytime.
                </motion.p>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4">
                    <span onClick={() => setBillingCycle('monthly')} className={`text-sm font-bold cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${billingCycle === 'yearly' ? 'bg-[#2ab6ea]' : 'bg-gray-200'}`}
                    >
                        <motion.div
                            className="w-6 h-6 bg-white rounded-full shadow-sm"
                            animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </button>
                    <span onClick={() => setBillingCycle('yearly')} className={`text-sm font-bold cursor-pointer transition-colors flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                        Yearly
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm border border-emerald-200 animate-pulse">
                            Save 10%
                        </span>
                    </span>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                {plans.map((plan, index) => {
                    const isPopular = plan.name === 'Professional';
                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl flex flex-col overflow-hidden h-full group transition-all duration-300 ${isPopular
                                ? 'bg-[#fbfbfc] border-2 border-brand-primary/20 shadow-brand-lg z-10'
                                : 'bg-[#fbfbfc] border border-brand-border shadow-brand-sm hover:shadow-brand-md hover:-translate-y-1'
                                }`}
                        >
                            {/* Popular Badge */}
                            {isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#2ab6ea] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-b-lg tracking-widest shadow-md">
                                    Most Popular
                                </div>
                            )}

                            {/* 10% OFF Badge */}
                            {billingCycle === 'yearly' && (
                                <div className={`absolute top-4 ${isPopular ? 'right-2' : 'right-4'} bg-[#f9fbfd] text-emerald-600 text-xs font-bold px-2 py-1 rounded-full border border-emerald-100`}>
                                    10% OFF
                                </div>
                            )}

                            {/* Card Header */}
                            <div className={`p-6 pb-4 border-b ${isPopular ? 'bg-brand-primary/5 border-brand-primary/20' : 'bg-[#f9fbfd] border-brand-border'}`}>
                                <h3 className={`text-lg font-bold ${isPopular ? 'text-brand-primary' : 'text-gray-900'}`}>{plan.name}</h3>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{getPrice(plan.name)}</span>
                                    <span className="text-gray-500 text-sm font-medium">/month</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 font-medium">{plan.description}</p>
                                {billingCycle === 'yearly' && (
                                    <p className="text-xs text-emerald-600 mt-2 font-bold">Billed annually</p>
                                )}
                            </div>

                            {/* Scrollable Features Area */}
                            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${isPopular ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-100 text-gray-500'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm text-gray-600 font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer */}
                            <div className="p-5 border-t border-brand-border bg-[#fbfbfc] z-10 mt-auto">
                                <Link to="/contact" className="w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] bg-[#2ab6ea] border-2 border-[#2ab6ea] text-white hover:bg-[#003973] hover:border-[#003973] hover:text-white hover:shadow-brand-sm hover:shadow-[#003973]/20 hover:scale-[1.02] group">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Customization / Enterprise Card */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl flex flex-col overflow-hidden h-full group bg-[#fbfbfc] border border-brand-border shadow-brand-lg hover:shadow-brand-xl transition-all duration-300"
                >
                    <div className="relative p-8 flex-1 flex flex-col justify-center text-center z-10">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-8 h-8 text-brand-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-4">Enterprise</h3>
                        <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                            Need a tailored plan for a larger team? Get custom integrations, dedicated support, and SLA guarantees.
                        </p>

                        <div className="mt-auto">
                            <Link to="/contact" className="w-full bg-[#2ab6ea] border-2 border-[#2ab6ea] text-white hover:bg-[#003973] hover:border-[#003973] hover:text-white py-4 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#003973]/20 flex items-center justify-center gap-2 active:scale-[0.98] hover:scale-[1.02] group">
                                Contact Sales
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

type Category = 'general' | 'attendance' | 'payroll' | 'security' | 'implementation' | 'pricing';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<Category>('general');

    const categories: { id: Category; label: string; icon: React.ReactNode; color: string; bg: string; text: string; border: string }[] = [
        { id: 'general', label: 'General', icon: <LayoutGrid className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        { id: 'attendance', label: 'Attendance', icon: <Clock className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        { id: 'payroll', label: 'Payroll', icon: <CreditCard className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        { id: 'security', label: 'Security', icon: <ShieldCheck className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        { id: 'implementation', label: 'Setup', icon: <Zap className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
        { id: 'pricing', label: 'Pricing', icon: <Users className="w-4 h-4" />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' }
    ];

    const allFaqs = {
        general: [
            {
                question: "What is Abhivorn and who is it for?",
                answer: "Abhivorn is a comprehensive HR management platform designed for modern businesses of all sizes. Whether you're a startup with 10 employees or an enterprise with 1000+, our platform scales to meet your needs. We serve companies across industries including technology, healthcare, manufacturing, retail, and professional services.",
                icon: <HelpCircle className="w-5 h-5" />
            },
            {
                question: "How does the 30-day free trial work?",
                answer: "Start with a complete 30-day free trial with access to all premium features. No credit card required during trial. You can invite unlimited team members, set up workflows, configure attendance rules, test payroll processing, and explore every feature. We provide dedicated onboarding support and you can cancel anytime before trial ends.",
                icon: <Zap className="w-5 h-5" />
            },
            {
                question: "Can I migrate from my current HR software?",
                answer: "Yes! We offer free data migration assistance for all new customers. Our team will help you transfer employee data, leave balances, attendance history, and payroll information from your previous system. We support CSV imports and can connect to APIs of popular HR platforms for seamless migration.",
                icon: <Users className="w-5 h-5" />
            }
        ],
        attendance: [
            {
                question: "How does GPS and biometric attendance work?",
                answer: "Employees can mark attendance using our mobile app with GPS location verification. You can set geofenced areas for specific office locations. For biometric integration, we support all major biometric devices (ZKTeco, Matrix, etc.) through API integration. Attendance data syncs in real-time to the dashboard.",
                icon: <Clock className="w-5 h-5" />
            },
            {
                question: "Can employees mark attendance offline?",
                answer: "Yes, our mobile app supports offline attendance marking. When employees are in areas with poor connectivity, the app stores attendance data locally and automatically syncs when internet connection is restored. All offline records are time-stamped and geotagged.",
                icon: <ShieldCheck className="w-5 h-5" />
            },
            {
                question: "How are overtime and shift differentials calculated?",
                answer: "You can configure custom shift rules, overtime rates, and night shift allowances. The system automatically calculates overtime based on configured rules (daily/weekly limits). Shift differentials for night shifts or holidays are applied automatically in payroll processing.",
                icon: <CreditCard className="w-5 h-5" />
            },
            {
                question: "What types of leave policies can I configure?",
                answer: "Configure unlimited leave types (sick, casual, maternity, bereavement, etc.) with accrual policies, carry-over limits, and approval workflows. Set up holiday calendars, leave quotas by department, and automatic leave balance updates.",
                icon: <Calendar className="w-5 h-5" />
            }
        ],
        payroll: [
            {
                question: "Does Abhivorn handle statutory compliance automatically?",
                answer: "Yes, we automate all statutory compliance including PF, ESI, PT, TDS, and professional tax. Our system updates automatically with latest tax slabs and government regulations. We generate all required statutory reports and compliance forms.",
                icon: <ShieldCheck className="w-5 h-5" />
            },
            {
                question: "Can I generate bank payment files?",
                answer: "Yes, you can generate bank-compatible payment files (NEFT/RTGS) for all major Indian banks. The system supports bulk salary transfers with one-click processing. We also support multiple salary accounts and payment schedules.",
                icon: <CreditCard className="w-5 h-5" />
            },
            {
                question: "How does reimbursement and expense management work?",
                answer: "Employees can submit expense claims with receipts through mobile/web. Configure approval workflows, expense categories, and limits. Approved expenses are automatically included in payroll processing with proper audit trails.",
                icon: <FileText className="w-5 h-5" />
            },
            {
                question: "What payroll reports are available?",
                answer: "Generate 50+ payroll reports including salary register, payslips, bank statements, PF/ESI challans, Form 16, payroll summary, year-to-date reports, and custom analytics. All reports can be exported in PDF, Excel, or CSV formats.",
                icon: <BarChart className="w-5 h-5" />
            }
        ],
        security: [
            {
                question: "How secure is my employee data?",
                answer: "We implement enterprise-grade security: AES-256 encryption for data at rest and in transit, SOC 2 Type II certified, GDPR compliant infrastructure, regular security audits, and penetration testing. Data is backed up daily across multiple geographic locations.",
                icon: <ShieldCheck className="w-5 h-5" />
            },
            {
                question: "What access controls are available?",
                answer: "Granular role-based access control (RBAC) with 50+ permission settings. Define user roles with specific access to modules, data, and actions. Two-factor authentication (2FA) available for all users. IP whitelisting for admin access.",
                icon: <Lock className="w-5 h-5" />
            },
            {
                question: "Where is data hosted and how is it backed up?",
                answer: "Data is hosted on AWS India (Mumbai) region with 99.99% uptime SLA. Automatic daily backups with 30-day retention. Disaster recovery systems ensure business continuity. You can request data exports anytime.",
                icon: <Database className="w-5 h-5" />
            }
        ],
        implementation: [
            {
                question: "How long does implementation take?",
                answer: "Standard implementation takes 3-7 days. Enterprise deployments with custom requirements may take 1-2 weeks. We provide dedicated implementation specialists who handle setup, configuration, and training.",
                icon: <Zap className="w-5 h-5" />
            },
            {
                question: "What training and support is provided?",
                answer: "We provide comprehensive training: initial setup session, administrator training, employee onboarding guides, video tutorials, and ongoing support. Dedicated account manager for enterprise customers.",
                icon: <Users className="w-5 h-5" />
            },
            {
                question: "Do you provide API access for integration?",
                answer: "Yes, we offer REST API access for all paid plans. Comprehensive API documentation with SDKs available. We support integration with accounting software, ERP systems, biometric devices, and custom applications.",
                icon: <Code className="w-5 h-5" />
            }
        ],
        pricing: [
            {
                question: "What's included in each pricing plan?",
                answer: "All plans include core HR features. Premium plans add advanced analytics, custom workflows, API access, dedicated support, and custom development. Enterprise plans include white-labeling, custom integrations, and SLA guarantees.",
                icon: <CreditCard className="w-5 h-5" />
            },
            {
                question: "Are there any hidden fees or setup costs?",
                answer: "No hidden fees. Price includes all features listed. No setup fees for standard implementation. Custom development or complex integrations may have additional costs, always discussed upfront.",
                icon: <AlertCircle className="w-5 h-5" />
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, Amex), net banking, UPI, and corporate bank transfers. Annual payments receive 2 months free. Enterprise contracts available with custom payment terms.",
                icon: <Wallet className="w-5 h-5" />
            },
            {
                question: "Can I cancel or change my plan anytime?",
                answer: "Yes, you can upgrade, downgrade, or cancel anytime. No long-term contracts. Cancellation takes effect at the end of your billing cycle. We provide full data export upon cancellation.",
                icon: <RefreshCw className="w-5 h-5" />
            }
        ]
    };

    const currentFaqs = allFaqs[activeCategory];
    const activeCategoryData = categories.find(cat => cat.id === activeCategory);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="faq">
            {/* Background with Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/10 to-cyan-100/10 rounded-full blur-3xl" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">Common Questions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        <span className="text-[#003973]">Frequently Asked</span>{' '}
                        <span className="text-[#2ab6ea]">
                            Questions
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about the platform.
                    </p>
                </motion.div>

                {/* Enhanced Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setOpenIndex(0);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative flex items-center gap-2 md:gap-3 px-5 py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base transition-all duration-300 ${activeCategory === cat.id
                                ? 'text-white shadow-xl'
                                : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50'
                                }`}
                        >
                            {/* Active Background - Fade In Animation */}
                            {activeCategory === cat.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-r ${cat.color} rounded-xl md:rounded-2xl shadow-lg`}
                                    transition={{ duration: 0.3 }}
                                />
                            )}

                            <div className="relative z-10 flex items-center gap-2 md:gap-3">
                                <div className={`flex items-center justify-center transition-all duration-300 ${activeCategory === cat.id ? 'text-white' : 'text-gray-500'}`}>
                                    {cat.icon}
                                </div>
                                <span className="font-semibold">
                                    {cat.label}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="mb-12">
                    <motion.div
                        layout
                        className="space-y-4"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                {currentFaqs.map((faq, index) => (
                                    <EnhancedFaqItem
                                        key={index}
                                        faq={faq}
                                        index={index}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        category={activeCategoryData || categories[0]}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-200/50 p-8 md:p-10 shadow-xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Our support team is here to help you get started and answer any questions.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group relative bg-[#2ab6ea] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:shadow-[#003973]/30 hover:bg-[#003973] overflow-hidden flex items-center justify-center"
                            >
                                <div className="relative flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    Contact Support
                                </div>
                            </Link>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('https://wa.me/919966629766', '_blank')}
                                className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:border-[#25D366] hover:text-[#25D366] shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <MessageSquare className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#25D366]" />
                                    Chat on WhatsApp
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Enhanced FAQ Item Component
interface EnhancedFaqItemProps {
    faq: { question: string; answer: string; icon?: React.ReactNode };
    index: number;
    isOpen: boolean;
    onClick: () => void;
    category: { color: string; bg: string; text: string; border: string };
}

const EnhancedFaqItem: React.FC<EnhancedFaqItemProps> = ({ faq, index, isOpen, onClick, category }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.005, backgroundColor: 'rgba(255,255,255,1)' }}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                ? `shadow-xl ${category.border} ring-1 ring-offset-2 ring-transparent`
                : 'border border-gray-200 hover:border-gray-300 hover:shadow-lg bg-white/50'
                }`}
        >
            {/* Background effect on hover/open */}
            <div className={`absolute inset-0 bg-gradient-to-r from-white via-white to-white/95 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />

            {/* Subtle glow on hover when closed */}
            {!isOpen && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
            )}

            <button
                onClick={onClick}
                className="relative w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={isOpen}
            >
                <div className="flex items-start gap-4 flex-1">
                    {/* Icon with enhanced effects */}
                    <motion.div
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            backgroundColor: isOpen ? undefined : '#f3f4f6'
                        }}
                        transition={{ duration: 0.3 }}
                        className={`relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                            ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                            : `text-gray-600 shadow-sm group-hover:shadow-md group-hover:${category.text} group-hover:${category.bg}`
                            }`}
                    >
                        <div className="relative z-10">
                            {faq.icon || <HelpCircle className="w-6 h-6" />}
                        </div>
                        {/* Subtle glow effect */}
                        {isOpen && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: 0.3 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-white rounded-xl"
                            />
                        )}
                    </motion.div>

                    {/* Question Text */}
                    <div className="flex-1 pt-1">
                        <motion.span
                            animate={{ color: isOpen ? '#1f2937' : '#4b5563' }}
                            className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                                }`}
                        >
                            {faq.question}
                        </motion.span>
                    </div>
                </div>

                {/* Enhanced Chevron */}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : `bg-gray-100 text-gray-400 shadow-sm group-hover:${category.bg} group-hover:${category.text}`
                        }`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            {/* Answer with enhanced animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2 },
                            marginTop: { duration: 0.3 }
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="px-4 pb-6 md:px-6 ml-0 md:ml-[4.5rem]"
                        >
                            <div className={`relative pl-4 border-l-2 border-gray-100`}>
                                <div className={`absolute left-[-2px] top-0 bottom-0 w-[2px] ${category.border} opacity-50`} />
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const PricingPage: React.FC = () => {
    return (
        <div className="pt-32">
            <PricingCalculator />
            <FAQ />
        </div>
    );
};

export default PricingPage;
