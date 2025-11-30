import { Button } from "@/components/ui/button";
import {
  IconBrandHipchat,
  IconDotsVertical,
  IconPaperclip,
  IconPhoto,
  IconPhone,
  IconPlane,
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
    time: "Today, Monday 12:29 PM",
    unread: 0,
  },
  {
    id: 2,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=32",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday 12:29 PM",
    unread: 0,
  },
  {
    id: 3,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=48",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday 12:29 PM",
    unread: 0,
  },
  {
    id: 4,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=55",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday 12:29 PM",
    unread: 0,
  },
  {
    id: 5,
    name: "Muhammad Shyed",
    avatar: "https://i.pravatar.cc/120?img=41",
    lastMessage: "Hey! i'm good, and you?..0",
    time: "Today, Monday 12:29 PM",
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
  },
  {
    id: 2,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content:
      "Hey! How you doin? Everything ok? Go To dashboard homepage and tracking shipment. Hey! How you doin? Everything ok? Go To dashboard homepage and tracking shipment.",
    isOwn: false,
  },
  {
    id: 3,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
    reactions: 2,
  },
  {
    id: 4,
    sender: "You",
    time: "12:29 PM",
    type: "media",
    content: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Shyed",
    time: "12:29 PM",
    type: "text",
    content: "Hey! How you doin? Everything ok?",
    isOwn: false,
  },
  {
    id: 6,
    sender: "Shyed",
    time: "12:29 PM",
    type: "audio",
    duration: "01:35",
    isOwn: false,
  },
];

function RouteComponent() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
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
      };
      return [...prev, newMessage];
    });
    setMessageInput("");
    
    // Scroll to bottom after message is added
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
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
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
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
    <div className="grid gap-6 font-lufga lg:grid-cols-[minmax(0,380px)_1fr] pb-6 overflow-hidden max-h-[calc(100svh-140px)]">
      {/* Conversations List */}
      <aside
        className="rounded-3xl bg-white p-6 shadow-sm overflow-hidden flex flex-col sticky top-24 md:top-28 max-h-[calc(100svh-180px)] md:max-h-[calc(100svh-200px)]"
        style={{ border: "var(--border-secondary)" }}
      >
        <div className="mb-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <IconBrandHipchat className="size-6 text-gray-900" />
            <h2 className="text-xl font-semibold text-gray-900">
              Conversations
            </h2>
          </div>
          <button
            type="button"
            className="inline-grid size-10 place-items-center rounded-full bg-off-white text-gray-500 transition hover:text-gray-900"
          >
            <span className="sr-only">Filter conversations</span>
            <IconDotsVertical className="size-5" />
          </button>
        </div>

        <label className="relative block mb-6 shrink-0">
          <span className="sr-only">Search conversations</span>
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-full bg-off-white px-11 py-3 text-sm text-gray-600 outline-none ring-0 transition focus:bg-white focus:ring-2 focus:ring-gray-100"
          />
        </label>

        <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              onClick={() => setSelectedConversation(conversation.id)}
              className={`w-full flex items-center gap-3 rounded-2xl p-4 text-left transition ${
                selectedConversation === conversation.id
                  ? "bg-primary-light/20 border border-primary-light/40"
                  : "hover:bg-gray-50"
              }`}
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="size-12 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">
                  {conversation.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {conversation.lastMessage}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {conversation.time}
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="inline-grid size-8 place-items-center rounded-full text-gray-400 transition hover:text-gray-600 shrink-0"
              >
                <span className="sr-only">Conversation options</span>
                <IconDotsVertical className="size-4" />
              </button>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat View */}
      <section
        className="rounded-3xl bg-white shadow-sm overflow-hidden flex flex-col sticky top-24 md:top-28 max-h-[calc(100svh-180px)] md:max-h-[calc(100svh-200px)]"
        style={{ border: "var(--border-secondary)" }}
      >
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {selectedUser.name}
                  </p>
                  <p className="text-xs text-green-500">Active</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="icon"
                  color="white"
                  isRounded
                  className={{ base: "size-10" }}
                >
                  <IconVideo className="size-5" />
                </Button>
                <Button
                  type="button"
                  variant="icon"
                  color="white"
                  isRounded
                  className={{ base: "size-10" }}
                >
                  <IconPhone className="size-5" />
                </Button>
                <button
                  type="button"
                  className="inline-grid size-10 place-items-center rounded-full bg-off-white text-gray-500 transition hover:text-gray-900"
                >
                  <span className="sr-only">More options</span>
                  <IconDotsVertical className="size-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto px-6 pt-6 pb-0 space-y-4 min-h-0"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex gap-3"
                >
                  <img
                    src={message.isOwn ? "https://i.pravatar.cc/120?img=12" : selectedUser.avatar}
                    alt={message.sender}
                    className="size-8 rounded-full object-cover shrink-0"
                  />
                  <div
                    className="max-w-[70%] items-start flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2 px-2 w-full">
                      <p className="text-xs text-gray-500">
                        {message.sender}
                      </p>
                      <span className="text-xs text-gray-400">
                        {message.time}
                      </span>
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-gray-900 ${
                        message.isOwn ? "bg-[#F5F5F7]" : "bg-[#ECF4EC]"
                      }`}
                    >
                      {message.type === "text" && (
                        <p className="text-sm">{message.content}</p>
                      )}
                      {message.type === "media" && (
                        <div className="relative group">
                          <img
                            src={message.content}
                            alt="Media"
                            className="rounded-xl max-w-full h-auto"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                            <button
                              type="button"
                              className="size-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition"
                            >
                              <svg
                                className="size-6 text-white ml-1"
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
                        <div className="flex items-center gap-3 min-w-[200px] bg-green-50 rounded-xl px-3 py-2">
                          <button
                            type="button"
                            className="size-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0"
                          >
                            <svg
                              className="size-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                            </svg>
                          </button>
                          <div className="flex-1 flex items-center gap-0.5 h-8">
                            {[
                              8, 12, 16, 20, 18, 14, 10, 15, 22, 18, 12, 8, 14,
                              20, 16, 10, 12, 18, 14, 8,
                            ].map((height, i) => (
                              <div
                                key={i}
                                className="w-0.5 bg-green-500 rounded-full"
                                style={{
                                  height: `${height}px`,
                                }}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 shrink-0 font-medium">
                            {message.duration}
                          </span>
                        </div>
                      )}
                    </div>
                    {message.reactions && (
                      <div className="px-2">
                        <span className="text-xs text-gray-400">
                          {message.reactions}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-100 shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/120?img=12"
                  alt="You"
                  className="size-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 flex items-center gap-2 rounded-full bg-off-white px-4 py-2">
                  <input
                    type="text"
                    placeholder="Type your message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    className="inline-grid size-8 place-items-center rounded-full text-gray-500 transition hover:text-gray-900"
                  >
                    <IconPhoto className="size-5" />
                  </button>
                  <button
                    type="button"
                    className="inline-grid size-8 place-items-center rounded-full text-gray-500 transition hover:text-gray-900"
                  >
                    <IconPaperclip className="size-5" />
                  </button>
                </div>
                <Button
                  type="button"
                  variant="icon"
                  color="black"
                  isRounded
                  onPress={handleSendMessage}
                  className={{ base: "size-10 bg-green-500 border-green-500" }}
                >
                  <IconPlane className="size-5 text-white" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Select a conversation to start chatting</p>
          </div>
        )}
      </section>
    </div>
  );
}
