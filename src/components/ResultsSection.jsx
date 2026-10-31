import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "150+", label: "brands scaled globally" },
  { value: "40%", label: "conversion growth" },
  { value: "5M+", label: "qualified leads" },
  { value: "30M+", label: "monthly traffic" },
  { value: "99.9%", label: "system uptime" },
  { value: "100%", label: "on-time execution" },
];

export default function ResultsSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 20%"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-black min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full px-[7vw] py-[8vw] grid md:grid-cols-[1.1fr_1fr] gap-32 items-start">

        {/* LEFT */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="sticky top-28 space-y-10"
        >
          <h2 className="text-6xl md:text-7xl font-semibold leading-[1] text-white tracking-tight">
            results that
            <br />
            move markets
          </h2>

          <p className="max-w-md text-lg text-white/60 leading-relaxed">
            Performance-driven systems engineered for scale, precision,
            and long-term dominance.
          </p>
        </motion.div>

        {/* RIGHT - BENTO STYLE */}
        <div className="grid grid-cols-2 gap-6">
          {STATS.map((stat, i) => {
            const start = 0.15 + i * 0.08;
            const end = start + 0.3;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [start, end],
              [30, 0]
            );

            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className={`
                  p-6 rounded-2xl border border-white/10 
                  bg-white/[0.03] backdrop-blur-xl
                  hover:bg-white/[0.06] transition
                  ${i === 0 ? "col-span-2" : ""}
                `}
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-white/60 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}