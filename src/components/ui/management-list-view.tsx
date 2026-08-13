import { IconChecks, IconCircle, IconDots, IconPlus, IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  title: string;
  progress: number;
  assignees: string[];
  assigneeCount: number;
  priority: string;
  priorityColor: string;
  dueDate: string;
  dueDateColor: string;
  status: "To-do" | "In progress" | "Complete";
}

interface ManagementListViewProps {
  tasks: Task[];
}

export function ManagementListView({ tasks }: ManagementListViewProps) {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
      <table className="w-full min-w-[1000px]">
        <thead>
          <tr className="text-left">
            <th className="pb-6 text-[15px] font-bold text-[#1A1D1F] pl-4">Project Name</th>
            <th className="pb-6 text-[15px] font-bold text-[#1A1D1F]">Progress</th>
            <th className="pb-6 text-[15px] font-bold text-[#1A1D1F]">Assign to</th>
            <th className="pb-6 text-[15px] font-bold text-[#1A1D1F]">Status</th>
            <th className="pb-6 text-[15px] font-bold text-[#1A1D1F]">Date</th>
            <th className="pb-6 text-right pr-4">
              <button className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1A1D1F]">
                <IconPlus className="size-5" />
                Add task
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="space-y-2">
            {/* We add spacing between rows using CSS or just rely on padding in tds. 
                The screenshot shows distinct rows with hover effects. 
            */}
          {tasks.map((task) => (
            <tr key={task.id} className="group hover:bg-[#F8F9FA] transition-colors rounded-xl">
              <td className="py-4 pl-4 first:rounded-l-2xl">
                 <span className="text-[15px] font-bold text-[#1A1D1F]">{task.title}</span>
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3 w-32">
                   <div className="flex-1 h-2 bg-[#F4F4F4] rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full", 
                          task.progress === 100 ? "bg-[#27AE60]" : "bg-[#27AE60]" // Screenshot shows green for all progress bars mostly
                        )} 
                        style={{ width: `${task.progress}%` }} 
                      />
                   </div>
                   <span className="text-xs font-bold text-[#1A1D1F] w-8 text-right">{task.progress}%</span>
                </div>
              </td>
              <td className="py-4">
                <div className="flex items-center -space-x-2">
                    {task.assignees.slice(0, 4).map((img, i) => (
                        <img key={i} src={img} alt="assignee" className="size-8 rounded-full border-2 border-white object-cover" />
                    ))}
                    <div className="size-8 rounded-full border-2 border-white bg-[#F4F4F4] flex items-center justify-center text-[10px] font-bold text-[#747786]">
                        99+
                    </div>
                </div>
              </td>
              <td className="py-4">
                 <div className="flex items-center gap-2">
                    {task.status === "To-do" && (
                        <IconCircle className="size-5 text-[#747786]" stroke={2} />
                    )}
                    {task.status === "In progress" && (
                        <div className="size-5 rounded-full border-2 border-[#747786] border-l-transparent rotate-45" />
                    )}
                    {task.status === "Complete" && (
                         <div className="size-5 rounded-full bg-[#B5B5BE] flex items-center justify-center text-white">
                             <IconChecks className="size-3.5" />
                         </div>
                         // Wait, screenshot shows grey tick circle for Complete? 
                         // Ah, screenshot says "Complete" with a check icon in a grey circle.
                    )}
                    
                    <span className="text-[15px] font-bold text-[#1A1D1F]">{task.status}{task.status === 'To-do' && '(2)'}</span>
                 </div>
              </td>
              <td className="py-4">
                  <div className="flex items-center gap-2">
                      <div className={cn("size-2 rounded-full", 
                          task.dueDateColor === 'yellow' && "bg-[#FFD600]",
                          task.dueDateColor === 'purple' && "bg-[#9B51E0]",
                          task.dueDateColor === 'green' && "bg-[#27AE60]", // Green for done?
                          task.priorityColor === 'red' && "bg-[#FF4D4D]" // Fallback/Mix?
                      )} />
                      <span className={cn("text-[14px] font-semibold", 
                          task.priorityColor === 'purple' && "text-[#9B51E0]",
                           task.priorityColor === 'red' && "text-[#FF4D4D]",
                           task.dueDateColor === 'yellow' && "text-[#FFD600]"
                           // Actually screenshot shows colored TEXT for date.
                           // "2 August" is yellow text for To-do, Purple for In Progress, Purplish for Complete.
                           // Let's rely on the incoming `dueDateColor` prop logic or simple mapping.
                           // For now I'll just use a generic class or inline style if needed, but Tailwind is better.
                           // Let's assume standard colors for now.
                      )}>
                        {task.dueDate}
                      </span>
                  </div>
              </td>
              <td className="py-4 pr-4 last:rounded-r-2xl text-right">
                  <div className="flex items-center justify-end gap-3">
                      <button className="h-9 px-4 rounded-full bg-[#F4F4F4] text-[13px] font-bold text-[#1A1D1F] hover:bg-gray-200 transition flex items-center gap-2">
                          Open
                          <div className={cn("size-5 rounded-full flex items-center justify-center -mr-1",
                              task.progress === 100 ? "bg-[#83BF6E] text-white" : "bg-[#83BF6E] text-white"
                              // Screenshot arrows are light green circle with black arrow? No, looks like Green circle with Black Arrow.
                          )}>
                              <IconArrowRight className="size-3 text-black" />
                          </div>
                      </button>
                      
                      <button className="size-9 rounded-full border border-[#EFEFEF] flex items-center justify-center text-[#1A1D1F] hover:bg-gray-50 transition">
                          <IconDots className="size-5" />
                      </button>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
