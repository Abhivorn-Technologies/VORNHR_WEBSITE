import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AlertCircle,
    ArrowRight,
    BarChart,
    Trash2,
    X,
    Calendar,
    Check,
    ChevronDown,
    Clock,
    Code,
    CreditCard,
    Database,
    FileText,
    HelpCircle,
    LayoutGrid,
    Lock,
    MessageSquare,
    Phone,
    RefreshCw,
    ShieldCheck,
    Users,
    Wallet,
    Zap
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type BillingCycle = 'monthly' | 'yearly';
type SubmissionStatus = 'idle' | 'success' | 'error';
type Category = 'general' | 'attendance' | 'payroll' | 'security' | 'implementation' | 'pricing';

type TrialFormState = {
    name: string;
    email: string;
    phone: string;
    company_name: string;
    company_domain: string;
    selected_plan: string;
    message: string;
};

type Plan = {
    id: string;
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    yearlySavings: string;
    description: string;
    features: string[];
};

type FaqItem = {
    question: string;
    answer: string;
    icon: React.ReactNode;
};

const plans: Plan[] = [
    {
        id: 'starter',
        name: 'Starter',
        monthlyPrice: '₹499',
        yearlyPrice: '₹4,990',
        yearlySavings: 'Save ₹998 per year',
        description: 'Up to 10 employees',
        features: [
            'Employee Management',
            'Attendance Tracking',
            'Leave Management',
            'Employee Directory',
            'Basic Reports',
            'Email Support',
            'No Payroll / Payslip',
            '100 AI Credits'
        ]
    },
    {
        id: 'growth',
        name: 'Growth',
        monthlyPrice: '₹1,499',
        yearlyPrice: '₹14,990',
        yearlySavings: 'Save ₹2,998 per year',
        description: 'Up to 25 employees',
        features: [
            'Everything in Starter',
            'Payroll Management',
            'Payslip Generation',
            'Performance Tracking',
            'Employee Self-Service Portal',
            'Email Notifications',
            '150 AI Credits'
        ]
    },
    {
        id: 'business',
        name: 'Business',
        monthlyPrice: '₹3,499',
        yearlyPrice: '₹34,990',
        yearlySavings: 'Save ₹6,998 per year',
        description: 'Up to 50 employees',
        features: [
            'Everything in Growth',
            'Advanced HR Analytics',
            'Role-Based Access Control',
            'HR Insights Dashboard',
            'Priority Support',
            '500 AI Credits'
        ]
    }
];

const defaultTrialForm: TrialFormState = {
    name: '',
    email: '',
    phone: '',
    company_name: '',
    company_domain: '',
    selected_plan: 'growth',
    message: ''
};

const faqCategories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'general', label: 'General', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'attendance', label: 'Attendance', icon: <Clock className="w-4 h-4" /> },
    { id: 'payroll', label: 'Payroll', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'implementation', label: 'Setup', icon: <Zap className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <Users className="w-4 h-4" /> }
];

