// import React, { useState, useEffect } from "react";
// import {
//   Star,
//   Quote,
//   ChevronLeft,
//   ChevronRight,
//   Users,
//   TrendingUp,
//   Shield,
//   Clock,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Testimonials = () => {
//   const slides = [
//     {
//       name: "Vishal Pratap",
//       role: "HR Director",
//       company: "Cred Marg",
//       content:
//         "Reduced our hiring time by 60% and improved candidate quality significantly.",
//       rating: 5,
//       icon: Users,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       name: "Sampath Nomula",
//       role: "Talent Acquisition Head",
//       company: "NextGen Hiring",
//       content:
//         "Automated our entire recruitment process. What used to take weeks now happens in days.",
//       rating: 5,
//       icon: TrendingUp,
//       color: "from-emerald-500 to-green-500",
//     },
//     {
//       name: "Dr. Ravikanth & Shesha Shailaja",
//       role: "Administrative Director",
//       company: "Sai Sharanya Hospital",
//       content:
//         "Streamlined our staff management and payroll. Healthcare scheduling has never been this efficient.",
//       rating: 5,
//       icon: Clock,
//       color: "from-purple-500 to-violet-500",
//     },
//     {
//       name: "Ananya Patel",
//       role: "Operations Manager",
//       company: "Pixel Eye Hospital",
//       content:
//         "Perfect for managing our medical staff across multiple shifts.",
//       rating: 5,
//       icon: Shield,
//       color: "from-amber-500 to-orange-500",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   const slideVariants = {
//     enter: {
//       opacity: 0,
//       rotateY: 90,
//       scale: 0.95,
//     },
//     center: {
//       opacity: 1,
//       rotateY: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     exit: {
//       opacity: 0,
//       rotateY: -90,
//       scale: 0.95,
//       transition: { duration: 0.5, ease: "easeIn" },
//     },
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Loved by HR Teams
//           </h2>
//           <p className="text-gray-600">
//             Real feedback from real teams
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative perspective-[1200px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="bg-white rounded-xl border shadow-lg p-8"
//             >
//               {(() => {
//                 const slide = slides[index];
//                 const Icon = slide.icon;
//                 return (
//                   <>
//                     <div className="flex justify-between mb-6">
//                       <div
//                         className={`h-14 w-14 rounded-xl bg-gradient-to-br ${slide.color}
//                                     flex items-center justify-center`}
//                       >
//                         <Icon className="h-7 w-7 text-white" />
//                       </div>
//                       <Quote className="h-10 w-10 text-blue-100" />
//                     </div>

//                     <p className="text-lg italic text-gray-700 mb-8">
//                       "{slide.content}"
//                     </p>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                       <div
//                         className={`h-12 w-12 rounded-full bg-gradient-to-br ${slide.color}
//                                     flex items-center justify-center text-white font-bold`}
//                       >
//                         {slide.name[0]}
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-bold">{slide.name}</div>
//                         <div className="text-gray-600">{slide.role}</div>
//                         <div className="text-blue-600">{slide.company}</div>
//                       </div>
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className="h-5 w-5 text-amber-400 fill-amber-400"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 );
//               })()}
//             </motion.div>
//           </AnimatePresence>

//           {/* Controls */}
//           <div className="flex justify-center mt-6 gap-4">
//             <button
//               onClick={() =>
//                 setIndex((i) => (i - 1 + slides.length) % slides.length)
//               }
//               className="p-2 rounded-full bg-white shadow"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               onClick={() =>
//                 setIndex((i) => (i + 1) % slides.length)
//               }
//               className="p-2 rounded-full bg-white shadow"
//             >
//               <ChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* STATS */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { label: "Companies", value: 4, color: "text-blue-600" },
//             { label: "Employees", value: 153, color: "text-emerald-600" },
//             { label: "Satisfaction", value: 99.2, suffix: "%", color: "text-amber-600" },
//             { label: "Support", value: 24, suffix: "/7", color: "text-purple-600" },
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, rotateX: 90 }}
//               whileInView={{ opacity: 1, rotateX: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="bg-white rounded-xl p-6 text-center border shadow-sm"
//             >
//               <motion.div
//                 initial={{ rotateY: 180 }}
//                 whileInView={{ rotateY: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`text-3xl font-bold mb-2 ${stat.color}`}
//               >
//                 {stat.value}
//                 {stat.suffix || ""}
//               </motion.div>
//               <div className="text-gray-600">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
