import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  IconCalendar,
  IconChevronDown,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_2col-layout/calendar")({
  component: RouteComponent,
});

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  color: "purple" | "blue" | "green";
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Design System",
    date: new Date(2023, 8, 6), // September 6, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "purple",
  },
  {
    id: "2",
    title: "Collage Presentation",
    date: new Date(2023, 8, 8), // September 8, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "blue",
  },
  {
    id: "3",
    title: "Design System - 2",
    date: new Date(2023, 8, 11), // September 11, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "green",
  },
  {
    id: "4",
    title: "Design System",
    date: new Date(2023, 8, 16), // September 16, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "purple",
  },
  {
    id: "5",
    title: "Design System - 2",
    date: new Date(2023, 8, 16), // September 16, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "green",
  },
  {
    id: "6",
    title: "Collage Presentation",
    date: new Date(2023, 8, 25), // September 25, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "blue",
  },
  {
    id: "7",
    title: "Design System - 2",
    date: new Date(2023, 8, 28), // September 28, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "green",
  },
  {
    id: "8",
    title: "Design System - 2",
    date: new Date(2023, 9, 3), // October 3, 2023
    startTime: "9:00 AM",
    endTime: "9:30 AM",
    color: "green",
  },
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function RouteComponent() {
  const [currentDate] = useState(new Date(2023, 8, 1)); // September 2023
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  
  // Get the day of week for the first day (0 = Sunday, we need Monday = 0)
  const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Convert to Monday = 0

  // Get previous month's trailing days
  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();
  const trailingDays: number[] = [];
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    trailingDays.push(daysInPrevMonth - i);
  }

  // Get next month's leading days
  const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;
  const leadingDays: number[] = [];
  const leadingDaysCount = totalCells - (firstDayOfWeek + daysInMonth);
  for (let i = 1; i <= leadingDaysCount; i++) {
    leadingDays.push(i);
  }

  // Get events for a specific date
  const getEventsForDate = (date: Date): CalendarEvent[] => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventColorClass = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-500";
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-400";
      default:
        return "bg-gray-500";
    }
  };

  const formatDateRange = () => {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);
    const startFormatted = start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
    const endFormatted = end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
    return `${startFormatted} - ${endFormatted}`;
  };

  return (
    <div className="space-y-6 font-lufga">
      {/* Top Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <IconCalendar className="size-5 text-gray-900" />
            <span className="text-lg font-semibold text-gray-900">{monthName}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
            <span className="text-sm text-gray-600">{formatDateRange()}</span>
            <IconChevronDown className="size-4 text-gray-600" />
          </div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-48 rounded-full bg-off-white px-10 py-2 text-sm text-gray-600 outline-none ring-0 transition focus:bg-white focus:ring-2 focus:ring-gray-100"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setViewMode("day")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                viewMode === "day"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Day
            </button>
            <button
              type="button"
              onClick={() => setViewMode("week")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                viewMode === "week"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Week
            </button>
            <button
              type="button"
              onClick={() => setViewMode("month")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                viewMode === "month"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Month
            </button>
          </div>
          <Button
            type="button"
            variant="icon"
            color="black"
            isRounded
            className={{ base: "size-10" }}
          >
            <Icon>
              <IconPlus className="size-5" />
            </Icon>
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="rounded-3xl bg-white p-6 shadow-sm" style={{ border: "var(--border-secondary)" }}>
        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {/* Previous month trailing days */}
          {trailingDays.map((day) => (
            <div
              key={`prev-${day}`}
              className="min-h-24 p-2 rounded-lg bg-gray-50 flex flex-col"
            >
              <span className="text-sm text-gray-400 text-center">{day}</span>
            </div>
          ))}

          {/* Current month days */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const dayEvents = getEventsForDate(date);
            const isToday =
              date.toDateString() === new Date().toDateString();

            return (
              <div
                key={day}
                className={`min-h-24 p-2 rounded-lg border flex flex-col ${
                  isToday 
                    ? "bg-blue-50 border-blue-200" 
                    : "bg-white border-transparent hover:border-gray-200"
                }`}
              >
                <span
                  className={`text-sm font-medium text-center ${
                    isToday ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {day}
                </span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`${getEventColorClass(
                        event.color
                      )} text-white text-xs px-2 py-1 rounded truncate cursor-pointer hover:opacity-90 transition`}
                      title={`${event.title} (${event.startTime} - ${event.endTime})`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Next month leading days */}
          {leadingDays.map((day) => (
            <div
              key={`next-${day}`}
              className="min-h-24 p-2 rounded-lg bg-gray-50 flex flex-col"
            >
              <span className="text-sm text-gray-400 text-center">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

