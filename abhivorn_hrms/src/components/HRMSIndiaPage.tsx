import React, { useEffect } from 'react';
import SEOLandingPage from './SEOLandingPage';
import {
  IndianRupee, Fingerprint, CalendarDays, Users2,
  BarChart, ChartLine, ShieldCheck, Smartphone,
  Zap, CheckCircle
} from 'lucide-react';

const HRMSIndiaPage: React.FC = () => {
  useEffect(() => {
    document.title = "Best HRMS Software in India for Payroll, Attendance & Leave | VornHR";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "VornHR is an all-in-one HRMS software for Indian businesses. Manage payroll, attendance, leave, employee records and performance from one smart platform.");
    }
  }, []);

  const pageData = {
    heroHeadline: "Best HRMS Software in India for Modern Businesses",
    heroSubheadline: "Automate payroll, attendance, leave management, and employee records with India's most trusted HR platform. TDS, PF, ESI compliant.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Start Free Trial", link: "/pricing?trial=true" },
    sections: [
      {
        type: 'features',
        title: "Complete HRMS Features",
        subtitle: "Everything you need to manage your workforce efficiently",
        items: [
          { icon: <IndianRupee className="w-6 h-6" />, title: "Payroll Management", description: "Automated salary processing with TDS, PF, ESI calculations and statutory compliance." },
          { icon: <Fingerprint className="w-6 h-6" />, title: "Attendance Tracking", description: "GPS-based attendance, biometric integration, and real-time attendance reports." },
          { icon: <CalendarDays className="w-6 h-6" />, title: "Leave Management", description: "Online leave requests, approval workflows, and leave balance tracking." },
          { icon: <Users2 className="w-6 h-6" />, title: "Employee Database", description: "Centralized employee records, documents, and org chart management." },
          { icon: <BarChart className="w-6 h-6" />, title: "Performance Reviews", description: "Goal setting, appraisals, and performance analytics for your team." },
          { icon: <ChartLine className="w-6 h-6" />, title: "Reports & Analytics", description: "Real-time HR dashboards, custom reports, and data-driven insights." }
        ]
      },
      {
        type: 'benefits',
        title: "Why Choose VornHR",
        items: [
          { icon: <CheckCircle className="w-6 h-6" />, title: "India-ready Payroll", description: "Built for Indian tax laws, PF, ESI, and compliance." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Friendly", description: "Access HR portal from any device, anywhere." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Cloud", description: "Enterprise-grade security with data encryption." },
          { icon: <Zap className="w-6 h-6" />, title: "Easy to Use", description: "Intuitive interface that requires minimal training." }
        ]
      }
    ],
    features: [
      { icon: <IndianRupee className="w-6 h-6" />, title: "Automated Payroll", description: "Process salaries in minutes, not hours" },
      { icon: <Fingerprint className="w-6 h-6" />, title: "Smart Attendance", description: "GPS tracking and geo-fencing" },
      { icon: <CalendarDays className="w-6 h-6" />, title: "Leave Management", description: "Automated approval workflows" },
      { icon: <Users2 className="w-6 h-6" />, title: "Employee Records", description: "Digital employee profiles" },
      { icon: <BarChart className="w-6 h-6" />, title: "Performance Management", description: "Goal tracking and appraisals" },
      { icon: <ChartLine className="w-6 h-6" />, title: "HR Analytics", description: "Data-driven insights" }
    ],
    stats: [
      { value: 5000, suffix: "+", label: "Active Users" },
      { value: 99.9, suffix: "%", label: "Uptime SLA" },
      { value: 15, suffix: "+", label: "Companies" },
      { value: 4.9, suffix: "/5", label: "User Rating" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default HRMSIndiaPage;
