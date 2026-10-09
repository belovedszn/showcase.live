"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const links = [["Product", "product"], ["Why Now", "why-now"], ["Creators", "creators"], ["Business Model", "business"], ["Vision", "vision"], ["Scale", "scale"], ["Contact", "contact"]];
export default function Nav() {
  const [s, setS] = useState(false), [o, setO] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <nav aria-label="Main" className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${s || o ? "border-b border-line bg-white/95" : "bg-transparent"}`}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="font-display text-xl">kora<span className="text-spruce">.</span></a>
        <ul className="hidden gap-5 text-sm text-slate lg:flex">{links.map(([l, id]) => <li key={id}><a className="hover:text-obsidian" href={`#${id}`}>{l}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-full bg-lime px-3 py-1.5 text-sm font-medium text-forest">Join the Waitlist</a>
          <button className="rounded-full border border-line px-3 py-1.5 text-sm lg:hidden" aria-expanded={o} aria-controls="mm" onClick={() => setO(!o)}>{o ? "Close" : "Menu"}</button>
        </div>
      </div>
      <AnimatePresence>
        {o && <motion.ul id="mm" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-4 lg:hidden">
          {links.map(([l, id]) => <li key={id}><a onClick={() => setO(false)} className="block border-t border-line py-3" href={`#${id}`}>{l}</a></li>)}
        </motion.ul>}
      </AnimatePresence>
    </nav>
  );
}
