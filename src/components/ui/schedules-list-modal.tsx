import { IconEdit, IconTrash, IconX } from "@tabler/icons-react";
import { Dialog, Heading } from "react-aria-components";
import { Button } from "./button";
import { Modal, ModalOverlay } from "./modal";
import { cn } from "@/lib/utils";
import type { CalendarEvent } from "@/routes/(2col)/calendar/index";

interface SchedulesListModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  schedules: CalendarEvent[];
  onEdit: (event: CalendarEvent) => void;
  onDelete: (event: CalendarEvent) => void;
  onView: (event: CalendarEvent) => void;
  onAddNote?: () => void;
}

export function SchedulesListModal({
  isOpen,
  onOpenChange,
  schedules,
  onEdit,
  onDelete,
  onView,
  onAddNote,
}: SchedulesListModalProps) {
  return (
    <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal className="max-w-md w-full bg-white rounded-[40px] p-10 focus-visible:outline-none">
        <Dialog className="focus-visible:outline-none">
          {({ close }) => (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <Heading slot="title" className="text-2xl font-bold text-gray-900">
                  Total Schedule
                </Heading>
                <button
                  type="button"
                  onClick={close}
                  className="size-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                >
                  <IconX className="size-6" />
                </button>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {schedules.length > 0 ? (
                  schedules.map((schedule) => (
                    <div
                      key={schedule.id}
                      onClick={() => onView(schedule)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl relative transition-all hover:scale-[1.01] cursor-pointer group",
                        schedule.color === "blue" && "bg-blue-100/70 hover:bg-blue-100",
                        schedule.color === "purple" && "bg-indigo-100/70 hover:bg-indigo-100",
                        schedule.color === "green" && "bg-green-100/70 hover:bg-green-100"
                      )}
                    >
                      <div className="space-y-1">
                        <p
                          className={cn(
                            "font-bold text-base",
                            schedule.color === "blue" && "text-blue-700",
                            schedule.color === "purple" && "text-indigo-700",
                            schedule.color === "green" && "text-green-700"
                          )}
                        >
                          {schedule.title}
                        </p>
                        <p className="text-xs font-medium opacity-60">
                          {schedule.startTime} AM - {schedule.endTime} AM
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDelete(schedule);
                          }}
                          className="size-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition shadow-sm"
                        >
                          <IconTrash className="size-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEdit(schedule);
                          }}
                          className="size-8 rounded-lg flex items-center justify-center text-gray-700 border border-gray-900/10 hover:bg-white/50 transition shadow-sm"
                        >
                          <IconEdit className="size-5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-400 font-medium italic">No schedules for this day.</p>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  color="black"
                  className={{ base: "w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-black/10" }}
                  onPress={onAddNote}
                >
                  Add Note
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
