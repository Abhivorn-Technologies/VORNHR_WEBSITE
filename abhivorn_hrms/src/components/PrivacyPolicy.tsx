import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Globe, Mail, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 min-h-[50vh] md:min-h-[60vh] flex items-center pt-40 pb-12">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Legal</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information when you use VornHR.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" distance={10}>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: March 2026
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Table of Contents */}
          <ScrollReveal direction="right" distance={40}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-12 border border-blue-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {[
                  { id: 'introduction', label: '1. Introduction' },
                  { id: 'information-collect', label: '2. Information We Collect' },
                  { id: 'how-we-use', label: '3. How We Use Your Information' },
                  { id: 'data-protection', label: '4. Data Protection & Security' },
                  { id: 'cookies', label: '5. Cookie Policy' },
                  { id: 'third-party', label: '6. Third-Party Services' },
                  { id: 'your-rights', label: '7. Your Rights' },
                  { id: 'data-retention', label: '8. Data Retention' },
                  { id: 'changes', label: '9. Changes to This Policy' },
                  { id: 'contact', label: '10. Contact Us' },
                ].map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <a 
                      href={`#${item.id}`}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm transition-all hover:translate-x-1 group"
                    >
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Section 1: Introduction */}
          <ScrollReveal direction="up">
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                Introduction
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  Abhivorn Technologies Pvt. Ltd. ("we," "our," or "us") operates VornHR, a comprehensive Human Resource Management System. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and HRMS software.
                </p>
                <p>
                  By accessing or using VornHR, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access our services.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2: Information We Collect */}
          <ScrollReveal direction="up">
            <section id="information-collect" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                Information We Collect
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, and job title</li>
                  <li>Company name and business information</li>
                  <li>Employee data (for HRMS users): salary details, attendance records, leave balances, performance reviews</li>
                  <li>Payment and billing information</li>
                  <li>Profile pictures and avatars</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (general location based on IP)</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3: How We Use Your Information */}
          <ScrollReveal direction="up">
            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
                How We Use Your Information
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our HRMS services</li>
                  <li>Process payroll and manage employee data</li>
                  <li>Track attendance and manage leave requests</li>
                  <li>Generate reports and analytics for HR purposes</li>
                  <li>Communicate with you about our services, updates, and support</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Protect against fraud and ensure security</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4: Data Protection & Security */}
          <ScrollReveal direction="up">
            <section id="data-protection" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">4</span>
                Data Protection & Security
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-900">Your Data is Secure</h3>
                  </div>
                  <p className="text-green-800">
                    We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>256-bit SSL encryption for all data transmission</li>
                  <li>Encrypted data storage with AES-256 encryption</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Multi-factor authentication available</li>
                  <li>Role-based access controls</li>
                  <li>Automated backup and disaster recovery</li>
                  <li>SOC 2 Type II compliant infrastructure</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5: Cookie Policy */}
          <ScrollReveal direction="up">
            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">5</span>
                Cookie Policy
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  VornHR uses cookies and similar tracking technologies to enhance your experience. For detailed information about our cookie practices, please refer to our separate <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6: Third-Party Services */}
          <ScrollReveal direction="up">
            <section id="third-party" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">6</span>
                Third-Party Services
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>We may share your information with third-party service providers who assist us in operating our platform:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud hosting and infrastructure providers</li>
                  <li>Payment processors</li>
                  <li>Analytics services</li>
                  <li>Customer support tools</li>
                  <li>Email and communication services</li>
                </ul>
                <p className="mt-4">
                  These third parties are obligated to maintain the confidentiality of your information and are restricted from using it for any other purpose.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 7: Your Rights */}
          <ScrollReveal direction="up">
            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">7</span>
                Your Rights
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 8: Data Retention */}
          <ScrollReveal direction="up">
            <section id="data-retention" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">8</span>
                Data Retention
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  We retain your personal information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with our legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>
                <p className="mt-4">
                  After account deletion, we may retain certain information in anonymized form for analytics purposes.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 9: Changes to This Policy */}
          <ScrollReveal direction="up">
            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">9</span>
                Changes to This Policy
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 10: Contact Us */}
          <ScrollReveal direction="up">
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">10</span>
                Contact Us
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-slate-100 rounded-xl p-6 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Abhivorn Technologies Pvt. Ltd.</h3>
                      <p className="text-sm">Email: hello@abhivorn.com</p>
                      <p className="text-sm">Website: www.abhivorn.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

        </div>

        {/* Related Links */}
        <ScrollReveal direction="up" distance={20}>
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Pages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { to: "/terms-of-service", icon: Globe, label: "Terms of Service" },
                { to: "/cookie-policy", icon: Database, label: "Cookie Policy" },
                { to: "/security", icon: Shield, label: "Security" },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all flex items-center gap-3 group border border-transparent hover:border-blue-100 hover:shadow-md"
                  >
                    <link.icon className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                    <span className="font-medium text-slate-900 group-hover:text-blue-600">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
