import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, Database, Settings, Eye, Shield, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 min-h-[50vh] md:min-h-[60vh] flex items-center pt-40 pb-12">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" 
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Cookie className="w-5 h-5" />
              <span className="text-sm font-medium">Legal</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-slate-300 max-w-2xl">
              Learn how VornHR uses cookies and similar technologies to enhance your experience and protect your privacy.
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
                  { id: 'what-are-cookies', label: '1. What Are Cookies' },
                  { id: 'how-we-use', label: '2. How We Use Cookies' },
                  { id: 'types-of-cookies', label: '3. Types of Cookies We Use' },
                  { id: 'third-party', label: '4. Third-Party Cookies' },
                  { id: 'managing-cookies', label: '5. Managing Cookies' },
                  { id: 'updates', label: '6. Updates to This Policy' },
                  { id: 'contact', label: '7. Contact Us' },
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

          {/* Section 1: What Are Cookies */}
          <ScrollReveal direction="up">
            <section id="what-are-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
                What Are Cookies
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies allow websites to recognize your device and remember information about your visit, such as your preferred language, login information, and other settings. This can make your next visit easier and the site more useful to you.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Type of Cookies</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                    <li><strong>First-Party Cookies:</strong> Set by VornHR</li>
                    <li><strong>Third-Party Cookies:</strong> Set by external services</li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 2: How We Use Cookies */}
          <ScrollReveal direction="up">
            <section id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
                How We Use Cookies
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>We use cookies and similar technologies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Authentication:</strong> To keep you logged in securely</li>
                  <li><strong>Preferences:</strong> To remember your settings and choices</li>
                  <li><strong>Analytics:</strong> To understand how visitors use our website</li>
                  <li><strong>Performance:</strong> To improve our services and user experience</li>
                  <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                  <li><strong>Marketing:</strong> To deliver relevant content and advertisements</li>
                </ul>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 3: Types of Cookies */}
          <ScrollReveal direction="up">
            <section id="types-of-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
                Types of Cookies We Use
              </h2>
              <div className="pl-11 space-y-6 text-slate-600">
                
                {/* Essential Cookies */}
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Essential Cookies
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as logging in or filling in forms.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2 font-medium">Cookie Name</th>
                          <th className="pb-2 font-medium">Purpose</th>
                          <th className="pb-2 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr>
                          <td className="py-2">session_id</td>
                          <td>Maintain your login session</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td className="py-2">csrf_token</td>
                          <td>Security against CSRF attacks</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td className="py-2">auth_token</td>
                          <td>Authentication state</td>
                          <td>7 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our site.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2 font-medium">Cookie Name</th>
                          <th className="pb-2 font-medium">Purpose</th>
                          <th className="pb-2 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr>
                          <td className="py-2">_ga</td>
                          <td>Google Analytics - distinguishes users</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td className="py-2">_gid</td>
                          <td>Google Analytics - distinguishes users</td>
                          <td>24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2">_gat</td>
                          <td>Google Analytics - throttles requests</td>
                          <td>1 minute</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-purple-600" />
                    Functional Cookies
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2 font-medium">Cookie Name</th>
                          <th className="pb-2 font-medium">Purpose</th>
                          <th className="pb-2 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr>
                          <td className="py-2">language</td>
                          <td>Remember your language preference</td>
                          <td>1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2">timezone</td>
                          <td>Remember your timezone setting</td>
                          <td>1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orange-600" />
                    Marketing Cookies
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2 font-medium">Cookie Name</th>
                          <th className="pb-2 font-medium">Purpose</th>
                          <th className="pb-2 font-medium">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr>
                          <td className="py-2">_fbp</td>
                          <td>Facebook Pixel - ad tracking</td>
                          <td>3 months</td>
                        </tr>
                        <tr>
                          <td className="py-2">ads_prefs</td>
                          <td>Advertising preferences</td>
                          <td>1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>
          </ScrollReveal>

          {/* Section 4: Third-Party Cookies */}
          <ScrollReveal direction="up">
            <section id="third-party" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">4</span>
                Third-Party Cookies
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The third parties include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Facebook:</strong> For marketing and social media integration</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Customer Support:</strong> For live chat and support services</li>
                </ul>
                <p className="mt-4">
                  We recommend reviewing the privacy policies of these third parties to understand how they use cookies.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 5: Managing Cookies */}
          <ScrollReveal direction="up">
            <section id="managing-cookies" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">5</span>
                Managing Cookies
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in the following ways:</p>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Cookie Settings</h3>
                  <p className="text-green-800 mb-4">
                    You can change your cookie preferences at any time by clicking the button below:
                  </p>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Manage Cookie Preferences
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Browser Settings</h3>
                <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete all or specific cookies</li>
                  <li>Block all or certain types of cookies</li>
                  <li>Set preferences for certain websites</li>
                </ul>

                <p className="mt-4">Here are links to cookie management instructions for popular browsers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
                  <p className="text-yellow-800">
                    If you block essential cookies, some parts of our website may not function properly. You may not be able to log in or access certain features.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 6: Updates */}
          <ScrollReveal direction="up">
            <section id="updates" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">6</span>
                Updates to This Policy
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will post any changes on this page and update the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* Section 7: Contact */}
          <ScrollReveal direction="up">
            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">7</span>
                Contact Us
              </h2>
              <div className="pl-11 space-y-4 text-slate-600">
                <p>If you have any questions about our Cookie Policy, please contact us:</p>
                <div className="bg-slate-100 rounded-xl p-6 mt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Abhivorn Technologies Pvt. Ltd.</h3>
                      <p className="text-sm">Email: privacy@abhivorn.com</p>
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
                { to: "/privacy-policy", icon: Shield, label: "Privacy Policy" },
                { to: "/terms-of-service", icon: Settings, label: "Terms of Service" },
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

export default CookiePolicy;
