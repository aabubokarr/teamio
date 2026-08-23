import React, { useState } from "react";
import {
  IconMessageCircle,
  IconHash,
  IconSend,
  IconPaperclip,
  IconChecklist,
  IconCheck,
  IconPhone,
  IconVideo,
  IconSearch,
  IconFileText,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function MessagingPreview() {
  const [activeChannel, setActiveChannel] = useState("design-review");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Sarah Wilson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      role: "Product Manager",
      text: "The new design is ready for review.",
      time: "10:42 AM",
      hasAttachment: true,
      fileName: "Teamio_v2_Specs.pdf",
    },
    {
      id: 2,
      sender: "You",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      role: "Product Lead",
      text: "Looks great! I'll review it before the meeting.",
      time: "10:44 AM",
    },
    {
      id: 3,
      sender: "Alex Carter",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      role: "Frontend Engineer",
      text: "I'm already prepping the component library. Should we create a task to track the QA phase?",
      time: "10:45 AM",
    },
  ]);

  const [inputMsg, setInputMsg] = useState("");
  const [taskCreated, setTaskCreated] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "You",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        role: "Product Lead",
        text: inputMsg,
        time: "Just now",
      },
    ]);
    setInputMsg("");
  };

  const handleCreateTaskFromChat = () => {
    setTaskCreated(true);
    setTimeout(() => setTaskCreated(false), 4000);
  };

  return (
    <section
      id="messaging"
      className="py-20 bg-slate-50/70 border-y border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 mb-4">
            <IconMessageCircle size={14} /> Team Messaging
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Conversations that{" "}
            <span className="text-indigo-600">move work forward.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Communicate privately or in team channels without leaving Teamio.
            Seamlessly convert discussion threads directly into tracked tasks.
          </p>
        </div>

        {/* Messaging Interface Mockup */}
        <div className="mt-12 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl grid grid-cols-12 min-h-[520px]">
          {/* Sidebar Channels & DMs (3 columns) */}
          <div className="col-span-12 sm:col-span-4 border-r border-slate-200 bg-slate-50/80 p-4">
            {/* Search Input */}
            <div className="relative mb-4">
              <IconSearch
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                  Team Channels
                </p>
                <div className="space-y-1">
                  {[
                    { id: "design-review", name: "design-review", unread: 2 },
                    { id: "general", name: "general-announcements", unread: 0 },
                    { id: "product-launch", name: "product-launch", unread: 5 },
                  ].map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChannel(ch.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition ${
                        activeChannel === ch.id
                          ? "bg-indigo-600 text-white shadow-xs"
                          : "text-slate-700 hover:bg-slate-200/60"
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <IconHash size={15} /> #{ch.name}
                      </span>
                      {ch.unread > 0 && (
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                            activeChannel === ch.id
                              ? "bg-white text-indigo-600"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {ch.unread}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Messages */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                  Direct Messages
                </p>
                <div className="space-y-1">
                  {[
                    { name: "Sarah Wilson", online: true, role: "PM" },
                    { name: "Alex Carter", online: true, role: "Dev" },
                    { name: "David Chen", online: false, role: "Lead" },
                  ].map((dm, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs text-slate-700 hover:bg-slate-200/60 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${dm.online ? "bg-emerald-500" : "bg-slate-300"}`}
                        />
                        <span className="font-medium">{dm.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {dm.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area (8 columns) */}
          <div className="col-span-12 sm:col-span-8 flex flex-col justify-between p-4 sm:p-6 bg-white">
            {/* Chat Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <IconHash size={20} className="text-indigo-600" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    #design-review
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    3 members online • 12 active threads
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <IconPhone size={18} />
                </button>
                <button
                  type="button"
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <IconVideo size={18} />
                </button>
              </div>
            </div>

            {/* Notification alert if task was created */}
            {taskCreated && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-3 rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-800 flex items-center justify-between"
              >
                <span className="flex items-center gap-2 font-medium">
                  <IconCheck size={16} className="text-emerald-600" /> Task
                  created & synced to Kanban Board!
                </span>
                <span className="font-bold text-emerald-700">View Task →</span>
              </motion.div>
            )}

            {/* Messages Scroll Feed */}
            <div className="flex-1 space-y-4 overflow-y-auto pr-1">
              {messages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3 group">
                  <img
                    src={msg.avatar}
                    alt={msg.sender}
                    className="h-9 w-9 rounded-xl object-cover ring-2 ring-indigo-500/10"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        {msg.sender}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {msg.time}
                      </span>
                    </div>

                    <div className="mt-1 rounded-2xl bg-slate-50 border border-slate-100 p-3 text-xs text-slate-800 max-w-md">
                      <p>{msg.text}</p>

                      {msg.hasAttachment && (
                        <div className="mt-2.5 flex items-center gap-2.5 rounded-xl bg-white border border-slate-200 p-2 text-xs">
                          <IconFileText size={20} className="text-indigo-600" />
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-slate-900 truncate">
                              {msg.fileName}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              2.4 MB • PDF Document
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action pill: Convert message to task */}
                    <div className="mt-1.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCreateTaskFromChat}
                        className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:underline"
                      >
                        <IconChecklist size={13} /> Turn into Task
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pl-12 pt-2">
                <span className="flex h-2 w-2 rounded-full bg-slate-400 animate-ping" />
                <span>Sarah is typing...</span>
              </div>
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2"
            >
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
              >
                <IconPaperclip size={18} />
              </button>

              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Type a message or paste a task link..."
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />

              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition"
              >
                <IconSend size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
