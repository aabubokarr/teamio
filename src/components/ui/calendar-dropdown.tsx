import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function CalendarDropdown() {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="w-[300px] bg-white rounded-[24px] p-5 shadow-[0_4px_30px_0_rgba(0,0,0,0.08)] border border-gray-100 font-lufga">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-1">
        <button className="size-8 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition text-[#1A1D1F]">
          <IconChevronLeft className="size-4" stroke={2.5} />
        </button>
        <span className="text-[16px] font-bold text-[#1A1D1F]">October 2023</span>
        <button className="size-8 rounded-full bg-[#F4F4F4] flex items-center justify-center hover:bg-gray-200 transition text-[#1A1D1F]">
          <IconChevronRight className="size-4" stroke={2.5} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-y-4 gap-x-1 place-items-center">
        {/* Days Header */}
        {daysOfWeek.map((d) => (
          <span key={d} className="text-[13px] font-medium text-[#9A9FA5]">
            {d}
          </span>
        ))}

        {/* Calendar Days */}
          {/* Day 1 starts on Sunday (col 1) */}
          {/* Day 1 is Sunday Oct 1 2023 */}
          
          {[1,2,3,4,5,6,7, 8,9,10,11,12,13,14, 15,16,17,18,19,20,21, 22,23,24,25,26,27,28, 29,30,31].map((day) => (
            <button
                key={day}
                className={cn(
                    "size-8 md:size-9 rounded-[10px] flex items-center justify-center text-[14px] font-bold transition-all relative",
                    day === 9 
                        ? "bg-[#B5E4CA] text-black shadow-sm" // The selected day style (Greenish)
                        : "text-[#1A1D1F] hover:bg-gray-50"
                )}
            >
                {day}
            </button>
          ))}
      </div>
    </div>
  );
}
