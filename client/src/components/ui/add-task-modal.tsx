import { Modal, ModalOverlay } from "@/components/ui/modal";
import { Dialog, DialogTrigger } from "react-aria-components";
import { IconX, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

interface AddTaskModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function AddTaskModal({ isOpen, onOpenChange }: AddTaskModalProps) {
  const [formData, setFormData] = useState({
      taskName: "",
      tag: "To-do",
      assignTo: "",
      project: "Shyed Design",
      priority: "High Priority",
      description: ""
  });

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <div style={{ display: "none" }} />
      <ModalOverlay className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
        <Modal className="bg-white rounded-[24px] shadow-2xl w-full max-w-[800px] overflow-hidden outline-none">
          <Dialog className="outline-none flex flex-col p-6 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar" aria-label="Add Task">
            {({ close }) => (
              <div className="space-y-6 md:space-y-8">
                 {/* Header */}
                 <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         {/* Project Logo/Brand */}
                         <div className="size-8 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
                             <span className="font-bold text-xs tracking-tighter">Sh</span>
                         </div>
                         <span className="text-[15px] font-semibold text-[#1A1D1F]">Shyed Project</span>
                     </div>
                     <button 
                        onClick={() => close()}
                        className="size-8 rounded-full bg-white border border-[#EFEFEF] flex items-center justify-center hover:bg-gray-50 transition shrink-0"
                     >
                         <IconX className="size-4 text-[#747786]" />
                     </button>
                 </div>

                 {/* Title */}
                 <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1D1F] tracking-tight mb-2">Add Task</h2>

                 {/* Form Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-5 md:gap-y-6">
                     {/* Task Name */}
                     <div className="space-y-2">
                         <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Task name</label>
                         <input 
                            type="text" 
                            placeholder="Type your Task Name" 
                            className="w-full h-[48px] md:h-[52px] bg-[#F9F9F9] rounded-[12px] px-4 text-[14px] md:text-[15px] text-[#1A1D1F] placeholder:text-[#747786] outline-none focus:ring-1 focus:ring-gray-200 transition"
                            value={formData.taskName}
                            onChange={e => setFormData({...formData, taskName: e.target.value})}
                         />
                     </div>

                     {/* Tag */}
                     <div className="space-y-2">
                         <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Tag</label>
                         <div className="relative">
                             <button className="w-full h-[48px] md:h-[52px] bg-[#F9F9F9] rounded-[12px] px-4 flex items-center justify-between transition hover:bg-gray-100">
                                 <div className="flex items-center gap-2">
                                     <div className="size-3.5 rounded-full bg-[#FFD600]" /> {/* Yellow for To-do */}
                                     <span className="text-[14px] md:text-[15px] font-medium text-[#1A1D1F]">To-do</span>
                                 </div>
                                 <IconChevronDown className="size-4 md:size-5 text-[#747786]" />
                             </button>
                         </div>
                     </div>

                     {/* Assign to */}
                     <div className="space-y-2">
                         <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Assign to</label>
                         <input 
                            type="text" 
                            placeholder="Type Name" 
                            className="w-full h-[48px] md:h-[52px] bg-[#F9F9F9] rounded-[12px] px-4 text-[14px] md:text-[15px] text-[#1A1D1F] placeholder:text-[#747786] outline-none focus:ring-1 focus:ring-gray-200 transition"
                            value={formData.assignTo}
                            onChange={e => setFormData({...formData, assignTo: e.target.value})}
                         />
                     </div>

                     {/* Project */}
                     <div className="space-y-2">
                         <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Project</label>
                         <div className="relative">
                             <button className="w-full h-[48px] md:h-[52px] bg-[#F9F9F9] rounded-[12px] px-4 flex items-center justify-between transition hover:bg-gray-100">
                                 <div className="flex items-center gap-2">
                                     <div className="size-6 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
                                         <span className="font-bold text-[8px] tracking-tighter">Sh</span>
                                     </div>
                                     <span className="text-[14px] md:text-[15px] font-medium text-[#1A1D1F]">Shyed Design</span>
                                 </div>
                                 <IconChevronDown className="size-4 md:size-5 text-[#747786]" />
                             </button>
                         </div>
                     </div>

                     {/* Priority */}
                     <div className="space-y-2">
                         <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Priority</label>
                          <div className="relative">
                             <div className="w-full h-[48px] md:h-[52px] bg-[#F9F9F9] rounded-[12px] px-4 flex items-center justify-between cursor-text">
                                 <span className="text-[14px] md:text-[15px] font-medium text-[#747786]">High Priority</span>
                             </div>
                         </div>
                     </div>

                     {/* Empty Cell for grid alignment on desktop */}
                     <div className="hidden md:block"></div>
                 </div>
                 
                 {/* Task Description - Full Width */}
                 <div className="space-y-2">
                     <label className="text-[14px] md:text-[15px] font-bold text-[#1A1D1F]">Task Description</label>
                     <textarea 
                        placeholder="Type your Description" 
                        rows={5}
                        className="w-full bg-[#F9F9F9] rounded-[12px] p-4 text-[14px] md:text-[15px] text-[#1A1D1F] placeholder:text-[#747786] outline-none focus:ring-1 focus:ring-gray-200 transition resize-none"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                     />
                 </div>

                 {/* Create Task Button */}
                 <button className="w-full h-[52px] md:h-[56px] bg-black text-white rounded-[14px] text-[15px] md:text-[16px] font-bold hover:bg-gray-800 transition shadow-lg shadow-black/5">
                     Create Task
                 </button>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
