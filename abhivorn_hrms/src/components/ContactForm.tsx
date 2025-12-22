import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, User, Building, MessageSquare, CheckCircle, Loader2, Phone, Clock, Shield, Users, Award, HeadphonesIcon } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SERVICE_ID = "service_cm4k3rr";
const HR_TEMPLATE_ID = "template_szqjpmq";
const USER_TEMPLATE_ID = "template_4mfju7k";
const PUBLIC_KEY = "9EFlXjsjum4h_c7K6";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using emailjs.send instead of sendForm for better control and stability with React state
      await Promise.all([
        // Send email to HR
        emailjs.send(
          SERVICE_ID,
          HR_TEMPLATE_ID,
          {
            // Standard fields matching form inputs
            name: formData.name,
            company: formData.company,
            email: formData.email,
            message: formData.message,
            // Extra context variables often used in templates
            from_name: formData.name,
            from_email: formData.email,
            to_name: "HR Team",
            reply_to: formData.email,
          },
          PUBLIC_KEY
        ),
        // Send auto-reply to user
        emailjs.send(
          SERVICE_ID,
          USER_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to_name: formData.name,
            reply_to: "support@abhivorn.com", // Fallback or company email
          },
          PUBLIC_KEY
        )
      ]);

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");

      // Reset form
      setFormData({ name: "", company: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      // More descriptive error message for debugging
      const errorMessage = error?.text || "Failed to send message. Please check your network or configuration.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactform" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container-clean">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            <HeadphonesIcon className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="heading-2 text-gray-900 dark:text-white mb-3">
            Contact Our HR Experts
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions? Our HR team is here to help you streamline your operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div className="card dark:bg-gray-800 dark:border-gray-700 p-6 md:p-8 shadow-lg">
              <h3 className="heading-3 text-gray-900 dark:text-white mb-4">
                Why Choose Our HR Support?
              </h3>
              <p className="body-base text-gray-600 dark:text-gray-400 mb-6">
                Our dedicated HR specialists are here to help you optimize your workforce management,
                streamline processes, and ensure compliance.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Expert Guidance</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Industry best practices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                  <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Quick Response</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Other Ways to Reach Us</h3>

              <div className="grid gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:hr@company.com"
                  className="flex items-center gap-4 p-4 card dark:bg-gray-800 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 transition-all group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email Us</div>
                    <div className="text-primary-600 dark:text-primary-400">hr@company.com</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Response within 4 hours</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 card dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Call Support</div>
                    <div className="text-gray-900 dark:text-white">+1 (555) 123-4567</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 9AM-6PM EST</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Avg. Response", value: "24h", color: "blue", from: "from-blue-50", to: "to-white", darkFrom: "dark:from-blue-900/20", border: "border-blue-100", darkBorder: "dark:border-blue-800/30", text: "text-blue-600 dark:text-blue-400" },
                { label: "Satisfaction", value: "98%", color: "emerald", from: "from-emerald-50", to: "to-white", darkFrom: "dark:from-emerald-900/20", border: "border-emerald-100", darkBorder: "dark:border-emerald-800/30", text: "text-emerald-600 dark:text-emerald-400" },
                { label: "Support Rating", value: "4.9/5", color: "purple", from: "from-purple-50", to: "to-white", darkFrom: "dark:from-purple-900/20", border: "border-purple-100", darkBorder: "dark:border-purple-800/30", text: "text-purple-600 dark:text-purple-400" },
                { label: "Employees", value: "157", color: "amber", from: "from-amber-50", to: "to-white", darkFrom: "dark:from-amber-900/20", border: "border-amber-100", darkBorder: "dark:border-amber-800/30", text: "text-amber-600 dark:text-amber-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`bg-gradient-to-br ${stat.from} ${stat.to} ${stat.darkFrom} dark:to-gray-800 p-4 rounded-xl border ${stat.border} ${stat.darkBorder}`}
                >
                  <div className={`text-lg font-bold ${stat.text} mb-1`}>{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8"
          >
            {/* Form Header */}
            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl mb-4">
                <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="heading-3 text-gray-900 dark:text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fill out the form below and our HR team will get back to you shortly
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                />
              </div>

              {/* Company Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Building className="h-4 w-4" />
                  Company Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4" />
                  Work Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="h-4 w-4" />
                  Your Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full btn-primary rounded-lg py-3 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message to HR Team
                  </div>
                )}
              </motion.button>

              {/* Form Note */}
              <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We typically respond within 2-4 hours during business days
                </p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Secure & Encrypted
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    No Spam Guaranteed
                  </span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;