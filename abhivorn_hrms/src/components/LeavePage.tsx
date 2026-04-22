import React from 'react';
import SEOLandingPage, { LandingPageProps } from './SEOLandingPage';
import {
  CalendarDays, CheckCircle, Users, Clock,
  ShieldCheck, Smartphone, BarChart, FileText
} from 'lucide-react';

const LeavePage: React.FC = () => {
  const pageData: LandingPageProps = {
    title: "Leave Management System India | Online Leave Tracker | VornHR",
    metaDescription: "Manage employee leave requests online with VornHR. Automated approvals, leave balance tracking, holiday calendars. Simplify your leave management today.",
    heroHeadline: "Streamlined Leave Management for Indian Companies",
    heroSubheadline: "Online leave requests, automated approvals, and real-time balance tracking. Say goodbye to leave Excel sheets forever.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Start Free Trial", link: "/pricing?trial=true" },
    sections: [
      {
        type: 'features',
        title: "Leave Management Features",
        subtitle: "Complete online leave management system",
        items: [
          { icon: <CalendarDays className="w-6 h-6" />, title: "Online Leave Requests", description: "Employees apply for leave through mobile or web." },
          { icon: <CheckCircle className="w-6 h-6" />, title: "Auto Approvals", description: "Configure approval chains and auto-approve requests." },
          { icon: <Clock className="w-6 h-6" />, title: "Balance Tracking", description: "Real-time leave balance for employees and HR." },
          { icon: <Users className="w-6 h-6" />, title: "Multiple Leave Types", description: "Configure CL, PL, SL, and custom leave types." },
          { icon: <BarChart className="w-6 h-6" />, title: "Leave Reports", description: "Comprehensive leave analytics and reports." },
          { icon: <FileText className="w-6 h-6" />, title: "Holiday Calendar", description: "Auto-sync national and company holidays." }
        ]
      },
      {
        type: 'benefits',
        title: "Why Digital Leave Management",
        items: [
          { icon: <CheckCircle className="w-6 h-6" />, title: "Zero Paperwork", description: "Complete digital workflow." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Apply Anywhere", description: "Mobile-friendly leave requests." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Compliant", description: "Follows Indian leave policies." },
          { icon: <BarChart className="w-6 h-6" />, title: "Real-time Sync", description: "Balance updates instantly." }
        ]
      }
    ],
    features: [
      { icon: <CalendarDays className="w-6 h-6" />, title: "Leave Requests", description: "Online leave applications" },
      { icon: <CheckCircle className="w-6 h-6" />, title: "Auto Approvals", description: "Workflow-based approvals" },
      { icon: <Clock className="w-6 h-6" />, title: "Balance Tracking", description: "Real-time leave balance" },
      { icon: <FileText className="w-6 h-6" />, title: "Holiday Calendar", description: "Auto-synced holidays" }
    ],
    stats: [
      { value: 70, suffix: "%", label: "Less Manual Work" },
      { value: 100, suffix: "%", label: "Transparency" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default LeavePage;
