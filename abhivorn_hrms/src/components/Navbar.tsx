import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const location = useLocation();
    const navigate = useNavigate();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
        const previous = scrollY.getPrevious();
        if (previous !== undefined && latest > previous && latest > 150) {
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

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        if (location.pathname === href) {
            window.location.reload();
        } else {
            navigate(href);
        }
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed w-full z-50 transition-all duration-500 top-0 border-b ${
                    isScrolled 
                        ? "bg-white/80 backdrop-blur-lg border-gray-100 shadow-sm py-2" 
                        : "bg-white border-transparent py-4"
                }`}
            >
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 group"
                            onClick={(e) => handleNavClick(e, '/')}
                        >
                            <img
                                src="/vornhrlogo.webp"
                                alt="vornhr Logo"
                                className="h-8 md:h-9 w-auto object-contain transition-all duration-300 hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={({ isActive }) => `
                                        relative px-5 py-2.5 text-[15px] font-semibold transition-colors duration-300 rounded-full
                                        ${isActive ? "text-[#003973]" : "text-slate-600 hover:text-[#003973]"}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {(hoveredLink === link.name || isActive) && (
                                                <motion.div
                                                    layoutId="nav-pill"
                                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                                    className={`absolute inset-0 z-0 rounded-full ${isActive ? 'bg-blue-50' : 'bg-gray-50'}`}
                                                />
                                            )}
                                            <span className="relative z-10">{link.name}</span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        {/* Right Side Buttons - Premium CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                to="/pricing?trial=true"
                                onClick={(e) => handleNavClick(e, '/pricing?trial=true')}
                                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#2ab6ea] to-[#0093E9] rounded-full shadow-lg shadow-blue-400/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="relative z-10 flex items-center">
                                    Get Started Free
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

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 overflow-hidden flex flex-col"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <NavLink
                                        to={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={({ isActive }) => `
                                            flex items-center justify-between text-2xl font-bold p-4 rounded-2xl transition-all
                                            ${isActive ? "text-[#003973] bg-blue-50" : "text-slate-600 active:bg-gray-50"}
                                        `}
                                    >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            <ChevronRight className={`w-6 h-6 ${isActive ? 'text-[#003973]' : 'text-slate-300'}`} />
                                        </>
                                    )}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8"
                            >
                                <Link
                                    to="/pricing?trial=true"
                                    onClick={(e) => handleNavClick(e, '/pricing?trial=true')}
                                    className="w-full py-4 text-center text-lg font-bold text-white bg-gradient-to-r from-[#2ab6ea] to-[#0093E9] rounded-2xl shadow-xl shadow-blue-400/30 block transition-transform active:scale-95"
                                >
                                    Get Started Free
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
