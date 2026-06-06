"use client";

import { motion } from "framer-motion";
import { Palette, Code, Target, Layers } from "lucide-react";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  role: string;
  metric: string;
  ui: string;
  ux: string;
  code: string;
  stack: string[];
  image: string | string[];
}

export default function CaseStudyCard({ title, subtitle, role, metric, ui, ux, code, stack, image }: CaseStudyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      // Reduced padding on mobile (p-5) vs desktop (md:p-10)
      className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 md:p-10 mb-8 md:mb-12 backdrop-blur-md hover:border-white/20 transition-colors"
    >
      {Array.isArray(image) && image.length === 2 ? (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8 md:mb-10">
          <div className="flex-1 rounded-xl overflow-hidden relative border border-white/10 bg-[#0B0F19] group shadow-xl">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
              <span className="bg-black/70 backdrop-blur-md text-slate-300 text-[9px] sm:text-[10px] md:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10 uppercase tracking-wider shadow-lg">
                Before
              </span>
            </div>
            <div className="relative aspect-video w-full">
              <img 
                src={image[0]} 
                alt={`${title} Before`} 
                className="w-full h-full object-cover object-top grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 rounded-xl overflow-hidden relative border border-[#7C3AED]/40 bg-[#0B0F19] group shadow-[0_0_30px_rgba(124,58,237,0.15)] ring-1 ring-[#7C3AED]/20">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
              <span className="bg-gradient-to-r from-[#00B4D8] to-[#7C3AED] text-white text-[9px] sm:text-[10px] md:text-xs font-bold px-2 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                After (Redesign)
              </span>
            </div>
            <div className="relative aspect-video w-full">
              <img 
                src={image[1]} 
                alt={`${title} After`} 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full aspect-video md:aspect-[21/9] mb-8 md:mb-10 rounded-xl overflow-hidden relative border border-white/10 bg-[#0B0F19] shadow-2xl group">
          <img 
            src={image as string} 
            alt={title} 
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      )}

      {/* Fixed mobile alignment: Stacks left on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-4 md:pb-6 mb-4 md:mb-6">
        <div className="mb-3 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-1 sm:mb-2">{title}</h3>
          <p className="text-[#00B4D8] font-medium text-sm sm:text-base leading-snug">{subtitle}</p>
        </div>
        <div className="text-left lg:text-right">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
            {role}
          </span>
        </div>
      </div>

      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-lg p-3 sm:p-4 mb-6 md:mb-8">
        <p className="text-[#bba0ff] text-xs sm:text-sm md:text-base font-medium flex items-start sm:items-center gap-2">
          <Target size={18} className="shrink-0 mt-0.5 sm:mt-0" />
          <span><span className="font-bold text-white">Project Summary:</span> {metric}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 md:mb-8">
        <div>
          <h4 className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-white/10 pb-2">
            <Palette size={16} className="text-pink-400" /> UI Design
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{ui}</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-white/10 pb-2">
            <Layers size={16} className="text-amber-400" /> UX Strategy & Pain Points
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{ux}</p>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 border-b border-white/10 pb-2">
            <Code size={16} className="text-emerald-400" /> Architecture
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{code}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <span key={i} className="px-2.5 py-1 bg-black/40 border border-white/5 rounded-full text-[10px] sm:text-xs text-slate-400">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}