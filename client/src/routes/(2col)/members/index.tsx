import { Button } from "@/components/ui/button";

import {
  IconDots,
  IconSearch,
  IconAdjustmentsHorizontal,
  IconUser,
  IconLayoutDashboard,
  IconCircleCheck,
  IconUsers,
  IconSend,
  IconBan,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, MenuItem, MenuTrigger } from "@/components/ui/menu";

export const Route = createFileRoute("/_2col-layout/members")({
  component: RouteComponent,
});

const members = [
  {
    id: 1,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: 2,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: 3,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=48",
  },
  {
    id: 4,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=55",
  },
  {
    id: 5,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=41",
  },
  {
    id: 6,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
  {
    id: 7,
    name: "Muhammad Shyed",
    role: "Designer",
    avatar: "https://i.pravatar.cc/120?img=5",
  },
];

const approvers = [
  {
    id: 1,
    name: "Muhammad Shyed",
    role: "Designer",
    status: "Admin",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: 2,
    name: "Muhammad Emran",
    role: "Designer",
    status: "Invited",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
];

const stats = [
  {
    id: 1,
    label: "Active Member",
    value: 1299,
    icon: <IconUser className="size-6 text-[#1A1D1F]" />,
    accent: "bg-lime-400",
    shadow: "shadow-[0_8px_30px_rgb(163,230,53,0.2)]",
  },
  {
    id: 2,
    label: "Active Projects",
    value: 159,
    icon: <IconLayoutDashboard className="size-6 text-[#1A1D1F]" />,
    accent: "bg-blue-400",
    shadow: "shadow-[0_8px_30px_rgb(96,165,250,0.2)]",
  },
  {
    id: 3,
    label: "Complete Project",
    value: 250,
    icon: <IconCircleCheck className="size-6 text-[#1A1D1F]" />,
    accent: "bg-purple-400",
    shadow: "shadow-[0_8px_30px_rgb(192,132,252,0.2)]",
  },
];

const shareLink = "https://2daygoals.com/msh.agency12345";

function RouteComponent() {
  return (
    <div className="grid gap-6 font-lufga lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr]">
      {/* Left Panel - Members List */}
      <aside
        className="rounded-[32px] bg-white p-6 shadow-sm flex flex-col gap-6"
        style={{ border: "var(--border-secondary)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconUser className="size-6 text-[#1A1D1F]" />
            <h2 className="text-xl font-bold text-[#1A1D1F]">Members</h2>
          </div>
          <button
            type="button"
            className="inline-grid size-10 place-items-center rounded-full hover:bg-gray-50 text-[#1A1D1F] transition"
          >
            <IconAdjustmentsHorizontal className="size-5" />
          </button>
        </div>

        <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-11 pr-4 py-3.5 outline-none bg-[#F4F4F4] rounded-xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
            />
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1D1F] size-5 stroke-[1.5]" />
        </div>

        <div className="flex flex-col gap-1 pr-2">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between gap-4 p-3 rounded-2xl hover:bg-[#F4F4F4] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="size-11 rounded-full object-cover"
                />
                <div className="flex flex-col gap-0.5">
                  <p className="font-bold text-[#1A1D1F] text-sm">{member.name}</p>
                  <p className="text-xs font-medium text-[#6F767E]">{member.role}</p>
                </div>
              </div>
              <MenuTrigger>
                <Button
                  className={{
                    base: "size-8 rounded-full flex items-center justify-center bg-white border border-[#EFEFEF] text-[#1A1D1F] shadow-sm hover:bg-gray-50 transition-colors outline-none cursor-pointer"
                  }}
                >
                  <IconDots className="size-5 stroke-[1.5] text-[#1A1D1F]" />
                </Button>
                <Menu offset={8} placement="bottom end">
                    <MenuItem>
                        <IconUsers />
                        View Profile
                    </MenuItem>
                    <MenuItem>
                        <IconSend />
                        Send Message
                    </MenuItem>
                    <MenuItem>
                        <IconBan />
                        Blocked
                    </MenuItem>
                </Menu>
              </MenuTrigger>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Panel - Dashboard */}
      <div className="flex flex-col gap-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-sm h-[140px] flex flex-col justify-between group"
              style={{ border: "var(--border-secondary)" }}
            >
              {/* Blur Effect */}
              <div
                className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity ${item.accent}`}
              />
              
              <div className="relative z-10">
                <div className="mb-4 text-[#1A1D1F]">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-3xl font-bold text-[#1A1D1F]">
                        {item.value}
                    </p>
                    <p className="text-xs font-medium text-[#6F767E]">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Panel */}
        <div
          className="rounded-[32px] bg-white p-6 md:p-8 shadow-sm flex flex-col gap-8"
          style={{ border: "var(--border-secondary)" }}
        >
          {/* Add Member */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#1A1D1F]">Add Member</h3>
              <p className="text-sm font-medium text-[#6F767E] mt-1">Add your favourite person</p>
            </div>

            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Shyed@hasssan.com"
                className="w-full px-5 py-4 outline-none bg-[#F4F4F4] rounded-2xl text-sm font-medium border-none placeholder:text-[#9A9FA5] text-[#1A1D1F]"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-900 transition-colors w-full sm:w-auto whitespace-nowrap"
              >
                Invite
              </button>
            </form>
          </div>

          {/* Approver List */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#6F767E]">
              Approver
            </h4>
            <div className="flex flex-col gap-3">
              {approvers.map((approver) => (
                <div
                  key={approver.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={approver.avatar}
                      alt={approver.name}
                      className="size-11 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-bold text-[#1A1D1F] text-sm">
                        {approver.name}
                      </p>
                      <p className="text-xs font-medium text-[#3FA2F6]">{approver.role}</p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-bold ${
                      approver.status === "Admin"
                        ? "bg-[#E6F7ED] text-[#34A853]"
                        : "bg-[#F4F4F4] text-[#1A1D1F]"
                    }`}
                  >
                    {approver.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link To Share */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#6F767E]">
              Link To Share
            </h4>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="url"
                value={shareLink}
                readOnly
                className="w-full px-5 py-4 outline-none bg-[#F4F4F4] rounded-2xl text-sm font-medium border-none text-[#6F767E]"
              />
              <button
                type="button"
                className="bg-white text-[#1A1D1F] border border-[#EFEFEF] px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto whitespace-nowrap shadow-sm"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
