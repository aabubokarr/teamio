import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay } from "@/components/ui/modal";
import {
  IconClock,
  IconDotsVertical,
  IconLink,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { Dialog, DialogTrigger } from "react-aria-components";
import Avatar from "boring-avatars";
import type { ScheduleData } from "./create-schedule-modal";

interface ViewScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  scheduleData: ScheduleData & {
    createdBy?: {
      name: string;
      role: string;
      avatar?: string;
    };
  };
  onEdit?: () => void;
}

export function ViewScheduleModal({
  isOpen,
  onOpenChange,
  scheduleData,
  onEdit,
}: ViewScheduleModalProps) {
  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "pm" : "am";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const createdBy = scheduleData.createdBy || {
    name: "Muhammad Shyed",
    role: "Designer",
  };

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <div style={{ display: "none" }} />
      <ModalOverlay className="grid center-grid items-center [--container:min(90%,--spacing(120))]">
        <Modal className="bg-white rounded-2xl shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
          <Dialog aria-label="View Schedule" className="focus-visible:outline-none flex flex-col h-full">
            {({ close }) => (
              <div className="flex flex-col h-full">
                {/* Header - Fixed */}
                <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 flex-shrink-0">
                  <h2 className="text-xl font-semibold text-gray-900">{scheduleData.title}</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="icon" color="white" isRounded>
                      <Icon>
                        <IconDotsVertical className="size-4" />
                      </Icon>
                    </Button>
                    <Button
                      variant="icon"
                      color="white"
                      isRounded
                      onPress={() => {
                        onOpenChange(false);
                        close();
                      }}
                    >
                      <Icon>
                        <IconX className="size-4" />
                      </Icon>
                    </Button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="space-y-6">
                    {/* Meeting Created by */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-sm font-medium text-gray-700">Meeting Created by</h3>
                      <div className="flex items-center gap-3">
                        <Avatar
                          name={createdBy.name}
                          variant="beam"
                          className="size-12"
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-gray-900">{createdBy.name}</p>
                          <p className="text-xs text-gray-500">{createdBy.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Start Time */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <IconClock className="size-5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">Start Time:</span>
                        <span className="text-sm text-gray-900">
                          {formatTime(scheduleData.startTime)}
                        </span>
                      </div>
                    </div>

                    {/* End Time */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <IconClock className="size-5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">End Time:</span>
                        <span className="text-sm text-gray-900">
                          {formatTime(scheduleData.endTime)}
                        </span>
                      </div>
                    </div>

                    {/* Meeting Link */}
                    {scheduleData.meetingLink && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <IconLink className="size-5 text-gray-400" />
                          <a
                            href={scheduleData.meetingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline break-all"
                          >
                            {scheduleData.meetingLink}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Hosted */}
                    {scheduleData.hosts && scheduleData.hosts.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-2">
                          <IconUsers className="size-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">Hosted</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {scheduleData.hosts.map((host, index) => {
                            const colors = [
                              "bg-yellow-100 text-gray-700",
                              "bg-blue-100 text-gray-700",
                              "bg-green-100 text-gray-700",
                              "bg-purple-100 text-gray-700",
                            ];
                            const colorClass = colors[index % colors.length];
                            return (
                              <span
                                key={`${host}-${index}`}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${colorClass}`}
                              >
                                {host}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {scheduleData.description && (
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium text-gray-700">Discription</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {scheduleData.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer - Fixed */}
                <div className="p-6 pt-4 border-t border-gray-100 flex-shrink-0">
                  <Button
                    className={{ base: "w-full py-3" }}
                    color="black"
                    onPress={() => {
                      onEdit?.();
                      onOpenChange(false);
                      close();
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

