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

  return (
    <div className="relative min-h-screen h-screen w-full flex items-center justify-center bg-[#FAFAFC] px-4 py-6 overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-200/40 via-cyan-100/30 to-purple-200/20 blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-sm sm:max-w-md rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-7 shadow-xl backdrop-blur-xl"
      >
        {/* Brand Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <Logo className="size-8 shrink-0" />
          </Link>

          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            Welcome to Teamio<span className="text-indigo-600">.</span>
          </h1>
          <p className="mt-0.5 text-xs text-slate-500 font-medium">
            Social networking for people who work
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-5 space-y-3.5">
          {/* Email Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Work Email Address
            </label>
            <div className="relative flex items-center">
              <IconMail size={16} className="absolute left-3 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <a
                href="#"
                className="text-[11px] font-semibold text-indigo-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative flex items-center">
              <IconLock size={16} className="absolute left-3 text-slate-400" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/80 pl-9 pr-9 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 transition"
              >
                {showPass ? <IconEyeOff size={16} /> : <IconEye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Link
            to="/timeline"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-500/30"
          >
            <span>Log in to Teamio</span>
            <IconArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          {/* Divider */}
          <div className="relative my-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-2.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          {/* Social Sign-in */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-100 hover:border-slate-300"
          >
            <IconBrandGoogle size={16} className="text-rose-500" />
            <span>Continue with Google Workspace</span>
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-5 pt-3 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Don't have an account?{" "}
            <a
              href="#get-started"
              className="font-bold text-indigo-600 hover:underline"
            >
              Join Teamio
            </a>
          </p>

          <p className="mt-3 text-[10px] text-slate-400 leading-relaxed">
            By logging in, you agree to Teamio's{" "}
            <a href="#" className="underline hover:text-slate-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-slate-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
