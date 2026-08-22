import { useState } from "react";
import {
  IconNews,
  IconMessageCircle,
  IconChecklist,
  IconCalendar,
  IconUsersGroup,
  IconArrowRight,
  IconSparkles,
  IconBolt,
  IconCheck,
} from "@tabler/icons-react";

export function ProductStory() {
  const [activeApp, setActiveApp] = useState<number | null>(null);

  const separateApps = [
    {
      id: 1,
      name: "Social Timeline",
      icon: IconNews,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      desc: "Checking personal & industry updates",
    },
    {
      id: 2,
      name: "Chat & Messaging",
      icon: IconMessageCircle,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      desc: "Endless DM threads & scattered files",
    },
    {
      id: 3,
      name: "Task Board",
      icon: IconChecklist,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      desc: "Manual action items disconnected from talk",
    },
    {
      id: 4,
      name: "Calendar App",
      icon: IconCalendar,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      desc: "Isolated schedules with missing context",
    },
    {
      id: 5,
      name: "Team Directory",
      icon: IconUsersGroup,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      desc: "Static contact lists without active presence",
    },
  ];

  return (
    <section id="story" className="relative py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
            <IconSparkles size={14} /> The Problem We Solve
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Your work shouldn't live in{" "}
            <span className="text-indigo-600">five different apps.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Modern professionals lose up to 4 hours a day constantly switching contexts between separate timeline feeds, messaging tools, task boards, calendars, and team chats.
          </p>
        </div>

        {/* Visual Graphic: Fragmented Apps vs Teamio Workspace */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          
          {/* Left Column: Fragmented Apps Stack */}
          <div className="lg:col-span-5 space-y-3">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                BEFORE TEAMIO (Context Switching Fatigue)
              </span>
            </div>

            {separateApps.map((app) => {
              const Icon = app.icon;
              const isHovered = activeApp === app.id;
              return (
                <div
                  key={app.id}
                  onMouseEnter={() => setActiveApp(app.id)}
                  onMouseLeave={() => setActiveApp(null)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border bg-white transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "shadow-md -translate-x-1 border-indigo-300"
                      : "shadow-xs border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${app.color}`}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{app.name}</h4>
                      <p className="text-xs text-slate-500">{app.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600">
                    Separate App
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center Flow Indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4 lg:py-0">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 animate-pulse">
              <IconBolt size={24} />
            </div>
            <span className="mt-3 text-xs font-bold uppercase tracking-wider text-indigo-600">
              Flows Into
            </span>
            <IconArrowRight size={20} className="text-indigo-600 mt-1 hidden lg:block" />
          </div>

          {/* Right Column: Unified Teamio Engine */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 font-black text-lg">
                    T
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Teamio Unified Workspace</h3>
                    <p className="text-xs text-indigo-200/80">All-in-one social platform</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-1 text-xs font-semibold text-emerald-300 flex items-center gap-1">
                  <IconCheck size={14} /> Zero switching
                </span>
              </div>

              <p className="text-sm leading-relaxed text-indigo-100/90 mb-6">
                Teamio combines social feeds, private DMs, task boards, and shared calendars into a single, intuitive timeline. No tabs to switch, no lost context.
              </p>

              <div className="space-y-3">
                {[
                  "Social Feed → Turn posts into tasks in 1 click",
                  "Direct Chat → Share files with inline task tracking",
                  "Calendar Sync → Automatic meeting timeline updates",
                  "Team Directory → See live working status",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-white/10 p-2.5 text-xs font-medium text-white backdrop-blur-md">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-slate-950 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-indigo-200">
                <span>Result: 99% less app switching</span>
                <span className="font-bold text-cyan-300">Save ~4.5 hrs/week</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
