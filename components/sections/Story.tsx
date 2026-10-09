"use client";
import { useState } from "react";
import { roadmap } from "@/data/mock";

const problems = [
  ["Fragmented audiences", "Creators build communities across several platforms with no dedicated home."],
  ["Limited monetization", "Attention rarely converts into predictable income."],
  ["Discovery", "Emerging creators get buried by algorithms tuned for global markets."],
  ["Payments", "Local methods like bank transfer, USSD and mobile money are often an afterthought."],
  ["Connectivity", "Data costs and patchy networks call for adaptive streaming."],
];
const flow = ["Viewer pays", "Payment partner", "Platform fee", "Creator wallet"];
export const Hero = () => (
  <header className="mx-auto max-w-6xl px-4 pb-8 pt-24">
    <p className="text-sm text-spruce">KORA · Early-stage product concept</p>
    <h1 className="mt-4 max-w-3xl font-display text-6xl md:text-8xl">Where Africa&apos;s creators go live.</h1>
    <p className="mt-6 max-w-xl text-slate">African creators already have audiences on other platforms. Kora is being designed as a dedicated home to stream, build communities and earn, with local payments and mobile-first video.</p>
    <a href="#product" className="mt-8 inline-block rounded-full bg-lime px-5 py-3 font-medium text-forest">See the Product</a> <a href="#modules" className="ml-4 font-medium text-forest underline">Why Kora</a>
  </header>
);
export function Story() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section id="why-now" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl md:text-6xl">The audience is already here.</h2>
        <p className="mt-3 max-w-xl text-slate">Market figures to be added with named sources (internet and mobile penetration, creator economy, digital payments). No numbers are shown until they are sourced.</p>
        <dl className="mt-8 grid gap-px bg-line md:grid-cols-3">
          {problems.map(([t, d]) => <div key={t} className="bg-white p-5"><dt className="font-medium">{t}</dt><dd className="mt-1 text-sm text-slate">{d}</dd></div>)}
        </dl>
      </section>
      <section id="business" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl md:text-6xl">How money moves.</h2>
        <ol className="mt-8 flex flex-col gap-2 md:flex-row">{flow.map((f, i) => <li key={f} className="flex-1 border border-line p-4 text-sm"><span className="text-spruce">0{i + 1}</span> {f}</li>)}</ol>
        <p className="mt-3 text-sm text-slate">Conceptual only. Splits and fees are not final.</p>
      </section>
      <section id="vision" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl md:text-6xl">Not just another streaming platform.</h2>
        <p className="mt-3 max-w-xl text-slate">The aim is creator infrastructure: go live, build a community, earn, work with brands and run a business from one place.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-4">{roadmap.map((r) => <div key={r.phase} className="border border-line p-4"><p className="text-spruce">{r.phase}</p><p className="font-medium">{r.name}</p><ul className="mt-2 text-sm text-slate">{r.items.map((i) => <li key={i}>{i}</li>)}</ul></div>)}</div>
        <p className="mt-3 text-sm text-slate">Nothing here has launched.</p>
      </section>
      <section id="contact" className="dark-band mx-auto my-16 max-w-3xl rounded-[28px] p-6 md:p-10">
        <h2 className="font-display text-3xl">Help build the infrastructure for Africa&apos;s next generation of creators.</h2>
        {sent ? <p role="status" className="mt-6 border-l-2 border-forest pl-3">Thanks. This is a showcase, so nothing was sent.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 space-y-3">
            {["Name", "Email", "Company / Organization"].map((l) => <label key={l} className="block text-sm text-slate">{l}<input required={l !== "Company / Organization"} type={l === "Email" ? "email" : "text"} className="mt-1 w-full border border-line bg-white p-3 text-obsidian rounded-[10px]" /></label>)}
            <label className="block text-sm text-slate">Message<textarea rows={3} className="mt-1 w-full border border-line bg-white p-3 text-obsidian rounded-[10px]" /></label>
            <button className="rounded-full bg-lime px-5 py-3 font-medium text-forest">Talk to the Founders</button>
          </form>)}
      </section>
      <footer className="border-t border-line px-4 py-8 text-center text-sm text-slate">Kora is a conceptual prototype. No live product, users or revenue.</footer>
    </>
  );
}
