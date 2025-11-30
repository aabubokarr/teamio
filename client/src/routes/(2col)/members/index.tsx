import { Button } from "@/components/ui/button";
import {
  IconDotsVertical,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

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
    accent: "bg-lime-300/60",
  },
  {
    id: 2,
    label: "Active Projects",
    value: 159,
    accent: "bg-sky-300/60",
  },
  {
    id: 3,
    label: "Complete Project",
    value: 250,
    accent: "bg-violet-300/60",
  },
];

const shareLink = "https://2daygoals.com/msh.agency12345";

function RouteComponent() {
  return (
    <div className="grid gap-6 font-lufga lg:grid-cols-[minmax(0,320px)_1fr]">
      <aside
        className="rounded-3xl bg-white p-6 shadow-sm"
        style={{ border: "var(--border-secondary)" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Members</h2>
          <button
            type="button"
            className="inline-grid size-10 place-items-center rounded-full bg-off-white text-gray-500 transition hover:text-gray-900"
          >
            <span className="sr-only">Members settings</span>
            <IconSettings className="size-5" />
          </button>
        </div>

        <label className="relative block">
          <span className="sr-only">Search members</span>
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-full bg-off-white px-11 py-3 text-sm text-gray-600 outline-none ring-0 transition focus:bg-white focus:ring-2 focus:ring-gray-100"
          />
        </label>

        <div className="mt-6 space-y-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_6px_24px_rgba(15,15,15,0.04)]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-sm text-blue-500">{member.role}</p>
                </div>
              </div>
              <button
                type="button"
                className="inline-grid size-9 place-items-center rounded-full bg-off-white text-gray-400 transition hover:text-gray-600"
              >
                <span className="sr-only">Member options</span>
                <IconDotsVertical className="size-5" />
              </button>
            </div>
          ))}
        </div>
      </aside>

      <section className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm"
              style={{ border: "var(--border-secondary)" }}
            >
              <span
                className={`absolute -right-8 -top-10 h-24 w-24 rounded-full blur-3xl ${item.accent}`}
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-gray-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="space-y-6 rounded-3xl bg-white p-6 shadow-sm"
          style={{ border: "var(--border-secondary)" }}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Add Member</h3>
            <p className="text-sm text-gray-500">Add your favourite person</p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="member-email">
              Member email
            </label>
            <input
              id="member-email"
              type="email"
              placeholder="Shyed@hasssan.com"
              className="w-full rounded-2xl bg-off-white px-5 py-3 text-sm text-gray-700 outline-none ring-0 transition focus:bg-white focus:ring-2 focus:ring-gray-100"
            />
            <Button
              type="submit"
              className={{
                base: "h-12 w-full rounded-2xl sm:w-auto px-6",
              }}
            >
              Invite
            </Button>
          </form>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Approver
            </h4>
            <div className="mt-4 space-y-3">
              {approvers.map((approver) => (
                <div
                  key={approver.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-off-white/60 p-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={approver.avatar}
                      alt={approver.name}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {approver.name}
                      </p>
                      <p className="text-sm text-blue-500">{approver.role}</p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      approver.status === "Admin"
                        ? "bg-lime-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {approver.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Link To Share
            </h4>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                type="url"
                value={shareLink}
                readOnly
                className="w-full rounded-2xl bg-off-white px-5 py-3 text-sm text-gray-700 outline-none focus:bg-white focus:ring-2 focus:ring-gray-100"
              />
              <Button
                type="button"
                variant="classic"
                className={{
                  base: "h-12 w-full rounded-2xl bg-black text-white sm:w-auto px-6",
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
