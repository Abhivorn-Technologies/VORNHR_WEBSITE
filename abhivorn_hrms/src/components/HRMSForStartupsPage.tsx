import React, { useEffect } from 'react';
import SEOLandingPage from './SEOLandingPage';
import {
  Rocket, IndianRupee, Smartphone, CheckCircle,
  Users, Clock, ShieldCheck, Zap, Globe
} from 'lucide-react';

const HRMSForStartupsPage: React.FC = () => {
  useEffect(() => {
    document.title = "HRMS Software for Startups India | Affordable HR Tool | VornHR";
  }, []);
  const pageData = {
    title: "HRMS Software for Startups India | Affordable HR Tool | VornHR",
    metaDescription: "VornHR offers affordable HRMS software designed for Indian startups. Quick setup, essential HR features, and scalable pricing. Start free today.",
    heroHeadline: "HRMS Built for Indian Startups",
    heroSubheadline: "Affordable, easy-to-use HR software with essential features. Set up in hours, not weeks. Scale as you grow.",
    heroCTAPrimary: { text: "Start Free Trial", link: "/pricing?trial=true" },
    heroCTASecondary: { text: "Book Demo", link: "/contact" },
    sections: [
      {
        type: 'features',
        title: "Perfect for Startups",
        subtitle: "Essential HR features at startup-friendly pricing",
        items: [
          { icon: <Rocket className="w-6 h-6" />, title: "Quick Setup", description: "Get started in hours, not months." },
          { icon: <IndianRupee className="w-6 h-6" />, title: "Affordable Pricing", description: "Plans designed for startup budgets." },
          { icon: <Users className="w-6 h-6" />, title: "Employee Management", description: "Manage your growing team easily." },
          { icon: <Clock className="w-6 h-6" />, title: "Attendance Tracking", description: "Track time without manual effort." },
          { icon: <IndianRupee className="w-6 h-6" />, title: "Basic Payroll", description: "Process salaries without errors." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Access", description: "Manage HR from your phone." }
        ]
      },
      {
        type: 'audience',
        title: "Who It's For",
        items: [
          { icon: <Rocket className="w-8 h-8" />, title: "Seed Stage", description: "First 5-20 employees" },
          { icon: <Users className="w-8 h-8" />, title: "Growing Teams", description: "Scaling from 20-50" },
          { icon: <Globe className="w-8 h-8" />, title: "Remote Teams", description: "Distributed workforce" },
          { icon: <Rocket className="w-8 h-8" />, title: "Tech Startups", description: "IT and product companies" }
        ]
      }
    ],
    features: [
      { icon: <Rocket className="w-6 h-6" />, title: "Quick Setup", description: "Live in hours" },
      { icon: <IndianRupee className="w-6 h-6" />, title: "Affordable", description: "Startup pricing" },
      { icon: <Users className="w-6 h-6" />, title: "Essential HR", description: "Core features only" },
      { icon: <Zap className="w-6 h-6" />, title: "Scalable", description: "Grow with us" }
    ],
    stats: [
      { value: 500, suffix: "+", label: "Startups Trust Us" },
      { value: 4, suffix: " hrs", label: "Avg Setup Time" },
      { value: 60, suffix: "%", label: "Cost Savings" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default HRMSForStartupsPage;
