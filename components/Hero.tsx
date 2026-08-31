"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Palette,
  Layers,
  Workflow,
  ArrowUpRight,
  Download,
  PenTool,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";
import { site, stats } from "@/data/site";
import AnimatedStat from "./AnimatedStat";

const skills = [
  { label: "Product Design", icon: Palette },
  { label: "UI/UX Design", icon: PenTool },
  { label: "Design System", icon: Layers },
  { label: "Figma → Code", icon: Workflow },
];

const statIcons = [
  { icon: Briefcase, tint: "bg-brand/10 text-brand" },
  { icon: Layers, tint: "bg-teal/10 text-teal" },
  { icon: Users, tint: "bg-violet/10 text-violet" },
  { icon: Sparkles, tint: "bg-mint/10 text-mint" },
];

/**
 * Client Component.
 * Entrance is a Framer Motion stagger, and the photo card has a
 * whileHover gesture — both need the browser, so this can't stay a
 * Server Component the way it used to.
 */
export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 0.8, 0.3, 1] },
    },
  };

  const polaroidRest = shouldReduceMotion ? 0 : -6;

  return (
    <>
      <div className="relative overflow-hidden pt-[170px] sm:pt-[180px]">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-4 top-14 select-none font-display text-[160px] font-extrabold leading-none tracking-tighter text-ink/[0.035] sm:top-10 sm:text-[220px] lg:text-[260px]"
        >
          DEV
        </span>

        <div className="wrap grid gap-14 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="label mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-[7px] text-muted"
            >
              <span className="block h-[7px] w-[7px] animate-ping2 rounded-full bg-teal shadow-[0_0_0_0_rgba(14,165,160,0.55)]" />
              {site.availability}
            </motion.div>

            <motion.h1
              variants={item}
              className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted"
            >
              <span className="block h-3 w-1 rounded-full bg-brandGrad" />
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 font-display text-[clamp(38px,5.8vw,68px)] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink"
            >
              {site.title}
            </motion.p>

            <motion.div variants={item}>
              <p className="mt-7 max-w-[58ch] text-[clamp(16.5px,1.9vw,19.5px)] font-semibold text-ink">
                I design digital products people enjoy using.
              </p>
              <p className="mt-3 max-w-[58ch] text-[clamp(15px,1.7vw,17.5px)] text-muted">
                I turn complex workflows into simple, intuitive experiences —
                from user flows and Figma designs to responsive,
                production-ready interfaces.
              </p>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,91,255,0.28)]"
              >
                View my work
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-lineHi px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface"
              >
                <Download size={16} strokeWidth={2.25} />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
              {skills.map(({ label, icon: Icon }) => (
                <span key={label} className="chip inline-flex items-center gap-1.5">
                  <Icon size={12} strokeWidth={2} />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-2 divide-x divide-y divide-line overflow-hidden rounded-[24px] border border-line bg-surface sm:flex sm:divide-y-0"
            >
              {stats.map((stat, i) => {
                const { icon: Icon, tint } = statIcons[i];
                return (
                  <div key={stat.label} className="flex flex-1 items-center gap-3 px-5 py-4">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <div>
                      <b className="block font-display text-xl font-extrabold leading-none tracking-[-0.02em] text-ink">
                        <AnimatedStat value={stat.value} />
                      </b>
                      <span className="mt-1 block text-xs text-muted">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, rotate: polaroidRest }}
            animate={{ opacity: 1, rotate: polaroidRest }}
            whileHover={shouldReduceMotion ? undefined : { rotate: 0, scale: 1.04 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 220, damping: 20 }
            }
            className="mx-auto w-[220px] rounded-[10px] border border-line bg-surface p-3 pb-4 shadow-[0_20px_45px_rgba(20,22,28,0.16)] sm:w-[250px] lg:mx-0 lg:justify-self-end"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-line/40">
              <Image
                src="/ismail.jpg"
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 250px, 55vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-ink">
              👋 Hey, that&apos;s me!
            </p>
            <p className="mt-0.5 text-center text-xs text-muted">
              {site.title} with a frontend mindset.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
