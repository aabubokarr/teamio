import { cn } from "@/lib/utils";
import {
  IconCalendar,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/_2col-layout/calendar")({
  component: RouteComponent,
});

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const daysOfWeekShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function RouteComponent() {
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const [currentDate, setCurrentDate] = useState(currentMonthStart);
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [calendarViewDate, setCalendarViewDate] = useState(currentMonthStart);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    currentMonthStart
  );

  const calendarRef = useRef<HTMLDivElement>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;

  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  const trailingDays: number[] = [];

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    trailingDays.push(daysInPrevMonth - i);
  }

  const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;
  const leadingDaysCount = totalCells - (firstDayOfWeek + daysInMonth);
  const leadingDays: number[] = [];

  for (let i = 1; i <= leadingDaysCount; i++) {
    leadingDays.push(i);
  }

  const formatDateRange = () => {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);

    const startFormatted = start
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", "");

    const endFormatted = end
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", "");

    return `${startFormatted} - ${endFormatted}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendarDropdown(false);
      }
    };

    if (showCalendarDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendarDropdown]);

  const calendarMonth = calendarViewDate.getMonth();
  const calendarYear = calendarViewDate.getFullYear();

  const calendarMonthName = calendarViewDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const calendarFirstDay = new Date(calendarYear, calendarMonth, 1);
  const calendarLastDay = new Date(calendarYear, calendarMonth + 1, 0);
  const calendarDaysInMonth = calendarLastDay.getDate();
  const calendarFirstDayOfWeek = (calendarFirstDay.getDay() + 6) % 7;

  const navigateCalendarMonth = (direction: "prev" | "next") => {
    setCalendarViewDate(
      new Date(calendarYear, calendarMonth + (direction === "next" ? 1 : -1), 1)
    );
  };

  const handleDateSelect = (date: Date) => {
    setSelectedStartDate(date);
    setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
    setShowCalendarDropdown(false);
  };

  const calendarPrevMonth = new Date(calendarYear, calendarMonth - 1, 0);
  const calendarDaysInPrevMonth = calendarPrevMonth.getDate();
  const calendarTrailingDays: number[] = [];

  for (let i = calendarFirstDayOfWeek - 1; i >= 0; i--) {
    calendarTrailingDays.push(calendarDaysInPrevMonth - i);
  }

  const calendarTotalCells =
    Math.ceil((calendarFirstDayOfWeek + calendarDaysInMonth) / 7) * 7;
  const calendarLeadingDaysCount =
    calendarTotalCells - (calendarFirstDayOfWeek + calendarDaysInMonth);
  const calendarLeadingDays: number[] = [];

  for (let i = 1; i <= calendarLeadingDaysCount; i++) {
    calendarLeadingDays.push(i);
  }

  return (
    <div className="mt-3 space-y-0 font-sans px-4 md:px-0">
      {/* Top Bar Header */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-4 bg-white p-4 rounded-t-3xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-xs"
              >
                <IconCalendar className="h-5 w-5" />
              </button>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-base md:text-lg font-bold text-slate-900">
                    {monthName}
                  </span>

                  <div className="relative" ref={calendarRef}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!showCalendarDropdown) {
                          setCalendarViewDate(currentDate);
                        }
                        setShowCalendarDropdown(!showCalendarDropdown);
                      }}
                      className="flex items-center justify-center h-6 w-6 rounded-full hover:bg-slate-100 transition"
                    >
                      <IconChevronDown className="h-4 w-4 text-slate-400" />
                    </button>

                    {/* Calendar Dropdown */}
                    {showCalendarDropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl p-5 z-50 w-[300px] border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-bold text-slate-900">
                            {calendarMonthName}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => navigateCalendarMonth("prev")}
                              className="flex items-center justify-center h-7 w-7 rounded-lg hover:bg-slate-100 text-slate-500"
                            >
                              <IconChevronLeft className="h-4 w-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() => navigateCalendarMonth("next")}
                              className="flex items-center justify-center h-7 w-7 rounded-lg hover:bg-slate-100 text-slate-500"
                            >
                              <IconChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {daysOfWeekShort.map((day) => (
                            <div
                              key={day}
                              className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Days */}
                        <div className="grid grid-cols-7 gap-1">
                          {calendarTrailingDays.map((day) => (
                            <button
                              key={`prev-${day}`}
                              type="button"
                              className="h-8 w-8 text-xs text-slate-300 rounded-lg"
                              disabled
                            >
                              {day}
                            </button>
                          ))}

                          {Array.from({ length: calendarDaysInMonth }, (_, i) => {
                            const day = i + 1;
                            const date = new Date(calendarYear, calendarMonth, day);
                            const isToday = date.toDateString() === new Date().toDateString();
                            const isSelected = selectedStartDate?.toDateString() === date.toDateString();

                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => handleDateSelect(date)}
                                className={cn(
                                  "h-8 w-8 text-xs rounded-lg font-bold transition",
                                  isSelected
                                    ? "bg-indigo-600 text-white shadow-xs"
                                    : isToday
                                      ? "bg-cyan-100 text-cyan-900"
                                      : "text-slate-700 hover:bg-slate-100"
                                )}
                              >
                                {day}
                              </button>
                            );
                          })}

                          {calendarLeadingDays.map((day) => (
                            <button
                              key={`next-${day}`}
                              type="button"
                              className="h-8 w-8 text-xs text-slate-300 rounded-lg"
                              disabled
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <span className="text-[10px] md:text-xs text-slate-400 font-medium">
                  {formatDateRange()}
                </span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search meetings..."
              className="w-full sm:w-56 h-9 rounded-xl bg-slate-50 border border-slate-200 px-9 text-xs text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        {/* View Mode Pills */}
        <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1 border border-slate-200">
          {(["day", "week", "month"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setViewMode(mode)}
              className={`capitalize px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                viewMode === mode
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                  : "text-slate-500"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Main Calendar Grid Area */}
      <div className="bg-white shadow-xs overflow-hidden border-x border-b border-slate-200 rounded-b-3xl">
        <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className="text-center text-xs font-bold text-slate-700 py-3 border-r last:border-r-0 border-slate-200"
            >
              <span className="hidden md:inline">{day}</span>
              <span className="md:hidden">{daysOfWeekShort[index]}</span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {trailingDays.map((day) => (
            <div
              key={`prev-${day}`}
              className="min-h-[80px] p-3 border-r border-b border-slate-100 bg-slate-50/40 text-slate-300 text-xs font-bold"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedStartDate?.toDateString() === date.toDateString();

            return (
              <div
                key={day}
                className={cn(
                  "min-h-[80px] p-2.5 border-r border-b border-slate-100 bg-white flex flex-col justify-between transition-colors hover:bg-indigo-50/30",
                  isToday && "bg-indigo-50/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-bold rounded-lg px-1.5 py-0.5",
                      isToday
                        ? "bg-indigo-600 text-white"
                        : isSelected
                          ? "bg-slate-900 text-white"
                          : "text-slate-800"
                    )}
                  >
                    {day}
                  </span>
                  {isToday && (
                    <span className="text-[9px] font-bold text-indigo-600 uppercase">Today</span>
                  )}
                </div>

                {[15, 18, 24].includes(day) && (
                  <div className="mt-1 rounded-md bg-indigo-100 p-1 text-[10px] font-bold text-indigo-900 truncate">
                    Sprint Sync
                  </div>
                )}
              </div>
            );
          })}

          {leadingDays.map((day) => (
            <div
              key={`next-${day}`}
              className="min-h-[80px] p-3 border-r border-b border-slate-100 bg-slate-50/40 text-slate-300 text-xs font-bold"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
