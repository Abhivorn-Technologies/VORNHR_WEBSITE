// // import React from 'react';
// // import { Users, Calendar, DollarSign, Shield, PieChart, FileText, ArrowRight } from 'lucide-react';

// // interface Feature {
// //   icon: React.ComponentType<{ className?: string }>;
// //   title: string;
// //   description: string;
// //   color: string;
// // }

// // const Features: React.FC = () => {
// //   const features: Feature[] = [
// //     {
// //       icon: Users,
// //       title: 'Employee Management',
// //       description: 'Centralized employee database with profiles, documents, and onboarding workflows.',
// //       color: 'bg-blue-50 text-blue-600',
// //     },
// //     {
// //       icon: Calendar,
// //       title: 'Time & Attendance',
// //       description: 'Automated time tracking, leave management, and shift scheduling.',
// //       color: 'bg-emerald-50 text-emerald-600',
// //     },
// //     {
// //       icon: DollarSign,
// //       title: 'Payroll Processing',
// //       description: 'Automated payroll calculations, tax filings, and direct deposits.',
// //       color: 'bg-purple-50 text-purple-600',
// //     },
// //     {
// //       icon: Shield,
// //       title: 'Compliance',
// //       description: 'Stay compliant with local labor laws and regulations automatically.',
// //       color: 'bg-amber-50 text-amber-600',
// //     },
// //     {
// //       icon: PieChart,
// //       title: 'Analytics',
// //       description: 'Real-time insights into workforce metrics and performance.',
// //       color: 'bg-indigo-50 text-indigo-600',
// //     },
// //     {
// //       icon: FileText,
// //       title: 'Document Management',
// //       description: 'Secure storage and management of all HR documents.',
// //       color: 'bg-rose-50 text-rose-600',
// //     },
// //   ];

// //   return (
// //     <section id="features" className="py-20 bg-gray-50">
// //       <div className="container-clean">
// //         {/* Section header */}
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <div className="text-sm font-medium text-primary-600 mb-4">FEATURES</div>
// //           <h2 className="heading-2 mb-6">Everything you need to manage your team</h2>
// //           <p className="body-lg">
// //             A comprehensive suite of tools designed to simplify HR management for growing businesses.
// //           </p>
// //         </div>

// //         {/* Features grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {features.map((feature, index) => {
// //             const Icon = feature.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 className="card p-6 hover:shadow-lg animate-slide-up"
// //                 style={{ animationDelay: `${index * 100}ms` }}
// //               >
// //                 <div className={`inline-flex p-3 rounded-lg ${feature.color.split(' ')[0]} mb-4`}>
// //                   <Icon className="h-6 w-6" />
// //                 </div>
// //                 <h3 className="heading-3 mb-3">{feature.title}</h3>
// //                 <p className="body-base">{feature.description}</p>
// //                 <a
// //                   href="#"
// //                   className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4"
// //                 >
// //                   Learn more
// //                   <ArrowRight className="ml-1 h-4 w-4" />
// //                 </a>
// //               </div>
// //             );
// //           })}
// //         </div>


// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;





















// import React, { useEffect, useState } from 'react';
// import { Users, Calendar, DollarSign, Shield, PieChart, FileText, ArrowRight, Zap, Clock, Target, BarChart3, Workflow, CheckCircle, TrendingUp } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface Feature {
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   description: string;
//   color: string;
//   gradient: string;
//   stats?: string;
//   delay: number;
// }

// const Features: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const features: Feature[] = [
//     {
//       icon: Users,
//       title: 'Employee Management',
//       description: 'Centralized employee database with profiles, documents, and automated onboarding workflows that reduce setup time by 70%.',
//       color: 'text-blue-600',
//       gradient: 'from-blue-500 to-cyan-500',
//       stats: '95% faster onboarding',
//       delay: 100,
//     },
//     {
//       icon: Calendar,
//       title: 'Time & Attendance',
//       description: 'Intelligent time tracking, smart leave management, and automated shift scheduling with predictive analytics.',
//       color: 'text-emerald-600',
//       gradient: 'from-emerald-500 to-green-500',
//       stats: '40% time saved',
//       delay: 200,
//     },
//     {
//       icon: DollarSign,
//       title: 'Payroll Processing',
//       description: 'Automated payroll calculations, tax filings, direct deposits, and compliance reporting across 50+ countries.',
//       color: 'text-purple-600',
//       gradient: 'from-purple-500 to-violet-500',
//       stats: '99.9% accuracy',
//       delay: 300,
//     },
//     {
//       icon: Shield,
//       title: 'Compliance',
//       description: 'Stay automatically compliant with local labor laws, regulations, and industry standards with real-time updates.',
//       color: 'text-amber-600',
//       gradient: 'from-amber-500 to-orange-500',
//       stats: 'Zero compliance issues',
//       delay: 400,
//     },
//     {
//       icon: PieChart,
//       title: 'Advanced Analytics',
//       description: 'Real-time workforce insights, performance metrics, and predictive analytics with customizable dashboards.',
//       color: 'text-indigo-600',
//       gradient: 'from-indigo-500 to-purple-500',
//       stats: '30+ data points',
//       delay: 500,
//     },
//     {
//       icon: FileText,
//       title: 'Document Management',
//       description: 'Secure, centralized storage for all HR documents with automated workflows and e-signature integration.',
//       color: 'text-rose-600',
//       gradient: 'from-rose-500 to-pink-500',
//       stats: '100% secure',
//       delay: 600,
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
//             <Zap className="h-4 w-4" />
//             Powerful Features
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Everything you need to manage your team
//           </h2>

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             A comprehensive suite of tools designed to simplify HR management for growing businesses
//           </p>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
//             {[
//               { value: '10K+', label: 'Employees Managed', icon: Users },
//               { value: '99.8%', label: 'Accuracy Rate', icon: CheckCircle },
//               { value: '40%', label: 'Time Saved', icon: Clock },
//               { value: '95%', label: 'Satisfaction', icon: TrendingUp },
//             ].map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <stat.icon className="h-5 w-5 text-primary-600" />
//                   <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//                 </div>
//                 <div className="text-sm text-gray-600 text-center">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 custom={index}
//                 className={`group relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-transparent ${
//                   isHovered ? 'scale-[1.02]' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {/* Hover Gradient Effect */}
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

