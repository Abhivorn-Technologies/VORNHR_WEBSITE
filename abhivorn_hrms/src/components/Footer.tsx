import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleFooterLinkClick = (e: React.MouseEvent, href: string) => {
        if (location.pathname === href) {
            e.preventDefault();
            window.location.reload();
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    };

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/vorn-hr/" },
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
            title: "Capabilities",
            links: [
                { name: "Chat", href: "/chat" },
                { name: "Analytics", href: "/analytics" },
                { name: "Notifications", href: "/notifications" },
                { name: "Real-time Chat", href: "/realtime-chat" },
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
    ];

    return (
        <footer className="bg-slate-950 pt-16 pb-12 border-t border-slate-900">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12 items-start">
                    {/* Brand Column */}
                    <div className="flex flex-col">
                        <motion.div
                            whileHover={{ scale: 1.05, filter: "brightness(1.1) drop-shadow(0 0 15px rgba(42,182,234,0.4))" }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 mb-6 group transition-all duration-300"
                                onClick={(e) => handleFooterLinkClick(e, '/')}
                            >
                                <img src="/vornhrlogo.webp" alt="vornhr Logo" className="h-10 md:h-12 w-auto object-contain" />
                            </Link>
                        </motion.div>
                        <p className="text-slate-400 mt-3 max-w-[280px] leading-[1.6] text-sm">
                            Simplifying HR management for modern businesses. Automate payroll, track attendance, and manage your workforce with ease.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5, backgroundColor: "#2563eb", color: "#ffffff" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 transition-colors duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                                        <Link
                                            to={link.href}
                                            onClick={(e) => handleFooterLinkClick(e, link.href)}
                                            className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-sm inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        ©2025 <a href="https://www.abhivorn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Abhivorn Technologies Pvt. Ltd.</a> All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                        <span>Built in India by</span>
                        <a
                            href="https://www.abhivorn.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 hover:text-blue-500 transition-colors font-medium "
                        >
                            {/* <img src="/abhivorn.webp" alt="Abhivorn" className="h-9 w-auto object-contain" /> */}
                            <span>Abhivorn Technologies Pvt. Ltd.</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
