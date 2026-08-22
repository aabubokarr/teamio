import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconArrowRight,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Logo } from "@/components/icons/logo";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("maya.rahman@teamio.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#FAFAFC] px-4 py-12 overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-200/50 via-cyan-100/40 to-purple-200/30 blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
      >
        {/* Brand Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-3">
            <Logo className="size-9 shrink-0" />
          </Link>
          
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            Welcome to Teamio<span className="text-indigo-600">.</span>
          </h1>
          <p className="mt-1 text-xs text-slate-500 font-medium">
            Social networking for people who work
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          
          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Work Email Address
            </label>
            <div className="relative flex items-center">
              <IconMail size={18} className="absolute left-3.5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <a href="#" className="text-[11px] font-semibold text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative flex items-center">
              <IconLock size={18} className="absolute left-3.5 text-slate-400" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-10 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition"
              >
                {showPass ? <IconEyeOff size={18} /> : <IconEye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-500/30"
          >
            <span>Log in to Teamio</span>
            <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          {/* Social Sign-in */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 py-3 text-xs font-bold text-slate-800 transition hover:bg-slate-100 hover:border-slate-300"
          >
            <IconBrandGoogle size={18} className="text-rose-500" />
            <span>Continue with Google Workspace</span>
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Don't have an account?{" "}
            <a href="#get-started" className="font-bold text-indigo-600 hover:underline">
              Join Teamio
            </a>
          </p>

          <p className="mt-6 text-[10px] text-slate-400 leading-relaxed">
            By logging in, you agree to Teamio's{" "}
            <a href="#" className="underline hover:text-slate-600">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
