import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Code2,
  Download,
  Film,
  Mail,
  MapPin,
  MousePointer2,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { fadeUp, scaleIn, stagger } from "../lib/motion";

const stats = [
  { value: "10+", label: "clients across 3D, games, animation, visualization" },
  { value: "30+", label: "production-ready 3D and campaign assets delivered" },
  { value: "5+", label: "end-to-end games, apps, websites, and tools shipped" },
];

const capabilities = ["3D Modeling", "Graphic Design", "Video Production", "Game Development", "Web Systems"];

const productionLanes = [
  { label: "Model", value: "3D assets", width: "82%", Icon: Box },
  { label: "Design", value: "Campaign kit", width: "68%", Icon: Palette },
  { label: "Motion", value: "Video edits", width: "76%", Icon: Film },
  { label: "Deploy", value: "Web tools", width: "58%", Icon: Code2 },
];

const previewCards = [
  { title: "Brand Systems", tag: "Visual direction", color: "cyan" },
  { title: "Game Builds", tag: "Unity + assets", color: "gold" },
  { title: "Campaign Motion", tag: "Video + social", color: "rose" },
];

function CreativeConsole() {
  const nodes = useMemo(
    () => [
      { className: "left-[12%] top-[21%]", label: "3D" },
      { className: "right-[13%] top-[28%]", label: "UI" },
      { className: "bottom-[19%] left-[18%]", label: "FX" },
      { className: "bottom-[15%] right-[18%]", label: "WEB" },
    ],
    []
  );

  return (
    <div className="creative-console relative h-full min-h-[430px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#080b10]/70 p-4 shadow-2xl shadow-black/35 backdrop-blur md:min-h-[560px] md:p-6">
      <div className="creative-console__grid" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="creative-console__scanner"
        animate={{ x: ["-30%", "130%"] }}
        transition={{ repeat: Infinity, duration: 8.5, ease: "linear" }}
      />

      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-100">
            Creative Command
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-400">Concept to launch pipeline</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#f4c76b]/25 bg-[#f4c76b]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f4c76b]">
          <Zap size={13} />
          Live build
        </span>
      </div>

      <div className="relative z-10 mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="console-stage min-h-[285px] rounded-lg border border-white/10 bg-black/22 p-4"
        >
          <div className="relative h-full min-h-[250px]">
            <div className="absolute inset-6 rounded-lg border border-cyan-100/12 bg-cyan-100/[0.025]" />
            <div className="absolute inset-12 rounded-lg border border-[#f4c76b]/14 bg-[#f4c76b]/[0.025]" />
            <motion.div
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/15 bg-white/[0.07] shadow-2xl shadow-cyan-950/40 backdrop-blur"
              animate={{ rotate: [0, 2, -2, 0], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            >
              <div className="absolute inset-4 rounded-lg border border-cyan-100/25" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-100/70 to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#f4c76b]/60 to-transparent" />
            </motion.div>

            {nodes.map((node, index) => (
              <motion.div
                key={node.label}
                className={`console-node absolute ${node.className}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.45 + index * 0.1 }}
              >
                {node.label}
              </motion.div>
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 300" aria-hidden="true">
              <motion.path
                d="M78 76 C145 112 155 145 210 150 C266 155 290 102 348 92"
                fill="none"
                stroke="rgba(103, 232, 249, 0.42)"
                strokeWidth="1.4"
                strokeDasharray="6 10"
                animate={{ strokeDashoffset: [0, -80] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "linear" }}
              />
              <motion.path
                d="M86 236 C138 196 168 182 210 150 C246 122 281 203 340 236"
                fill="none"
                stroke="rgba(244, 199, 107, 0.38)"
                strokeWidth="1.4"
                strokeDasharray="4 9"
                animate={{ strokeDashoffset: [0, -70] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "linear" }}
              />
            </svg>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-300">
                Output lanes
              </p>
              <MousePointer2 size={16} className="text-cyan-100" />
            </div>
            <div className="space-y-4">
              {productionLanes.map((lane, index) => (
                <motion.div
                  key={lane.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                      <lane.Icon size={15} className="text-cyan-100" />
                      {lane.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{lane.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-cyan-100 via-[#f4c76b] to-[#fb7185]"
                      initial={{ width: 0 }}
                      animate={{ width: lane.width }}
                      transition={{ duration: 1.1, delay: 0.65 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {previewCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.82 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`console-preview console-preview--${card.color} rounded-lg border border-white/10 bg-white/[0.04] p-4`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{card.tag}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section id="home" className="hero-atmosphere relative min-h-screen overflow-hidden pt-24">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-80" />
      <div className="kinetic-field pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#06070a] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#06070a] to-transparent" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-8 pb-20 lg:grid-cols-[0.98fr_1.02fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2 text-center text-[11px] font-bold uppercase leading-5 tracking-[0.22em] text-cyan-100 backdrop-blur"
          >
            <Sparkles size={15} strokeWidth={1.8} className="shrink-0" />
            <span className="min-w-0 max-w-[28ch] sm:max-w-none">
              Multimedia Specialist <span className="hidden sm:inline">/</span>{" "}
              <span className="block sm:inline">Founder of Zyphron Creative</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-[clamp(3.2rem,9vw,8.3rem)] font-bold leading-[0.88] tracking-normal text-white"
          >
            Christian Jay
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-[#f4c76b]">
              Castro
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I build polished visual systems for brands, games, campaigns, and corporate teams:
            3D assets, design campaigns, video content, web tools, and creative pipelines from
            concept to final delivery.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-200"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-100 px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white cursor-hover"
              >
                View selected work
                <ArrowRight size={18} strokeWidth={2} />
              </a>
            </MagneticButton>
            <a
              href="/resume/CJResume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#f4c76b]/70 hover:bg-white/10 cursor-hover"
            >
              <Download size={18} strokeWidth={2} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 hidden flex-col gap-3 text-sm font-semibold text-slate-300 sm:flex sm:flex-row sm:flex-wrap">
            <a href="mailto:christianjaycastro206@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white cursor-hover">
              <Mail size={17} strokeWidth={1.8} />
              christianjaycastro206@gmail.com
            </a>
            <span className="hidden text-slate-600 sm:inline">/</span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} strokeWidth={1.8} />
              San Jose Del Monte, Bulacan
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 hidden max-w-3xl gap-3 sm:grid sm:grid-cols-3">
            {stats.map((item) => (
              <motion.div key={item.value} whileHover={{ y: -5 }} className="panel premium-card rounded-lg p-4">
                <div className="font-display text-3xl font-bold text-white">{item.value}</div>
                <div className="mt-2 text-[11px] font-semibold uppercase leading-5 tracking-[0.12em] text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative z-10 -mx-1 -mt-4 sm:mt-0 lg:-ml-4 lg:-mr-8"
        >
          <CreativeConsole />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.55 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur transition hover:text-white cursor-hover"
        aria-label="Scroll down"
      >
        Explore
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.45 }}>
          <ArrowDown size={15} strokeWidth={2} />
        </motion.span>
      </motion.a>
    </section>
  );
}
