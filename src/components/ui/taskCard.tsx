import { useState, useRef, useEffect } from "react";
import { IconArrowRight, IconDots, IconClock, IconUser, IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface ManagementTaskCardProps {
  title: string;
  progress: number;
  assignees: string[];
  totalAssignees: number;
  priority: string;
  priorityColor: "purple" | "red" | "green" | "yellow";
  dueDate: string;
  dueDateColor: "purple" | "red" | "green" | "yellow";
  variant?: "todo" | "inprogress" | "complete";
  onClick?: () => void;
}

export function ManagementTaskCard({
  title,
  progress,
  assignees,
  totalAssignees,
  priority,
  priorityColor,
  dueDate,
  dueDateColor,
  variant = "todo",
  onClick,
}: ManagementTaskCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPriorityStyle = (color: "purple" | "red" | "green" | "yellow") => {
    switch (color) {
      case "purple":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "red":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "green":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "yellow":
        return "bg-amber-50 text-amber-700 border-amber-200";
    }
  };

  const getDueDateStyle = (color: "purple" | "red" | "green" | "yellow") => {
    switch (color) {
      case "green":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "yellow":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "purple":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "red":
        return "bg-rose-50 text-rose-700 border-rose-200";
    }
  };

  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 cursor-pointer mb-3 last:mb-0"
    >
      {/* Card Top Header */}
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <div className="relative shrink-0" ref={menuRef}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="flex h-7 w-7 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          >
            <IconDots size={16} />
          </button>

          {/* Action Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-8 z-30 w-44 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl text-xs font-semibold text-slate-700 space-y-1">
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
              >
                <span>Edit Task</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 transition"
              >
                <span>Move Column</span>
              </button>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-rose-50 text-rose-600 transition"
              >
                <span>Delete Task</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Progress & Assignees Section */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 mb-3 space-y-2.5">
        {/* Progress Bar */}
        <div className="flex items-center gap-2.5">
          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                progress === 100
                  ? "bg-emerald-500"
                  : progress > 0
                    ? "bg-indigo-600"
                    : "bg-slate-300"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-slate-700 min-w-8 text-right">
            {progress}%
          </span>
        </div>

        {/* Assignees */}
        <div className="flex items-center justify-between pt-1 text-xs">
          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
            <IconUser size={13} className="text-indigo-600" /> Team
          </span>

          <div className="flex items-center -space-x-2">
            {assignees.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Assignee"
                className="h-6 w-6 rounded-full border-2 border-white object-cover shadow-xs"
              />
            ))}
            {totalAssignees > assignees.length && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-[9px] font-bold text-indigo-700 ring-2 ring-white">
                +{totalAssignees - assignees.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Priority, Due Date & Action Button */}
      <div className="flex items-center justify-between pt-1 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${getPriorityStyle(priorityColor)}`}>
            {priority}
          </span>
          <span className={`flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold ${getDueDateStyle(dueDateColor)}`}>
            <IconClock size={11} /> {dueDate}
          </span>
        </div>

        <button
          type="button"
          className={cn(
            "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-xs",
            variant === "complete"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          )}
        >
          <span>{variant === "complete" ? "Done" : "Open"}</span>
          {variant === "complete" ? (
            <IconCheck size={14} />
          ) : (
            <IconArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
