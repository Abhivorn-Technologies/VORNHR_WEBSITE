import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Trash2, AlertTriangle, Database, Mail, ChevronRight, Info } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const DeleteAccountPage: React.FC = () => {
  useEffect(() => {
    document.title = "Delete Account | VornHR - Workforce Management";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Information about deleting your VornHR account, data retention policies, and how to export your organizational data before closure.");
    }
  }, []);

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
          className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-red-400 mb-4">
              <Trash2 className="w-5 h-5" />
              <span className="text-sm font-medium">Account Management</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Delete Your Account
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl">
              We're sorry to see you go. This page provides information on how to permanently delete your VornHR account and what happens to your data.
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
          
          {/* Warning Banner */}
          <ScrollReveal direction="up">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-r-xl">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-bold text-red-900 m-0">Permanent Action</h2>
              </div>
              <p className="text-red-800 m-0">
                Deleting your account is permanent and cannot be undone. All your data, including employee records, payroll history, and configuration settings, will be permanently removed after the retention period.
              </p>
            </div>
          </ScrollReveal>

          {/* Table of Contents */}
          <ScrollReveal direction="right" distance={40}>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 mb-12 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {[
                  { id: 'how-to-delete', label: '1. How to Delete Your Account' },
                  { id: 'what-happens', label: '2. What Happens to Your Data' },
                  { id: 'data-export', label: '3. Exporting Your Data Before Deletion' },
                  { id: 'retention', label: '4. Data Retention Period' },
                  { id: 'subscriptions', label: '5. Subscriptions and Payments' },
                  { id: 'inactivity', label: '6. Inactive Account Policy' },
                  { id: 'contact', label: '7. Need Help?' },
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
                      className="text-slate-600 hover:text-red-600 flex items-center gap-2 text-sm transition-all hover:translate-x-1 group"
                    >
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Section 1: How to Delete */}
          <ScrollReveal direction="up">
            <section id="how-to-delete" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                How to Delete Your Account
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  You can delete your VornHR account directly through the platform dashboard. Follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Log in to your <strong>VornHR Admin Account</strong>.</li>
                  <li>Navigate to <strong>Settings</strong> from the main menu.</li>
                  <li>Select <strong>Account & Billing</strong>.</li>
                  <li>Scroll to the bottom and click on <strong>Delete Account</strong>.</li>
                  <li>Confirm the deletion by entering your password and the reason for leaving.</li>
                </ol>
                <p>
                  If you are an employee and wish to delete your individual profile, please contact your company's HR administrator as they manage your organizational data.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2: What Happens */}
          <ScrollReveal direction="up">
            <section id="what-happens" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                What Happens to Your Data
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>Once you initiate the account deletion process:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to the VornHR platform will be revoked immediately.</li>
                  <li>All active sessions will be terminated.</li>
                  <li>Your organizational data (employee records, payroll, attendance) will be queued for permanent deletion.</li>
                  <li>Any pending integrations with third-party services will be disconnected.</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3: Data Export */}
          <ScrollReveal direction="up">
            <section id="data-export" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
                Exporting Your Data Before Deletion
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Info className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">Recommendation</h3>
                  </div>
                  <p className="text-blue-800">
                    We highly recommend exporting all your critical HR and payroll data before deleting your account. VornHR provides tools to download your data in CSV, Excel, and PDF formats.
                  </p>
                </div>
                <p>
                  Go to <strong>Reports &gt; Export Center</strong> in your dashboard to generate and download all your organizational records before proceeding with deletion.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 4: Retention Period */}
          <ScrollReveal direction="up">
            <section id="retention" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">4</span>
                Data Retention Period
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  To prevent accidental data loss, VornHR maintains a <strong>30-day "Soft Delete" period</strong>. During this time:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your data remains in our encrypted backups but is inaccessible through the UI.</li>
                  <li>You can contact support to request account restoration if you change your mind.</li>
                  <li>After 30 days, the data is automatically and permanently purged from our primary databases and backup cycles.</li>
                </ul>
                <p>
                  <em>Note: Some transactional data may be retained for longer periods if required by law for tax and audit purposes.</em>
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5: Subscriptions */}
          <ScrollReveal direction="up">
            <section id="subscriptions" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">5</span>
                Subscriptions and Payments
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  Deleting your account will automatically cancel any active paid subscriptions. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No refunds are provided for partial billing periods unless required by law.</li>
                  <li>Any outstanding invoices must be settled before account closure.</li>
                  <li>We recommend canceling your subscription first to ensure no further charges occur while you prepare for deletion.</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6: Inactivity Policy */}
          <ScrollReveal direction="up">
            <section id="inactivity" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">6</span>
                Inactive Account Policy
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-900">Automatic Deletion</h3>
                  </div>
                  <p className="text-orange-800">
                    To maintain platform security and optimize data storage, VornHR implements an automatic deletion policy for inactive accounts.
                  </p>
                </div>
                <p>
                  If your account remains inactive (no logins or system activity) for a continuous period of <strong>2 months</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your account will be flagged as "Inactive".</li>
                  <li>An automated notification will be sent to your registered admin email address.</li>
                  <li>If no activity is recorded within 7 days of the notification, the account and all associated data will be <strong>automatically deleted</strong>.</li>
                </ul>
                <p>
                  To prevent automatic deletion, simply log in to your dashboard at least once every 60 days.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 7: Contact Support */}
          <ScrollReveal direction="up">
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">7</span>
                Need Help?
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>If you encounter any issues or have specific data removal requests, please reach out to our privacy team:</p>
                <div className="bg-slate-100 rounded-xl p-6 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Support & Privacy Team</h3>
                      <p className="text-sm">Email: service@vornhr.com</p>
                      <p className="text-sm">Available: 24/7 for account-related emergencies</p>
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
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Other Legal Pages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { to: "/privacy-policy", icon: Shield, label: "Privacy Policy" },
                { to: "/terms-of-service", icon: Database, label: "Terms of Service" },
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

export default DeleteAccountPage;
