import { Button } from "@/components/ui/button";
import { Modal, ModalOverlay } from "@/components/ui/modal";
import { Dialog, DialogTrigger } from "react-aria-components";

interface PreviewProfilePictureModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  previewImage: string | null;
  onCancel: () => void;
  onSubmit: () => void;
}

export function PreviewProfilePictureModal({
  isOpen,
  onOpenChange,
  previewImage,
  onCancel,
  onSubmit,
}: PreviewProfilePictureModalProps) {
  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      <div style={{ display: "none" }} />
      <ModalOverlay className="grid center-grid items-center [--container:min(90%,--spacing(100))]">
        <Modal className="bg-white rounded-2xl shadow-lg w-[295px]">
          <Dialog aria-label="Preview Profile Picture" className="focus-visible:outline-none">
            {({ close }) => (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Edit Profile Picture
                </h2>

                {/* Preview Image */}
                {previewImage && (
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={previewImage}
                        alt="Profile preview"
                        className="size-64 w-full rounded-2xl object-cover border-4 border-green-400 shadow-sm"
                      />
                    </div>
                  </div>
                )}

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
                      onCancel();
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
                      onSubmit();
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

