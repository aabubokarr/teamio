import {
  IconBrandHipchat,
  IconDotsVertical,
  IconMicrophone,
  IconPhone,
  IconPhoto,
  IconSend,
  IconSearch,
  IconVideo,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/_2col-layout/messages")({
  component: RouteComponent,
});

const conversations = [
  {
    id: 1,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=12",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 2,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=32",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 3,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=48",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 4,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=55",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 5,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=41",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 6,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=23",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
  {
    id: 7,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=67",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday",
    timestamp: "12:29 PM",
    unread: 0,
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
    showDate: false,
  },
  {
    id: 2,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
    reactions: "😊 👍 😍",
    showDate: false,
  },
  {
    id: 3,
    sender: "Shyed",
    time: "12:29 PM",
    type: "media",
    content:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop",
    isOwn: false,
    reactions: "👍 😍",
    showDate: true,
    date: "2 Aug",
  },
  {
    id: 4,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
    showDate: false,
  },
  {
    id: 5,
    sender: "Shyed",
    time: "12:29 PM",
    type: "audio",
    duration: "01:35",
    isOwn: false,
    replyTo: "Reply to you",
    replyMessage: "Hey! How you doin?",
    showDate: false,
  },
  {
    id: 6,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
    reactions: "👍 😍",
    showDate: false,
  },
];

function RouteComponent() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [showChat, setShowChat] = useState(false);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const selectedUser = conversations.find(
    (conversation) => conversation.id === selectedConversation
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

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop =
            messagesContainerRef.current.scrollHeight;
        }
      }, 0);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (!messagesContainerRef.current) return;

    const scrollToBottom = () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
    };

    requestAnimationFrame(() => {
      scrollToBottom();
      setTimeout(scrollToBottom, 50);
    });
  }, [messages, selectedConversation]);

  return (
    <div className="mt-3 h-[calc(100vh-80px)] overflow-hidden font-lufga">
      <div className="mx-auto grid h-full w-full gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside
          className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[24px] border border-[#E8EAE7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${
            showChat ? "hidden lg:flex" : "flex"
          }`}
        >
          {/* Sidebar Header */}
          <div className="border-b border-[#F0F1F0] px-5 py-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9A9E9A]">
                  Messages
                </p>

                <h2 className="mt-1 text-[20px] font-semibold tracking-[-0.02em] text-[#171A18]">
                  Conversations
                </h2>
              </div>

              <button
                type="button"
                className="grid size-9 place-items-center rounded-xl border border-[#ECEEEC] bg-[#FAFBFA] text-[#737873] transition-all duration-200 hover:border-[#D9DED9] hover:bg-[#F3F5F3] hover:text-[#171A18]"
              >
                <IconDotsVertical className="size-[17px]" />
              </button>
            </div>

            {/* Search */}
            <label className="relative block">
              <span className="sr-only">Search conversations</span>

              <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 size-[17px] -translate-y-1/2 text-[#9A9E9A]" />

              <input
                type="search"
                placeholder="Search conversations..."
                className="h-11 w-full rounded-xl border border-transparent bg-[#F6F7F6] pl-10 pr-4 text-[13px] text-[#171A18] outline-none transition-all placeholder:text-[#A5A9A5] focus:border-[#DCE4DD] focus:bg-white focus:ring-4 focus:ring-[#4A7C59]/5"
              />
            </label>
          </div>

          {/* Conversation List */}
          <div className="conversation-scrollbar flex-1 overflow-y-auto px-3 py-3">
            <div className="space-y-1">
              {conversations.map((conversation) => {
                const isSelected = selectedConversation === conversation.id;

                return (
                  <div
                    key={conversation.id}
                    className={`group relative flex w-full items-center gap-3 rounded-2xl p-3 transition-all duration-200 ${
                      isSelected ? "bg-[#F0F6F1]" : "hover:bg-[#F7F8F7]"
                    }`}
                  >
                    {/* Avatar */}
                    <button
                      type="button"
                      onClick={() => handleSelectConversation(conversation.id)}
                      className="relative shrink-0"
                    >
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="size-[46px] rounded-full object-cover ring-2 ring-white"
                      />

                      {/* Online indicator */}
                      {isSelected && (
                        <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[#4A7C59]" />
                      )}
                    </button>

                    {/* Conversation info */}
                    <button
                      type="button"
                      onClick={() => handleSelectConversation(conversation.id)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`truncate text-[14px] font-semibold ${
                            isSelected ? "text-[#31563C]" : "text-[#202420]"
                          }`}
                        >
                          {conversation.name}
                        </p>

                        <span className="shrink-0 text-[10px] font-medium text-[#A1A5A1]">
                          {conversation.timestamp}
                        </span>
                      </div>

                      <p className="mt-1 truncate pr-2 text-[12px] leading-5 text-[#858A85]">
                        {conversation.lastMessage}
                      </p>

                      <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[#A5A9A5]">
                        <span>{conversation.time}</span>

                        <span className="size-0.5 rounded-full bg-[#C7CBC7]" />

                        <span>Today</span>
                      </div>
                    </button>

                    {/* More */}
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-2 top-2 hidden size-7 place-items-center rounded-lg bg-white text-[#9A9E9A] shadow-sm group-hover:grid hover:text-[#303530]"
                    >
                      <IconDotsVertical className="size-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-[#F0F1F0] px-4 py-3">
            <div className="flex items-center justify-between rounded-xl bg-[#F8F9F8] px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#4A7C59]" />

                <span className="text-[11px] font-medium text-[#6E746E]">
                  You're online
                </span>
              </div>

              <span className="text-[10px] text-[#A3A7A3]">
                {conversations.length} chats
              </span>
            </div>
          </div>
        </aside>
        <section
          className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded-[24px] border border-[#E8EAE7] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${
            !showChat ? "hidden lg:flex" : "flex"
          }`}
        >
          {selectedUser ? (
            <>
              {/* =================================================
                  CHAT HEADER
              ================================================== */}
              <header className="flex shrink-0 items-center justify-between border-b border-[#F0F1F0] bg-white px-4 py-3.5 md:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Mobile Back */}
                  <button
                    type="button"
                    onClick={handleBackToList}
                    className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#F6F7F6] text-[#606660] transition hover:bg-[#ECEFEC] lg:hidden"
                  >
                    <svg
                      className="size-[18px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <img
                      src={selectedUser.avatar}
                      alt={selectedUser.name}
                      className="size-10 rounded-full object-cover md:size-11"
                    />

                    <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-[#4A7C59]" />
                  </div>

                  {/* User */}
                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-semibold text-[#171A18] md:text-[15px]">
                      {selectedUser.name}
                    </h3>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-[#4A7C59]" />

                      <span className="text-[11px] font-medium text-[#4A7C59]">
                        Active now
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    className="hidden size-9 place-items-center rounded-xl text-[#737873] transition hover:bg-[#F5F6F5] hover:text-[#202420] sm:grid"
                  >
                    <IconPhone className="size-[17px]" />
                  </button>

                  <button
                    type="button"
                    className="hidden size-9 place-items-center rounded-xl text-[#737873] transition hover:bg-[#F5F6F5] hover:text-[#202420] sm:grid"
                  >
                    <IconVideo className="size-[18px]" />
                  </button>

                  <button
                    type="button"
                    className="grid size-9 place-items-center rounded-xl text-[#737873] transition hover:bg-[#F5F6F5] hover:text-[#202420]"
                  >
                    <IconDotsVertical className="size-[17px]" />
                  </button>
                </div>
              </header>

              {/* =================================================
                  MESSAGES
              ================================================== */}
              <div
                ref={messagesContainerRef}
                className="conversation-scrollbar flex-1 overflow-y-auto bg-[#FCFDFC] px-4 py-5 md:px-7 md:py-6"
              >
                <div className="mx-auto max-w-[900px] space-y-5">
                  {/* Date label */}
                  <div className="flex items-center gap-3 py-1">
                    <div className="h-px flex-1 bg-[#EEF0EE]" />

                    <span className="rounded-full bg-[#F0F2F0] px-3 py-1 text-[10px] font-medium text-[#8D938D]">
                      Today
                    </span>

                    <div className="h-px flex-1 bg-[#EEF0EE]" />
                  </div>

                  {messages.map((message) => (
                    <div key={message.id}>
                      {message.showDate && (
                        <div className="mb-5 mt-6 flex items-center gap-3">
                          <div className="h-px flex-1 bg-[#EEF0EE]" />

                          <span className="rounded-full bg-[#F0F2F0] px-3 py-1 text-[10px] font-medium text-[#8D938D]">
                            {message.date}
                          </span>

                          <div className="h-px flex-1 bg-[#EEF0EE]" />
                        </div>
                      )}

                      <div
                        className={`flex gap-2.5 ${
                          message.isOwn ? "justify-end" : "justify-start"
                        }`}
                      >
                        {/* Incoming Avatar */}
                        {!message.isOwn && (
                          <img
                            src={selectedUser.avatar}
                            alt={message.sender}
                            className="mt-5 size-8 shrink-0 rounded-full object-cover"
                          />
                        )}

                        <div
                          className={`flex max-w-[82%] flex-col ${
                            message.isOwn ? "items-end" : "items-start"
                          } md:max-w-[65%]`}
                        >
                          {/* Name + Time */}
                          <div
                            className={`mb-1.5 flex items-center gap-2 px-1 ${
                              message.isOwn ? "flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-[11px] font-semibold text-[#343934]">
                              {message.sender}
                            </span>

                            <span className="text-[10px] text-[#A3A7A3]">
                              {message.time}
                            </span>
                          </div>

                          {/* Reply */}
                          {message.replyTo && (
                            <div className="mb-1 w-full rounded-xl border border-[#E8EBE8] bg-white px-3 py-2 text-left">
                              <p className="text-[10px] font-semibold text-[#4A7C59]">
                                {message.replyTo}
                              </p>

                              <p className="mt-0.5 truncate text-[11px] text-[#858A85]">
                                {message.replyMessage}
                              </p>
                            </div>
                          )}

                          {/* Message Content */}
                          {message.type === "text" && (
                            <div
                              className={`rounded-2xl px-4 py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${
                                message.isOwn
                                  ? "rounded-tr-md bg-[#4A7C59] text-white"
                                  : "rounded-tl-md border border-[#E9ECE9] bg-white text-[#292D29]"
                              }`}
                            >
                              <p className="text-[13px] leading-[1.65]">
                                {message.content}
                              </p>
                            </div>
                          )}

                          {/* Media */}
                          {message.type === "media" && (
                            <div className="group relative overflow-hidden rounded-2xl border border-[#E6E9E6] bg-white shadow-sm">
                              <img
                                src={message.content}
                                alt="Shared media"
                                className="max-h-[280px] max-w-full object-cover"
                              />

                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
                                <button
                                  type="button"
                                  className="grid size-11 scale-90 place-items-center rounded-full bg-white/90 text-[#303530] opacity-0 shadow-xl backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100"
                                >
                                  <svg
                                    className="ml-0.5 size-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Audio */}
                          {message.type === "audio" && (
                            <div className="flex min-w-[250px] items-center gap-3 rounded-2xl rounded-tl-md bg-[#4A7C59] px-3.5 py-3 shadow-sm md:min-w-[300px]">
                              <button
                                type="button"
                                className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#4A7C59] transition hover:scale-105"
                              >
                                <svg
                                  className="ml-0.5 size-3.5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </button>

                              <div className="flex h-6 flex-1 items-center gap-[3px]">
                                {[
                                  7, 12, 17, 11, 20, 14, 8, 16, 22, 13, 18, 9,
                                  15, 21, 11, 7, 14, 19, 12, 8, 16, 11, 18, 14,
                                ].map((height, index) => (
                                  <div
                                    key={index}
                                    className="w-[2px] rounded-full bg-white/70"
                                    style={{
                                      height: `${height}px`,
                                    }}
                                  />
                                ))}
                              </div>

                              <span className="text-[10px] font-semibold text-white">
                                {message.duration}
                              </span>
                            </div>
                          )}

                          {/* Reactions */}
                          {message.reactions && (
                            <div className="mt-1.5 flex items-center gap-1 rounded-full border border-[#E5E8E5] bg-white px-2.5 py-1 shadow-sm">
                              <span className="text-[11px]">
                                {message.reactions}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Own Avatar */}
                        {message.isOwn && (
                          <img
                            src="https://i.pravatar.cc/120?img=12"
                            alt="You"
                            className="mt-5 hidden size-8 shrink-0 rounded-full object-cover sm:block"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  MESSAGE COMPOSER
              ================================================== */}
              <div className="shrink-0 border-t border-[#EEF0EE] bg-white px-4 py-3.5 md:px-6 md:py-4">
                <div className="mx-auto flex max-w-[900px] items-end gap-2.5">
                  <img
                    src="https://i.pravatar.cc/120?img=12"
                    alt="You"
                    className="hidden size-9 shrink-0 rounded-full object-cover sm:block"
                  />

                  <div className="flex min-h-[46px] flex-1 items-center rounded-2xl border border-[#E7EAE7] bg-[#F8F9F8] px-2.5 pl-4 transition-all focus-within:border-[#C9D8CC] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#4A7C59]/5">
                    <input
                      type="text"
                      placeholder="Write a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#202420] outline-none placeholder:text-[#A3A7A3]"
                    />

                    <button
                      type="button"
                      className="grid size-8 shrink-0 place-items-center rounded-lg text-[#8D938D] transition hover:bg-[#EEF1EE] hover:text-[#4A7C59]"
                    >
                      <IconPhoto className="size-[17px]" />
                    </button>

                    <button
                      type="button"
                      className="grid size-8 shrink-0 place-items-center rounded-lg text-[#8D938D] transition hover:bg-[#EEF1EE] hover:text-[#4A7C59]"
                    >
                      <IconMicrophone className="size-[17px]" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className="grid size-[46px] shrink-0 place-items-center rounded-2xl bg-[#4A7C59] text-white shadow-[0_6px_18px_rgba(74,124,89,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3D6849] hover:shadow-[0_8px_22px_rgba(74,124,89,0.25)] active:translate-y-0 disabled:cursor-not-allowed disabled:bg-[#DCE2DD] disabled:shadow-none"
                  >
                    <IconSend className="size-[18px]" />
                  </button>
                </div>

                <p className="mt-2 hidden text-center text-[9px] text-[#B0B4B0] sm:block">
                  Press Enter to send
                </p>
              </div>
            </>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================== */
            <div className="flex flex-1 items-center justify-center bg-[#FCFDFC] p-6">
              <div className="max-w-sm text-center">
                <div className="mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-[#EEF4EF] text-[#4A7C59]">
                  <IconBrandHipchat className="size-7" />
                </div>

                <h3 className="text-[18px] font-semibold text-[#202420]">
                  Start a conversation
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#8A908A]">
                  Select a conversation from the sidebar to continue chatting
                  with your contacts.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* =======================================================
          CUSTOM SCROLLBAR
      ======================================================== */}
      <style>{`
        .conversation-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #dfe4df transparent;
        }

        .conversation-scrollbar::-webkit-scrollbar {
          width: 5px;
        }

        .conversation-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .conversation-scrollbar::-webkit-scrollbar-thumb {
          background: #dfe4df;
          border-radius: 999px;
        }

        .conversation-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd2cc;
        }
      `}</style>
    </div>
  );
}
