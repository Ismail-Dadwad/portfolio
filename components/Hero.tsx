"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, PenTool, LayoutTemplate, Layers } from "lucide-react";

export default function Hero() {
  const roles = [
    { name: "UI/UX Designer", icon: <PenTool size={16} /> },
    { name: "Frontend Developer", icon: <Code2 size={16} /> },
    // { name: "React Developer", icon: <Layers size={16} /> },
    // { name: "UI Developer", icon: <LayoutTemplate size={16} /> },
  ];

  return (
    <section className="flex flex-col items-start justify-center min-h-[70vh] pt-6 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[#00B4D8] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4">
          Available for Freelance & Full-Time
        </h2>
      </motion.div>

      {/* Font scaled down to text-4xl on mobile, scaling up to 7xl on large screens */}
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-7xl font-bold font-jakarta text-slate-400 leading-tight sm:leading-tight lg:leading-[1.1] mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hi, I'm <span className="text-white">Ismail Dadwad</span>.<br className="hidden sm:block" />
        Bridging the gap between <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#7C3AED]">
          pixel-perfect design
        </span> & scalable code.
      </motion.h1>

      {/* Adjusted text sizing for mobile */}
      <motion.p 
        className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 lg:mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I architect and engineer high-performance travel CRMs, booking portals, and enterprise dashboards, specializing in turning complex travel logistics into effortless user experiences.
      </motion.p>

      {/* Ensured pills wrap perfectly on small screens */}
      <motion.div 
        className="flex flex-wrap gap-2 sm:gap-3 mb-10 lg:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {roles.map((role, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 backdrop-blur-sm">
            <span className="text-[#00B4D8]">{role.icon}</span>
            {role.name}
          </div>
        ))}
      </motion.div>

      <motion.a 
        href="#work"
        className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base hover:bg-slate-200 transition-colors w-full sm:w-auto justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        View Case Studies 
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
      </motion.a>
    </section>
  );
}