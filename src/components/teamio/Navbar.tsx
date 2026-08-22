import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/icons/logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "#story" },
    { name: "Timeline", href: "#timeline" },
    { name: "Messaging", href: "#messaging" },
    { name: "Tasks", href: "#tasks" },
    { name: "Calendar", href: "#calendar" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-4 sm:px-6 shadow-sm backdrop-blur-xl transition-all duration-300">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90"
          >
            <Logo className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Teamio<span className="text-indigo-600">.</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-none mt-1">
                Workspace
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex rounded-full border border-slate-100 bg-slate-50/80 px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-slate-950 hover:shadow-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              Log in
            </Link>
            <a
              href="#get-started"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join Teamio</span>
              <IconArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-indigo-600"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-slate-100">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                  >
                    Log in
                  </Link>
                  <a
                    href="#get-started"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-indigo-500/20"
                  >
                    <span>Join Teamio</span>
                    <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
