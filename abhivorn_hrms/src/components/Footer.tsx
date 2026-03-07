import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/abhivorn-technologies/" },
        { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/abhivorn_technologies?igsh=amh3bWw2d2N1bDVq" },
    ];

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "/features" },
                { name: "Solutions", href: "/solutions" },
                { name: "Pricing", href: "/pricing" },
                { name: "Updates", href: "/updates" },
                { name: "AI", href: "/ai" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Security", href: "/security" },
            ]
        },
        {
            title: "Features",
            links: [
                { name: "Chat", href: "/chat" },
                { name: "Analytics", href: "/analytics" },
                { name: "Notifications", href: "/notifications" },
                { name: "Real-time Chat", href: "/realtime-chat" },
            ]
        }
    ];

    return (
        <footer className="bg-slate-950 pt-10 md:pt-16 pb-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-12 mb-8 md:mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 mb-6 group transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_15px_rgba(42,182,234,0.4)]"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src="/virnhrlogo.webp" alt="Abhivorn Logo" className="h-10 md:h-12 w-auto object-contain" />
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                            Simplifying HR management for modern businesses. Automate payroll, track attendance, and manage your workforce with ease.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Abhivorn Technologies Pvt. Ltd.</a> All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                        <span>Built in India by</span>
                        <a
                            href="https://www.abhivorn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 hover:text-blue-500 transition-colors font-medium "
                        >
                            <img src="/abhivorn.webp" alt="Abhivorn" className="h-9 w-auto object-contain" />
                            <span>Abhivorn Technologies Pvt. Ltd.</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
