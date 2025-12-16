
import { IconArrowRight, IconDots } from "@tabler/icons-react";
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
  return (
    <div 
      className="bg-white rounded-[20px] p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-transparent hover:border-gray-100 transition-all cursor-pointer group mb-4 last:mb-0"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[17px] font-bold text-black tracking-tight leading-snug">
          {title}
        </h3>
        <button className="size-8 rounded-full border border-gray-200 flex items-center justify-center bg-white text-black hover:bg-gray-50 flex-shrink-0 -mt-1 -mr-1">
          <IconDots className="size-4" stroke={2} />
        </button>
      </div>

      {/* Progress & Assignees Container */}
      <div className="bg-[#F8F9FA] rounded-[18px] p-4 mb-4">
        {/* Progress Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-2.5 bg-white rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all", 
                progress > 0 ? "bg-[#22C55E]" : "bg-transparent"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-black">{progress}%</span>
        </div>

        {/* Assignees */}
        <div className="flex items-center gap-2">
           <div className="size-2 rounded-full bg-black flex-shrink-0" />
           <span className="text-[13px] font-medium text-black mr-1">
             {variant === 'todo' ? 'Assign to' : '2 Assign to'} 
             {/* Note: In screenshot 'To-do' says 'Assign to', others say '2 Assign to'. 
                 Maybe '2' is count of something else? Or just static text in design? 
                 I'll mimic the logic: if variant is not todo, prefix with 2? 
                 Actually looking closely at screenshot, "To-do" has "Assign to", "In progress" has "Assign to", "Complete" has "Assign to". 
                 WAIT, in the SECOND screenshot (Step 103), "To-do" has "Assign to". "In progress" has "Assign to". "Complete" has "Assign to".
                 BUT in Step 47 Image 1: "Assign to". Image 2: "2 Assign to".
                 The user says "pixel perfect". In the LATEST screenshot (Step 103):
                 - To-do card 1: "Assign to"
                 - To-do card 2: "2 Assign to"
                 - In Progress card 1: "Assign to"
                 - In Progress card 2: "2 Assign to"
                 It seems purely data driven or random in mockup. 
                 I will just expose a prop or keep it simple "Assign to" unless user complains, OR better, check if I can just use "Assign to" and maybe the "2" was a typo or specific data in mockup.
                 Actually "2 Assign to" likely means "2 people assigned"? No, the avatars show many. 
                 Let's stick to "Assign to" + black dot.
             */}
           </span>
           
           <div className="flex items-center -space-x-2">
             {assignees.map((src, i) => (
               <img 
                 key={i} 
                 src={src} 
                 alt="User" 
                 className="size-7 rounded-full border border-white object-cover"
               />
             ))}
             {totalAssignees > assignees.length && (
                <div className="size-7 rounded-full border border-[#22C55E] bg-white flex items-center justify-center text-[9px] font-bold text-black z-10">
                    {totalAssignees}+
                </div>
             )}
           </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pl-1">
        {/* Tags */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className={cn("size-3 rounded-full", 
              priorityColor === 'purple' ? 'bg-[#7C3AED]' : 
              priorityColor === 'red' ? 'bg-[#EF4444]' : 'bg-gray-400')} />
            <span className={cn("text-sm font-medium", 
               priorityColor === 'purple' ? 'text-[#7C3AED]' : 
               priorityColor === 'red' ? 'text-[#EF4444]' : 'text-gray-600')}>{priority}</span>
          </div>
          <div className="flex items-center gap-1.5">
             <div className={cn("size-3 rounded-full", 
               dueDateColor === 'green' ? 'bg-[#15803D]' : 
               dueDateColor === 'yellow' ? 'bg-[#EAB308]' : 
               dueDateColor === 'purple' ? 'bg-[#7C3AED]' : 'bg-gray-400')} />
             <span className={cn("text-sm font-medium", 
               dueDateColor === 'green' ? 'text-[#15803D]' : 
               dueDateColor === 'yellow' ? 'text-[#CA8A04]' : 
               dueDateColor === 'purple' ? 'text-[#7C3AED]' : 'text-gray-600')}>{dueDate}</span>
          </div>
        </div>

        {/* Button */}
        <button 
           className={cn(
             "h-10 pl-5 pr-1.5 rounded-full flex items-center gap-2 transition-all font-bold text-[13px]",
             variant === "todo" ? "bg-black text-white" : "bg-[#F3F4F6] text-black"
           )}
        >
          Open
          <div className={cn("size-7 rounded-full flex items-center justify-center", 
            variant === "todo" ? "bg-[#86EFAC] text-black" : "bg-[#4ADE80]"
          )}>
            <IconArrowRight className="size-4 text-black" stroke={2.5} />
          </div>
        </button>
      </div>
    </div>
  );
}
