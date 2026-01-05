import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submission Handler (Unified Logic)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const hrTemplateId = import.meta.env.VITE_EMAILJS_HR_TEMPLATE_ID;
        const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const hrEmail = import.meta.env.VITE_HR_EMAIL || 'anjaneyachary@abhivorn.com';

        // Validation
        if (!serviceId || !hrTemplateId || !publicKey) {
            alert("Email service configuration missing. Please check .env variables.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Create a single, comprehensive payload for ALL templates
            // This ensures both HR and User emails verify the exact same data
            const templateParams = {
                // Core Data
                to_name: "HR Team", // For HR email
                from_name: formState.name,
                from_email: formState.email,
                phone: formState.phone,
                subject: formState.subject,
                message: formState.message,

                // Routing
                to_email: hrEmail,          // Main destination
                hr_email: hrEmail,          // Backup key
                reply_to: formState.email,  // Reply to visitor

                // Standard Variable Variations (Kitchen Sink)
                // These cover almost every default EmailJS template format
                name: formState.name,
                Name: formState.name,
                email: formState.email,
                Email: formState.email,
                Subject: formState.subject,
                Message: formState.message,

                first_name: formState.name,
                full_name: formState.name,
                user_name: formState.name,
                user_email: formState.email,
                contact_number: formState.phone,
                phone_number: formState.phone,
                mobile: formState.phone,
            };

            console.log("Sending Email Payload:", templateParams);

            // 1. Send to HR
            await emailjs.send(serviceId, hrTemplateId, templateParams, publicKey);

            // 2. Send Auto-Reply (if configured)
            if (userTemplateId) {
                // For the user email, we might want to tweak 'to_name' to be their name
                const userAutoReplyParams = {
                    ...templateParams,
                    to_name: formState.name,      // Address the user by name
                    to_email: formState.email,    // Send TO the user
                    email: formState.email,       // Backup key
                    reply_to: hrEmail             // User replies to HR
                };

                // Send silently - don't fail main flow if this fails
                emailjs.send(serviceId, userTemplateId, userAutoReplyParams, publicKey)
                    .catch(err => console.warn("Auto-reply failed:", err));
            }

            // Success
            setIsSuccess(true);
            setFormState({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setTimeout(() => setIsSuccess(false), 5000);

        } catch (error: any) {
            console.error("Email Sending Failed:", error);
            alert(`Failed to send message: ${error.text || "Unknown error"}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="pt-24 pb-16 bg-[#F8FAFC] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-slate-200/50 [background-size:30px_30px] opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
                    >
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">Get In Touch</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    >
                        <span className="text-[#003973]">Ready to Transform Your</span>{" "}
                        <br className="hidden md:block" />
                        <span className="text-[#2ab6ea]">Workforce?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Leave us a message and our HR team will contact you shortly.
                    </motion.p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
                    {/* Left Info Column */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 relative p-8 lg:p-10 text-slate-800 overflow-hidden flex flex-col justify-between">
                        {/* Decorative Gradient Effects */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-200/30 blur-3xl" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-slate-900">Phone</h4>
                                        <p className="text-slate-600 mt-1 hover:text-blue-600 transition-colors cursor-pointer">+91 99666 29766</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-slate-900">Email</h4>
                                        <p className="text-slate-600 mt-1 hover:text-blue-600 transition-colors cursor-pointer">hr@abhivorn.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-slate-900">Office</h4>
                                        <p className="text-slate-600 mt-1 leading-relaxed">
                                            Matrix IT Hub, Near Temple Bus Stop,<br />
                                            KPHB Phase 2, Kukatpally,<br />
                                            Hyderabad, Telangana, India, 500072
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:w-3/5 p-8 lg:p-10 bg-white relative">
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto lg:mx-0">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                                    <input
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#39a4de] focus:ring-4 focus:ring-[#39a4de]/10 outline-none transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#39a4de] focus:ring-4 focus:ring-[#39a4de]/10 outline-none transition-all duration-300"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#39a4de] focus:ring-4 focus:ring-[#39a4de]/10 outline-none transition-all duration-300"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Subject</label>
                                <select
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#39a4de] focus:ring-4 focus:ring-[#39a4de]/10 outline-none transition-all duration-300 text-slate-600"
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="demo">Request a Demo</option>
                                    <option value="sales">Sales Inquiry</option>
                                    <option value="support">Customer Support</option>
                                    <option value="partnership">Partnership</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-[#39a4de] focus:ring-4 focus:ring-[#39a4de]/10 outline-none transition-all duration-300 resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-xl font-bold text-lg text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl ${isSuccess
                                    ? "bg-green-500 hover:bg-green-600 shadow-green-500/30"
                                    : "bg-gradient-to-r from-[#39a4de] to-[#2ab6ea] hover:shadow-lg hover:-translate-y-1 shadow-blue-500/30"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : isSuccess
                                        ? "Message Sent!"
                                        : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
