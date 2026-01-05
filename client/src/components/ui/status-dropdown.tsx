
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface StatusOption {
  label: string;
  color: string;
  checked?: boolean;
}

const statuses: StatusOption[] = [
  { label: "All", color: "bg-[#B5E4CA]", checked: true },
  { label: "To-do", color: "bg-[#FFE898]" },
  { label: "Complete", color: "bg-[#A9DCA9]" },
  { label: "In Progress", color: "bg-[#F3C4FB]" }, 
];

export function StatusDropdown() {
  return (
    <div className="w-[180px] bg-white rounded-[16px] p-2 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-1">
      {statuses.map((status) => (
        <button
          key={status.label}
          className="flex items-center gap-3 w-full p-2.5 rounded-[12px] hover:bg-gray-50 transition text-left group"
        >
          <div
            className={cn(
              "size-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-105",
              status.color
            )}
          >
            {status.checked && <IconCheck className="size-3.5 text-black" stroke={3} />}
          </div>
          <span className="text-[14px] font-bold text-[#1A1D1F]">
            {status.label}
          </span>
        </button>
      ))}
    </div>
  );
}
