import {
  IconNews,
  IconMessageCircle,
  IconCalendarEvent,
  IconCircleCheck,
  IconUserCheck,
  IconUsersGroup,
  IconBellRinging,
  IconShieldLock,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function FeatureGrid() {
  const features = [
    {
      title: "Social Timeline",
      description: "Share ideas, work updates, campaign milestones, and achievements in an engaging social feed.",
      icon: IconNews,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      link: "#timeline",
    },
    {
      title: "Messaging",
      description: "Chat privately in direct DMs or collaborate across project team channels with instant file sharing.",
      icon: IconMessageCircle,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      link: "#messaging",
    },
    {
      title: "Connected Calendar",
      description: "Plan meetings, live events, project milestones, and task deadlines in one synchronized calendar view.",
      icon: IconCalendarEvent,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      link: "#calendar",
    },
    {
      title: "Action Tasks",
      description: "Turn ideas and chat threads into actionable work with assignees, priorities, due dates, and Kanban status.",
      icon: IconCircleCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      link: "#tasks",
    },
    {
      title: "Professional Profiles",
      description: "Build your professional identity, showcase projects, list skills, and highlight your achievements.",
      icon: IconUserCheck,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      link: "#community",
    },
    {
      title: "Communities & Spaces",
      description: "Connect with people around shared work topics, departmental guilds, and professional interests.",
      icon: IconUsersGroup,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
      link: "#community",
    },
    {
      title: "Smart Notifications",
      description: "Stay informed about mentions, task updates, and meeting invites without losing deep work focus.",
      icon: IconBellRinging,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      link: "#features",
    },
    {
      title: "Privacy & Settings",
      description: "Control your privacy, workspace access, 2FA security, and notification preferences with ease.",
      icon: IconShieldLock,
      color: "bg-slate-100 text-slate-700 border-slate-200",
      link: "#features",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-4">
            <IconSparkles size={14} /> Comprehensive Feature Set
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Everything your team needs <span className="text-indigo-600">to thrive.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Teamio replaces your fragmented tool stack with a cohesive suite of social and workplace tools.
          </p>
        </div>

        {/* Features 8 Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.a
                key={feat.title}
                href={feat.link}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${feat.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                  <span>Learn more</span>
                  <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
