import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconHeart } from "@tabler/icons-react";
import { Logo } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/50 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-12 gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Brand Column (4 cols) */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
              <Logo className="h-7 w-7 shrink-0" />
              <span className="text-xl font-extrabold text-slate-900">Teamio.</span>
            </a>

            <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Social networking for people who work. Connect with your team, share ideas, manage tasks, plan your schedule, and get things done together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition">
                <IconBrandTwitter size={18} />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition">
                <IconBrandLinkedin size={18} />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition">
                <IconBrandGithub size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns (8 cols) */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Column 1: Product */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li><a href="#timeline" className="hover:text-indigo-600 transition">Timeline</a></li>
                <li><a href="#messaging" className="hover:text-indigo-600 transition">Messaging</a></li>
                <li><a href="#calendar" className="hover:text-indigo-600 transition">Calendar</a></li>
                <li><a href="#tasks" className="hover:text-indigo-600 transition">Tasks</a></li>
                <li><a href="#community" className="hover:text-indigo-600 transition">Profiles</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li><a href="#story" className="hover:text-indigo-600 transition">About</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Documentation</a></li>
                <li><a href="#community" className="hover:text-indigo-600 transition">Community</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Support</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Terms of Service</a></li>
                <li><a href="#features" className="hover:text-indigo-600 transition">Security</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Cookies</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Teamio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <IconHeart size={14} className="text-rose-500 fill-current" /> for modern working teams.
          </p>
        </div>

      </div>
    </footer>
  );
}
