import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/google";
import { IconPencil } from "@tabler/icons-react";
import Avatar from "boring-avatars";
import { EditProfilePictureModal } from "@/components/ui/edit-profile-picture-modal";
import { PreviewProfilePictureModal } from "@/components/ui/preview-profile-picture-modal";

export const Route = createFileRoute("/_2col-layout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const [active, setActive] = useState("profile");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setShowUploadModal(false);
        setShowPreviewModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreviewCancel = () => {
    setShowPreviewModal(false);
    setShowUploadModal(true);
  };

  const handlePreviewSubmit = () => {
    // TODO: Save the image to the server/state
    setShowPreviewModal(false);
    setPreviewImage(null);
  };

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div
          className="mt-8 text-sm rounded-2xl bg-white overflow-hidden"
          style={{ border: "var(--border-secondary)" }}
        >
          {/* Header Section with Banner and Profile */}
          <div className="relative">
            {/* Banner Image - 541 X 84 */}
            <div 
              className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 overflow-hidden w-full"
              style={{ height: "140px" }}
            >
              {/* Abstract flowing design - swirling ribbon effect */}
              <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 541 84" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="50%" stopColor="rgba(147,197,253,0.6)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
                    </linearGradient>
                    <linearGradient id="ribbon2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                      <stop offset="50%" stopColor="rgba(96,165,250,0.5)" />
                      <stop offset="100%" stopColor="rgba(147,197,253,0.3)" />
                    </linearGradient>
                  </defs>
                  {/* Swirling ribbon shapes */}
                  <path
                    d="M0,42 Q135,10 270,42 T540,42"
                    fill="url(#ribbon1)"
                    opacity="0.8"
                  />
                  <path
                    d="M0,50 Q150,20 300,50 T540,50"
                    fill="url(#ribbon2)"
                    opacity="0.6"
                  />
                  <path
                    d="M0,30 Q120,60 240,30 T480,30"
                    fill="rgba(255,255,255,0.3)"
                    opacity="0.7"
                  />
                </svg>
              </div>
              
              {/* Cover size text - top right */}
              <div className="absolute top-2 right-2 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-md text-[10px] text-gray-600">
                Cover size 541 X 84
              </div>
              
              {/* Edit button - bottom right */}
              <button
                type="button"
                className="absolute bottom-2 right-2 size-8 bg-gray-100/90 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-gray-200/90 transition"
              >
                <IconPencil className="size-4 text-gray-600" />
              </button>
            </div>

            {/* Profile Section */}
            <div className="px-8 pb-6 pt-3">
              <div className="flex items-end gap-4 -mt-16">
                {/* Profile Picture */}
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => setShowUploadModal(true)}
                >
                  <Avatar
                    name="Muhammad Shyed"
                    variant="beam"
                    className="size-32 rounded-full border-4 border-white shadow-lg group-hover:opacity-90 transition"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <IconPencil className="size-6 text-white" />
                  </div>
                </div>
                {/* Name and Role */}
                <div className="flex flex-col gap-0.5 pb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Muhammad Shyed</h2>
                  <p className="text-sm text-gray-500">Designer</p>
                </div>
              </div>
            </div>
          </div>

          <form
            action=""
            method="post"
            className="w-[730px] p-8 flex flex-col gap-4.5"
          >
            <div className="flex items-center justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Type Name"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Type Email"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="role" className="font-medium">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Type Role"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="country" className="font-medium">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Country Select"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="website" className="font-medium">
                  Website
                </label>
                <input
                  type="text"
                  placeholder="Type Website Link"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="birth" className="font-medium">
                  Birth Date
                </label>
                <input
                  type="date"
                  placeholder="Select Birthday"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="bio" className="font-medium">
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                placeholder="Type Bio"
                className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg h-36"
              ></textarea>
            </div>
            <div className="flex items-center justify-between gap-7 w-full">
              <Button
                className={{
                  base: "w-[48%] bg-white text-black border-[#ededed]",
                }}
              >
                <span className="text-black">Delete Account</span>
              </Button>
              <Button className={{ base: "w-[48%]" }}>Save</Button>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "password",
      label: "Password",
      content: (
        <div
          className="mt-8 text-sm rounded-2xl"
          style={{ border: "var(--border-secondary)" }}
        >
          <form
            action=""
            method="post"
            className="w-[730px] p-8 flex flex-col gap-4.5"
          >
            <div>
              <h1 className="font-medium text-xl">Password</h1>
              <p className="font-light text-[#6A6A6A]">
                Set a password to protect your account
              </p>
            </div>
            <div className="flex items-center justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="current" className="font-medium">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Type Current Password"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="new" className="font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Type New Password"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-end justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="confirm" className="font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Type Confirm Password"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <Button className={{ base: "w-[48%]" }}>Save</Button>
            </div>
            <div className="mt-1.5">
              <h1 className="font-medium text-xl">Two Step Verification</h1>
              <p className="font-light text-[#6A6A6A]">
                We Recommend requiring a verification code in addition to your
                password
              </p>
            </div>
            <div className="mt-1.5">
              <h1 className="font-medium text-xl">Connect with this account</h1>
              <p className="font-light text-[#6A6A6A]">
                If you connect with this account you easily login this platform.
              </p>
            </div>
            <div className="flex items-end justify-between gap-7">
              <Button
                className={{
                  base: "w-[48%] rounded-[48px] bg-[#d9d9d9]/15 border-0",
                }}
              >
                <span className="flex items-center gap-1 text-black">
                  <GoogleIcon></GoogleIcon> Connect Google
                </span>
              </Button>
              <Button
                className={{
                  base: "w-[48%] rounded-[48px] bg-[#d9d9d9]/15 border-0",
                }}
              >
                <span className="flex items-center gap-1 text-black">
                  <GoogleIcon></GoogleIcon> Connect Facebook
                </span>
              </Button>
            </div>
            <div className="mt-1.5">
              <h1 className="font-medium text-xl">Browse and device</h1>
              <p className="font-light text-[#6A6A6A]">
                These Browser and device are currently signed in to your
                account. Remove any update any unauthorized device.
              </p>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "subscription",
      label: "Subscription",
      content: "Subscription details go here",
    },
    {
      id: "notification",
      label: "Notification",
      content: (
        <div
          className="mt-8 text-sm rounded-2xl"
          style={{ border: "var(--border-secondary)" }}
        >
          <form
            action=""
            method="post"
            className="w-[730px] p-8 flex flex-col gap-4.5"
          >
            <div>
              <h1 className="font-medium text-xl">Notification settings</h1>
              <p className="font-light text-[#6A6A6A]">
                Select the kinds of notification you get about your activities
                and recommendations.
              </p>
            </div>
            <div className="flex items-start gap-7">
              <div className="flex flex-col gap-3.5 w-full">
                <div className="w-full flex flex-col gap-2">
                  <h2>Email notification</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xs">Comments</h3>
                    <p className="text-[10px] text-[#747786]">
                      These are notifications for your posts and replies to your
                      comments.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs">Tags / Mention</h3>
                  <p className="text-[10px] text-[#747786]">
                    These are notifications for when some one tags you in a
                    comment for post or story.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs">Calendars</h3>
                  <p className="text-[10px] text-[#747786]">
                    These are notifications to remind you of updates you might
                    have missed
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 w-full">
                <div className="w-full flex flex-col gap-2">
                  <h2>Message notification</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xs">Message Chat</h3>
                    <p className="text-[10px] text-[#747786]">
                      These are notifications for your Chat and replies to your
                      Messages.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs">Task Chat</h3>
                  <p className="text-[10px] text-[#747786]">
                    These are notifications for your Chat and replies to your
                    Messages.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "community",
      label: "Community",
      content: (
        <div
          className="mt-8 text-sm rounded-2xl"
          style={{ border: "var(--border-secondary)" }}
        >
          <form
            action=""
            method="post"
            className="w-[730px] p-8 flex flex-col gap-4.5"
          >
            <div className="flex items-center justify-between gap-7">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Community Name
                </label>
                <input
                  type="text"
                  placeholder="Type Community Name"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="title" className="font-medium">
                  Community Title
                </label>
                <input
                  type="text"
                  placeholder="Type Community Title"
                  className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="website" className="font-medium">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Type Description"
                className="px-2 py-3 outline-none bg-inp-bg/15 rounded-lg h-36"
              ></textarea>
            </div>
            <div className="flex items-center justify-between gap-7 w-full">
              <Button
                className={{
                  base: "w-[48%] bg-white text-black border-[#ededed]",
                }}
              >
                <span className="text-black">Delete Community</span>
              </Button>
              <Button className={{ base: "w-[48%]" }}>Save</Button>
            </div>
          </form>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-9 font-lufga">
      {/* Tabs */}
      <div
        className="bg-white rounded-lg flex items-center"
        style={{ border: "var(--border-default)" }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`px-5 py-4 m-1.5 rounded-md cursor-pointer ${
              active === tab.id ? "bg-off-white" : ""
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Active content */}
      <div>{tabs.find((tab) => tab.id === active)?.content}</div>

      {/* Upload Modal */}
      <EditProfilePictureModal
        isOpen={showUploadModal}
        onOpenChange={setShowUploadModal}
        onFileSelect={handleFileSelect}
      />

      {/* Preview Modal */}
      <PreviewProfilePictureModal
        isOpen={showPreviewModal}
        onOpenChange={setShowPreviewModal}
        previewImage={previewImage}
        onCancel={handlePreviewCancel}
        onSubmit={handlePreviewSubmit}
      />
    </div>
  );
}

