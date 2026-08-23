import React, { useState } from "react";
import {
  IconHeart,
  IconMessageCircle,
  IconShare,
  IconCheck,
  IconCalendar,
  IconChecklist,
  IconSend,
  IconBookmark,
  IconDots,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function SocialPreview() {
  const [likes, setLikes] = useState(248);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(42);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [quickReply, setQuickReply] = useState("");
  const [replies, setReplies] = useState<string[]>([
    "Awesome milestone! Congrats team 🎉",
  ]);

  const handleLikeToggle = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickReply.trim()) return;
    setReplies([...replies, quickReply]);
    setCommentsCount(commentsCount + 1);
    setQuickReply("");
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto perspective-[1000px] font-sans">
      {/* Background Soft Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-300/40 via-cyan-200/30 to-purple-300/30 blur-3xl -z-10 pointer-events-none" />

      {/* Main Timeline Workspace Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 15, rotateX: 3 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-[0_15px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl"
      >
        {/* Workspace Top Status Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-700 tracking-wide">
              Teamio Workspace Feed
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
              Live updates
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-semibold">
              Sync 100%
            </span>
            <IconDots
              size={16}
              className="text-slate-400 cursor-pointer hover:text-slate-600"
            />
          </div>
        </div>

        {/* User Post Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Maya Rahman"
                className="h-9 w-9 rounded-xl object-cover ring-2 ring-indigo-500/20"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-indigo-600 text-[8px] text-white font-bold">
                ✓
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs font-extrabold text-slate-900">
                  Maya Rahman
                </h4>
                <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600">
                  Product Designer
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Posted in{" "}
                <span className="font-semibold text-indigo-600">
                  #product-launch
                </span>{" "}
                · 24m ago
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <IconBookmark size={14} />
          </button>
        </div>

        {/* Post Content */}
        <div className="mt-2.5">
          <p className="text-xs leading-relaxed text-slate-800 font-normal">
            Just wrapped up our product launch 🚀 Proud of what the team
            accomplished this week! The new designs are live and fully
            integrated with our task boards.
          </p>

          {/* Connected Work Banner */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50/80 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
              <IconChecklist size={12} /> Task: Homepage Redesign
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              <IconCheck size={12} /> Completed ahead of deadline
            </span>
          </div>
        </div>

        {/* Post Image Preview */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 shadow-xs relative group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="Team Collaboration"
            className="h-32 sm:h-36 w-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-slate-900/85 p-2 backdrop-blur-md flex items-center justify-between text-white text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="font-semibold text-xs">Teamio v2.0 Sprint</span>
            </div>
            <span className="text-[10px] text-slate-300">
              4 Assets Attached
            </span>
          </div>
        </div>

        {/* Social Engagement Actions Bar */}
        <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleLikeToggle}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold transition ${
                hasLiked
                  ? "bg-rose-50 text-rose-600 shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <IconHeart size={14} fill={hasLiked ? "currentColor" : "none"} />
              <span>{likes}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowReplyInput(!showReplyInput)}
              className="flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              <IconMessageCircle size={14} />
              <span>{commentsCount}</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition"
            >
              <IconShare size={14} />
              <span>Share</span>
            </button>
          </div>

          <div className="flex items-center -space-x-1.5">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80"
              alt="Alex"
              className="h-5 w-5 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80"
              alt="Sarah"
              className="h-5 w-5 rounded-full ring-2 ring-white object-cover"
            />
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-600 ring-2 ring-white">
              +38
            </span>
          </div>
        </div>

        {/* Existing & Interactive Replies */}
        {replies.length > 0 && (
          <div className="mt-2 space-y-1 pt-1">
            {replies.map((reply, idx) => (
              <div
                key={idx}
                className="flex items-start gap-1.5 rounded-lg bg-slate-50 p-2 text-[11px]"
              >
                <span className="font-bold text-slate-900">You:</span>
                <span className="text-slate-700">{reply}</span>
              </div>
            ))}
          </div>
        )}

        {/* Quick Reply Form */}
        {showReplyInput && (
          <form
            onSubmit={handleSendReply}
            className="mt-2 flex items-center gap-1.5"
          >
            <input
              type="text"
              value={quickReply}
              onChange={(e) => setQuickReply(e.target.value)}
              placeholder="Write a comment..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 transition"
            >
              <IconSend size={13} />
            </button>
          </form>
        )}
      </motion.div>

      {/* Floating Card 1: Message Notification Card (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="animate-float-slow absolute -top-4 -right-2 z-20 w-52 rounded-xl border border-slate-200/90 bg-white/95 p-2.5 shadow-lg backdrop-blur-xl hidden sm:block"
      >
        <div className="flex items-start gap-2">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
              alt="Sarah"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-slate-900 truncate">
                Sarah Wilson
              </p>
              <span className="text-[9px] text-slate-400">Now</span>
            </div>
            <p className="mt-0.5 text-[10px] text-slate-600 truncate">
              “Are we on for the meeting?”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Task Notification Card (Middle Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="animate-float-reverse absolute top-1/4 -left-4 z-20 w-44 rounded-xl border border-slate-200/90 bg-white/95 p-2.5 shadow-lg backdrop-blur-xl hidden md:block"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
            <IconChecklist size={14} />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-900 truncate">
              Website launch
            </p>
            <p className="text-[9px] text-slate-500">4 tasks remaining</p>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full w-[75%]" />
        </div>
      </motion.div>

      {/* Floating Card 3: Calendar Card (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="animate-float-slow absolute -bottom-4 -right-2 z-20 w-48 rounded-xl border border-slate-200/90 bg-white/95 p-2.5 shadow-lg backdrop-blur-xl hidden sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 flex-col items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shrink-0">
            <span className="text-[8px] uppercase tracking-wider font-medium opacity-80 leading-none">
              TODAY
            </span>
            <span className="text-xs leading-none mt-0.5">15</span>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-900 truncate">
              Product Sync
            </p>
            <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
              <IconCalendar size={11} className="text-indigo-600" /> 3:00 PM
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
