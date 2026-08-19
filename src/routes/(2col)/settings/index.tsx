import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GoogleIcon } from "@/components/icons/google";
import _Avatar from "boring-avatars";
import { EditProfilePictureModal } from "@/components/ui/edit-profile-picture-modal";
import { PreviewProfilePictureModal } from "@/components/ui/preview-profile-picture-modal";
import { PricingCard } from "@/components/ui/pricing-card";
import { BillingHistory } from "@/components/ui/billing-history";
import {
  IconTrash,
  IconPencil,
  IconBrandFacebookFilled,
  IconBrandAppleFilled,
  IconBrandChrome,
  IconUser,
  IconLock,
  IconCrown,
  IconBell,
  IconMail,
  IconLink,
  IconCalendar,
  IconChevronDown,
  IconShieldCheck,
  IconCreditCard,
} from "@tabler/icons-react";
import { Switch } from "@/components/ui/switch";

const Avatar = (_Avatar as any).default ?? _Avatar;

export const Route = createFileRoute("/_2col-layout/settings")({
  component: RouteComponent,
});

type SettingId = "profile" | "password" | "notification" | "subscription";

function RouteComponent() {
  const [active, setActive] = useState<SettingId>("profile");

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
      setShowUploadModal(false);
      setShowPreviewModal(true);
    };

    reader.readAsDataURL(file);
  };

  const handlePreviewCancel = () => {
    setShowPreviewModal(false);
    setShowUploadModal(true);
  };

  const handlePreviewSubmit = () => {
    // TODO: Save image to your server/state
    setShowPreviewModal(false);
    setPreviewImage(null);
  };

  const settingsItems = [
    {
      id: "profile" as SettingId,
      label: "Profile",
      description: "Manage your personal information",
      icon: <IconUser className="size-5" />,
    },
    {
      id: "password" as SettingId,
      label: "Password and security",
      description: "Manage your password and login",
      icon: <IconLock className="size-5" />,
    },
    {
      id: "notification" as SettingId,
      label: "Notifications",
      description: "Choose what notifications you receive",
      icon: <IconBell className="size-5" />,
    },
    {
      id: "subscription" as SettingId,
      label: "Billing and payments",
      description: "Manage your subscription and billing",
      icon: <IconCreditCard className="size-5" />,
    },
  ];

  const ProfileSettings = () => (
    <div className="overflow-hidden rounded-3xl border border-[#E4E6EB] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E4E6EB] px-5 py-5 md:px-8">
        <h2 className="text-xl font-bold text-[#1C1E21]">Profile</h2>

        <p className="mt-1 text-sm text-[#65676B]">
          Manage your profile information and how people see you.
        </p>
      </div>

      {/* Profile Picture */}
      <div className="border-b border-[#E4E6EB] px-5 py-6 md:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              className="group relative cursor-pointer"
              onClick={() => setShowUploadModal(true)}
            >
              <Avatar
                name="Muhammad Shyed"
                variant="beam"
                className="
                  size-20 rounded-full
                  border-2 border-[#E4E6EB]
                  bg-white object-cover
                  transition-opacity
                  group-hover:opacity-90
                  md:size-24
                "
              />

              <div
                className="
                  absolute bottom-0 right-0
                  flex size-7 items-center justify-center
                  rounded-full border-2 border-white
                  bg-[#E4E6EB]
                  text-[#1C1E21]
                "
              >
                <IconPencil className="size-3.5" />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#1C1E21]">Muhammad Shyed</h3>

              <p className="mt-0.5 text-sm text-[#65676B]">Designer</p>

              <p className="mt-1 text-xs text-[#8A8D91]">
                JPG, PNG or GIF. Max size 5MB.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="
              w-full rounded-lg
              bg-[#E4E6EB]
              px-4 py-2.5
              text-sm font-semibold
              text-[#1C1E21]
              transition-colors
              hover:bg-[#D8DADF]
              sm:w-auto
            "
          >
            Edit picture
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="px-5 py-6 md:px-8">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-[#1C1E21]">
            Personal information
          </h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Update your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              defaultValue="Muhammad Shyed"
              placeholder="Your name"
              className="
                w-full rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-3
                text-sm text-[#1C1E21]
                outline-none
                transition
                placeholder:text-[#8A8D91]
                focus:border-[#1877F2]
                focus:ring-1
                focus:ring-[#1877F2]
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Email
            </label>

            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="
                  w-full rounded-lg
                  border border-[#CCD0D5]
                  bg-white
                  py-3 pl-11 pr-4
                  text-sm text-[#1C1E21]
                  outline-none
                  transition
                  placeholder:text-[#8A8D91]
                  focus:border-[#1877F2]
                  focus:ring-1
                  focus:ring-[#1877F2]
                "
              />

              <IconMail
                className="
                  absolute left-4 top-1/2
                  size-5 -translate-y-1/2
                  text-[#65676B]
                "
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="role"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Role
            </label>

            <input
              id="role"
              type="text"
              defaultValue="Designer"
              placeholder="Your role"
              className="
                w-full rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-3
                text-sm text-[#1C1E21]
                outline-none
                transition
                placeholder:text-[#8A8D91]
                focus:border-[#1877F2]
                focus:ring-1
                focus:ring-[#1877F2]
              "
            />
          </div>

          {/* Website */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="website"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Website
            </label>

            <div className="relative">
              <input
                id="website"
                type="url"
                placeholder="https://example.com"
                className="
                  w-full rounded-lg
                  border border-[#CCD0D5]
                  bg-white
                  py-3 pl-11 pr-4
                  text-sm text-[#1C1E21]
                  outline-none
                  transition
                  placeholder:text-[#8A8D91]
                  focus:border-[#1877F2]
                  focus:ring-1
                  focus:ring-[#1877F2]
                "
              />

              <IconLink
                className="
                  absolute left-4 top-1/2
                  size-5 -translate-y-1/2
                  text-[#65676B]
                "
              />
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Country
            </label>

            <button
              type="button"
              className="
                flex w-full items-center
                justify-between
                rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-3
                text-sm
                text-[#1C1E21]
                transition
                hover:bg-[#F5F6F7]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex size-6 items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-[#006A4E]
                  "
                >
                  <div className="size-3 rounded-full bg-[#F42A41]" />
                </div>

                <span>Bangladesh</span>
              </div>

              <IconChevronDown className="size-5 text-[#65676B]" />
            </button>
          </div>

          {/* Birthday */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="birthday"
              className="text-sm font-semibold text-[#1C1E21]"
            >
              Birthday
            </label>

            <button
              type="button"
              className="
                flex w-full items-center
                justify-between
                rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-3
                text-sm
                text-[#65676B]
                transition
                hover:bg-[#F5F6F7]
              "
            >
              <div className="flex items-center gap-3">
                <IconCalendar className="size-5" />

                <span>Select birthday</span>
              </div>

              <IconChevronDown className="size-5" />
            </button>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-5 flex flex-col gap-2">
          <label htmlFor="bio" className="text-sm font-semibold text-[#1C1E21]">
            Bio
          </label>

          <textarea
            id="bio"
            placeholder="Tell people about yourself"
            className="
              min-h-[120px]
              w-full resize-none
              rounded-lg
              border border-[#CCD0D5]
              bg-white
              px-4 py-3
              text-sm text-[#1C1E21]
              outline-none
              transition
              placeholder:text-[#8A8D91]
              focus:border-[#1877F2]
              focus:ring-1
              focus:ring-[#1877F2]
            "
          />
        </div>

        {/* Actions */}
        <div
          className="
            mt-6 flex
            flex-col-reverse
            gap-3
            border-t border-[#E4E6EB]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <button
            type="button"
            className="
              rounded-lg
              border border-[#CCD0D5]
              px-5 py-2.5
              text-sm font-semibold
              text-[#E41E3F]
              transition-colors
              hover:bg-[#FFF1F2]
            "
          >
            Delete account
          </button>

          <button
            type="button"
            className="
              rounded-lg
              bg-[#1877F2]
              px-6 py-2.5
              text-sm font-semibold
              text-white
              transition-colors
              hover:bg-[#166FE5]
            "
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );

  const PasswordSettings = () => (
    <div className="overflow-hidden rounded-xl border border-[#E4E6EB] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E4E6EB] px-5 py-5 md:px-8">
        <div className="flex items-start gap-3">
          <div
            className="
              flex size-10 shrink-0
              items-center justify-center
              rounded-full
              bg-[#E7F3FF]
              text-[#1877F2]
            "
          >
            <IconShieldCheck className="size-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#1C1E21]">
              Password and security
            </h2>

            <p className="mt-1 text-sm text-[#65676B]">
              Manage your password, connected accounts and active sessions.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 md:px-8">
        {/* Change Password */}
        <section>
          <h3 className="text-lg font-bold text-[#1C1E21]">Change password</h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Choose a strong password that you don't use anywhere else.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="current-password"
                className="text-sm font-semibold text-[#1C1E21]"
              >
                Current password
              </label>

              <input
                id="current-password"
                type="password"
                placeholder="Enter current password"
                className="
                  w-full rounded-lg
                  border border-[#CCD0D5]
                  px-4 py-3
                  text-sm
                  outline-none
                  focus:border-[#1877F2]
                  focus:ring-1
                  focus:ring-[#1877F2]
                "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="new-password"
                className="text-sm font-semibold text-[#1C1E21]"
              >
                New password
              </label>

              <input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                className="
                  w-full rounded-lg
                  border border-[#CCD0D5]
                  px-4 py-3
                  text-sm
                  outline-none
                  focus:border-[#1877F2]
                  focus:ring-1
                  focus:ring-[#1877F2]
                "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-semibold text-[#1C1E21]"
              >
                Confirm password
              </label>

              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                className="
                  w-full rounded-lg
                  border border-[#CCD0D5]
                  px-4 py-3
                  text-sm
                  outline-none
                  focus:border-[#1877F2]
                  focus:ring-1
                  focus:ring-[#1877F2]
                "
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="
                rounded-lg
                bg-[#1877F2]
                px-5 py-2.5
                text-sm font-semibold
                text-white
                hover:bg-[#166FE5]
              "
            >
              Update password
            </button>
          </div>
        </section>

        <div className="my-8 border-t border-[#E4E6EB]" />

        {/* Two Factor */}
        <section>
          <div className="flex items-center justify-between gap-5">
            <div>
              <h3 className="text-lg font-bold text-[#1C1E21]">
                Two-factor authentication
              </h3>

              <p className="mt-1 max-w-xl text-sm text-[#65676B]">
                Add an extra layer of security to your account by requiring a
                verification code when you log in.
              </p>
            </div>

            <Switch defaultChecked />
          </div>
        </section>

        <div className="my-8 border-t border-[#E4E6EB]" />

        {/* Connected Accounts */}
        <section>
          <h3 className="text-lg font-bold text-[#1C1E21]">
            Connected accounts
          </h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Use these accounts to quickly log in to your account.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {/* Google */}
            <div
              className="
                flex items-center
                justify-between
                gap-4 rounded-xl
                border border-[#E4E6EB]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex size-10
                    items-center justify-center
                    rounded-full
                    bg-[#F5F6F7]
                  "
                >
                  <GoogleIcon className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1C1E21]">Google</p>

                  <p className="text-xs text-[#65676B]">Connected</p>
                </div>
              </div>

              <Switch defaultChecked />
            </div>

            {/* Facebook */}
            <div
              className="
                flex items-center
                justify-between
                gap-4 rounded-xl
                border border-[#E4E6EB]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex size-10
                    items-center justify-center
                    rounded-full
                    bg-[#E7F3FF]
                  "
                >
                  <IconBrandFacebookFilled className="size-5 text-[#1877F2]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1C1E21]">
                    Facebook
                  </p>

                  <p className="text-xs text-[#65676B]">Not connected</p>
                </div>
              </div>

              <Switch />
            </div>
          </div>
        </section>

        <div className="my-8 border-t border-[#E4E6EB]" />

        {/* Sessions */}
        <section>
          <h3 className="text-lg font-bold text-[#1C1E21]">
            Where you're logged in
          </h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Review devices where your account is currently active.
          </p>

          <div className="mt-5 flex flex-col">
            {/* Mac */}
            <div
              className="
                flex flex-col gap-4
                border-b border-[#E4E6EB]
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex size-10
                    items-center justify-center
                    rounded-full
                    bg-[#F5F6F7]
                  "
                >
                  <IconBrandAppleFilled className="size-5 text-[#1C1E21]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1C1E21]">
                    Shyed MacBook Pro
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#31A24C]" />

                    <span className="text-xs text-[#65676B]">
                      Chittagong, Bangladesh · Active now
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-[#65676B]
                  hover:text-[#E41E3F]
                "
              >
                <IconTrash className="size-4" />
                Log out
              </button>
            </div>

            {/* iPhone */}
            <div
              className="
                flex flex-col gap-4
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex size-10
                    items-center justify-center
                    rounded-full
                    bg-[#F5F6F7]
                  "
                >
                  <IconBrandChrome className="size-5 text-[#4285F4]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1C1E21]">
                    Chrome on iPhone 16 Pro Max
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#31A24C]" />

                    <span className="text-xs text-[#65676B]">
                      Chittagong, Bangladesh · Active recently
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-[#65676B]
                  hover:text-[#E41E3F]
                "
              >
                <IconTrash className="size-4" />
                Log out
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="overflow-hidden rounded-xl border border-[#E4E6EB] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E4E6EB] px-5 py-5 md:px-8">
        <h2 className="text-xl font-bold text-[#1C1E21]">Notifications</h2>

        <p className="mt-1 text-sm text-[#65676B]">
          Choose what notifications you receive and where you receive them.
        </p>
      </div>

      <div className="px-5 py-6 md:px-8">
        {/* Email */}
        <section>
          <h3 className="text-lg font-bold text-[#1C1E21]">
            Email notifications
          </h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Control which activities send notifications to your email.
          </p>

          <div className="mt-6 flex flex-col">
            {[
              {
                title: "Comments",
                description:
                  "Get notified when someone comments on your posts or replies to your comments.",
                checked: true,
              },
              {
                title: "Tags and mentions",
                description: "Get notified when someone mentions or tags you.",
                checked: false,
              },
              {
                title: "Calendar reminders",
                description:
                  "Get reminders about upcoming events and important updates.",
                checked: true,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex items-center
                  justify-between gap-5
                  py-5
                  ${index !== 2 ? "border-b border-[#E4E6EB]" : ""}
                `}
              >
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1E21]">
                    {item.title}
                  </h4>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-[#65676B]">
                    {item.description}
                  </p>
                </div>

                <Switch defaultChecked={item.checked} />
              </div>
            ))}
          </div>
        </section>

        <div className="my-8 border-t border-[#E4E6EB]" />

        {/* Push */}
        <section>
          <h3 className="text-lg font-bold text-[#1C1E21]">
            Push notifications
          </h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Manage notifications that appear on your devices.
          </p>

          <div className="mt-6 flex flex-col">
            {[
              {
                title: "Messages",
                description: "Get notified when someone sends you a message.",
                checked: true,
              },
              {
                title: "Task updates",
                description:
                  "Get notified about updates to your tasks and projects.",
                checked: true,
              },
              {
                title: "Recommendations",
                description: "Receive recommendations and useful suggestions.",
                checked: false,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex items-center
                  justify-between gap-5
                  py-5
                  ${index !== 2 ? "border-b border-[#E4E6EB]" : ""}
                `}
              >
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1E21]">
                    {item.title}
                  </h4>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-[#65676B]">
                    {item.description}
                  </p>
                </div>

                <Switch defaultChecked={item.checked} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const SubscriptionSettings = () => (
    <div className="overflow-hidden rounded-xl border border-[#E4E6EB] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#E4E6EB] px-5 py-5 md:px-8">
        <h2 className="text-xl font-bold text-[#1C1E21]">
          Billing and payments
        </h2>

        <p className="mt-1 text-sm text-[#65676B]">
          Manage your plan, subscription and billing history.
        </p>
      </div>

      <div className="px-5 py-6 md:px-8">
        {/* Current Plan */}
        <div
          className="
            flex flex-col gap-5
            rounded-xl
            border border-[#E4E6EB]
            bg-[#F7F8FA]
            p-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-2">
              <IconCrown className="size-5 text-[#F7B928]" />

              <h3 className="font-bold text-[#1C1E21]">Standard Plan</h3>
            </div>

            <p className="mt-1 text-sm text-[#65676B]">Monthly subscription</p>

            <p className="mt-1 text-xs text-[#8A8D91]">
              Next billing date: November 29
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="
                rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-2.5
                text-sm font-semibold
                text-[#1C1E21]
                hover:bg-[#F0F2F5]
              "
            >
              Update plan
            </button>

            <button
              type="button"
              className="
                rounded-lg
                border border-[#CCD0D5]
                bg-white
                px-4 py-2.5
                text-sm font-semibold
                text-[#E41E3F]
                hover:bg-[#FFF1F2]
              "
            >
              Cancel plan
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-[#1C1E21]">Available plans</h3>

          <p className="mt-1 text-sm text-[#65676B]">
            Choose the plan that works best for you.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
            <PricingCard
              title="Free Forever"
              description="No minimum commitment. Pause or cancel anytime."
              price="0$"
              period="/Lifetime"
              theme="blue"
              features={[
                "Ads",
                "Unlimited Project",
                "100 Seat",
                "Management View",
                "Calendar View",
              ]}
              buttons={[
                {
                  text: "Register - it's Free",
                  variant: "ghost",
                },
              ]}
            />

            <PricingCard
              title="Monthly"
              description="No minimum commitment. Pause or cancel anytime."
              price="19$"
              period="/month"
              theme="green"
              features={[
                "Without Ads",
                "Unlimited Project",
                "Unlimited Seat",
                "Management View",
                "Calendar View",
                "Chat View",
              ]}
              buttons={[
                {
                  text: "Get Started",
                  variant: "primary",
                },
                {
                  text: "Contact to sales",
                  variant: "secondary",
                },
              ]}
            />

            <PricingCard
              title="Yearly"
              description="No minimum commitment. Pause or cancel anytime."
              price="199$"
              period="/year"
              theme="orange"
              features={[
                "Without Ads",
                "Unlimited Project",
                "Unlimited Seat",
                "Management View",
                "Calendar View",
                "Chat View",
              ]}
              buttons={[
                {
                  text: "Get Started",
                  variant: "primary",
                },
              ]}
            />
          </div>
        </div>

        {/* Billing History */}
        <div className="mt-10">
          <h3 className="mb-5 text-lg font-bold text-[#1C1E21]">
            Billing history
          </h3>

          <BillingHistory />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <ProfileSettings />;

      case "password":
        return <PasswordSettings />;

      case "notification":
        return <NotificationSettings />;

      case "subscription":
        return <SubscriptionSettings />;

      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="mt-3 min-h-screen font-lufga">
      <main>{renderContent()}</main>

      {/* Profile Picture Upload Modal */}
      <EditProfilePictureModal
        isOpen={showUploadModal}
        onOpenChange={setShowUploadModal}
        onFileSelect={handleFileSelect}
      />

      {/* Profile Picture Preview Modal */}
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
