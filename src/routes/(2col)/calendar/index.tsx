import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { CreateScheduleModal, type ScheduleData } from "@/components/ui/create-schedule-modal";
import { EditScheduleModal } from "@/components/ui/edit-schedule-modal";
import { ViewScheduleModal } from "@/components/ui/view-schedule-modal";
import { DeleteTaskModal } from "@/components/ui/delete-task-modal";
import { SchedulesListModal } from "@/components/ui/schedules-list-modal";
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

export interface CalendarEvent extends Omit<ScheduleData, "date"> {
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSchedulesListModal, setShowSchedulesListModal] = useState(false);
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

  const handleDeleteSchedule = () => {
    if (!selectedEvent) return;
    setSchedules(schedules.filter((event) => event.id !== selectedEvent.id));
    setSelectedEvent(null);
    setShowDeleteModal(false);
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
    <div className="space-y-0 font-lufga px-4 md:px-0">
      {/* Top Bar Header */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-4 bg-white p-4 rounded-t-3xl border-x border-t transition-all" style={{ borderColor: "#ededed" }}>
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center size-10 rounded-xl bg-white border border-gray-100 hover:bg-gray-50 transition shadow-sm"
              >
                <IconCalendar className="size-6 text-gray-700" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-base md:text-lg font-bold text-gray-900">{monthName}</span>
                  <div className="relative" ref={calendarRef}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!showCalendarDropdown && selectedStartDate) {
                          setCalendarViewDate(selectedStartDate);
                        }
                        setShowCalendarDropdown(!showCalendarDropdown);
                      }}
                      className="flex items-center justify-center size-6 rounded-full hover:bg-gray-100 transition"
                    >
                      <IconChevronDown className="size-4 text-gray-400" />
                    </button>
                    {/* Calendar Dropdown */}
                    {showCalendarDropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl p-5 z-50 w-[300px] border border-gray-100">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-base font-bold text-gray-900">{calendarMonthName}</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => navigateCalendarMonth("prev")}
                              className="flex items-center justify-center size-8 rounded-full hover:bg-gray-50 transition text-gray-500 border border-transparent hover:border-gray-100"
                            >
                              <IconChevronLeft className="size-5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => navigateCalendarMonth("next")}
                              className="flex items-center justify-center size-8 rounded-full hover:bg-gray-50 transition text-gray-500 border border-transparent hover:border-gray-100"
                            >
                              <IconChevronRight className="size-5" />
                            </button>
                          </div>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-1 mb-3">
                          {daysOfWeekShort.map((day) => (
                            <div
                              key={day}
                              className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                          {/* Previous month trailing days */}
                          {calendarTrailingDays.map((day) => (
                            <button
                              key={`prev-${day}`}
                              type="button"
                              className="size-9 text-sm text-gray-300 rounded-lg transition"
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
                                className={cn(
                                  "size-9 text-sm rounded-lg transition font-medium",
                                  isToday
                                    ? "bg-green-500 text-white shadow-md shadow-green-100"
                                    : "text-gray-700 hover:bg-gray-50"
                                )}
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
                              className="size-9 text-sm text-gray-300 rounded transition"
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
                <span className="text-[10px] md:text-xs text-gray-400 font-medium">{formatDateRange()}</span>
              </div>
            </div>
          </div>
          
          <div className="relative ml-4">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-full sm:w-56 h-10 rounded-xl bg-gray-50/50 border border-transparent px-10 py-2 text-sm text-gray-600 outline-none ring-0 transition focus:bg-white focus:border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 w-full lg:w-auto">
          <div className="flex-1 lg:flex-none flex items-center gap-1 bg-gray-50 rounded-xl p-1 border border-gray-100">
            <button
              type="button"
              onClick={() => setViewMode("day")}
              className={`flex-1 lg:flex-none px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition ${
                viewMode === "day"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                  : "text-gray-400"
              }`}
            >
              Day
            </button>
            <button
              type="button"
              onClick={() => setViewMode("week")}
              className={`flex-1 lg:flex-none px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition ${
                viewMode === "week"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                  : "text-gray-400"
              }`}
            >
              Week
            </button>
            <button
              type="button"
              onClick={() => setViewMode("month")}
              className={`flex-1 lg:flex-none px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition ${
                viewMode === "month"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                  : "text-gray-400"
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
            className={{ base: "size-12 bg-black hover:bg-gray-800 text-white shadow-lg" }}
            onPress={() => {
              setSelectedDateForSchedule(selectedDateForSchedule || new Date());
              setShowCreateModal(true);
            }}
          >
            <Icon>
              <IconPlus className="size-6" />
            </Icon>
          </Button>
        </div>
      </div>

      {/* Main Calendar Grid Area */}
      <div className="bg-white shadow-sm overflow-hidden border-x border-b rounded-b-3xl" style={{ borderColor: "#ededed" }}>
        {/* Days of Week Header */}
        <div className="grid grid-cols-7 border-y bg-gray-50" style={{ borderColor: "#ededed" }}>
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className="text-center text-xs md:text-[13px] font-bold text-gray-900 py-4 border-r last:border-r-0"
              style={{ borderColor: "#ededed" }}
            >
              <span className="hidden md:inline">{day}</span>
              <span className="md:hidden">{daysOfWeekShort[index]}</span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {/* Previous month trailing days */}
          {trailingDays.map((day) => (
            <div
              key={`prev-${day}`}
              className="min-h-[120px] p-4 border-r border-b bg-white flex flex-col items-center"
              style={{ borderColor: "#ededed" }}
            >
              <span className="text-sm font-bold text-gray-300">{day}</span>
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
                onClick={() => {
                  setSelectedDateForSchedule(date);
                  if (dayEvents.length > 0) {
                    setShowSchedulesListModal(true);
                  }
                }}
                className={cn(
                  "min-h-[120px] p-3 border-r border-b bg-white flex flex-col group transition-colors hover:bg-gray-50/50",
                  isToday && "bg-blue-50/30"
                )}
                style={{ borderColor: "#ededed" }}
              >
                <span
                  className={cn(
                    "text-sm font-bold text-center block mb-2 transition-colors",
                    isToday ? "text-blue-600" : "text-gray-900"
                  )}
                >
                  {day}
                </span>
                <div className="space-y-1.5 overflow-hidden">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewEvent(event);
                      }}
                      className={cn(
                        "text-[10px] md:text-[11px] font-bold px-2 py-1.5 rounded-md truncate cursor-pointer transition-all hover:scale-[1.02] active:scale-95 shadow-sm",
                        event.color === "purple" && "bg-indigo-100/80 text-indigo-600 border border-indigo-200/50",
                        event.color === "blue" && "bg-blue-100/80 text-blue-600 border border-blue-200/50",
                        event.color === "green" && "bg-green-100/80 text-green-600 border border-green-200/50"
                      )}
                      title={`${event.title} (${event.startTime} - ${event.endTime})`}
                    >
                      {event.title}
                      <p className="text-[9px] opacity-70 font-medium">9:00 AM - 9:30 AM</p>
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
              className="min-h-[120px] p-4 border-r border-b bg-white flex flex-col items-center"
              style={{ borderColor: "#ededed" }}
            >
              <span className="text-sm font-bold text-gray-300">{day}</span>
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

      {/* Delete Schedule Confirmation */}
      {selectedEvent && (
        <DeleteTaskModal
          isOpen={showDeleteModal}
          onOpenChange={setShowDeleteModal}
          onConfirm={handleDeleteSchedule}
        />
      )}

      {/* Schedules List Modal */}
      <SchedulesListModal
        isOpen={showSchedulesListModal}
        onOpenChange={setShowSchedulesListModal}
        schedules={selectedDateForSchedule ? getEventsForDate(selectedDateForSchedule) : []}
        onEdit={(event) => {
          setSelectedEvent(event);
          setShowSchedulesListModal(false);
          setShowEditModal(true);
        }}
        onDelete={(event) => {
          setSelectedEvent(event);
          setShowSchedulesListModal(false);
          setShowDeleteModal(true);
        }}
        onView={(event) => {
          handleViewEvent(event);
          setShowSchedulesListModal(false);
        }}
        onAddNote={() => {
          setShowSchedulesListModal(false);
          setShowCreateModal(true);
        }}
      />
    </div>
  );
}

