import { AddTaskModal } from "@/components/ui/add-task-modal";
import { ManagementTaskCard } from "@/components/ui/management-task-card";
import {
  IconCheck,
  IconCircle,
  IconPlus,
  IconDots,
  IconUsers,
  IconCalendar,
  IconClock,
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
          "https://i.pravatar.cc/120?img=65",
          "https://i.pravatar.cc/120?img=70",
        ],
        assigneeCount: 98,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "yellow",
      },
      {
        id: 2,
        title: "High-fidelity Wireframe",
        progress: 0,
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 98,
        priority: "High Priority",
        priorityColor: "red",
        dueDate: "2 August",
        dueDateColor: "yellow",
      },
      {
        id: 3,
        title: "Visual Design on Figma",
        progress: 0,
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 98,
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
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 98,
        priority: "High Priority",
        priorityColor: "red",
        dueDate: "2 August",
        dueDateColor: "purple",
      },
      {
        id: 5,
        title: "Website Design",
        progress: 75,
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 98,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "purple",
      },
      {
        id: 6,
        title: "Motion Design",
        progress: 75,
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 98,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "purple",
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
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
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
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
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
        assignees: [
          "https://i.pravatar.cc/120?img=12",
          "https://i.pravatar.cc/120?img=32",
          "https://i.pravatar.cc/120?img=48",
        ],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "green",
      },
    ],
  },
];

type ColumnsState = typeof initialColumns;

const teamMembers = [
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=48",
  "https://i.pravatar.cc/120?img=55",
];

function RouteComponent() {
  const [columns] = useState<ColumnsState>(initialColumns);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  return (
    <div className="mt-3 space-y-0 font-lufga px-4 md:px-0">
      <header className="mb-5 rounded-3xl border border-[#E7E9ED] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        {/* Top Meta */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#8A9099]">
            <IconCalendar className="size-4" />

            <span>March 16, 2023</span>

            <span className="text-[#D0D3D8]">•</span>

            <IconClock className="size-4" />

            <span>Updated 13 min ago</span>
          </div>

          <button
            type="button"
            className="
                flex items-center gap-2
                rounded-lg
                px-3 py-2
                text-sm font-medium
                text-[#6F767E]
                transition
                hover:bg-[#F4F5F7]
                hover:text-[#1A1D1F]
              "
          >
            <IconDots className="size-5" />
          </button>
        </div>

        {/* Project Information */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div
              className="
                  flex size-12 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#FFE600]
                  shadow-sm
                  md:size-14
                "
            >
              <span className="text-lg font-black text-[#1A1D1F]">DS</span>
            </div>

            <div>
              <h1
                className="
                    text-2xl
                    font-bold
                    tracking-[-0.03em]
                    text-[#1A1D1F]
                    md:text-[30px]
                  "
              >
                Design System
              </h1>

              <p className="mt-1 text-sm text-[#8A9099]">
                Manage your design system tasks and project workflow.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {teamMembers.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Team member"
                  className="
                      size-9
                      rounded-full
                      border-2
                      border-white
                      object-cover
                      shadow-sm
                      -ml-2.5
                      first:ml-0
                      md:size-10
                    "
                />
              ))}

              <button
                type="button"
                className="
                    ml-2
                    flex size-9
                    items-center justify-center
                    rounded-full
                    border border-[#E4E6EB]
                    bg-[#F4F5F7]
                    text-[#6F767E]
                    transition
                    hover:bg-[#E4E6EB]
                    md:size-10
                  "
              >
                <IconUsers className="size-4.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsAddTaskOpen(true)}
              className="
                  flex items-center gap-2
                  rounded-xl
                  bg-[#1A1D1F]
                  px-4 py-2.5
                  text-sm font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-black
                "
            >
              <IconPlus className="size-4.5" stroke={2.5} />
              <span>New task</span>
            </button>
          </div>
        </div>
      </header>
      <div className="animate-in fade-in duration-300">
        <div className="overflow-x-auto pb-5">
          <div
            className="
                  grid
                  grid-cols-3
                  gap-4
                  xl:gap-5
                "
          >
            {columns.map((column) => (
              <div
                key={column.id}
                className="
                      flex
                      min-h-[500px]
                      flex-col
                      rounded-2xl
                      border border-[#E7E9ED]
                      bg-[#F1F3F5]
                      p-3
                      md:p-4
                    "
              >
                {/* Column Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {column.id === "todo" ? (
                      <div className="flex size-7 items-center justify-center rounded-lg bg-white shadow-sm">
                        <IconCircle
                          className="size-4 text-[#737982]"
                          stroke={2}
                        />
                      </div>
                    ) : column.id === "in-progress" ? (
                      <div className="flex size-7 items-center justify-center rounded-lg bg-white shadow-sm">
                        <div
                          className="
                                size-4
                                rounded-full
                                border-2
                                border-[#737982]
                                border-r-transparent
                              "
                        />
                      </div>
                    ) : (
                      <div className="flex size-7 items-center justify-center rounded-lg bg-[#1A1D1F] text-white shadow-sm">
                        <IconCheck className="size-4" stroke={3} />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-[#1A1D1F] md:text-[15px]">
                          {column.title}
                        </h2>

                        <span className="rounded-md bg-white px-1.5 py-0.5 text-[11px] font-semibold text-[#8A9099]">
                          {column.tasks.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsAddTaskOpen(true)}
                    className="
                          flex size-8
                          items-center justify-center
                          rounded-lg
                          text-[#737982]
                          transition
                          hover:bg-white
                          hover:text-[#1A1D1F]
                        "
                    title="Add task"
                  >
                    <IconPlus className="size-4" stroke={2.5} />
                  </button>
                </div>

                {/* Tasks */}
                <div className="flex flex-1 flex-col gap-3">
                  {column.tasks.map((task) => (
                    <ManagementTaskCard
                      key={task.id}
                      title={task.title}
                      progress={task.progress}
                      assignees={task.assignees}
                      totalAssignees={task.assigneeCount}
                      priority={task.priority}
                      priorityColor={task.priorityColor as any}
                      dueDate={task.dueDate}
                      dueDateColor={task.dueDateColor as any}
                      variant={
                        column.id === "todo"
                          ? "todo"
                          : column.id === "in-progress"
                            ? "inprogress"
                            : "complete"
                      }
                    />
                  ))}

                  {/* Add task */}
                  <button
                    type="button"
                    onClick={() => setIsAddTaskOpen(true)}
                    className="
                          mt-auto
                          flex w-full
                          items-center justify-center
                          gap-2
                          rounded-xl
                          border border-dashed
                          border-[#D5D9DE]
                          py-3
                          text-xs font-semibold
                          text-[#8A9099]
                          transition
                          hover:border-[#AEB4BC]
                          hover:bg-white
                          hover:text-[#1A1D1F]
                        "
                  >
                    <IconPlus className="size-4" />
                    Add task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal isOpen={isAddTaskOpen} onOpenChange={setIsAddTaskOpen} />
    </div>
  );
}
