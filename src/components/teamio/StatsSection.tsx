import { IconUsers, IconBuildingSkyscraper, IconChecklist, IconBolt } from "@tabler/icons-react";
import { motion } from "motion/react";

export function StatsSection() {
  const stats = [
    {
      number: "10K+",
      label: "Professionals connected",
      detail: "Across 40+ countries",
      icon: IconUsers,
      color: "from-indigo-600 to-indigo-800",
    },
    {
      number: "2.5K+",
      label: "Teams collaborating",
      detail: "Startups to enterprises",
      icon: IconBuildingSkyscraper,
      color: "from-cyan-600 to-blue-700",
    },
    {
      number: "50K+",
      label: "Tasks completed",
      detail: "Directly from conversations",
      icon: IconChecklist,
      color: "from-emerald-600 to-teal-700",
    },
    {
      number: "99%",
      label: "Less app switching",
      detail: "~4.5 hrs saved per week",
      icon: IconBolt,
      color: "from-purple-600 to-indigo-700",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 text-center shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon size={22} />
                </div>

                <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  {stat.number}
                </p>

                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
                  {stat.label}
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
