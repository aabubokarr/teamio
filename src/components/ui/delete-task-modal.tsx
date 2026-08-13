
import { Modal, ModalOverlay } from "@/components/ui/modal";
import { Dialog, DialogTrigger } from "react-aria-components";
import { IconTrash } from "@tabler/icons-react";

interface DeleteTaskModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: () => void;
}

export function DeleteTaskModal({ isOpen, onOpenChange, onConfirm }: DeleteTaskModalProps) {
  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
       <div style={{ display: "none" }} />
       <ModalOverlay className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">
         <Modal className="bg-white rounded-[24px] shadow-2xl w-full max-w-[340px] overflow-hidden outline-none">
           <Dialog className="outline-none flex flex-col items-center p-8 text-center" aria-label="Delete Task">
             {({ close }) => (
               <div className="flex flex-col items-center w-full">
                  {/* Icon */}
                  <div className="size-[84px] rounded-[28px] bg-gradient-to-b from-[#4ADE80] to-[#15803D] flex items-center justify-center mb-5 shadow-lg shadow-green-500/20">
                      <IconTrash className="size-10 text-white" stroke={2} />
                  </div>

                  {/* Title */}
                  <h2 className="text-[24px] font-bold text-black mb-2 tracking-tight">Delete Task</h2>

                  {/* Message */}
                  <p className="text-[15px] font-medium text-gray-900 leading-relaxed mb-8 max-w-[200px]">
                      Are you sure you want to delete this task?
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 w-full">
                      <button 
                         onClick={() => close()}
                         className="flex-1 h-[44px] rounded-[12px] border border-gray-200 text-[15px] font-medium text-gray-500 hover:bg-gray-50 transition"
                      >
                          Cancel
                      </button>
                      <button 
                         onClick={() => {
                             onConfirm();
                             close();
                         }}
                         className="flex-1 h-[44px] rounded-[12px] bg-black text-[15px] font-medium text-white hover:bg-gray-800 transition"
                      >
                          Sure
                      </button>
                  </div>
               </div>
             )}
           </Dialog>
         </Modal>
       </ModalOverlay>
    </DialogTrigger>
  );
}
