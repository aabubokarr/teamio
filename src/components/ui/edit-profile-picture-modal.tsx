import { Button } from "@/components/ui/button";
import { Modal, ModalOverlay } from "@/components/ui/modal";
import { IconPhotoPlus, IconUpload } from "@tabler/icons-react";
import { Dialog, DialogTrigger } from "react-aria-components";
import { useRef } from "react";

interface EditProfilePictureModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onFileSelect: (file: File) => void;
}

export function EditProfilePictureModal({
  isOpen,
  onOpenChange,
  onFileSelect,
}: EditProfilePictureModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <div style={{ display: "none" }} />
      <ModalOverlay className="grid center-grid items-center [--container:min(90%,--spacing(100))]">
        <Modal className="bg-white rounded-2xl shadow-lg w-[295px]">
          <Dialog aria-label="Edit Profile Picture" className="focus-visible:outline-none">
            {({ close }) => (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Edit Profile Picture
                </h2>

                {/* Upload Area */}
                <div
                  className="relative rounded-lg p-16 mb-6 bg-gray-50 hover:bg-gray-100 transition cursor-pointer h-[224px] flex items-center justify-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onDragEnter={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center gap-5">
                    {/* Upload Icon - Light blue square with folded corner and darker blue arrow */}
                    <div className="relative">
                      {/* Light blue square */}
                      <div className="size-24 bg-blue-200 rounded-lg flex items-center justify-center">
                        {/* Darker blue upward arrow */}
                        <IconUpload className="size-12 text-blue-700" />
                      </div>
                      {/* Folded corner effect - darker blue */}
                      <div className="absolute -top-1 -right-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7 0L24 0L24 17L7 17L0 24L0 0L7 0Z"
                            fill="#1E40AF"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Large, dark gray text */}
                    <p className="text-xl font-semibold text-gray-800">Drag-n-drop Upload</p>
                  </div>
                </div>

                {/* Upload On Device */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <IconPhotoPlus className="size-5 text-gray-700" />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-sm font-medium text-gray-800 hover:text-gray-900 transition"
                  >
                    Upload On Device
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInputChange}
                />

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    className={{
                      base: "w-full h-[51px] rounded-[34px] bg-[#F1FFE8] border",
                      label: "text-gray-900 font-medium",
                    }}
                    style={{
                      borderColor: "rgba(43, 43, 43, 0.12)",
                    }}
                    onPress={() => {
                      onOpenChange(false);
                      close();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={{
                      base: "w-full h-[51px] rounded-[34px]",
                      label: "text-white",
                    }}
                    color="black"
                    onPress={() => {
                      onOpenChange(false);
                      close();
                    }}
                  >
                    Submit
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

