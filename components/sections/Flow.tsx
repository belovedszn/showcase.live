"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
const steps = [["Creator", "Sets up a channel in minutes."], ["Go Live", "Streams from a phone, quality adapts to the network."], ["Discover", "Viewers find them by country, category and interest."], ["Community", "Chat, follows and memberships turn viewers into regulars."], ["Monetize", "Subscriptions, tips, gifts and sponsors pay out locally."], ["Grow", "Earnings fund better streams, and the audience compounds."]];
const arch = [["Creator", "Regional ingest", "Video processing", "CDN", "Viewer"], ["Viewer", "Discovery", "Creator", "Community", "Monetization"]];
export default function Flow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <section id="solution" className="mx-auto max-w-3xl px-4 py-16">
        <Reveal><h2 className="font-display text-4xl md:text-6xl">One loop, built for growth.</h2></Reveal>
        <div ref={ref} className="relative mt-10 pl-8">
          <div className="absolute left-2 top-0 h-full w-px bg-line" /><motion.div style={{ height: h }} className="absolute left-2 top-0 w-px bg-lime" />
          {steps.map(([t, d]) => <Reveal key={t} className="relative pb-10"><motion.span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border border-forest bg-white" whileInView={{ backgroundColor: "#9FE870" }} viewport={{ amount: 1 }} /><p className="font-medium">{t}</p><p className="text-sm text-slate">{d}</p></Reveal>)}
          <p className="text-sm text-spruce">Then the loop restarts with a bigger audience.</p>
        </div>
      </section>
      <section id="architecture" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal><h2 className="font-display text-4xl md:text-6xl">Why this can scale.</h2><p className="mt-3 max-w-xl text-slate">Target architecture, not built yet: regional ingest, adaptive bitrate, CDN delivery, local payments, recommendations and real-time chat.</p></Reveal>
        {arch.map((row, ri) => <div key={ri} className="mt-8"><p className="mb-2 text-xs text-slate">{ri ? "Product loop" : "Video path"}</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">{row.map((n, i) => <div key={n} className="flex flex-1 items-center gap-2">
            <motion.div className="flex-1 border border-line p-3 text-center text-sm" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>{n}</motion.div>
            {i < row.length - 1 && <motion.span aria-hidden className="hidden h-px w-4 origin-left bg-lime md:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.1 }} />}
          </div>)}</div></div>)}
      </section>
    </>
  );
}
