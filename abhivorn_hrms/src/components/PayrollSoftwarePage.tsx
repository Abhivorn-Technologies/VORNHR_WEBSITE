import React, { useEffect } from 'react';
import SEOLandingPage from './SEOLandingPage';
import {
  IndianRupee, ShieldCheck, Zap, Lock, Globe,
  Calculator, CreditCard, FileText, Percent, Wallet
} from 'lucide-react';

const PayrollSoftwarePage: React.FC = () => {
  useEffect(() => {
    document.title = "Best HRMS Software in India for Payroll, Attendance & Leave | VornHR";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "VornHR is an all-in-one HRMS software for Indian businesses. Manage payroll, attendance, leave, employee records and performance from one smart platform.");
    }
  }, []);

  const pageData = {
    heroHeadline: "Smart Payroll Software for Indian Businesses",
    heroSubheadline: "Automate salary processing with TDS, PF, ESI calculations. Generate payslips in one click. Fully compliant with Indian tax laws.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Get Pricing", link: "/pricing" },
    sections: [
      {
        type: 'features',
        title: "Payroll Features",
        subtitle: "Complete payroll automation for Indian businesses",
        items: [
          { icon: <Calculator className="w-6 h-6" />, title: "TDS Calculation", description: "Automatic TDS deduction as per income tax slabs." },
          { icon: <CreditCard className="w-6 h-6" />, title: "PF Management", description: "EPF contribution tracking and compliance." },
          { icon: <Percent className="w-6 h-6" />, title: "ESI Processing", description: "ESI calculation for eligible employees." },
          { icon: <FileText className="w-6 h-6" />, title: "Payslip Generation", description: "Generate and distribute payslips in one click." },
          { icon: <Wallet className="w-6 h-6" />, title: "Salary Components", description: "Configure allowances, deductions, and bonuses." },
          { icon: <IndianRupee className="w-6 h-6" />, title: "Direct Deposit", description: "Bank-wise salary disbursement to multiple accounts." }
        ]
      },
      {
        type: 'benefits',
        title: "Why Our Payroll Software",
        items: [
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Statutory Compliant", description: "Updated as per latest tax laws." },
          { icon: <Zap className="w-6 h-6" />, title: "Save 80% Time", description: "Process payroll in minutes." },
          { icon: <Lock className="w-6 h-6" />, title: "Secure & Encrypted", description: "Bank-grade data security." },
          { icon: <Globe className="w-6 h-6" />, title: "Multi-location", description: "Manage payroll across branches." }
        ]
      }
    ],
    features: [
      { icon: <Calculator className="w-6 h-6" />, title: "TDS Automation", description: "Auto-calculate and deduct TDS" },
      { icon: <CreditCard className="w-6 h-6" />, title: "PF/ESI", description: "EPF and ESI compliance" },
      { icon: <FileText className="w-6 h-6" />, title: "Payslips", description: "One-click payslip generation" },
      { icon: <Wallet className="w-6 h-6" />, title: "Salary Components", description: "Flexible salary structure" }
    ],
    stats: [
      { value: 80, suffix: "%", label: "Time Saved" },
      { value: 99.9, suffix: "%", label: "Accuracy" },
      { value: 100, suffix: "%", label: "Compliance" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default PayrollSoftwarePage;
