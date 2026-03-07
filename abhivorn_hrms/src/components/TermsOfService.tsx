import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe, CreditCard, Shield, Users, AlertTriangle, ChevronRight } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Please read these terms carefully before using VornHR. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Last updated: March 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-12 border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {[
                { id: 'acceptance', label: '1. Acceptance of Terms' },
                { id: 'description', label: '2. Description of Service' },
                { id: 'account', label: '3. User Accounts' },
                { id: 'subscription', label: '4. Subscription & Payment' },
                { id: 'acceptable-use', label: '5. Acceptable Use Policy' },
                { id: 'intellectual-property', label: '6. Intellectual Property' },
                { id: 'user-content', label: '7. User Content' },
                { id: 'data-ownership', label: '8. Data Ownership' },
                { id: 'disclaimer', label: '9. Disclaimer of Warranties' },
                { id: 'limitation', label: '10. Limitation of Liability' },
                { id: 'indemnification', label: '11. Indemnification' },
                { id: 'termination', label: '12. Termination' },
                { id: 'governing-law', label: '13. Governing Law' },
                { id: 'changes', label: '14. Changes to Terms' },
                { id: 'contact', label: '15. Contact Us' },
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 1: Acceptance */}
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
              Acceptance of Terms
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                By accessing and using VornHR, a service provided by Abhivorn Technologies Pvt. Ltd. ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, you should not use our services.
              </p>
            </div>
          </section>

          {/* Section 2: Description of Service */}
          <section id="description" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
              Description of Service
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                VornHR is a comprehensive Human Resource Management System (HRMS) designed to help businesses manage their workforce. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employee data management and records</li>
                <li>Attendance and time tracking</li>
                <li>Leave management</li>
                <li>Payroll processing and management</li>
                <li>Performance evaluation and reviews</li>
                <li>HR analytics and reporting</li>
                <li>Employee self-service portal</li>
                <li>Recruitment and onboarding</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
              </p>
            </div>
          </section>

          {/* Section 3: User Accounts */}
          <section id="account" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
              User Accounts
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>To use VornHR, you must create an account. When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Be at least 18 years of age or have legal capacity to enter into contracts</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that violate these terms or for any other reason at our sole discretion.
              </p>
            </div>
          </section>

          {/* Section 4: Subscription & Payment */}
          <section id="subscription" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">4</span>
              Subscription & Payment
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Subscription Plans</h3>
                </div>
                <p className="text-blue-800">
                  VornHR offers various subscription plans. Prices are subject to change with 30 days' notice. All fees are exclusive of applicable taxes.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>You authorize us to charge your payment method for all fees</li>
                <li>Prices are in Indian Rupees (INR) unless otherwise stated</li>
                <li>Late payments may incur additional charges</li>
                <li>You can cancel your subscription at any time through your account settings</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Acceptable Use Policy */}
          <section id="acceptable-use" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">5</span>
              Acceptable Use Policy
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>You agree not to use VornHR to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Upload or transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Post or transmit false, misleading, or defamatory content</li>
                <li>Use the service for any illegal purpose or in violation of any laws</li>
                <li>Resell, redistribute, or sublicense our services without authorization</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate access for violations of this policy.
              </p>
            </div>
          </section>

          {/* Section 6: Intellectual Property */}
          <section id="intellectual-property" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">6</span>
              Intellectual Property
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                VornHR and all its content, features, and functionality are owned by Abhivorn Technologies Pvt. Ltd. and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may not copy, modify, distribute, sell, or lease any part of our services</li>
                <li>Our trademarks and trade dress may not be used without prior written permission</li>
                <li>You retain ownership of your content but grant us a license to use it</li>
                <li>Feedback you provide is considered non-confidential and becomes our property</li>
              </ul>
            </div>
          </section>

          {/* Section 7: User Content */}
          <section id="user-content" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">7</span>
              User Content
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                You retain ownership of all data, content, and information you upload or submit to VornHR ("User Content"). By uploading User Content, you grant us a worldwide, royalty-free, non-exclusive license to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use, store, and process your User Content to provide our services</li>
                <li>Copy, display, and distribute your User Content as necessary</li>
                <li>Make backups and maintain copies for disaster recovery</li>
                <li>Use aggregated, anonymized data for analytics and improvements</li>
              </ul>
              <p className="mt-4">
                You represent and warrant that you have all rights to the User Content you submit and that it does not violate any third-party rights.
              </p>
            </div>
          </section>

          {/* Section 8: Data Ownership */}
          <section id="data-ownership" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">8</span>
              Data Ownership
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Your Data is Yours</h3>
                </div>
                <p className="text-green-800">
                  You own all employee data, HR records, and business information you store in VornHR. We only process this data on your behalf as a data processor.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Upon termination, you can export your data in a standard format</li>
                <li>We will delete your data within 30 days after account termination</li>
                <li>You are responsible for maintaining backups of your data</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Disclaimer */}
          <section id="disclaimer" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">9</span>
              Disclaimer of Warranties
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                VORNH IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ERROR-FREE OR UNINTERRUPTED SERVICE</li>
              </ul>
              <p className="mt-4">
                WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </div>
          </section>

          {/* Section 10: Limitation of Liability */}
          <section id="limitation" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">10</span>
              Limitation of Liability
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES</li>
                <li>DAMAGES RESULTING FROM DATA LOSS OR CORRUPTION</li>
                <li>COSTS OF PROCURING SUBSTITUTE SERVICES</li>
                <li>ACTIONS OF THIRD PARTIES</li>
              </ul>
              <p className="mt-4">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR OUR SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </section>

          {/* Section 11: Indemnification */}
          <section id="indemnification" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">11</span>
              Indemnification
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                You agree to indemnify, defend, and hold harmless Abhivorn Technologies and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of VornHR</li>
                <li>Your violation of these Terms</li>
                <li>Your User Content or data</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </div>
          </section>

          {/* Section 12: Termination */}
          <section id="termination" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">12</span>
              Termination
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>Either party may terminate this agreement:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>We may suspend or terminate your account for violations of these terms</li>
                <li>We may terminate or suspend access for non-payment</li>
                <li>We may terminate with 30 days' notice for any other reason</li>
              </ul>
              <p className="mt-4">
                Upon termination, your right to use VornHR immediately ceases. You may export your data before termination.
              </p>
            </div>
          </section>

          {/* Section 13: Governing Law */}
          <section id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">13</span>
              Governing Law
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, specifically the laws of Tamil Nadu, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
              </p>
            </div>
          </section>

          {/* Section 14: Changes to Terms */}
          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">14</span>
              Changes to Terms
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                We may modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of VornHR after such changes constitutes acceptance of the new Terms. If you do not agree to the new Terms, you must stop using our services.
              </p>
            </div>
          </section>

          {/* Section 15: Contact Us */}
          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">15</span>
              Contact Us
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-slate-100 rounded-xl p-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Abhivorn Technologies Pvt. Ltd.</h3>
                    <p className="text-sm">Email: legal@abhivorn.com</p>
                    <p className="text-sm">Website: www.abhivorn.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Pages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              to="/privacy-policy" 
              className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600">Privacy Policy</span>
              </div>
            </Link>
            <Link 
              to="/cookie-policy" 
              className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600">Cookie Policy</span>
              </div>
            </Link>
            <Link 
              to="/security" 
              className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600">Security</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
