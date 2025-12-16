import { ManagementTaskCard } from "@/components/ui/management-task-card";
import {
  IconCheck,
  IconChevronDown,
  IconCircle,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_2col-layout/managements")({
  component: RouteComponent,
});

// Update data to match screenshot more closely for "Visual Design on Figma" etc.
const initialColumns = [
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
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
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
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
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
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 98,
        priority: "High Priority",
        priorityColor: "red", // Screenshot: High Priority is RED
        dueDate: "2 August",
        dueDateColor: "purple", // Screenshot: 2 August is PURPLE for this card
      },
      {
        id: 5,
        title: "Website Design",
        progress: 75,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 98,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "purple", // Screenshot: 2 August is PURPLE
      },
      {
        id: 6,
        title: "Motion Design",
        progress: 75,
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
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
        assignees: ["https://i.pravatar.cc/120?img=12", "https://i.pravatar.cc/120?img=32", "https://i.pravatar.cc/120?img=48"],
        assigneeCount: 96,
        priority: "Urgent",
        priorityColor: "purple",
        dueDate: "2 August",
        dueDateColor: "green", // Screenshot: 2 August is GREEN
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

type ColumnsState = typeof initialColumns;

const teamMembers = [
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=48",
  "https://i.pravatar.cc/120?img=55",
];

function RouteComponent() {
  const [viewMode, setViewMode] = useState<"board" | "list">("board");
  const [columns] = useState<ColumnsState>(initialColumns);

  return (
    <div className="space-y-6 font-lufga max-w-[1400px]">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
         {/* Top Row: Date | Update Status | Team */}
         <div className="flex items-center justify-between">
            <p className="text-[15px] text-gray-900 font-medium">Date: 16/03/2023</p>
            
            <div className="flex items-center gap-2">
               <span className="size-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
               <p className="text-[13px] text-[#747786]">Update 13 min ago</p>
            </div>
         </div>

         {/* Second Row: Title and Team */}
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="size-10 bg-[#FFD600] rounded-[10px]" /> {/* Yellow Icon */}
               <h1 className="text-[28px] font-bold text-black tracking-tight">Design System</h1>
            </div>
            
            <div className="flex items-center">
              {teamMembers.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Team member"
                  className="size-10 rounded-full object-cover border-2 border-white -ml-3 first:ml-0"
                />
              ))}
              <button
                type="button"
                className="size-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 -ml-3 border-2 border-white hover:bg-gray-800 transition"
              >
                <IconPlus className="size-5" />
              </button>
            </div>
         </div>

         {/* Third Row: Tools */}
         <div className="flex items-center justify-between mt-2">
             <div className="flex items-center gap-12">
                {/* Search */}
                <div className="relative">
                    <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-500" stroke={2} />
                    <input
                        type="search"
                        placeholder="Search Task"
                        className="w-[280px] h-12 rounded-[14px] bg-[#F8F9FA] pl-12 pr-4 text-[15px] text-gray-900 outline-none placeholder:text-gray-500"
                    />
                </div>
             </div>

             {/* Center: View Toggle */}
             <div className="bg-[#F8F9FA] p-1 rounded-[14px] flex items-center gap-1">
                 <button
                    onClick={() => setViewMode("board")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-[10px] text-[15px] font-semibold transition-all ${
                        viewMode === "board" ? "bg-white shadow-sm text-black" : "text-[#747786] hover:bg-gray-100"
                    }`}
                 >
                    <svg className="size-4" viewBox="0 0 24 24" fill={viewMode === 'board' ? 'currentColor' : '#747786'}><path d="M4 4h6v16H4V4zm10 0h6v16h-6V4z"/></svg>
                    Board
                 </button>
                 <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-[10px] text-[15px] font-semibold transition-all ${
                        viewMode === "list" ? "bg-white shadow-sm text-black" : "text-[#747786] hover:bg-gray-100"
                    }`}
                 >
                    <svg className="size-4" viewBox="0 0 24 24" fill={viewMode === 'list' ? 'currentColor' : '#747786'}><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg> 
                    List
                 </button>
             </div>

             {/* Right: Dropdowns */}
             <div className="flex items-center gap-3">
                 <button className="h-11 px-5 bg-black text-white rounded-[14px] flex items-center gap-2 text-[15px] font-medium hover:bg-gray-800 transition">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M7 12h10m-8 6h6"/></svg>
                    To-do
                    <IconChevronDown className="size-4 opacity-70" />
                 </button>
                 <button className="h-11 px-5 bg-black text-white rounded-[14px] flex items-center gap-2 text-[15px] font-medium hover:bg-gray-800 transition">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Today
                    <IconChevronDown className="size-4 opacity-70" />
                 </button>
             </div>
         </div>
      </div>

      {/* Kanban Board */}
      {viewMode === "board" && (
        <div className="grid gap-6 lg:grid-cols-3 mt-8">
          {columns.map((column) => (
            <div
              key={column.id}
              className={`rounded-[24px] bg-[#F8F9FA] p-4 flex flex-col h-full`} 
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-5 px-1 py-1">
                <div className="flex items-center gap-2.5">
                  {column.id === 'todo' ? (
                       <IconCircle className="size-5 text-[#747786]" stroke={2} />
                  ) : column.id === 'in-progress' ? (
                       <div className="size-5 rounded-full border-2 border-[#747786] border-l-transparent rotate-45" /> 
                       // Custom 'in progress' icon matching screenshot roughly
                  ) : (
                       <div className="size-5 rounded-full bg-[#999999] flex items-center justify-center text-white"><IconCheck className="size-3.5" stroke={4} /></div>
                  )}
                  
                  <h2 className="text-[17px] font-bold text-black">
                    {column.title}
                    {column.count !== null && `(${column.count})`}
                  </h2>
                </div>
                
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[14px] font-semibold text-black hover:bg-gray-200 px-3 py-1.5 rounded-lg transition"
                >
                  <IconPlus className="size-4" stroke={2.5} />
                  Add task
                </button>
              </div>

              {/* Tasks */}
              <div className="flex-1 space-y-4">
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
                    variant={column.id === "todo" ? "todo" : (column.id === "in-progress" ? "inprogress" : "complete")}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
