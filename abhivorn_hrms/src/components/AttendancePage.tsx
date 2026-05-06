import React, { useEffect } from 'react';
import SEOLandingPage, { LandingPageProps } from './SEOLandingPage';
import {
  MapPin, Fingerprint, Clock, Calendar, Users,
  ShieldCheck, Smartphone, CheckCircle, BarChart
} from 'lucide-react';

const AttendancePage: React.FC = () => {
  const pageData: LandingPageProps = {
    title: "Attendance Management Software India | GPS Tracking | VornHR",
    metaDescription: "Track employee attendance with VornHR's GPS-based attendance system. Biometric integration, geo-fencing, shift management. Free demo.",
    heroHeadline: "Smart Attendance Tracking for Your Team",
    heroSubheadline: "GPS-based attendance, biometric integration, and real-time tracking. Manage shifts, overtime, and attendance reports effortlessly.",
    heroCTAPrimary: { text: "Book Free Demo", link: "/contact" },
    heroCTASecondary: { text: "Start Free Trial", link: "/pricing?trial=true" },
    sections: [
      {
        type: 'features',
        title: "Attendance Features",
        subtitle: "Complete attendance management with advanced tracking",
        items: [
          { icon: <MapPin className="w-6 h-6" />, title: "GPS Tracking", description: "Track employee location for remote and field workers." },
          { icon: <Fingerprint className="w-6 h-6" />, title: "Biometric Integration", description: "Connect with fingerprint and face recognition devices." },
          { icon: <Clock className="w-6 h-6" />, title: "Shift Management", description: "Configure shifts, rosters, and rotations easily." },
          { icon: <Calendar className="w-6 h-6" />, title: "Holiday Calendar", description: "Auto-calculate holidays and working days." },
          { icon: <Users className="w-6 h-6" />, title: "Multi-location", description: "Track attendance across multiple offices." },
          { icon: <BarChart className="w-6 h-6" />, title: "Reports", description: "Detailed attendance reports and analytics." }
        ]
      },
      {
        type: 'benefits',
        title: "Why Track Attendance Digitally",
        items: [
          { icon: <CheckCircle className="w-6 h-6" />, title: "Eliminate Buddy Punching", description: "GPS and biometric verification." },
          { icon: <Smartphone className="w-6 h-6" />, title: "Mobile App", description: "Mark attendance from anywhere." },
          { icon: <ShieldCheck className="w-6 h-6" />, title: "Accurate Records", description: "Error-free attendance data." },
          { icon: <BarChart className="w-6 h-6" />, title: "Real-time Reports", description: "Live attendance dashboards." }
        ]
      }
    ],
    features: [
      { icon: <MapPin className="w-6 h-6" />, title: "GPS Attendance", description: "Location-verified attendance" },
      { icon: <Fingerprint className="w-6 h-6" />, title: "Biometric", description: "Device integration" },
      { icon: <Clock className="w-6 h-6" />, title: "Shift Management", description: "Automated shift scheduling" }
    ],
    stats: [
      { value: 100, suffix: "%", label: "Attendance Accuracy" },
      { value: 60, suffix: "%", label: "Less HR Effort" }
    ]
  };

  return <SEOLandingPage {...pageData} />;
};

export default AttendancePage;