const faqsByCategory: Record<Category, FaqItem[]> = {
    general: [
        {
            question: 'What is Vorn HR and who is it for?',
            answer: 'Vorn HR is an HR and workforce management platform for growing teams. It is built for companies that need employee records, attendance, leave, payroll workflows, and reporting in one place.',
            icon: <HelpCircle className="w-5 h-5" />
        },
        {
            question: 'How does the 7-day free trial work?',
            answer: 'You get guided access to the platform for 7 days with no credit card required. Our team helps you set up the workspace, test the workflows, and evaluate the plan that fits your employee count.',
            icon: <Zap className="w-5 h-5" />
        },
        {
            question: 'Can you help us migrate from another HR tool?',
            answer: 'Yes. We help import employee data, attendance records, and policy settings so your team can move without rebuilding everything from scratch.',
            icon: <Users className="w-5 h-5" />
        }
    ],
    attendance: [
        {
            question: 'Does the platform support attendance tracking and shift rules?',
            answer: 'Yes. You can configure attendance policies, shifts, late marks, weekly offs, and approval flows, then review everything from the same dashboard.',
            icon: <Clock className="w-5 h-5" />
        },
        {
            question: 'Can employees request leave and check balances themselves?',
            answer: 'Yes. Employees can access their leave balances, apply for time off, and follow approval status through the self-service experience.',
            icon: <Calendar className="w-5 h-5" />
        },
        {
            question: 'Do attendance records feed into payroll workflows?',
            answer: 'On plans with payroll support, attendance and leave data can be used to streamline salary processing and payslip preparation.',
            icon: <CreditCard className="w-5 h-5" />
        }
    ],
    payroll: [
        {
            question: 'Which plans include payroll and payslips?',
            answer: 'Payroll management and payslip generation start from the Growth plan. The Starter plan is focused on core HR, attendance, and leave management.',
            icon: <CreditCard className="w-5 h-5" />
        },
        {
            question: 'Can we generate salary reports and payroll summaries?',
            answer: 'Yes. Payroll-enabled plans support report generation so HR teams can review salary data, payouts, and recurring trends more easily.',
            icon: <BarChart className="w-5 h-5" />
        },
        {
            question: 'Can we manage employee documents with payroll data?',
            answer: 'Yes. Employee records and supporting files can be maintained alongside payroll workflows so teams are not switching between separate systems.',
            icon: <FileText className="w-5 h-5" />
        }
    ],
    security: [
        {
            question: 'How is employee data protected?',
            answer: 'Vorn HR uses role-based access, controlled permissions, and secure infrastructure practices so sensitive employee and payroll data stays restricted to the right people.',
            icon: <ShieldCheck className="w-5 h-5" />
        },
        {
            question: 'Can we control who sees HR and payroll modules?',
            answer: 'Yes. Business plans include role-based access control so you can define permissions for HR admins, managers, and finance teams.',
            icon: <Lock className="w-5 h-5" />
        },
        {
            question: 'Is there a central employee database?',
            answer: 'Yes. Employee records, documents, and related HR data live in a unified system so teams can avoid fragmented spreadsheets and duplicate entries.',
            icon: <Database className="w-5 h-5" />
        }
    ],
    implementation: [
        {
            question: 'How long does setup usually take?',
            answer: 'Most teams can get started quickly because the platform is structured around ready-made HR workflows. Larger teams or custom setups may take a little longer depending on data migration and approvals.',
            icon: <Zap className="w-5 h-5" />
        },
        {
            question: 'Do you provide onboarding help?',
            answer: 'Yes. We help with setup, explain the product workflow, and support your team during the trial so evaluation is practical rather than just a product tour.',
            icon: <Users className="w-5 h-5" />
        },
        {
            question: 'Is API access available?',
            answer: 'Yes. Enterprise customers can discuss API access and custom workflow requirements with the team.',
            icon: <Code className="w-5 h-5" />
        }
    ],
    pricing: [
        {
            question: 'What changes between Starter, Growth, and Business?',
            answer: 'Starter covers core HR operations, Growth adds payroll and employee self-service capabilities, and Business expands into analytics, dashboards, and more advanced controls.',
            icon: <CreditCard className="w-5 h-5" />
        },
        {
            question: 'Do yearly plans include savings?',
            answer: 'Yes. Each yearly plan is discounted versus paying monthly for 12 months, which is why the yearly toggle shows a lower total annual price.',
            icon: <Wallet className="w-5 h-5" />
        },
        {
            question: 'Are there any hidden setup fees?',
            answer: 'No hidden fees are shown here. If you need enterprise customisation or special integrations, those are handled as a separate sales discussion.',
            icon: <AlertCircle className="w-5 h-5" />
        },
        {
            question: 'Can we upgrade later?',
            answer: 'Yes. Teams can start with the plan that matches their current size and move up when they need payroll, analytics, or more advanced controls.',
            icon: <RefreshCw className="w-5 h-5" />
        }
    ]
};

