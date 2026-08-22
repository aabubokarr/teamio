import { AddTaskModal } from "@/components/ui/addTask";
import { ManagementTaskCard } from "@/components/ui/taskCard";
import { Logo } from "@/components/icons/logo";
import {
  IconCheck,
  IconCircle,
  IconPlus,
  IconDots,
  IconUsers,
  IconCalendar,
  IconClock,
  IconSparkles,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_2col-layout/managements")({
  component: RouteComponent,
});

const initialColumns = [
  {
    id: "todo",
    title: "To-do",
    count: 3,
    isComplete: false,
    tasks: [
      {
        id: 1,
        title: "Design UX on secret project",
        progress: 0,
        assignees: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        ],
        assigneeCount: 12,
        priority: "Urgent",
        priorityColor: "purple" as const,
        dueDate: "24 August",
        dueDateColor: "yellow" as const,
      },
      {
        id: 2,
        title: "High-fidelity Wireframes v2",
        progress: 15,
        assignees: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        ],
        assigneeCount: 8,
        priority: "High Priority",
        priorityColor: "red" as const,
        dueDate: "25 August",
        dueDateColor: "yellow" as const,
      },
    ],
  },
  {
    id: "in-progress",
    title: "In progress",
    count: null,
    isComplete: false,
    tasks: [
      {
        id: 3,
        title: "Visual Design on Figma",
        progress: 75,
        assignees: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        ],
        assigneeCount: 14,
        priority: "High Priority",
        priorityColor: "red" as const,
        dueDate: "26 August",
        dueDateColor: "purple" as const,
      },
      {
        id: 4,
        title: "Teamio Landing Page Integration",
        progress: 85,
        assignees: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        ],
        assigneeCount: 5,
        priority: "Urgent",
        priorityColor: "purple" as const,
        dueDate: "Today",
        dueDateColor: "purple" as const,
      },
    ],
  },
  {
    id: "complete",
    title: "Complete",
    count: null,
    isComplete: true,
    tasks: [
      {
        id: 5,
        title: "Design System Tokens",
        progress: 100,
        assignees: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        ],
        assigneeCount: 16,
        priority: "Urgent",
        priorityColor: "purple" as const,
        dueDate: "Completed",
        dueDateColor: "green" as const,
      },
    ],
  },
];

const teamMembers = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
];

function RouteComponent() {
  const [columns] = useState(initialColumns);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  return (
    <div className="mt-3 space-y-4 font-sans px-4 md:px-0">
      
      {/* Top Header Card */}
      <header className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
        {/* Meta Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <IconCalendar className="h-4 w-4 text-indigo-600" />
            <span>August 22, 2026</span>
            <span className="text-slate-300">•</span>
            <IconClock className="h-4 w-4 text-indigo-600" />
            <span>Synced 2 mins ago</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 flex items-center gap-1">
              <IconSparkles size={12} /> Teamio Active Board
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 transition"
            >
              <IconDots className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Logo className="size-10 shrink-0" />

            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                Teamio Design System Sprint
              </h1>
              <p className="mt-0.5 text-xs text-slate-500 font-medium">
                Manage component specs, user flows, and product design tasks.
              </p>
            </div>
          </div>

          {/* Team & New Task CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center -space-x-2">
              {teamMembers.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Team member"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-xs"
                />
              ))}

              <button
                type="button"
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition"
              >
                <IconUsers className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsAddTaskOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition"
            >
              <IconPlus className="h-4 w-4" stroke={2.5} />
              <span>New Task</span>
            </button>
          </div>
        </div>
      </header>

      {/* Kanban Board Columns */}
      <div className="overflow-x-auto pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-[800px]">
          {columns.map((column) => (
            <div
              key={column.id}
              className="flex min-h-[500px] flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-4"
            >
              {/* Column Header */}
              <div className="mb-4 flex items-center justify-between pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  {column.id === "todo" ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white shadow-xs text-slate-500">
                      <IconCircle className="h-4 w-4" stroke={2} />
                    </div>
                  ) : column.id === "in-progress" ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shadow-xs">
                      <div className="h-3.5 w-3.5 rounded-full border-2 border-amber-600 border-r-transparent animate-spin" />
                    </div>
                  ) : (
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-xs">
                      <IconCheck className="h-4 w-4" stroke={3} />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                      {column.title}
                    </h2>
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      {column.tasks.length}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddTaskOpen(true)}
                  className="flex h-7 w-7 items-center justify-center rounded-xl text-slate-400 hover:bg-white hover:text-slate-700 transition"
                  title="Add task"
                >
                  <IconPlus className="h-4 w-4" stroke={2.5} />
                </button>
              </div>

              {/* Column Tasks */}
              <div className="flex flex-1 flex-col gap-3">
                {column.tasks.map((task) => (
                  <ManagementTaskCard
                    key={task.id}
                    title={task.title}
                    progress={task.progress}
                    assignees={task.assignees}
                    totalAssignees={task.assigneeCount}
                    priority={task.priority}
                    priorityColor={task.priorityColor}
                    dueDate={task.dueDate}
                    dueDateColor={task.dueDateColor}
                    variant={
                      column.id === "todo"
                        ? "todo"
                        : column.id === "in-progress"
                          ? "inprogress"
                          : "complete"
                    }
                  />
                ))}

                <button
                  type="button"
                  onClick={() => setIsAddTaskOpen(true)}
                  className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 py-3 text-xs font-bold text-slate-500 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 transition"
                >
                  <IconPlus className="h-4 w-4" /> Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal isOpen={isAddTaskOpen} onOpenChange={setIsAddTaskOpen} />
    </div>
  );
}
