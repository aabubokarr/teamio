import { useState } from "react";
import {
  IconCalendar,
  IconClock,
  IconVideo,
  IconChevronLeft,
  IconChevronRight,
  IconChecklist,
} from "@tabler/icons-react";

export function CalendarPreview() {
  const [selectedDay, setSelectedDay] = useState(15);
  const [viewMode, setViewMode] = useState<"day" | "week">("day");

  const events = [
    {
      id: 1,
      time: "09:00 AM — 09:30 AM",
      title: "Team Standup",
      category: "Daily Sync",
      color: "bg-indigo-50 border-indigo-200 text-indigo-900",
      pillColor: "bg-indigo-600 text-white",
      participants: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      ],
      linkedTasks: 3,
      isLive: false,
    },
    {
      id: 2,
      time: "11:30 AM — 12:30 PM",
      title: "Design Review",
      category: "Sprint Planning",
      color: "bg-purple-50 border-purple-200 text-purple-900",
      pillColor: "bg-purple-600 text-white",
      participants: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      ],
      linkedTasks: 2,
      isLive: true,
      meetUrl: "https://teamio.meet/design-review",
    },
    {
      id: 3,
      time: "02:00 PM — 03:00 PM",
      title: "Client Meeting",
      category: "External",
      color: "bg-blue-50 border-blue-200 text-blue-900",
      pillColor: "bg-blue-600 text-white",
      participants: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      ],
      linkedTasks: 1,
      isLive: false,
    },
    {
      id: 4,
      time: "04:00 PM — 05:00 PM",
      title: "Project Planning",
      category: "Strategy",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
      pillColor: "bg-emerald-600 text-white",
      participants: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      ],
      linkedTasks: 4,
      isLive: false,
    },
  ];

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
            <IconCalendar size={14} /> Connected Calendar
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Make time for <span className="text-indigo-600">what matters.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Teamio includes a calendar for planning work. Meetings, project deadlines, and team events are directly connected to your tasks and social updates.
          </p>
        </div>

        {/* Interactive Calendar Experience */}
        <div className="mt-12 mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 shadow-lg grid grid-cols-12 gap-6">
          
          {/* Left Mini Calendar Widget (4 cols) */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">August 2026</span>
                  <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
                    Today
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button type="button" className="p-1 rounded-lg hover:bg-slate-100 text-slate-500">
                    <IconChevronLeft size={16} />
                  </button>
                  <button type="button" className="p-1 rounded-lg hover:bg-slate-100 text-slate-500">
                    <IconChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Days Grid Header */}
              <div className="grid grid-cols-7 text-center text-[11px] font-bold text-slate-400 mb-2">
                <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 text-center text-xs gap-y-1">
                {[...Array(31)].map((_, idx) => {
                  const dayNum = idx + 1;
                  const isToday = dayNum === selectedDay;
                  const hasEvents = [5, 12, 15, 18, 22, 28].includes(dayNum);
                  return (
                    <button
                      key={dayNum}
                      type="button"
                      onClick={() => setSelectedDay(dayNum)}
                      className={`relative flex h-8 w-8 mx-auto items-center justify-center rounded-xl transition ${
                        isToday
                          ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/30"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span>{dayNum}</span>
                      {hasEvents && !isToday && (
                        <span className="absolute bottom-1 h-1 w-1 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Tasks Due Today</span>
                <span className="font-bold text-indigo-600">4 items</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Team Availability</span>
                <span className="font-bold text-emerald-600">85% free</span>
              </div>
            </div>
          </div>

          {/* Right Detailed Schedule Feed (7 cols) */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col">
            
            {/* Schedule Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Agenda for August {selectedDay}, 2026
                </h3>
                <p className="text-xs text-slate-400">4 scheduled sessions • 3 tasks linked</p>
              </div>

              {/* View toggle buttons */}
              <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("day")}
                  className={`rounded-lg px-3 py-1 font-semibold transition ${
                    viewMode === "day" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                  }`}
                >
                  Day
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("week")}
                  className={`rounded-lg px-3 py-1 font-semibold transition ${
                    viewMode === "week" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                  }`}
                >
                  Week
                </button>
              </div>
            </div>

            {/* Timeline Events Stack */}
            <div className="space-y-3.5 flex-1">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:shadow-md ${event.color}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${event.pillColor}`}>
                          {event.category}
                        </span>
                        {event.isLive && (
                          <span className="flex items-center gap-1 rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white animate-pulse">
                            <IconVideo size={12} /> LIVE NOW
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{event.title}</h4>
                      <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                        <IconClock size={14} className="text-indigo-600" /> {event.time}
                      </p>
                    </div>

                    {/* Participants Avatars */}
                    <div className="flex items-center -space-x-2">
                      {event.participants.map((avatar, idx) => (
                        <img
                          key={idx}
                          src={avatar}
                          alt="Participant"
                          className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Linked Tasks Footer */}
                  <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-200/50 text-xs">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <IconChecklist size={14} className="text-indigo-600" />
                      {event.linkedTasks} linked tasks
                    </span>

                    {event.meetUrl ? (
                      <a
                        href={event.meetUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-indigo-700 transition"
                      >
                        Join Meeting
                      </a>
                    ) : (
                      <span className="text-[11px] font-semibold text-indigo-600 cursor-pointer hover:underline">
                        View Details →
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
