import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay } from "@/components/ui/modal";
import {
  IconChevronDown,
  IconChevronRight,
  IconClock,
  IconLink,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { Dialog, DialogTrigger } from "react-aria-components";
import { useState } from "react";

interface CreateScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  selectedDate?: Date | null;
  onSave?: (data: ScheduleData) => void;
}

export interface ScheduleData {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  meetingLink: string;
  hosts: string[];
  description: string;
  color: "green" | "purple" | "blue";
}

export function CreateScheduleModal({
  isOpen,
  onOpenChange,
  selectedDate,
  onSave,
}: CreateScheduleModalProps) {
  const [selectedHosts, setSelectedHosts] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<"green" | "purple" | "blue">("green");
  const [formData, setFormData] = useState<ScheduleData>({
    title: "",
    date: selectedDate?.toISOString().split("T")[0] || "",
    startTime: "",
    endTime: "",
    meetingLink: "",
    hosts: [],
    description: "",
    color: "green",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ScheduleData = {
      ...formData,
      hosts: selectedHosts,
      color: selectedColor,
    };
    onSave?.(data);
    onOpenChange(false);
    // Reset form
    setFormData({
      title: "",
      date: selectedDate?.toISOString().split("T")[0] || "",
      startTime: "",
      endTime: "",
      meetingLink: "",
      hosts: [],
      description: "",
      color: "green",
    });
    setSelectedHosts([]);
    setSelectedColor("green");
  };

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <div style={{ display: "none" }} />
      <ModalOverlay className="grid center-grid items-center [--container:min(90%,--spacing(120))]">
        <Modal className="bg-white rounded-2xl shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
          <Dialog aria-label="Create Schedule" className="focus-visible:outline-none flex flex-col h-full max-h-[90vh]">
            {({ close }) => (
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Header - Fixed */}
                <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 flex-shrink-0">
                  <h2 className="text-xl font-semibold text-gray-900">Create Schedule</h2>
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

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 min-h-0">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="title" className="text-sm font-medium text-gray-700">
                        Tittle
                      </label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Type Tittle"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white transition"
                      />
                    </div>

                    {/* Start Time Section */}
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Start Time</label>
                      <div className="space-y-3">
                        {/* Date Input */}
                        <div className="relative">
                          <IconClock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white transition"
                          />
                        </div>
                        {/* Time Range Inputs */}
                        <div className="flex items-center gap-2">
                          <div className="relative flex-1">
                            <IconClock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                            <input
                              type="time"
                              placeholder="Start Time"
                              value={formData.startTime}
                              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white transition"
                            />
                          </div>
                          <button
                            type="button"
                            className="flex items-center justify-center size-8 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 transition flex-shrink-0"
                          >
                            <IconChevronRight className="size-4 text-gray-600" />
                          </button>
                          <div className="relative flex-1">
                            <IconClock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                            <input
                              type="time"
                              placeholder="End Time"
                              value={formData.endTime}
                              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                              className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white transition"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meeting Link Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="meetingLink" className="text-sm font-medium text-gray-700">
                        Meeting Link
                      </label>
                      <div className="relative">
                        <IconLink className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                        <input
                          type="url"
                          id="meetingLink"
                          placeholder="Paste Google Meet / Zoom Link"
                          value={formData.meetingLink}
                          onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Hosted by Section */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="hostedBy" className="text-sm font-medium text-gray-700">
                        Hosted by
                      </label>
                      <div className="relative">
                        <IconUsers className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                        <select
                          id="hostedBy"
                          className="w-full pl-11 pr-10 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white appearance-none transition"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value && !selectedHosts.includes(value)) {
                              setSelectedHosts([...selectedHosts, value]);
                            }
                            e.target.value = "";
                          }}
                        >
                          <option value="">Select Hosted</option>
                          <option value="Shyed Design">Shyed Design</option>
                          <option value="Abu booker">Abu booker</option>
                        </select>
                        <IconChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                      </div>
                      {/* Selected Host Tags */}
                      {selectedHosts.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedHosts.map((host, index) => {
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
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${colorClass} flex items-center gap-2`}
                              >
                                {host}
                                <button
                                  type="button"
                                  onClick={() => setSelectedHosts(selectedHosts.filter((h) => h !== host))}
                                  className="hover:opacity-70 transition"
                                >
                                  <IconX className="size-3" />
                                </button>
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Description Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="description" className="text-sm font-medium text-gray-700">
                        Discription
                      </label>
                      <textarea
                        id="description"
                        placeholder="Type Discription"
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-gray-100 focus:bg-white resize-none transition"
                      />
                      {/* Color Swatches */}
                      <div className="flex items-center gap-2 mt-2">
                        {[
                          { color: "green" as const, bg: "bg-green-400" },
                          { color: "purple" as const, bg: "bg-purple-400" },
                          { color: "blue" as const, bg: "bg-blue-400" },
                        ].map(({ color, bg }) => (
                          <button
                            key={color}
                            type="button"
                            onClick={() => setSelectedColor(color)}
                            className={`size-8 rounded-full ${bg} border-2 transition ${
                              selectedColor === color
                                ? "border-gray-900 scale-110"
                                : "border-transparent hover:scale-105"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Save Button */}
                    <Button type="submit" className={{ base: "w-full py-3 mt-2 mb-4" }} color="black">
                      Save
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

