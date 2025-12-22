import { ArrowRight, CheckCircle, Sparkles, Zap, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />

      {/* Floating Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply blur-3xl dark:opacity-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-32 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply blur-3xl dark:opacity-10"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Main Heading with Staggered Character Animation */}
        <div className="overflow-visible mt-4 mb-6">
          <motion.h1
            className="font-bold text-center leading-tight ring-blue-500"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-2">
              {Array.from("HR Management").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>

            <motion.span
              className="inline-block relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-2">
                {Array.from("Simplified").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full origin-left top-full"
              />
            </motion.span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8 text-base sm:text-lg leading-relaxed"
        >
          All-in-one platform for payroll, attendance, compliance, and employee management —
          <span className="font-semibold text-gray-700 dark:text-gray-300"> built for growing teams.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <Link to="/pricing">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 
                       hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-xl 
                       font-semibold shadow-lg overflow-hidden transition-all duration-300"
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center justify-center">
                <Zap className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Free Trial
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                       px-6 py-3.5 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-700 
                       hover:border-blue-300 dark:hover:border-blue-500 shadow-md hover:shadow-lg 
                       transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <PlayCircle className="mr-3 h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                Schedule Demo
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 text-sm mb-10"
        >
          {[
            { text: "No credit card required", icon: CheckCircle },
            { text: "30-day free trial", icon: Sparkles },
            { text: "Cancel anytime", icon: CheckCircle },
            { text: "Setup in 10 minutes", icon: Zap },
          ].map((feature, idx) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 
                       backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 
                       shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
              <feature.icon className="h-3.5 w-3.5 text-blue-500 mr-2" />
              {feature.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards - Updated with Real Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "4", label: "Companies", color: "from-blue-500 to-cyan-500" },
            { value: "157", label: "Employees", color: "from-emerald-500 to-green-500" },
            { value: "40%", label: "Time Saved", color: "from-amber-500 to-orange-500" },
            { value: "24/7", label: "Support", color: "from-purple-500 to-pink-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 
                       border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg 
                       transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-2xl font-bold mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;