import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { CreateScheduleModal, type ScheduleData } from "@/components/ui/create-schedule-modal";
import { EditScheduleModal } from "@/components/ui/edit-schedule-modal";
import { ViewScheduleModal } from "@/components/ui/view-schedule-modal";
import {
  IconCalendar,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/_2col-layout/calendar")({
  component: RouteComponent,
});

interface CalendarEvent extends Omit<ScheduleData, "date"> {
  id: string;
  date: Date;
  createdBy?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Design System",
    date: new Date(2023, 8, 6),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "https://meet.google.com/fcc-mkuq-qoe",
    hosts: ["Shyed Design", "Abu booker", "Abu booker", "Abu booker"],
    description: "The procedures and prescriptions you need. With doctors and destinations you'll love. For a fraction of what it would normally cost.",
    color: "purple",
    createdBy: {
      name: "Muhammad Shyed",
      role: "Designer",
    },
  },
  {
    id: "2",
    title: "Collage Presentation",
    date: new Date(2023, 8, 8),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "blue",
  },
  {
    id: "3",
    title: "Design System - 2",
    date: new Date(2023, 8, 11),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "green",
  },
  {
    id: "4",
    title: "Design System",
    date: new Date(2023, 8, 16),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "purple",
  },
  {
    id: "5",
    title: "Design System - 2",
    date: new Date(2023, 8, 16),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "green",
  },
  {
    id: "6",
    title: "Collage Presentation",
    date: new Date(2023, 8, 25),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "blue",
  },
  {
    id: "7",
    title: "Design System - 2",
    date: new Date(2023, 8, 28),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "green",
  },
  {
    id: "8",
    title: "Design System - 2",
    date: new Date(2023, 9, 3),
    startTime: "09:00",
    endTime: "09:30",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "green",
  },
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const daysOfWeekShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function RouteComponent() {
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const currentMonthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  const [currentDate, setCurrentDate] = useState(currentMonthStart);
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("month");
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  const [calendarViewDate, setCalendarViewDate] = useState(currentMonthStart);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(currentMonthStart);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(currentMonthEnd);
  const [selectedDateForSchedule, setSelectedDateForSchedule] = useState<Date | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [schedules, setSchedules] = useState<CalendarEvent[]>(events);
  const calendarRef = useRef<HTMLDivElement>(null);

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
    return schedules.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleCreateSchedule = (data: ScheduleData) => {
    const newEvent: CalendarEvent = {
      id: Date.now().toString(),
      ...data,
      date: new Date(data.date),
      createdBy: {
        name: "Muhammad Shyed",
        role: "Designer",
      },
    };
    setSchedules([...schedules, newEvent]);
  };

  const handleEditSchedule = (data: ScheduleData) => {
    if (!selectedEvent) return;
    const updatedSchedules = schedules.map((event) =>
      event.id === selectedEvent.id
        ? {
            ...event,
            ...data,
            date: new Date(data.date),
          }
        : event
    );
    setSchedules(updatedSchedules);
    setSelectedEvent(null);
  };

  const handleViewEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setShowViewModal(true);
  };

  const handleEditFromView = () => {
    if (selectedEvent) {
      setShowViewModal(false);
      setShowEditModal(true);
    }
  };

  const getEventColorClass = (color: "purple" | "blue" | "green") => {
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
    if (selectedStartDate && selectedEndDate) {
      const startFormatted = selectedStartDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
      const endFormatted = selectedEndDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
      return `${startFormatted} - ${endFormatted}`;
    }
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);
    const startFormatted = start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
    const endFormatted = end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");
    return `${startFormatted} - ${endFormatted}`;
  };

  // Close calendar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
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

  // Calendar widget functions
  const calendarMonth = calendarViewDate.getMonth();
  const calendarYear = calendarViewDate.getFullYear();
  const calendarMonthName = calendarViewDate.toLocaleString("default", { month: "long", year: "numeric" });

  const calendarFirstDay = new Date(calendarYear, calendarMonth, 1);
  const calendarLastDay = new Date(calendarYear, calendarMonth + 1, 0);
  const calendarDaysInMonth = calendarLastDay.getDate();
  const calendarFirstDayOfWeek = (calendarFirstDay.getDay() + 6) % 7; // Convert to Monday = 0

  const navigateCalendarMonth = (direction: "prev" | "next") => {
    setCalendarViewDate(new Date(calendarYear, calendarMonth + (direction === "next" ? 1 : -1), 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(calendarYear, calendarMonth, day);
    
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // Start new selection
      setSelectedStartDate(clickedDate);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      // Complete selection
      if (clickedDate < selectedStartDate) {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(clickedDate);
      } else {
        setSelectedEndDate(clickedDate);
      }
      // Update main calendar view to show the selected range
      if (clickedDate < selectedStartDate) {
        setCurrentDate(clickedDate);
      } else {
        setCurrentDate(selectedStartDate);
      }
      // Close dropdown after selection
      setShowCalendarDropdown(false);
    }
  };

  // Get previous month's trailing days for calendar widget
  const calendarPrevMonth = new Date(calendarYear, calendarMonth - 1, 0);
  const calendarDaysInPrevMonth = calendarPrevMonth.getDate();
  const calendarTrailingDays: number[] = [];
  for (let i = calendarFirstDayOfWeek - 1; i >= 0; i--) {
    calendarTrailingDays.push(calendarDaysInPrevMonth - i);
  }

  // Get next month's leading days for calendar widget
  const calendarTotalCells = Math.ceil((calendarFirstDayOfWeek + calendarDaysInMonth) / 7) * 7;
  const calendarLeadingDays: number[] = [];
  const calendarLeadingDaysCount = calendarTotalCells - (calendarFirstDayOfWeek + calendarDaysInMonth);
  for (let i = 1; i <= calendarLeadingDaysCount; i++) {
    calendarLeadingDays.push(i);
  }

  return (
    <div className="space-y-6 font-lufga">
      {/* Top Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center size-8 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
              >
                <IconCalendar className="size-4 text-gray-700" />
              </button>
              <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">{monthName}</span>
              <span className="text-xs text-gray-600">{formatDateRange()}</span>
              </div>
              <div className="relative" ref={calendarRef}>
                <button
                  type="button"
                  onClick={() => {
                    if (!showCalendarDropdown && selectedStartDate) {
                      setCalendarViewDate(selectedStartDate);
                    }
                    setShowCalendarDropdown(!showCalendarDropdown);
                  }}
                  className="flex items-center justify-center size-8 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
                >
                  <IconChevronDown className="size-4 text-gray-700" />
                </button>
                
                {/* Calendar Dropdown */}
                {showCalendarDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-50 w-[280px]">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-900">{calendarMonthName}</span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => navigateCalendarMonth("prev")}
                          className="flex items-center justify-center size-7 rounded-full hover:bg-gray-100 transition text-gray-600"
                        >
                          <IconChevronLeft className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => navigateCalendarMonth("next")}
                          className="flex items-center justify-center size-7 rounded-full hover:bg-gray-100 transition text-gray-600"
                        >
                          <IconChevronRight className="size-4" />
                        </button>
                      </div>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-0 mb-2">
                      {daysOfWeekShort.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-normal text-gray-500 py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-0">
                      {/* Previous month trailing days */}
                      {calendarTrailingDays.map((day) => (
                        <button
                          key={`prev-${day}`}
                          type="button"
                          className="size-8 text-sm text-gray-400 rounded transition"
                          disabled
                        >
                          {day}
                        </button>
                      ))}

                      {/* Current month days */}
                      {Array.from({ length: calendarDaysInMonth }, (_, i) => {
                        const day = i + 1;
                        const date = new Date(calendarYear, calendarMonth, day);
                        const isToday = date.toDateString() === new Date().toDateString();

                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => handleDateClick(day)}
                            className={`size-8 text-sm rounded-full transition ${
                              isToday
                                ? "bg-green-400 text-white font-medium"
                                : "text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}

                      {/* Next month leading days */}
                      {calendarLeadingDays.map((day) => (
                        <button
                          key={`next-${day}`}
                          type="button"
                          className="size-8 text-sm text-gray-400 rounded transition"
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
                onClick={(e) => {
                  // Only open create modal if clicking on the date cell itself, not on events
                  if (e.target === e.currentTarget || (e.target as HTMLElement).tagName === "SPAN") {
                    setSelectedDateForSchedule(date);
                    setShowCreateModal(true);
                  }
                }}
                className={`min-h-24 p-2 rounded-lg border flex flex-col ${
                  isToday 
                    ? "bg-blue-50 border-blue-200" 
                    : "bg-white border-transparent hover:border-gray-200"
                }`}
              >
                <span
                  className={`text-sm font-medium text-center cursor-pointer ${
                    isToday ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {day}
                </span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewEvent(event);
                      }}
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

      {/* Create Schedule Modal */}
      <CreateScheduleModal
        isOpen={showCreateModal}
        onOpenChange={setShowCreateModal}
        selectedDate={selectedDateForSchedule}
        onSave={handleCreateSchedule}
      />

      {/* Edit Schedule Modal */}
      {selectedEvent && (
        <EditScheduleModal
          isOpen={showEditModal}
          onOpenChange={setShowEditModal}
          scheduleData={{
            title: selectedEvent.title,
            date: selectedEvent.date.toISOString().split("T")[0],
            startTime: selectedEvent.startTime,
            endTime: selectedEvent.endTime,
            meetingLink: selectedEvent.meetingLink || "",
            hosts: selectedEvent.hosts || [],
            description: selectedEvent.description || "",
            color: selectedEvent.color,
          }}
          onSave={handleEditSchedule}
        />
      )}

      {/* View Schedule Modal */}
      {selectedEvent && (
        <ViewScheduleModal
          isOpen={showViewModal}
          onOpenChange={setShowViewModal}
          scheduleData={{
            title: selectedEvent.title,
            date: selectedEvent.date.toISOString().split("T")[0],
            startTime: selectedEvent.startTime,
            endTime: selectedEvent.endTime,
            meetingLink: selectedEvent.meetingLink || "",
            hosts: selectedEvent.hosts || [],
            description: selectedEvent.description || "",
            color: selectedEvent.color,
            createdBy: selectedEvent.createdBy,
          }}
          onEdit={handleEditFromView}
        />
      )}

    </div>
  );
}

