"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#expertise", label: "EXPERTISE" },
  { href: "#work", label: "SELECTED WORK" },
  { href: "#experience", label: "EXPERIENCE" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="wrap relative flex h-[65px] items-center justify-between border-b border-line md:h-[76px]">
      <a href="#top" className="text-[15px] font-extrabold tracking-[-0.04em]">
        SREEKUMAR<span className="text-orange">.</span>PS
      </a>
      <nav
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[65px] z-10 flex-col items-start gap-[34px] border-b border-line bg-paper p-[22px] text-xs font-bold md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close} className="transition-colors hover:text-orange">
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={close} className="rounded-[30px] border border-ink px-[17px] py-3 transition-colors hover:text-orange">
          LET&apos;S TALK ↗
        </a>
      </nav>
      <button
        className="cursor-pointer border-0 bg-transparent text-2xl text-ink md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "×" : "☰"}
      </button>
    </header>
  );
}
