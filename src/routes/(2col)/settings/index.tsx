import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  IconUser,
  IconMail,
  IconLink,
  IconMapPin,
  IconPencil,
  IconShieldLock,
  IconBellRinging,
  IconAdjustmentsHorizontal,
  IconCheck,
  IconKey,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconSparkles,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/_2col-layout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "privacy" | "notifications" | "security"
  >("profile");

  // Form State
  const [name, setName] = useState("Maya Rahman");
  const [role, setRole] = useState("Product Designer");
  const [email, setEmail] = useState("maya.rahman@teamio.com");
  const [website, setWebsite] = useState("https://teamio.com/maya");
  const [location, setLocation] = useState("San Francisco, CA");
  const [bio, setBio] = useState(
    "Designing simple experiences for complex workplace problems."
  );

  // Preferences Toggles
  const [publicTimeline, setPublicTimeline] = useState(true);
  const [calendarBusyOnly, setCalendarBusyOnly] = useState(true);
  const [emailDigest, setEmailDigest] = useState(true);
  const [pushMentions, setPushMentions] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  // Success Feedback Toast
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  return (
    <div className="mt-3 space-y-4 font-sans px-4 md:px-0 pb-12">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 mb-1">
            <IconSparkles size={12} /> Teamio Account Center
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Account Settings & Preferences
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Manage your professional identity, privacy permissions, and
            notifications.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition"
        >
          <IconCheck size={16} /> Save Changes
        </button>
      </div>

      {/* Save Success Alert Banner */}
      <AnimatePresence>
        {savedSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-800 flex items-center justify-between shadow-xs"
          >
            <span className="flex items-center gap-2 font-bold">
              <IconCheck size={18} className="text-emerald-600" />
              Settings successfully saved to Teamio cloud!
            </span>
            <span className="text-[11px] text-emerald-600 font-medium">
              Just now
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Settings Grid */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Left Tabs Menu (3 columns) */}
        <div className="col-span-12 md:col-span-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-xs space-y-1">
          {[
            {
              id: "profile",
              label: "Profile Information",
              icon: IconUser,
              desc: "Avatar, name, bio & role",
            },
            {
              id: "privacy",
              label: "Privacy & Visibility",
              icon: IconAdjustmentsHorizontal,
              desc: "Timeline & calendar rules",
            },
            {
              id: "notifications",
              label: "Notifications",
              icon: IconBellRinging,
              desc: "Email digests & push alerts",
            },
            {
              id: "security",
              label: "Security & 2FA",
              icon: IconShieldLock,
              desc: "Password & active devices",
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold truncate">{tab.label}</p>
                  <p
                    className={`text-[10px] truncate ${isActive ? "text-indigo-100" : "text-slate-400"}`}
                  >
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Settings Form Content (8 columns) */}
        <div className="col-span-12 md:col-span-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
          {/* TAB 1: PROFILE INFORMATION */}
          {activeTab === "profile" && (
            <form onSubmit={handleSave} className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-900">
                  Personal Information
                </h2>
                <p className="text-xs text-slate-500">
                  Update how colleagues and team members see you on Teamio.
                </p>
              </div>

              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Profile Avatar"
                    className="h-20 w-20 rounded-3xl object-cover ring-4 ring-indigo-500/10 shadow-sm"
                  />
                  <button
                    type="button"
                    className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition"
                  >
                    <IconPencil size={14} />
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{name}</h3>
                  <p className="text-xs text-indigo-600 font-semibold">
                    {role}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Recommended 400x400px JPG or PNG.
                  </p>
                </div>
              </div>

              {/* Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <IconMail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-9 pr-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <IconMapPin
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-9 pr-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Personal Website
                </label>
                <div className="relative">
                  <IconLink
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-9 pr-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Bio
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  className="rounded-2xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition"
                >
                  Save Profile
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: PRIVACY & VISIBILITY */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-900">
                  Privacy Rules
                </h2>
                <p className="text-xs text-slate-500">
                  Control who can view your posts and calendar availability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Public Timeline Feed Discoverability
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Allow verified professionals across Teamio to see your
                      work posts.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPublicTimeline(!publicTimeline)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      publicTimeline ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        publicTimeline ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Calendar Free/Busy Only Mode
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Hide meeting titles from external colleagues while showing
                      open slots.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCalendarBusyOnly(!calendarBusyOnly)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      calendarBusyOnly ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        calendarBusyOnly ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-900">
                  Notification Preferences
                </h2>
                <p className="text-xs text-slate-500">
                  Tune alert channels so you stay informed without losing focus.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Daily Digest Email
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Receive a summary of task updates and timeline activity
                      every morning.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEmailDigest(!emailDigest)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      emailDigest ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        emailDigest ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Push Notifications for Mentions & Tasks
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Instant alerts when someone tags `@maya` or assigns a task
                      to you.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPushMentions(!pushMentions)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      pushMentions ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        pushMentions ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SECURITY */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-base font-bold text-slate-900">
                  Security & Credentials
                </h2>
                <p className="text-xs text-slate-500">
                  Manage 2FA, active login sessions, and password security.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 font-bold">
                      <IconKey size={18} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Two-Factor Authentication (2FA)
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Require TOTP authenticator code at sign-in.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                      twoFactor ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                        twoFactor ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Active Sessions */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900">
                    Active Work Sessions
                  </h4>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                    <div className="flex items-center gap-2">
                      <IconDeviceDesktop
                        size={16}
                        className="text-indigo-600"
                      />
                      <div>
                        <p className="font-bold text-slate-800">
                          MacBook Pro (16-inch)
                        </p>
                        <p className="text-[10px] text-slate-400">
                          San Francisco · Current Session
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Active Now
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                    <div className="flex items-center gap-2">
                      <IconDeviceMobile size={16} className="text-slate-400" />
                      <div>
                        <p className="font-bold text-slate-800">
                          iPhone 15 Pro
                        </p>
                        <p className="text-[10px] text-slate-400">
                          San Francisco · Active 2h ago
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-[10px] font-bold text-rose-600 hover:underline"
                    >
                      Revoke
                    </button>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-rose-600">
                      Delete Account
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Permanently remove your Teamio profile and workspace data.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
