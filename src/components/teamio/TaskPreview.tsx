import { useState } from "react";
import {
  IconChecklist,
  IconPlus,
  IconClock,
  IconMessageCircle,
  IconSparkles,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

interface Task {
  id: string;
  title: string;
  column: "Backlog" | "To Do" | "In Progress" | "Review" | "Done";
  priority: "High" | "Medium" | "Low";
  assignee: string;
  avatar: string;
  dueDate: string;
  comments: number;
  label: string;
  source?: string;
}

export function TaskPreview() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "t1",
      title: "Design Teamio landing page",
      column: "In Progress",
      priority: "High",
      assignee: "Maya Rahman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      dueDate: "Aug 24",
      comments: 12,
      label: "UI/UX",
      source: "Created from Maya's post",
    },
    {
      id: "t2",
      title: "Review marketing copy",
      column: "To Do",
      priority: "Medium",
      assignee: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      dueDate: "Aug 25",
      comments: 4,
      label: "Growth",
    },
    {
      id: "t3",
      title: "Prepare launch presentation",
      column: "Backlog",
      priority: "Low",
      assignee: "David Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      dueDate: "Aug 28",
      comments: 2,
      label: "Strategy",
    },
    {
      id: "t4",
      title: "Fix authentication flow",
      column: "Review",
      priority: "High",
      assignee: "Alex Carter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      dueDate: "Today",
      comments: 9,
      label: "Backend",
      source: "From Sarah's DM thread",
    },
    {
      id: "t5",
      title: "Publish product update v2.0",
      column: "Done",
      priority: "Medium",
      assignee: "Maya Rahman",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      dueDate: "Aug 20",
      comments: 28,
      label: "Release",
    },
  ]);

  const columns: Array<"Backlog" | "To Do" | "In Progress" | "Review" | "Done"> = [
    "Backlog",
    "To Do",
    "In Progress",
    "Review",
    "Done",
  ];

  const moveTaskNext = (taskId: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          const currentIndex = columns.indexOf(task.column);
          const nextIndex = (currentIndex + 1) % columns.length;
          return { ...task, column: columns[nextIndex] };
        }
        return task;
      })
    );
  };

  const getPriorityBadge = (priority: "High" | "Medium" | "Low") => {
    switch (priority) {
      case "High":
        return "bg-rose-50 text-rose-600 border-rose-200";
      case "Medium":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "Low":
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <section id="tasks" className="py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4">
            <IconChecklist size={14} /> Action & Task Management
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Turn conversations into <span className="text-indigo-600">action.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Teamio bridges social discussions and real execution. When someone mentions an idea in a timeline post or chat message, turn it into a tracked task with one click.
          </p>
        </div>

        {/* Social-to-Task Highlight Feature Card */}
        <div className="mt-8 mx-auto max-w-4xl rounded-2xl border border-indigo-200 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 font-bold">
              💬
            </span>
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-slate-800">
                “Sarah mentioned a task in a conversation: <span className="font-bold text-slate-900">Review landing page copy</span>”
              </p>
              <p className="text-slate-500 text-xs mt-0.5">Click to convert chat context into tracked project item</p>
            </div>
          </div>
          <button
            type="button"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition"
          >
            <IconPlus size={16} /> Create Task
          </button>
        </div>

        {/* Kanban Board Mockup */}
        <div className="mt-10 overflow-x-auto pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 min-w-[900px]">
            {columns.map((col) => {
              const colTasks = tasks.filter((t) => t.column === col);
              return (
                <div
                  key={col}
                  className="rounded-2xl border border-slate-200 bg-slate-100/60 p-3.5 flex flex-col min-h-[380px]"
                >
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        {col}
                      </span>
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                        {colTasks.length}
                      </span>
                    </div>
                    <button type="button" className="text-slate-400 hover:text-slate-600">
                      <IconPlus size={16} />
                    </button>
                  </div>

                  {/* Tasks List */}
                  <div className="space-y-3 flex-1">
                    <AnimatePresence>
                      {colTasks.map((task) => (
                        <motion.div
                          key={task.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => moveTaskNext(task.id)}
                          className="group relative rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                        >
                          {/* Priority & Label */}
                          <div className="flex items-center justify-between mb-2">
                            <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${getPriorityBadge(task.priority)}`}>
                              {task.priority}
                            </span>
                            <span className="text-[10px] font-medium text-slate-400">
                              {task.label}
                            </span>
                          </div>

                          {/* Task Title */}
                          <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                            {task.title}
                          </h4>

                          {/* Social Source Tag */}
                          {task.source && (
                            <div className="mt-2 rounded-lg bg-indigo-50/70 p-1.5 text-[10px] text-indigo-700 flex items-center gap-1 font-medium">
                              <IconSparkles size={11} /> {task.source}
                            </div>
                          )}

                          {/* Task Footer Info */}
                          <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-100 text-[11px] text-slate-400">
                            <div className="flex items-center gap-2">
                              <img
                                src={task.avatar}
                                alt={task.assignee}
                                className="h-5 w-5 rounded-full object-cover ring-1 ring-slate-200"
                              />
                              <span className="flex items-center gap-1">
                                <IconClock size={12} /> {task.dueDate}
                              </span>
                            </div>

                            <span className="flex items-center gap-1 text-slate-500 font-medium">
                              <IconMessageCircle size={12} /> {task.comments}
                            </span>
                          </div>

                          {/* Click Hint */}
                          <div className="mt-2 text-[10px] text-indigo-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-right">
                            Click to advance →
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
