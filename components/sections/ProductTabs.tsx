"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { allCreators, categories, tiers } from "@/data/discover";
const tabs = ["Live", "Discover", "Community", "Monetize"] as const;
export default function ProductTabs() {
  const [t, setT] = useState<(typeof tabs)[number]>("Live");
  const [cat, setCat] = useState("All"), [tier, setTier] = useState(1), [tip, setTip] = useState(5000);
  const list = allCreators.filter((c) => cat === "All" || c.category === cat);
  const fee = tip * 0.02, plat = tip * 0.15, cr = tip - fee - plat;
  return (
    <section id="modules" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal><h2 className="max-w-2xl font-display text-4xl md:text-6xl">Built around the way African audiences actually connect.</h2></Reveal>
      <div role="tablist" className="mt-6 inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-fog p-1">
        {tabs.map((x) => <button key={x} role="tab" aria-selected={t === x} onClick={() => setT(x)} className="relative rounded-full px-4 py-2 text-sm font-medium text-forest">{t === x && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-lime" />}<span className="relative">{x}</span></button>)}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={t} role="tabpanel" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }} className="mt-6 min-h-[260px]">
          {t === "Live" && <p className="max-w-xl text-slate">Creators broadcast from a phone with adaptive quality, straight to their community. Chat, follow and subscribe happen in the same room. <a href="#product" className="text-spruce underline">Try it in the prototype below.</a></p>}
          {t === "Discover" && <div>
            <div className="flex gap-2 overflow-x-auto pb-2">{categories.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`whitespace-nowrap rounded-full border px-3 py-1 text-sm ${cat === c ? "border-lime bg-lime text-forest" : "border-line text-slate"}`}>{c}</button>)}</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {list.length ? list.map((c) => <motion.div layout key={c.id} className="border border-line p-3"><p className="text-xs text-spruce">LIVE · {c.viewers.toLocaleString()}</p><p className="mt-1 text-sm font-medium">{c.title}</p><p className="text-xs text-slate">{c.name} · {c.city}, {c.country}</p></motion.div>) : <p className="text-sm text-slate">No creators in this category in the mock data.</p>}
            </div></div>}
          {t === "Community" && <div className="grid gap-3 md:grid-cols-3">{tiers.map((x, i) => <button key={x.name} onClick={() => setTier(i)} aria-pressed={tier === i} className={`border p-4 text-left ${tier === i ? "border-forest" : "border-line"}`}><p className="font-medium">{x.name}</p><p className="text-spruce">{x.price}</p><p className="mt-2 text-sm text-slate">{x.perks}</p></button>)}<p className="text-xs text-slate md:col-span-3">Illustrative tiers and prices.</p></div>}
          {t === "Monetize" && <div className="max-w-xl">
            <label className="text-sm text-slate">A viewer tips NGN <b className="text-obsidian">{tip.toLocaleString()}</b><input type="range" min={200} max={20000} step={100} value={tip} onChange={(e) => setTip(+e.target.value)} className="mt-2 w-full accent-[#163300]" /></label>
            {[["Creator", cr, "bg-lime"], ["Platform (15%, illustrative)", plat, "bg-forest"], ["Payment partner (2%, illustrative)", fee, "bg-pebble"]].map(([l, v, c]) => <div key={l as string} className="mt-3"><div className="flex justify-between text-sm"><span>{l}</span><span>NGN {Math.round(v as number).toLocaleString()}</span></div><motion.div className={`mt-1 h-2 ${c}`} animate={{ width: `${((v as number) / tip) * 100}%` }} /></div>)}
          </div>}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