//                 {/* Icon */}
//                 <div className="relative z-10 mb-5">
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className="h-6 w-6 text-white" />
//                   </div>

//                   {/* Stats Badge */}
//                   {feature.stats && (
//                     <div className="inline-block ml-3 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
//                       {feature.stats}
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
//                     {feature.title}
//                   </h3>

//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {feature.description}
//                   </p>

//                   {/* Features List */}
//                   <div className="space-y-2 mb-6">
//                     {[
//                       'Automated workflows',
//                       'Real-time updates',
//                       'Mobile access',
//                       'Integration ready',
//                     ].map((item, idx) => (
//                       <div key={idx} className="flex items-center gap-2">
//                         <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
//                         <span className="text-sm text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/cta"
//                   >
//                     <span className="mr-2">Learn more</span>
//                     <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
//                   </a>
//                 </div>

//                 {/* Bottom Gradient Line */}
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
//             <Target className="h-4 w-4" />
//             All features included in every plan
//           </div>

//           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//             Get access to all these powerful features with our transparent pricing. No hidden costs, no feature limitations.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="#pricing"
//               className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105"
//             >
//               <Zap className="h-4 w-4 mr-2" />
//               View Pricing Plans
//             </a>
//             <a
//               href="#contactform"
//               className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:border-primary-300 hover:shadow transition-all"
//             >
//               <BarChart3 className="h-4 w-4 mr-2" />
//               Request a Demo
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Features;

















import React, { useState } from 'react';
import { Users, Calendar, DollarSign, Shield, PieChart, FileText, ArrowRight, Zap, Clock, Target, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  gradient: string;
  stats?: string;
  delay: number;
}

const Features: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Centralized employee database with automated onboarding workflows.',
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '95% faster onboarding',
      delay: 100,
    },
    {
      icon: Calendar,
      title: 'Time & Attendance',
      description: 'Smart time tracking, leave management, and automated scheduling.',
      color: 'text-emerald-600',
      gradient: 'from-emerald-500 to-green-500',
      stats: '40% time saved',
      delay: 200,
    },
    {
      icon: DollarSign,
      title: 'Payroll Processing',
      description: 'Automated payroll calculations, tax filings, and compliance reporting.',
      color: 'text-purple-600',
      gradient: 'from-purple-500 to-violet-500',
      stats: '99.9% accuracy',
      delay: 300,
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Stay compliant with local labor laws and regulations.',
      color: 'text-amber-600',
      gradient: 'from-amber-500 to-orange-500',
      stats: 'Zero compliance issues',
      delay: 400,
    },
    {
      icon: PieChart,
      title: 'Advanced Analytics',
      description: 'Real-time workforce insights and performance metrics.',
      color: 'text-indigo-600',
      gradient: 'from-indigo-500 to-purple-500',
      stats: '30+ data points',
      delay: 500,
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure storage for HR documents with e-signature integration.',
      color: 'text-rose-600',
      gradient: 'from-rose-500 to-pink-500',
      stats: '100% secure',
      delay: 600,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const // Fix for string type inference
      }
    }
  };

  return (
    <section id="features" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Powerful Features
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Everything you need to manage your team
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            A comprehensive suite of tools designed to simplify HR management
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { value: '5000+', label: 'Companies', icon: Users },
              { value: '99.8%', label: 'Accuracy', icon: CheckCircle },
              { value: '40%', label: 'Time Saved', icon: Clock },
              { value: '95%', label: 'Satisfaction', icon: TrendingUp },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 transition-all duration-300 hover:shadow-lg ${isHovered ? 'scale-[1.02]' : ''
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {feature.stats && (
                    <div className="inline-block ml-3 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                      {feature.stats}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 mb-4">
                    {[
                      'Automated workflows',
                      'Real-time updates',
                      'Mobile access',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group/cta"
                  >
                    <span className="mr-1">Learn more</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            <Target className="h-4 w-4" />
            All features included in every plan
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-xl mx-auto text-sm">
            Get access to all these powerful features with our transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg transition-all text-sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              View Pricing Plans
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow transition-all text-sm"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;