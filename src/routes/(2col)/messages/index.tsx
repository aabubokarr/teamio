import {
  IconDotsVertical,
  IconPhone,
  IconPhoto,
  IconSend,
  IconSearch,
  IconVideo,
  IconChecklist,
  IconCheck,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export const Route = createFileRoute("/_2col-layout/messages")({
  component: RouteComponent,
});

const conversations = [
  {
    id: 1,
    name: "Sarah Wilson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    lastMessage: "The new design is ready for review.",
    time: "Today, 10:42 AM",
    timestamp: "10:42 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Alex Carter",
    role: "Frontend Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    lastMessage: "I'm prepping the component library now.",
    time: "Today, 10:45 AM",
    timestamp: "10:45 AM",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Maya Rahman",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    lastMessage: "Updated the Figma prototype frames! ✨",
    time: "Yesterday",
    timestamp: "4:15 PM",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    lastMessage: "Auth microservice deployment completed.",
    time: "Yesterday",
    timestamp: "2:30 PM",
    unread: 0,
    online: false,
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "Sarah Wilson",
    time: "10:42 AM",
    type: "text",
    content: "The new design is ready for review.",
    isOwn: false,
    showDate: false,
  },
  {
    id: 2,
    sender: "You",
    time: "10:44 AM",
    type: "text",
    content: "Looks great! I'll review it before the meeting.",
    isOwn: true,
    showDate: false,
  },
  {
    id: 3,
    sender: "Alex Carter",
    time: "10:45 AM",
    type: "text",
    content: "I'm already prepping the component library. Should we create a task to track the QA phase?",
    isOwn: false,
    reactions: "🚀 👍",
    showDate: true,
    date: "Today",
  },
];

function RouteComponent() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [showChat, setShowChat] = useState(false);
  const [taskCreated, setTaskCreated] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const selectedUser = conversations.find(
    (c) => c.id === selectedConversation
  );

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  const handleSelectConversation = (id: number) => {
    setSelectedConversation(id);
    setShowChat(true);
  };

  const handleBackToList = () => {
    setShowChat(false);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "You",
        time: getCurrentTime(),
        type: "text" as const,
        content: messageInput.trim(),
        isOwn: true,
        showDate: false,
      },
    ]);

    setMessageInput("");
  };

  const handleCreateTaskFromChat = () => {
    setTaskCreated(true);
    setTimeout(() => setTaskCreated(false), 4000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (!messagesContainerRef.current) return;
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages, selectedConversation]);

  return (
    <div className="mt-3 h-[calc(100vh-90px)] overflow-hidden font-sans">
      <div className="mx-auto grid h-full w-full gap-4 lg:grid-cols-[340px_minmax(0,1fr)]">
        
        {/* Sidebar */}
        <aside
          className={`flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs ${
            showChat ? "hidden lg:flex" : "flex"
          }`}
        >
          {/* Header */}
          <div className="border-b border-slate-100 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                  Team Messaging
                </p>
                <h2 className="mt-0.5 text-lg font-black tracking-tight text-slate-900">
                  Conversations
                </h2>
              </div>

              <button
                type="button"
                className="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 transition"
              >
                <IconDotsVertical size={16} />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <IconSearch size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search DMs & channels..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {conversations.map((c) => {
              const isSelected = selectedConversation === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => handleSelectConversation(c.id)}
                  className={`flex items-center gap-3 rounded-2xl p-3 cursor-pointer transition-all ${
                    isSelected
                      ? "bg-indigo-50 border border-indigo-100 shadow-xs"
                      : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="h-11 w-11 rounded-2xl object-cover ring-2 ring-white"
                    />
                    {c.online && (
                      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className={`truncate text-xs font-bold ${isSelected ? "text-indigo-950" : "text-slate-900"}`}>
                        {c.name}
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {c.timestamp}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {c.lastMessage}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 p-3 bg-slate-50/60">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active in Teamio
              </span>
              <span className="font-bold text-indigo-600">4 Online</span>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <section
          className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs ${
            !showChat ? "hidden lg:flex" : "flex"
          }`}
        >
          {selectedUser ? (
            <>
              {/* Header */}
              <header className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 bg-white">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBackToList}
                    className="p-1.5 rounded-xl bg-slate-100 text-slate-600 lg:hidden"
                  >
                    ←
                  </button>

                  <div className="relative">
                    <img
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      className="h-10 w-10 rounded-2xl object-cover"
                    />
                    {selectedUser.online && (
                      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{selectedUser.name}</h3>
                    <p className="text-[11px] text-indigo-600 font-medium">{selectedUser.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400">
                  <button type="button" className="p-2 rounded-xl hover:bg-slate-100 hover:text-slate-700">
                    <IconPhone size={18} />
                  </button>
                  <button type="button" className="p-2 rounded-xl hover:bg-slate-100 hover:text-slate-700">
                    <IconVideo size={18} />
                  </button>
                </div>
              </header>

              {/* Task Alert if task was created */}
              {taskCreated && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-4 mt-3 rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-800 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <IconCheck size={16} className="text-emerald-600" /> Message converted to Teamio Kanban Task!
                  </span>
                </motion.div>
              )}

              {/* Message Feed */}
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/40"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 group ${msg.isOwn ? "flex-row-reverse" : ""}`}
                  >
                    {!msg.isOwn && (
                      <img
                        src={selectedUser.avatar}
                        alt={msg.sender}
                        className="h-8 w-8 rounded-xl object-cover mt-1"
                      />
                    )}

                    <div className={`max-w-[75%] ${msg.isOwn ? "text-right" : "text-left"}`}>
                      <div className={`flex items-center gap-2 mb-1 ${msg.isOwn ? "justify-end" : ""}`}>
                        <span className="text-[11px] font-bold text-slate-800">{msg.sender}</span>
                        <span className="text-[10px] text-slate-400">{msg.time}</span>
                      </div>

                      <div
                        className={`rounded-2xl p-3 text-xs leading-relaxed ${
                          msg.isOwn
                            ? "bg-indigo-600 text-white rounded-tr-xs"
                            : "bg-white border border-slate-200 text-slate-800 shadow-xs rounded-tl-xs"
                        }`}
                      >
                        <p>{msg.content}</p>
                      </div>

                      {/* Convert to task action pill */}
                      {!msg.isOwn && (
                        <div className="mt-1 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleCreateTaskFromChat}
                            className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 hover:underline"
                          >
                            <IconChecklist size={12} /> Convert to Task
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input composer */}
              <div className="p-4 border-t border-slate-100 bg-white">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <button type="button" className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200">
                    <IconPhoto size={18} />
                  </button>

                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message or task update..."
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />

                  <button
                    type="submit"
                    disabled={!messageInput.trim()}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 disabled:opacity-50 transition"
                  >
                    <IconSend size={16} />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center text-slate-400 text-xs">
              Select a conversation to start messaging
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
