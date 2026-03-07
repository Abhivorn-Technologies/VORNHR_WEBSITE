import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Lock, Server, Database, Eye, CheckCircle, 
  AlertTriangle, Users, FileText, Cloud, Key, 
  Activity, Globe, Mail, ChevronRight, Award,
  Fingerprint, Zap, HardDrive, Wifi
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security at VornHR
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Your data security is our top priority. Learn how we protect your sensitive HR information with enterprise-grade security measures.
          </p>
          <p className="text-sm text-slate-400 mt-4">
            Last updated: March 2026
          </p>
        </div>
      </div>

      {/* Security Certifications */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Award, label: 'SOC 2 Type II', desc: 'Compliant' },
            { icon: Shield, label: 'ISO 27001', desc: 'Certified' },
            { icon: Lock, label: 'GDPR', desc: 'Ready' },
            { icon: Globe, label: 'India Data', desc: 'Local Storage' },
          ].map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-slate-900">{cert.label}</h3>
              <p className="text-sm text-slate-500">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-12 border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Security Overview</h2>
            <ul className="space-y-2">
              {[
                { id: 'infrastructure', label: '1. Infrastructure Security' },
                { id: 'data-encryption', label: '2. Data Encryption' },
                { id: 'access-control', label: '3. Access Control' },
                { id: 'network-security', label: '4. Network Security' },
                { id: 'application-security', label: '5. Application Security' },
                { id: 'compliance', label: '6. Compliance & Certifications' },
                { id: 'data-residency', label: '7. Data Residency' },
                { id: 'incident-response', label: '8. Incident Response' },
                { id: 'employee-training', label: '9. Employee Training' },
                { id: 'your-responsibility', label: '10. Your Security Responsibility' },
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

          {/* Section 1: Infrastructure Security */}
          <section id="infrastructure" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">1</span>
              Infrastructure Security
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                VornHR is hosted on enterprise-grade cloud infrastructure with industry-leading security features:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Hosted on AWS with enterprise-grade security' },
                  { icon: Server, title: 'Redundant Systems', desc: 'Multi-AZ deployment for high availability' },
                  { icon: HardDrive, title: 'Automated Backups', desc: 'Daily backups with 30-day retention' },
                  { icon: Activity, title: '24/7 Monitoring', desc: 'Real-time system health monitoring' },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Data Encryption */}
          <section id="data-encryption" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">2</span>
              Data Encryption
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">End-to-End Encryption</h3>
                </div>
                <p className="text-green-800">
                  All data is encrypted both in transit and at rest using military-grade encryption standards.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">TLS 1.3</strong>
                    <p className="text-sm">All data in transit is encrypted using TLS 1.3 protocol</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">AES-256 Encryption</strong>
                    <p className="text-sm">All data at rest is encrypted using AES-256 standard</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Secure Key Management</strong>
                    <p className="text-sm">Encryption keys managed through AWS KMS with hardware security modules</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Database Encryption</strong>
                    <p className="text-sm">All databases encrypted with customer-managed keys</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Access Control */}
          <section id="access-control" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">3</span>
              Access Control
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                We implement strict access control measures to ensure only authorized personnel can access your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Role-Based Access Control (RBAC):</strong> Users only access data relevant to their role</li>
                <li><strong>Multi-Factor Authentication (MFA):</strong> Optional 2FA for all user accounts</li>
                <li><strong>Single Sign-On (SSO):</strong> Integration with major identity providers</li>
                <li><strong>Session Management:</strong> Automatic session timeout and concurrent login controls</li>
                <li><strong>Admin Privileges:</strong> Least privilege principle for all administrators</li>
                <li><strong>Audit Logging:</strong> Complete audit trail of all access and actions</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Network Security */}
          <section id="network-security" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">4</span>
              Network Security
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Firewall Protection</strong>
                    <p className="text-sm">Enterprise-grade WAF and DDoS protection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">VPC Isolation</strong>
                    <p className="text-sm">Network isolation with private subnets</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Intrusion Detection</strong>
                    <p className="text-sm">24/7 network monitoring and threat detection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Content Delivery Network</strong>
                    <p className="text-sm">Global CDN for fast and secure content delivery</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Application Security */}
          <section id="application-security" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">5</span>
              Application Security
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                Our development and deployment practices follow security best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Secure Development:</strong> OWASP guidelines followed in development</li>
                <li><strong>Regular Penetration Testing:</strong> Annual third-party security assessments</li>
                <li><strong>Automated Scanning:</strong> Continuous vulnerability scanning in CI/CD</li>
                <li><strong>Code Reviews:</strong> Mandatory security reviews for all code changes</li>
                <li><strong>Input Validation:</strong> Sanitization of all user inputs</li>
                <li><strong>XSS & CSRF Protection:</strong> Built-in protection against common attacks</li>
                <li><strong>SQL Injection Prevention:</strong> Parameterized queries and ORM</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Compliance */}
          <section id="compliance" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">6</span>
              Compliance & Certifications
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  { 
                    icon: Award, 
                    title: 'SOC 2 Type II', 
                    desc: 'Annual audits validating security, availability, and confidentiality controls'
                  },
                  { 
                    icon: Shield, 
                    title: 'ISO 27001', 
                    desc: 'Internationally recognized information security management system certification'
                  },
                  { 
                    icon: Lock, 
                    title: 'GDPR Compliant', 
                    desc: 'Full compliance with EU General Data Protection Regulation requirements'
                  },
                  { 
                    icon: FileText, 
                    title: 'India Data Protection', 
                    desc: 'Compliant with Indian data localization and protection requirements'
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Data Residency */}
          <section id="data-residency" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">7</span>
              Data Residency
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Indian Data Centers</h3>
                </div>
                <p className="text-green-800">
                  All customer data is stored exclusively in Indian data centers (AWS Mumbai region), ensuring compliance with local data residency requirements.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Data never leaves India without explicit customer consent</li>
                <li>Local backups ensure data availability</li>
                <li>Compliance with Indian IT Act and data protection guidelines</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Incident Response */}
          <section id="incident-response" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">8</span>
              Incident Response
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                We have a comprehensive incident response plan in place:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>24/7 Security Operations Center:</strong> Continuous monitoring for security incidents</li>
                <li><strong>Incident Response Team:</strong> Dedicated team for rapid response</li>
                <li><strong>Communication Plan:</strong> Process to notify affected users within 72 hours</li>
                <li><strong>Regular Drills:</strong> Quarterly incident response exercises</li>
                <li><strong>Insurance:</strong> Cyber liability insurance coverage</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Employee Training */}
          <section id="employee-training" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">9</span>
              Employee Training
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <p>
                All employees undergo regular security awareness training:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Annual security awareness training for all staff</li>
                <li>Phishing simulation exercises</li>
                <li>Background checks for employees with data access</li>
                <li>Confidentiality agreements</li>
                <li>Need-to-know access principle</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Your Responsibility */}
          <section id="your-responsibility" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">10</span>
              Your Security Responsibility
            </h2>
            <div className="pl-11 space-y-4 text-slate-600">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-900">Help Us Keep Your Data Secure</h3>
                </div>
                <p className="text-yellow-800">
                  While we implement robust security measures, you also play a crucial role in protecting your data.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use strong, unique passwords and enable MFA</li>
                <li>Never share your login credentials</li>
                <li>Report suspicious activities immediately</li>
                <li>Keep your devices secure and updated</li>
                <li>Follow your organization's security policies</li>
                <li>Be cautious of phishing attempts</li>
              </ul>
            </div>
          </section>

          {/* Security Contact */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Report Security Issues</h3>
              </div>
              <p className="text-blue-100 mb-6">
                If you discover a security vulnerability or have security concerns, please contact us immediately.
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-medium">security@abhivorn.com</span>
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
              to="/terms-of-service" 
              className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600">Terms of Service</span>
              </div>
            </Link>
            <Link 
              to="/cookie-policy" 
              className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900 group-hover:text-blue-600">Cookie Policy</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
