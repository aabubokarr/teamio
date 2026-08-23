import { useState } from "react";
import {
  IconNews,
  IconMessageCircle,
  IconChecklist,
  IconCalendar,
  IconArrowRight,
  IconSparkles,
  IconHeartHandshake,
} from "@tabler/icons-react";

export function EcosystemSection() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "Connect",
      subtitle: "Timeline Feed",
      icon: IconNews,
      desc: "Share team updates, discover company moments, and build organic work relationships.",
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600",
      bgLight: "bg-indigo-50 border-indigo-200",
    },
    {
      step: "02",
      title: "Communicate",
      subtitle: "Instant DMs & Channels",
      icon: IconMessageCircle,
      desc: "Chat 1-on-1 or in project channels with instant file previews and inline replies.",
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-600",
      bgLight: "bg-amber-50 border-amber-200",
    },
    {
      step: "03",
      title: "Plan",
      subtitle: "Calendar & Schedule",
      icon: IconCalendar,
      desc: "Schedule team standups, design reviews, and milestones directly tied to action items.",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      bgLight: "bg-blue-50 border-blue-200",
    },
    {
      step: "04",
      title: "Execute",
      subtitle: "Kanban Task Board",
      icon: IconChecklist,
      desc: "Turn conversation threads into tracked tasks with assignees, priorities, and deadlines.",
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-600",
      bgLight: "bg-emerald-50 border-emerald-200",
    },
    {
      step: "05",
      title: "Celebrate",
      subtitle: "Team Milestones",
      icon: IconHeartHandshake,
      desc: "Post achievements back to the timeline, celebrate wins, and give kudos to teammates.",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      bgLight: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
            <IconSparkles size={14} /> Unified Ecosystem
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            One place for your{" "}
            <span className="text-indigo-600">entire workday.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Everything you need to connect and get work done seamlessly flows in
            a single feedback loop:
          </p>

          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 font-bold text-xs sm:text-sm text-indigo-900 bg-indigo-50/80 px-4 py-2 rounded-2xl border border-indigo-100">
            <span>Connect</span>
            <IconArrowRight size={14} className="text-indigo-400" />
            <span>Communicate</span>
            <IconArrowRight size={14} className="text-indigo-400" />
            <span>Plan</span>
            <IconArrowRight size={14} className="text-indigo-400" />
            <span>Execute</span>
            <IconArrowRight size={14} className="text-indigo-400" />
            <span>Celebrate</span>
          </div>
        </div>

        {/* Interactive Steps Diagram */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-3xl border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xl scale-105 z-10 border-slate-800"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-widest ${isActive ? "text-cyan-400" : "text-slate-400"}`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                        isActive ? "bg-white/10 text-cyan-300" : item.bgLight
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                  </div>

                  <h3 className="text-lg font-black tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold mb-3 ${isActive ? "text-indigo-200" : item.textColor}`}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-bold">
                  <span>{isActive ? "Active Phase" : "Select Phase"}</span>
                  <IconArrowRight
                    size={14}
                    className={isActive ? "text-cyan-400" : "text-slate-400"}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Ecosystem Hub Graphic Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Phase {workflowSteps[activeStep].step}:{" "}
                {workflowSteps[activeStep].title}
              </span>
              <h3 className="text-2xl font-extrabold mt-1">
                {workflowSteps[activeStep].subtitle}
              </h3>
              <p className="text-sm text-indigo-100/80 mt-2 leading-relaxed">
                {workflowSteps[activeStep].desc} All changes and updates are
                instantly reflected across your team's workspace feed and task
                dashboards.
              </p>
            </div>

            <a
              href="#get-started"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-md hover:bg-cyan-50 transition"
            >
              <span>Explore {workflowSteps[activeStep].title} Engine</span>
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
