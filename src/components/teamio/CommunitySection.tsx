import { useState } from "react";
import {
  IconUsers,
  IconUserCheck,
  IconMessageCircle,
  IconCheck,
} from "@tabler/icons-react";
import { motion } from "motion/react";

interface Profile {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  skills: string[];
  connections: number;
  projects: number;
  isConnected?: boolean;
}

export function CommunitySection() {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: 1,
      name: "Maya Rahman",
      role: "Product Designer",
      company: "Teamio",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Designing simple experiences for complex problems.",
      skills: ["Design Systems", "Figma", "User Research", "Prototyping"],
      connections: 420,
      projects: 18,
      isConnected: false,
    },
    {
      id: 2,
      name: "Alex Carter",
      role: "Frontend Engineer",
      company: "Teamio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Building fast, responsive web applications with React & Tailwind.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Motion"],
      connections: 580,
      projects: 24,
      isConnected: true,
    },
    {
      id: 3,
      name: "Sarah Wilson",
      role: "Product Manager",
      company: "Teamio",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      bio: "Connecting people, roadmap vision, and execution strategy.",
      skills: ["Product Strategy", "Roadmaps", "Agile", "Analytics"],
      connections: 890,
      projects: 32,
      isConnected: false,
    },
    {
      id: 4,
      name: "David Chen",
      role: "Tech Lead",
      company: "Teamio",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      bio: "Architecting real-time collaboration engines and microservices.",
      skills: ["System Architecture", "Node.js", "WebSockets", "DevOps"],
      connections: 640,
      projects: 29,
      isConnected: false,
    },
  ]);

  const toggleConnect = (id: number) => {
    setProfiles(
      profiles.map((p) => {
        if (p.id === id) {
          const isConnected = !p.isConnected;
          return {
            ...p,
            isConnected,
            connections: isConnected ? p.connections + 1 : p.connections - 1,
          };
        }
        return p;
      })
    );
  };

  return (
    <section id="community" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-4">
            <IconUsers size={14} /> Professional Communities & Profiles
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Work is <span className="text-indigo-600">better together.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Build your professional identity with a rich Teamio profile. Connect with colleagues, creators, and teams who share your passions.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar & Header */}
                <div className="relative mb-4 flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="h-14 w-14 rounded-2xl object-cover ring-2 ring-indigo-500/20 shadow-xs"
                    />
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{profile.name}</h3>
                    <p className="text-xs text-indigo-600 font-semibold">{profile.role}</p>
                    <p className="text-[11px] text-slate-400">{profile.company}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs leading-relaxed text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                  “{profile.bio}”
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between py-2 border-t border-slate-100 text-xs text-slate-500 mb-4">
                  <span>
                    <strong className="text-slate-900">{profile.connections}</strong> connections
                  </span>
                  <span>
                    <strong className="text-slate-900">{profile.projects}</strong> projects
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => toggleConnect(profile.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition ${
                    profile.isConnected
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-900 text-white hover:bg-indigo-600 shadow-xs"
                  }`}
                >
                  {profile.isConnected ? (
                    <>
                      <IconCheck size={14} /> Connected
                    </>
                  ) : (
                    <>
                      <IconUserCheck size={14} /> Connect
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  <IconMessageCircle size={14} /> Message
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
