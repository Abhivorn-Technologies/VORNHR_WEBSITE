import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const logo = "/logo5.png";

const Footer: React.FC = () => {
  const links = [
    {
      title: "Product",
      items: [
        { label: "Features", path: "/features" },
        { label: "Pricing", path: "/pricing" },
        { label: "Customers", path: "/customers" },
        { label: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About", path: "#" },
        { label: "Blog", path: "#" },
        { label: "Careers", path: "#" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Help Center", path: "#" },
        { label: "Documentation", path: "#" },
        { label: "Community", path: "#" },
        { label: "System Status", path: "#" }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "Security", path: "#" }
      ]
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/abhivorn-technologies/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/abhivorn_technologies",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      {/* TOP GRADIENT */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-[length:200%_auto]"
        animate={{ backgroundPosition: ["0% center", "200% center"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* BRAND */}
          <div className="lg:w-2/5">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="VORN HR Logo" className="h-10 w-auto" />
            </Link>

            <p className="text-gray-300 text-sm max-w-sm mb-6 leading-relaxed">
              All-in-one HR platform for efficient team management and growth.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="h-9 w-9 rounded-full bg-white/10
                               flex items-center justify-center
                               transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {links.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-sm tracking-wide text-gray-100">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      {item.path.startsWith("/") ? (
                        <Link to={item.path}>
                          <motion.span
                            className="inline-block text-gray-400 hover:text-cyan-300 text-sm transition-colors cursor-pointer"
                            whileHover={{ x: 5, color: "#67e8f9" }}
                          >
                            {item.label}
                          </motion.span>
                        </Link>
                      ) : (
                        <a href={item.path}>
                          <motion.span
                            className="inline-block text-gray-400 hover:text-cyan-300 text-sm transition-colors cursor-pointer"
                            whileHover={{ x: 5, color: "#67e8f9" }}
                          >
                            {item.label}
                          </motion.span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-800" />

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} VORN HR. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
