import React, { useEffect } from 'react';
import SEOLandingPage from './SEOLandingPage';
import {
  Users2, Database, FileText, ShieldCheck,
  CheckCircle, Smartphone, BarChart, Folder
} from 'lucide-react';

const EmployeeManagementPage: React.FC = () => {
  useEffect(() => {
    document.title = "Employee Management Software India | Digital HR Records | VornHR";
  }, []);
  const pageData = {
    title: "Employee Management Software India | Digital HR Records | VornHR",
    metaDescription: "Manage employee records digitally with VornHR. Centralized database, document management, org charts. Complete employee lifecycle management.",
    heroHeadline: "Digital Employee Management for Growing Teams",
    heroSubheadline: "Centralized employee database, digital document management, and complete employee lifecycle tracking. From hire to retire.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Get Pricing", link: "/pricing" },
    sections: [
      {
        type: 'features',
        title: "Employee Management Features",
        subtitle: "Complete employee lifecycle management",
        items: [
          { icon: <Users2 className="w-6 h-6" />, title: "Employee Database", description: "Centralized profiles for all employees." },
          { icon: <Database className="w-6 h-6" />, title: "Document Management", description: "Store and manage employee documents securely." },
          { icon: <FileText className="w-6 h-6" />, title: "Digital Onboarding", description: "Paperless joining process for new hires." },
          { icon: <Folder className="w-6 h-6" />, title: "Org Chart", description: "Visual organizational structure." },
          { icon: <BarChart className="w-6 h-6" />, title: "Lifecycle Tracking", description: "Track employee journey from joining to exit." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Access Control", description: "Role-based access to employee data." }
        ]
      },
      {
        type: 'benefits',
        title: "Why Digital Employee Management",
        items: [
          { icon: <CheckCircle className="w-6 h-6" />, title: "Zero Paper", description: "All records digitally stored." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Access Anywhere", description: "View records on the go." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Data", description: "Encrypted employee records." },
          { icon: <BarChart className="w-6 h-6" />, title: "Quick Search", description: "Find employee data instantly." }
        ]
      }
    ],
    features: [
      { icon: <Users2 className="w-6 h-6" />, title: "Employee Profiles", description: "Complete employee database" },
      { icon: <FileText className="w-6 h-6" />, title: "Document Vault", description: "Secure document storage" },
      { icon: <Folder className="w-6 h-6" />, title: "Org Charts", description: "Visual hierarchy" }
    ],
    stats: [
      { value: 90, suffix: "%", label: "Less Admin Work" },
      { value: 100, suffix: "%", label: "Data Security" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default EmployeeManagementPage;
