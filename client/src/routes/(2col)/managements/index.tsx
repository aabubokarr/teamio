import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconCircle,
  IconDotsVertical,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_2col-layout/managements")({
  component: RouteComponent,
});

const columns = [
  {
    id: "todo",
    title: "To-do",
    count: 2,
    isComplete: false,
    tasks: [
      {
        id: 1,
        title: "Design UX on secret project",
        progress: 0,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 90,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "yellow",
      },
      {
        id: 2,
        title: "High-fidelity Wireframe",
        progress: 0,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "High Priority",
        priorityColor: "red",
        dueDate: "2 August",
        dueDateColor: "yellow",
      },
      {
        id: 3,
        title: "Visual Design on Figma",
        progress: 0,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "yellow",
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
        id: 4,
        title: "Visual Design on Figma",
        progress: 75,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "High Priority",
        priorityColor: "red",
        dueDate: "2 August",
        dueDateColor: "purple",
      },
      {
        id: 5,
        title: "Website Design",
        progress: 75,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "yellow",
      },
      {
        id: 6,
        title: "Motion Design",
        progress: 75,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "yellow",
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
        id: 7,
        title: "Design UX on secret project",
        progress: 100,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "green",
      },
      {
        id: 8,
        title: "Development",
        progress: 100,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "High Priority",
        priorityColor: "red",
        dueDate: "2 August",
        dueDateColor: "green",
      },
      {
        id: 9,
        title: "Project Done",
        progress: 100,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "green",
      },
    ],
  },
];

const teamMembers = [
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=48",
  "https://i.pravatar.cc/120?img=55",
];

function RouteComponent() {
  const [viewMode, setViewMode] = useState<"board" | "list">("board");

  return (
    <div className="space-y-6 font-lufga">
      {/* Header Section */}
      <div className="space-y-4">
        {/* Top Row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-900">Date: 16/03/2023</p>
            <div className="flex items-center gap-2">
              <div className="size-4 bg-yellow-400 rounded"></div>
              <h1 className="text-xl font-bold text-gray-900">Design System</h1>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Search */}
            <label className="relative block">
              <span className="sr-only">Search tasks</span>
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search Task"
                className="w-64 rounded-full bg-off-white px-11 py-2.5 text-sm text-gray-600 outline-none ring-0 transition focus:bg-white focus:ring-2 focus:ring-gray-100"
              />
            </label>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setViewMode("board")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "board"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Board
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  viewMode === "list"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-red-500 rounded-full"></span>
            <p className="text-sm text-gray-500">Update 13 min ago</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Team Members */}
            <div className="flex items-center gap-2">
              {teamMembers.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Team member"
                  className="size-8 rounded-full object-cover border-2 border-white -ml-2 first:ml-0"
                />
              ))}
              <button
                type="button"
                className="size-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 -ml-2"
              >
                <IconPlus className="size-4" />
              </button>
            </div>

            {/* Dropdowns */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium"
              >
                To-do
                <IconChevronDown className="size-4" />
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg text-sm font-medium"
              >
                Today
                <IconChevronDown className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      {viewMode === "board" && (
        <div className="grid gap-6 lg:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.id}
              className={`rounded-3xl bg-white p-6 shadow-sm ${
                column.id === "todo" ? "border-2 border-blue-200" : ""
              }`}
              style={{ border: column.id !== "todo" ? "var(--border-secondary)" : undefined }}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  {column.isComplete ? (
                    <IconCheck className="size-5 text-gray-900" />
                  ) : (
                    <IconCircle className="size-5 text-gray-400" />
                  )}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {column.title}
                    {column.count !== null && `(${column.count})`}
                  </h2>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <IconPlus className="size-4" />
                  Add task
                </button>
              </div>

              {/* Tasks */}
              <div className="space-y-4">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm relative"
                  >
                    {/* Options Button */}
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <IconDotsVertical className="size-5" />
                    </button>

                    {/* Task Title */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 pr-8">
                      {task.title}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">{task.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 transition-all"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Assignees */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">
                        {task.assignees.length > 1 ? `${task.assignees.length} Assign to` : "Assign to"}
                      </p>
                      <div className="flex items-center gap-2">
                        {task.assignees.map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            alt="Assignee"
                            className="size-6 rounded-full object-cover border border-white"
                          />
                        ))}
                        <div className="size-6 rounded-full bg-green-500 text-white text-xs font-medium flex items-center justify-center">
                          +{task.assigneeCount}+
                        </div>
                      </div>
                    </div>

                    {/* Priority and Due Date */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`size-2 rounded-full ${
                            task.priorityColor === "purple"
                              ? "bg-purple-500"
                              : task.priorityColor === "red"
                              ? "bg-red-500"
                              : "bg-gray-500"
                          }`}
                        />
                        <span className="text-xs text-gray-600">{task.priority}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`size-2 rounded-full ${
                            task.dueDateColor === "yellow"
                              ? "bg-yellow-500"
                              : task.dueDateColor === "green"
                              ? "bg-green-500"
                              : task.dueDateColor === "purple"
                              ? "bg-purple-500"
                              : "bg-gray-500"
                          }`}
                        />
                        <span className="text-xs text-gray-600">{task.dueDate}</span>
                      </div>
                    </div>

                    {/* Open Button */}
                    <Button
                      type="button"
                      variant="classic"
                      color="black"
                      className={{
                        base: "w-full",
                      }}
                    >
                      Open
                      <IconArrowRight className="size-4 text-green-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
