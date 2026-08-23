import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

export function CTASection() {
  return (
    <section id="get-started" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-8 sm:p-14 lg:p-20 text-center text-white shadow-2xl">
          {/* Ambient Lighting & Glow Orbs */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/30 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]" />

          {/* Foreground Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-cyan-300 mb-6">
              <IconSparkles size={14} /> Ready to Transform Your Workday?
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-white leading-tight">
              Bring your work life{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-200 to-white bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-xl text-indigo-100/90 leading-relaxed max-w-2xl mx-auto">
              Connect with your people, organize your work, and get more done.
              All from one social workspace built for modern professionals.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-xl hover:bg-cyan-50 hover:scale-102 transition-all duration-300"
              >
                <span>Join Teamio</span>
                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <span>Explore Teamio</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-indigo-200/70">
              Free 14-day trial • No credit card required • Setup in 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
