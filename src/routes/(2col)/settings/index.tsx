import { createFileRoute } from "@tanstack/react-router";
import _Avatar from "boring-avatars";
import {
  IconPencil,
  IconMail,
  IconLink,
  IconCalendar,
  IconChevronDown,
} from "@tabler/icons-react";

const Avatar = (_Avatar as any).default ?? _Avatar;

export const Route = createFileRoute("/_2col-layout/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  
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

  return (
    <div className="mt-3 min-h-screen font-lufga">
      <main><ProfileSettings /></main>
    </div>
  );
}
