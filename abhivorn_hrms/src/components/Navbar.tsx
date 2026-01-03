import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm top-0"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 group"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img
                                src="/virnhrlogo.png"
                                alt="Abhivorn Logo"
                                className="h-8 md:h-9 w-auto object-contain transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-md"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        {/* Desktop Navigation - Centered & Clean */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative px-4 py-2 text-[15px] font-medium text-slate-600 transition-all duration-300 rounded-full hover:text-[#003973] hover:bg-blue-50/80 hover:shadow-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Buttons - Premium CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                to="/pricing"
                                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#2ab6ea] to-[#0093E9] rounded-full shadow-lg shadow-blue-400/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="relative z-10 flex items-center">
                                    Get Started
                                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-semibold text-gray-900 hover:text-brand-primary transition-colors border-b border-gray-100 pb-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 flex flex-col gap-4">

                                <Link
                                    to="/pricing"
                                    onClick={() => {
                                        setIsOpen(false);
                                    }}
                                    className="w-full py-3 text-center text-lg font-bold text-white bg-[#2ab6ea] rounded-xl shadow-lg shadow-[#003973]/20 hover:bg-[#003973] transition-colors"
                                >
                                    Get Started Free
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
