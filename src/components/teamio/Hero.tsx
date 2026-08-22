import { IconArrowRight, IconPlayerPlay, IconSparkles, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";
import { SocialPreview } from "./SocialPreview";

export function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Decor Gradients */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-tr from-indigo-200/50 via-cyan-100/40 to-indigo-100/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md mb-6">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <IconSparkles size={12} />
              </span>
              <span className="text-xs font-semibold text-indigo-950 tracking-wide">
                Social networking for people who work
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-[62px] lg:leading-[1.08]">
              Where work meets{" "}
              <span className="relative inline-block bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-500 bg-clip-text text-transparent">
                people.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-indigo-400/40"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
              Teamio brings your people, conversations, tasks, and schedule together in one social workspace built for the way modern teams work.
            </p>

            {/* Supporting Messaging Pillars */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Connect
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Collaborate
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Organize
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Get things done
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#get-started"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 px-7 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-indigo-600 hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Started</span>
                <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#timeline"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-base font-bold text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <IconPlayerPlay size={14} className="ml-0.5" fill="currentColor" />
                </span>
                <span>See how Teamio works</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-200/60">
              <div className="flex -space-x-2.5">
                {avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="User avatar"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-slate-900">4.9/5</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Trusted by <span className="font-semibold text-slate-800">50,000+ professionals</span> & modern teams
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Product Preview */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <SocialPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
