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
    content: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop",
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
  const [showChat, setShowChat] = useState(false); // Mobile view toggle
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
    setShowChat(true); // Show chat on mobile when conversation is selected
  };

  const handleBackToList = () => {
    setShowChat(false); // Return to conversation list on mobile
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    setMessages((prev) => {
      const newMessage = {
        id: prev.length + 1,
        sender: "You",
        time: getCurrentTime(),
        type: "text" as const,
        content: messageInput.trim(),
        isOwn: true,
        showDate: false,
      };
      return [...prev, newMessage];
    });
    setMessageInput("");

    // Scroll to bottom after message is added
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
    // Scroll to bottom when messages change or conversation changes
    if (messagesContainerRef.current) {
      const scrollToBottom = () => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop =
            messagesContainerRef.current.scrollHeight;
        }
      };
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        scrollToBottom();
        // Double check after a small delay to handle any async rendering
        setTimeout(scrollToBottom, 50);
      });
    }
  }, [messages, selectedConversation]);

  return (
    <div className="grid gap-4 md:gap-6 font-lufga lg:grid-cols-[minmax(0,380px)_1fr] pb-4 md:pb-6 overflow-hidden max-h-[calc(100svh-100px)] md:max-h-[calc(100svh-140px)]">
      {/* Conversations List */}
      <aside
        className={`rounded-2xl md:rounded-3xl bg-white p-4 md:p-6 shadow-sm overflow-hidden flex flex-col sticky top-20 md:top-24 lg:top-28 max-h-[calc(100svh-120px)] md:max-h-[calc(100svh-180px)] lg:max-h-[calc(100svh-200px)] ${
          showChat ? "hidden lg:flex" : "flex"
        }`}
        style={{ border: "var(--border-secondary)" }}
      >
        <div className="mb-4 md:mb-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <IconBrandHipchat className="size-5 md:size-6 text-gray-900" />
            <h2 className="text-base md:text-lg font-semibold text-gray-900">
              Conversations
            </h2>
          </div>
          <button
            type="button"
            className="inline-grid size-9 md:size-9 place-items-center rounded-lg bg-off-white text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <span className="sr-only">Filter conversations</span>
            <IconDotsVertical className="size-4" />
          </button>
        </div>

        <label className="relative block mb-4 md:mb-5 shrink-0">
          <span className="sr-only">Search conversations</span>
          <IconSearch className="pointer-events-none absolute left-3 md:left-4 top-1/2 size-4 md:size-4.5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-lg md:rounded-xl bg-off-white px-9 md:px-11 py-2 md:py-2.5 text-sm text-gray-600 outline-none ring-0 transition placeholder:text-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-200"
          />
        </label>

        <div className="flex-1 overflow-y-auto space-y-1 min-h-0 -mx-1 md:-mx-2 px-1 md:px-2">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              onClick={() => handleSelectConversation(conversation.id)}
              className={`w-full flex items-start gap-2.5 md:gap-3 rounded-lg md:rounded-xl p-2.5 md:p-3 text-left transition ${
                selectedConversation === conversation.id
                  ? "bg-[#E8E4F3]"
                  : "hover:bg-gray-50"
              }`}
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="size-10 md:size-11 rounded-full object-cover shrink-0 mt-0.5"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="font-semibold text-sm md:text-[15px] text-gray-900 truncate">
                    {conversation.name}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="inline-grid size-6 place-items-center rounded text-gray-400 transition hover:text-gray-600 shrink-0 -mt-0.5"
                  >
                    <span className="sr-only">Conversation options</span>
                    <IconDotsVertical className="size-4" />
                  </button>
                </div>
                <p className="text-xs md:text-[13px] text-gray-500 truncate mb-1">
                  {conversation.lastMessage}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                    </svg>
                    {conversation.time}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                    </svg>
                    {conversation.timestamp}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat View */}
      <section
        className={`rounded-2xl md:rounded-3xl bg-white shadow-sm overflow-hidden flex flex-col sticky top-20 md:top-24 lg:top-28 max-h-[calc(100svh-120px)] md:max-h-[calc(100svh-180px)] lg:max-h-[calc(100svh-200px)] ${
          !showChat ? "hidden lg:flex" : "flex"
        }`}
        style={{ border: "var(--border-secondary)" }}
      >
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                {/* Back button for mobile */}
                <button
                  type="button"
                  onClick={handleBackToList}
                  className="lg:hidden inline-grid size-9 place-items-center rounded-lg bg-off-white text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 mr-1"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="relative">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="size-10 md:size-11 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 size-2 md:size-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-[15px] text-gray-900">
                    {selectedUser.name}
                  </p>
                  <p className="text-[11px] md:text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="size-1.5 bg-green-500 rounded-full"></span>
                    Active
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <button
                  type="button"
                  className="hidden sm:inline-grid size-9 place-items-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  <IconPhone className="size-4.5" />
                </button>
                <button
                  type="button"
                  className="hidden sm:inline-grid size-9 place-items-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  <IconVideo className="size-4.5" />
                </button>
                <button
                  type="button"
                  className="inline-grid size-9 place-items-center rounded-lg bg-off-white text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">More options</span>
                  <IconDotsVertical className="size-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-5 space-y-3 md:space-y-4 min-h-0"
            >
              {messages.map((message) => (
                <div key={message.id}>
                  {message.showDate && (
                    <div className="flex justify-center mb-4">
                      <span className="text-xs text-gray-400 font-medium">
                        {message.date}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 md:gap-2.5">
                    <img
                      src={
                        message.isOwn
                          ? "https://i.pravatar.cc/120?img=12"
                          : selectedUser.avatar
                      }
                      alt={message.sender}
                      className="size-7 md:size-8 rounded-full object-cover shrink-0"
                    />
                    <div className="max-w-[80%] md:max-w-[65%] items-start flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 md:gap-2 px-0.5">
                        <p className="text-[11px] md:text-xs font-semibold text-gray-900">
                          {message.sender}
                        </p>
                        <span className="text-[10px] md:text-[11px] text-gray-400">
                          {message.time}
                        </span>
                      </div>
                      
                      {message.replyTo && (
                        <div className="px-2.5 md:px-3 py-1.5 bg-gray-50 rounded-lg text-[11px] md:text-xs text-gray-500 mb-0.5">
                          <p className="font-medium text-gray-700">{message.replyTo}</p>
                          <p className="text-[10px] md:text-[11px]">{message.replyMessage}</p>
                        </div>
                      )}

                      <div
                        className={`rounded-xl md:rounded-2xl text-gray-900 ${
                          message.type === "text"
                            ? message.isOwn
                              ? "bg-[#F5F5F7] px-3 md:px-3.5 py-2 md:py-2.5"
                              : "bg-[#ECF4EC] px-3 md:px-3.5 py-2 md:py-2.5"
                            : ""
                        }`}
                      >
                        {message.type === "text" && (
                          <p className="text-[12.5px] md:text-[13.5px] leading-relaxed">
                            {message.content}
                          </p>
                        )}
                        {message.type === "media" && (
                          <div className="relative group">
                            <img
                              src={message.content}
                              alt="Media"
                              className="rounded-xl md:rounded-2xl max-w-full h-auto"
                              style={{ maxHeight: "240px" }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                type="button"
                                className="size-10 md:size-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition"
                              >
                                <svg
                                  className="size-4 md:size-5 text-white ml-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}
                        {message.type === "audio" && (
                          <div className="flex items-center gap-2 md:gap-2.5 min-w-[240px] md:min-w-[280px] bg-[#4A7C59] rounded-xl md:rounded-2xl px-2.5 md:px-3 py-2 md:py-2.5">
                            <button
                              type="button"
                              className="size-7 md:size-8 rounded-full bg-white flex items-center justify-center text-[#4A7C59] shrink-0"
                            >
                              <svg
                                className="size-3.5 md:size-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                            <div className="flex-1 flex items-center gap-0.5 h-5 md:h-6">
                              {[
                                6, 10, 14, 18, 16, 12, 8, 13, 20, 16, 10, 6, 12,
                                18, 14, 8, 10, 16, 12, 6, 10, 14, 18, 16,
                              ].map((height, i) => (
                                <div
                                  key={i}
                                  className="w-0.5 bg-white/80 rounded-full"
                                  style={{
                                    height: `${height}px`,
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-[11px] md:text-xs text-white shrink-0 font-medium">
                              {message.duration}
                            </span>
                          </div>
                        )}
                      </div>
                      {message.reactions && (
                        <div className="flex items-center gap-1 px-0.5">
                          <span className="text-[11px] md:text-xs">{message.reactions}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-100 shrink-0">
              <div className="flex items-end gap-2 md:gap-3">
                <img
                  src="https://i.pravatar.cc/120?img=12"
                  alt="You"
                  className="hidden sm:block size-8 md:size-9 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 flex items-center gap-1.5 md:gap-2 rounded-full bg-off-white pl-3 md:pl-4 pr-1.5 md:pr-2 py-2">
                  <input
                    type="text"
                    placeholder="Type your message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-sm md:text-[13.5px] text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    className="inline-grid size-8 place-items-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                  >
                    <IconPhoto className="size-4 md:size-4.5" />
                  </button>
                  <button
                    type="button"
                    className="inline-grid size-8 place-items-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                  >
                    <IconMicrophone className="size-4 md:size-4.5" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="inline-grid size-10 md:size-11 place-items-center rounded-full bg-[#4A7C59] text-white transition hover:bg-[#3d6849] active:scale-95 shrink-0"
                >
                  <IconSend className="size-4.5 md:size-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">
              Select a conversation to start chatting
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
