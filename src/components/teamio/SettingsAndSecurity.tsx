import { useState } from "react";
import {
  IconShieldLock,
  IconLock,
  IconBellRinging,
  IconKey,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";

export function SettingsAndSecurity() {
  const [activeTab, setActiveTab] = useState<"privacy" | "notifications" | "security">("privacy");
  const [privacyPublic, setPrivacyPublic] = useState(true);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyMention, setNotifyMention] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
            <IconShieldLock size={14} /> Trust & Security First
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Your work. Your people. <span className="text-indigo-600">Your control.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Designed specifically for working professionals and enterprise teams, Teamio keeps your data safe with enterprise encryption and granular privacy controls.
          </p>
        </div>

        {/* Grid showing security pillars + settings preview */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Left Column: Security Features List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                title: "Secure Authentication & SSO",
                desc: "Support for SAML, OAuth, Okta, Google Workspace, and biometric hardware keys.",
                icon: IconKey,
                color: "bg-indigo-50 text-indigo-600 border-indigo-200",
              },
              {
                title: "Granular Privacy Controls",
                desc: "Choose exactly who can see your timeline updates, calendar availability, and profile.",
                icon: IconLock,
                color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              },
              {
                title: "Focused Notification Engine",
                desc: "Stay informed without distraction using AI summary digest controls and quiet hours.",
                icon: IconBellRinging,
                color: "bg-amber-50 text-amber-600 border-amber-200",
              },
              {
                title: "Workspace & Role Permissions",
                desc: "Admin policies for workspace data retention, guest access, and channel restrictions.",
                icon: IconAdjustmentsHorizontal,
                color: "bg-purple-50 text-purple-600 border-purple-200",
              },
            ].map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${sec.color}`}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{sec.title}</h4>
                    <p className="text-xs leading-relaxed text-slate-500 mt-1">{sec.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Settings Preview Box (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <IconAdjustmentsHorizontal size={20} className="text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">Teamio Settings Center</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Live Interactive Preview
              </span>
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3 text-xs font-bold">
              {[
                { id: "privacy", label: "Privacy & Feed" },
                { id: "notifications", label: "Notifications" },
                { id: "security", label: "Security & 2FA" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`rounded-xl px-4 py-2 transition ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === "privacy" && (
                <>
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Public Timeline Visibility</h5>
                      <p className="text-[11px] text-slate-500">Allow verified professionals to discover your work posts</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPrivacyPublic(!privacyPublic)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                        privacyPublic ? "bg-indigo-600" : "bg-slate-300"
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        privacyPublic ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Calendar Free/Busy Availability</h5>
                      <p className="text-[11px] text-slate-500">Show open meeting slots while keeping event details private</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Enabled</span>
                  </div>
                </>
              )}

              {activeTab === "notifications" && (
                <>
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Email Digest of Team Mentions</h5>
                      <p className="text-[11px] text-slate-500">Receive a daily summary of task updates and timeline mentions</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setNotifyEmail(!notifyEmail)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                        notifyEmail ? "bg-indigo-600" : "bg-slate-300"
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        notifyEmail ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Push Notifications for Direct Messages</h5>
                      <p className="text-[11px] text-slate-500">Instant alerts when colleagues DM or assign urgent tasks</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setNotifyMention(!notifyMention)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                        notifyMention ? "bg-indigo-600" : "bg-slate-300"
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        notifyMention ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>
                </>
              )}

              {activeTab === "security" && (
                <>
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Two-Factor Authentication (2FA)</h5>
                      <p className="text-[11px] text-slate-500">Authenticator app or hardware security key required at sign-in</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTwoFactor(!twoFactor)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                        twoFactor ? "bg-indigo-600" : "bg-slate-300"
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        twoFactor ? "translate-x-5" : "translate-x-0"
                      }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Active Work Sessions</h5>
                      <p className="text-[11px] text-slate-500">2 active devices (MacBook Pro, iPhone 15 Pro)</p>
                    </div>
                    <button type="button" className="text-xs font-bold text-rose-600 hover:underline">
                      Revoke Others
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>All changes auto-saved to cloud</span>
              <span className="text-indigo-600 font-semibold">Security Grade: A+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
