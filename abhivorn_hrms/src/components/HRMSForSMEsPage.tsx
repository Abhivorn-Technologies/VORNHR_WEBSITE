import React, { useEffect } from 'react';
import SEOLandingPage from './SEOLandingPage';
import {
  Building, IndianRupee, ShieldCheck, CheckCircle,
  Users, Clock, BarChart, Globe, Database, MapPinned
} from 'lucide-react';

const HRMSForSMEsPage: React.FC = () => {
  useEffect(() => {
    document.title = "HRMS Software for SMEs India | Mid-Market HR Solution | VornHR";
  }, []);
  const pageData = {
    title: "HRMS Software for SMEs India | Mid-Market HR Solution | VornHR",
    metaDescription: "VornHR offers comprehensive HRMS software for Indian SMEs. Automated payroll, multi-location support, compliance. Perfect for 50-500 employees.",
    heroHeadline: "HRMS for Growing Indian SMEs",
    heroSubheadline: "Mid-market HR features with enterprise capabilities. Automate payroll, manage attendance, ensure compliance. Built for 50-500 employees.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Get Pricing", link: "/pricing" },
    sections: [
      {
        type: 'features',
        title: "Built for SMEs",
        subtitle: "Everything growing businesses need",
        items: [
          { icon: <IndianRupee className="w-6 h-6" />, title: "Automated Payroll", description: "TDS, PF, ESI with one-click processing." },
          { icon: <MapPinned className="w-6 h-6" />, title: "Multi-location", description: "Manage employees across branches." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Compliance", description: "Stay updated with Indian labor laws." },
          { icon: <Database className="w-6 h-6" />, title: "Employee Database", description: "Centralized records for all staff." },
          { icon: <Clock className="w-6 h-6" />, title: "Attendance", description: "GPS tracking and shift management." },
          { icon: <BarChart className="w-6 h-6" />, title: "Reports", description: "Real-time HR analytics." }
        ]
      },
      {
        type: 'audience',
        title: "Ideal for",
        items: [
          { icon: <Building className="w-8 h-8" />, title: "Manufacturing", description: "Multiple shifts, compliance" },
          { icon: <Globe className="w-8 h-8" />, title: "IT Services", description: "Remote team management" },
          { icon: <Building className="w-8 h-8" />, title: "Retail", description: "Multi-store operations" },
          { icon: <MapPinned className="w-8 h-8" />, title: "Logistics", description: "Field workforce tracking" }
        ]
      }
    ],
    features: [
      { icon: <IndianRupee className="w-6 h-6" />, title: "Payroll", description: "Automated salary processing" },
      { icon: <MapPinned className="w-6 h-6" />, title: "Multi-location", description: "Branch management" },
      { icon: <ShieldCheck className="w-6 h-6" />, title: "Compliance", description: "Indian labor law ready" },
      { icon: <BarChart className="w-6 h-6" />, title: "Analytics", description: "HR dashboards" }
    ],
    stats: [
      { value: 50, suffix: "-500", label: "Employees" },
      { value: 80, suffix: "%", label: "Less Admin Work" },
      { value: 100, suffix: "%", label: "Compliance" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default HRMSForSMEsPage;
