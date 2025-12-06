import { IconArrowRight, IconDotsVertical } from "@tabler/icons-react";
import type React from "react";

interface TaskCardProps {
  title: string;
  progress: number;
  assignees: string[];
  assigneeCount: number;
  priority: string;
  priorityColor: "purple" | "red" | "gray";
  dueDate: string;
  dueDateColor: "yellow" | "green" | "purple" | "gray";
  draggable?: boolean;
  onDragStart?: React.DragEventHandler<HTMLDivElement>;
  onDragEnd?: React.DragEventHandler<HTMLDivElement>;
}

const priorityColorMap: Record<TaskCardProps["priorityColor"], string> = {
  purple: "bg-purple-500",
  red: "bg-red-500",
  gray: "bg-gray-500",
};

const dateColorMap: Record<TaskCardProps["dueDateColor"], string> = {
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  gray: "bg-gray-500",
};

export function TaskCard({
  title,
  progress,
  assignees,
  assigneeCount,
  priority,
  priorityColor,
  dueDate,
  dueDateColor,
  draggable,
  onDragStart,
  onDragEnd,
}: TaskCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative cursor-grab active:cursor-grabbing"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {/* Header: Title and Menu */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-900 pr-8 leading-tight">{title}</h3>
        <button
          type="button"
          className="size-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 flex-shrink-0 transition"
        >
          <IconDotsVertical className="size-4" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-end mb-1.5">
          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
        <div className="w-full h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-300 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Assign to Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-900">Assign to</span>
          <div className="flex items-center -ml-1">
            {assignees.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Assignee"
                className="size-6 rounded-full object-cover border-2 border-white -ml-1.5 first:ml-0"
              />
            ))}
          </div>
          <div className="size-6 rounded-full bg-green-500 text-white text-[10px] font-semibold flex items-center justify-center flex-shrink-0 -ml-1.5">
            {assigneeCount}+
          </div>
        </div>
      </div>

      {/* Footer: Tags and Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className={`size-2.5 rounded-full flex-shrink-0 ${priorityColorMap[priorityColor]}`} />
            <span className="text-xs text-gray-900 font-medium">{priority}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`size-2.5 rounded-full flex-shrink-0 ${dateColorMap[dueDateColor]}`} />
            <span className="text-xs text-gray-900 font-medium">{dueDate}</span>
          </div>
        </div>

        {/* Open Button with Gradient */}
        <button
          type="button"
          className="relative px-4 py-2 rounded-lg text-sm font-medium text-white overflow-hidden group hover:opacity-90 transition"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-green-500" />
          <span className="relative flex items-center gap-1.5 z-10">
            <span>Open</span>
            <IconArrowRight className="size-4" />
          </span>
        </button>
      </div>
    </div>
  );
}