const PricingCalculator: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>(() => {
        return (localStorage.getItem('vorn_hr_billing_cycle') as BillingCycle) || 'monthly';
    });
    const [selectedPlanId, setSelectedPlanId] = useState<string | null>(() => {
        return localStorage.getItem('vorn_hr_selected_plan') || 'growth';
    });
    const [trialForm, setTrialForm] = useState<TrialFormState>(defaultTrialForm);
    const [submitting, setSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const [showTrialModal, setShowTrialModal] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof TrialFormState, string>>>({});

    useEffect(() => {
        localStorage.setItem('vorn_hr_billing_cycle', billingCycle);
    }, [billingCycle]);

    useEffect(() => {
        if (selectedPlanId) {
            localStorage.setItem('vorn_hr_selected_plan', selectedPlanId);
        }
    }, [selectedPlanId]);

    const handlePlanSelect = (planId: string) => {
        setSelectedPlanId(planId);
    };

    const openTrialModal = (selectedPlan: string) => {
        setSelectedPlanId(selectedPlan);
        setTrialForm(prev => ({ ...prev, selected_plan: selectedPlan }));
        setShowTrialModal(true);
        setSubmissionStatus('idle');
        setSubmissionError(null);
        setFieldErrors({});
    };

    const validateTrialForm = () => {
        const errors: Partial<Record<keyof TrialFormState, string>> = {};

        if (!trialForm.name.trim()) {
            errors.name = 'Full name is required';
        }

        if (!trialForm.email.trim()) {
            errors.email = 'Work email is required';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trialForm.email.trim())) {
            errors.email = 'Enter a valid email';
        }

        if (!trialForm.phone.trim()) {
            errors.phone = 'Phone is required';
        } else if (!/^[0-9+\-\s]{7,15}$/.test(trialForm.phone.trim())) {
            errors.phone = 'Enter a valid phone number';
        }

        if (!trialForm.company_name.trim()) {
            errors.company_name = 'Company name is required';
        }

        if (!trialForm.company_domain.trim()) {
            errors.company_domain = 'Company domain is required';
        } else if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trialForm.company_domain.trim())) {
            errors.company_domain = 'Enter a valid domain (e.g. company.com)';
        }

        return errors;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateTrialForm();
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setSubmitting(true);
        setSubmissionStatus('idle');
        setSubmissionError(null);

        const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://api.vornhr.com';

        try {
            const response = await fetch(`${apiBase}/api/v1/core/public/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(trialForm)
            });

            if (response.status === 201) {
                setSubmissionStatus('success');
                setTrialForm(prev => ({ ...defaultTrialForm, selected_plan: prev.selected_plan }));
                return;
            }

            const nextFieldErrors: Partial<Record<keyof TrialFormState, string>> = {};
            let nextSubmissionError = 'Unable to submit. Please verify your details.';

            try {
                const data: unknown = await response.json();

                if (data && typeof data === 'object') {
                    Object.entries(data as Record<string, unknown>).forEach(([key, value]) => {
                        if (Array.isArray(value) && value.length > 0) {
                            nextFieldErrors[key as keyof TrialFormState] = String(value[0]);
                        } else if (typeof value === 'string') {
                            nextFieldErrors[key as keyof TrialFormState] = value;
                        }
                    });
                }
            } catch {
                nextSubmissionError = 'Unable to submit right now. Please try again.';
            }

            if (Object.keys(nextFieldErrors).length > 0) {
                nextSubmissionError = 'Please fix the highlighted fields.';
            }

            setFieldErrors(nextFieldErrors);
            setSubmissionStatus('error');
            setSubmissionError(nextSubmissionError);
        } catch {
            setSubmissionStatus('error');
            setSubmissionError('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4" id="pricing-container">
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
                    <AnimatePresence mode="wait">
                        {selectedPlanId ? (
                            <motion.div
                                key="selected-header"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-[#003973]">You've Selected the</span>{' '}
                                <span className="text-[#2ab6ea] capitalize">{selectedPlanId}</span>{' '}
                                <span className="text-[#003973]">Plan</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="default-header"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-[#003973]">Simple,</span>{' '}
                                <span className="text-[#2ab6ea]">Transparent Pricing</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    Start with a 7-day free trial on any plan. No credit card needed.
                </motion.p>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <span
                        onClick={() => setBillingCycle('monthly')}
                        className={`text-sm font-bold cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}
                    >
                        Monthly
                    </span>
                    <button
                        type="button"
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${billingCycle === 'yearly' ? 'bg-[#2ab6ea]' : 'bg-gray-200'}`}
                    >
                        <motion.div
                            className="w-6 h-6 bg-white rounded-full shadow-sm"
                            animate={{ x: billingCycle === 'monthly' ? 0 : 24 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                    </button>
                    <span
                        onClick={() => setBillingCycle('yearly')}
                        className={`text-sm font-bold cursor-pointer transition-colors flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}
                    >
                        Yearly
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm border border-emerald-200">
                            Save ~17%
                        </span>
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-10 mb-16">
                {plans.map((plan) => {
                    const isPopular = plan.id === 'growth';
                    const isSelected = selectedPlanId === plan.id;

                    return (
                        <motion.div
                            key={plan.id}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: "#003973",
                                boxShadow: "0 20px 30px -10px rgba(0, 57, 115, 0.1)",
                                transition: { type: "spring", stiffness: 300, damping: 25 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handlePlanSelect(plan.id)}
                            className={`relative rounded-3xl flex flex-col overflow-hidden h-full group cursor-pointer border-2 transition-all duration-300 ${
                                isSelected 
                                    ? 'bg-white border-[#003973] shadow-2xl z-20 scale-[1.03] ring-4 ring-[#2ab6ea]/20'
                                    : isPopular
                                        ? 'bg-white border-[#2ab6ea] shadow-xl z-10 scale-[1.02]'
                                        : 'bg-[#fbfbfc] border-gray-200 shadow-sm'
                            }`}
                        >
                            {isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#2ab6ea] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-b-lg tracking-widest shadow-md z-30">
                                    Best Value
                                </div>
                            )}

                            <div className={`p-6 pb-4 border-b ${isPopular ? 'bg-blue-50/50 border-blue-100' : 'bg-[#f9fbfd] border-gray-100'}`}>
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className={`text-lg font-bold ${isPopular ? 'text-[#003973]' : 'text-gray-900'}`}>
                                        {plan.name} Plan
                                    </h3>
                                    {billingCycle === 'yearly' && (
                                        <span className="shrink-0 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-200 uppercase tracking-wide">
                                            17% Off
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                                        {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-gray-500 text-sm font-medium">
                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 font-medium">{plan.description}</p>
                                {billingCycle === 'yearly' && (
                                    <p className="text-xs font-semibold text-emerald-700 mt-3">{plan.yearlySavings}</p>
                                )}
                            </div>

                            <div className="flex-1 p-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${isPopular ? 'bg-blue-100 text-[#003973]' : 'bg-gray-100 text-gray-500'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm text-gray-600 font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 mt-auto">
                                <motion.button
                                    type="button"
                                    whileHover="hover"
                                    onClick={() => openTrialModal(plan.id)}
                                    className={`w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${isPopular
                                        ? 'bg-[#2ab6ea] text-white hover:bg-[#003973]'
                                        : 'bg-white border-2 border-[#2ab6ea] text-[#2ab6ea] hover:bg-[#2ab6ea] hover:text-white'
                                        }`}
                                >
                                    Start 7-Day Trial
                                    <motion.span
                                        variants={{
                                            hover: { x: 5 }
                                        }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </motion.button>
                            </div>
                        </motion.div>
                    );
                })}

                <motion.div
                    whileHover={{ 
                        scale: 1.02, 
                        borderColor: "#003973",
                        boxShadow: "0 20px 30px -10px rgba(0, 57, 115, 0.1)",
                        transition: { type: "spring", stiffness: 300, damping: 25 } 
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative rounded-3xl flex flex-col overflow-hidden h-full group bg-[#fbfbfc] border-2 border-gray-200 shadow-sm transition-all duration-300 cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                >
                    <div className="relative p-8 flex-1 flex flex-col justify-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Zap className="w-8 h-8 text-[#2ab6ea]" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                            Tailored for teams with 50+ employees. Custom workflows, dedicated account manager, and API access.
                        </p>

                        <div className="mt-auto">
                            <motion.div
                                whileHover="hover"
                                className="w-full"
                            >
                                <Link
                                    to="/contact"
                                    className="w-full bg-gray-900 border-2 border-gray-900 text-white hover:bg-black py-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Contact Sales
                                    <motion.span
                                        variants={{
                                            hover: { x: 5 }
                                        }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {showTrialModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowTrialModal(false)}
                    >
                        <motion.div
                            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 relative overflow-hidden"
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.97, y: -10, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                            onClick={event => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                aria-label="Close"
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowTrialModal(false)}
                            >
                                ✕
                            </button>

                            {submissionStatus === 'success' ? (
                                <div className="py-6 sm:py-8 text-center">
                                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        Registration request submitted successfully.
                                    </h3>
                                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-6">
                                        Your application is under admin review. You will receive an email once the review is complete.
                                    </p>
                                    <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                                        Selected plan: <span className="font-bold uppercase">{trialForm.selected_plan}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowTrialModal(false)}
                                        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#003973] px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#002b57]"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Start your 7-day free trial</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        You selected the <strong className="text-[#2ab6ea] uppercase">{trialForm.selected_plan}</strong> plan.
                                    </p>

                                    <form className="space-y-3" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="trial-name" className="text-xs font-semibold text-gray-600">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="trial-name"
                                                    required
                                                    className={`w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 ${fieldErrors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ab6ea]'}`}
                                                    placeholder="Full Name"
                                                    value={trialForm.name}
                                                    onChange={event => setTrialForm({ ...trialForm, name: event.target.value })}
                                                />
                                                {fieldErrors.name && <span className="text-xs text-red-600">{fieldErrors.name}</span>}
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="trial-email" className="text-xs font-semibold text-gray-600">
                                                    Work Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="trial-email"
                                                    required
                                                    type="email"
                                                    className={`w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 ${fieldErrors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ab6ea]'}`}
                                                    placeholder="Work Email"
                                                    value={trialForm.email}
                                                    onChange={event => setTrialForm({ ...trialForm, email: event.target.value })}
                                                />
                                                {fieldErrors.email && <span className="text-xs text-red-600">{fieldErrors.email}</span>}
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="trial-phone" className="text-xs font-semibold text-gray-600">
                                                    Phone <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="trial-phone"
                                                    required
                                                    className={`w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 ${fieldErrors.phone ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ab6ea]'}`}
                                                    placeholder="Phone"
                                                    value={trialForm.phone}
                                                    onChange={event => setTrialForm({ ...trialForm, phone: event.target.value })}
                                                />
                                                {fieldErrors.phone && <span className="text-xs text-red-600">{fieldErrors.phone}</span>}
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="trial-company" className="text-xs font-semibold text-gray-600">
                                                    Company Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="trial-company"
                                                    required
                                                    className={`w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 ${fieldErrors.company_name ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ab6ea]'}`}
                                                    placeholder="Company Name"
                                                    value={trialForm.company_name}
                                                    onChange={event => setTrialForm({ ...trialForm, company_name: event.target.value })}
                                                />
                                                {fieldErrors.company_name && <span className="text-xs text-red-600">{fieldErrors.company_name}</span>}
                                            </div>

                                            <div className="flex flex-col gap-1 sm:col-span-2">
                                                <label htmlFor="trial-domain" className="text-xs font-semibold text-gray-600">
                                                    Company Domain <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="trial-domain"
                                                    required
                                                    className={`w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 ${fieldErrors.company_domain ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#2ab6ea]'}`}
                                                    placeholder="e.g. company.com"
                                                    value={trialForm.company_domain}
                                                    onChange={event => setTrialForm({ ...trialForm, company_domain: event.target.value })}
                                                />
                                                {fieldErrors.company_domain && <span className="text-xs text-red-600">{fieldErrors.company_domain}</span>}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="trial-message" className="text-xs font-semibold text-gray-600">
                                                Message (optional)
                                            </label>
                                            <textarea
                                                id="trial-message"
                                                rows={3}
                                                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ab6ea]"
                                                placeholder="Tell us a bit about your team"
                                                value={trialForm.message}
                                                onChange={event => setTrialForm({ ...trialForm, message: event.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] bg-[#2ab6ea] border-2 border-[#2ab6ea] text-white hover:bg-[#003973] hover:border-[#003973] disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {submitting ? 'Submitting...' : 'Submit Request'}
                                            {!submitting && <ArrowRight className="w-4 h-4" />}
                                        </button>

                                        <AnimatePresence>
                                            {submissionStatus === 'error' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    className="text-sm text-red-700 font-semibold bg-red-50 border border-red-200 rounded-xl px-3 py-2 break-words mt-4"
                                                >
                                                    {submissionError || 'Something went wrong. Please try again.'}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedPlanId && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-20 border-t pt-16"
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-[#003973]">Feature Comparison</h3>
                            <p className="text-gray-500 mt-2">Detailed breakdown of what's included in your selected plan</p>
                        </div>
                        <div className="overflow-x-auto pb-8">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Features</th>
                                        {plans.map(p => (
                                            <th 
                                                key={p.id} 
                                                className={`py-4 px-6 text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 ${selectedPlanId === p.id ? 'text-[#2ab6ea] bg-blue-50/50 rounded-t-xl scale-105' : 'text-gray-500'}`}
                                            >
                                                {p.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Employee Management', bold: true },
                                        { name: 'Attendance & Leave', bold: true },
                                        { name: 'Payroll & Payslips', plans: ['growth', 'business'] },
                                        { name: 'HR Analytics', plans: ['business'] },
                                        { name: 'Role-Based Controls', plans: ['business'] },
                                        { name: 'Employee Self-Service', plans: ['growth', 'business'] },
                                        { name: 'Priority Support', plans: ['business'] },
                                        { name: 'AI Credits', dynamic: true }
                                    ].map((feature, i) => (
                                        <motion.tr 
                                            key={i} 
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="border-b hover:bg-gray-50/50 transition-colors"
                                        >
                                            <td className="py-5 px-6 font-medium text-gray-700">{feature.name}</td>
                                            {plans.map(p => {
                                                const hasFeature = feature.plans ? feature.plans.includes(p.id) : true;
                                                const isSelected = selectedPlanId === p.id;
                                                
                                                let content;
                                                if (feature.dynamic && feature.name === 'AI Credits') {
                                                    content = p.id === 'starter' ? '100' : p.id === 'growth' ? '150' : '500';
                                                } else {
                                                    content = hasFeature ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />;
                                                }

                                                return (
                                                    <td 
                                                        key={p.id} 
                                                        className={`py-5 px-6 text-center transition-all duration-300 ${isSelected ? 'bg-blue-50/30 font-bold scale-105' : ''}`}
                                                    >
                                                        {content}
                                                    </td>
                                                );
                                            })}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<Category>('general');

    const currentFaqs = faqsByCategory[activeCategory];

    return (
        <section className="py-20 relative overflow-hidden" id="faq">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/70" />
            <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <span className="text-[#2ab6ea]">Questions</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know before choosing a plan or starting your trial.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {faqCategories.map(category => (
                        <motion.button
                            key={category.id}
                            type="button"
                            onClick={() => {
                                setActiveCategory(category.id);
                                setOpenIndex(0);
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`relative flex items-center gap-2 md:gap-3 px-5 py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base transition-all duration-300 ${activeCategory === category.id
                                ? 'text-white shadow-xl'
                                : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50'
                                }`}
                        >
                            {activeCategory === category.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-r from-[#003973] to-[#2ab6ea] rounded-xl md:rounded-2xl shadow-lg"
                                />
                            )}

                            <div className="relative z-10 flex items-center gap-2 md:gap-3">
                                <span>{category.icon}</span>
                                <span className="font-semibold">{category.label}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <div className="mb-12">
                    <motion.div layout className="space-y-4">
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
                                        key={`${activeCategory}-${index}`}
                                        faq={faq}
                                        index={index}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-gray-200 p-8 md:p-10 shadow-xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Talk to the team about pricing, onboarding, or the right plan for your employee count.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group bg-[#2ab6ea] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:shadow-[#003973]/20 hover:bg-[#003973] flex items-center justify-center gap-3"
                            >
                                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                Contact Support
                            </Link>

                            <button
                                type="button"
                                onClick={() => window.open('https://wa.me/919966629766', '_blank', 'noopener,noreferrer')}
                                className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:border-emerald-500 hover:text-emerald-600 shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                            >
                                <MessageSquare className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                Chat on WhatsApp
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

interface EnhancedFaqItemProps {
    faq: FaqItem;
    index: number;
    isOpen: boolean;
    onClick: () => void;
}

const EnhancedFaqItem: React.FC<EnhancedFaqItemProps> = ({ faq, index, isOpen, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.005 }}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                ? 'bg-white border border-blue-200 shadow-xl'
                : 'bg-white/90 border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
        >
            <button
                type="button"
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
            >
                <div className="flex items-start gap-4 flex-1">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                            ? 'bg-gradient-to-r from-[#003973] to-[#2ab6ea] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                            }`}
                    >
                        {faq.icon}
                    </motion.div>

                    <div className="flex-1 pt-1">
                        <span className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                            {faq.question}
                        </span>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-gradient-to-r from-[#003973] to-[#2ab6ea] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.3, ease: 'easeOut' },
                            opacity: { duration: 0.2 }
                        }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="px-6 pb-6 md:ml-[4.5rem]"
                        >
                            <div className="relative pl-4 border-l-2 border-blue-100">
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
