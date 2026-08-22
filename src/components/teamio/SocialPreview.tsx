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
    <div className="relative w-full max-w-2xl mx-auto perspective-[1200px]">
      {/* Background Soft Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-300/40 via-cyan-200/30 to-purple-300/30 blur-3xl -z-10 pointer-events-none" />

      {/* Main Timeline Workspace Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: 5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      >
        {/* Workspace Top Status Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Teamio Workspace Feed
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-600">
              Live updates
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Sync: 100%</span>
            <IconDots size={18} className="text-slate-400 cursor-pointer hover:text-slate-600" />
          </div>
        </div>

        {/* User Post Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Maya Rahman"
                className="h-11 w-11 rounded-2xl object-cover ring-2 ring-indigo-500/20"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[9px] text-white">
                ✓
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-slate-900">Maya Rahman</h4>
                <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                  Product Designer
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Posted in <span className="font-medium text-indigo-600">#product-launch</span> · 24m ago
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          >
            <IconBookmark size={16} />
          </button>
        </div>

        {/* Post Content */}
        <div className="mt-3.5">
          <p className="text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
            Just wrapped up our product launch 🚀 Proud of what the team accomplished this week!
            The new designs are live and fully integrated with our task boards.
          </p>

          {/* Connected Work Banner */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50/80 px-2.5 py-1 text-xs font-medium text-indigo-700">
              <IconChecklist size={14} /> Linked Task: Homepage v2 Redesign
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50/80 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <IconCheck size={14} /> Completed ahead of deadline
            </span>
          </div>
        </div>

        {/* Post Image Preview */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-sm relative group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team Collaboration"
            className="h-44 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-900/80 p-2.5 backdrop-blur-md flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
              <span className="font-semibold">Teamio v2.0 Design Sprint</span>
            </div>
            <span className="text-[11px] text-slate-300">4 Assets Attached</span>
          </div>
        </div>

        {/* Social Engagement Actions Bar */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleLikeToggle}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                hasLiked
                  ? "bg-rose-50 text-rose-600 shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <IconHeart size={16} fill={hasLiked ? "currentColor" : "none"} />
              <span>{likes}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowReplyInput(!showReplyInput)}
              className="flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
            >
              <IconMessageCircle size={16} />
              <span>{commentsCount}</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
            >
              <IconShare size={16} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          <div className="flex items-center -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
              alt="Alex"
              className="h-6 w-6 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
              alt="Sarah"
              className="h-6 w-6 rounded-full ring-2 ring-white object-cover"
            />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600 ring-2 ring-white">
              +38
            </span>
          </div>
        </div>

        {/* Existing & Interactive Replies */}
        {replies.length > 0 && (
          <div className="mt-3 space-y-2 pt-2">
            {replies.map((reply, idx) => (
              <div key={idx} className="flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 text-xs">
                <span className="font-bold text-slate-900">You:</span>
                <span className="text-slate-700">{reply}</span>
              </div>
            ))}
          </div>
        )}

        {/* Quick Reply Form */}
        {showReplyInput && (
          <form onSubmit={handleSendReply} className="mt-3 flex items-center gap-2">
            <input
              type="text"
              value={quickReply}
              onChange={(e) => setQuickReply(e.target.value)}
              placeholder="Write a comment or link a task..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs hover:bg-indigo-700 transition"
            >
              <IconSend size={14} />
            </button>
          </form>
        )}
      </motion.div>

      {/* Floating Card 1: Message Notification Card (Top Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="animate-float-slow absolute -top-6 -right-2 sm:-right-8 z-20 w-64 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-xl hidden xs:block"
      >
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="Sarah"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-900 truncate">Sarah Wilson</p>
              <span className="text-[10px] text-slate-400">Now</span>
            </div>
            <p className="mt-0.5 text-xs text-slate-600 line-clamp-2">
              “Are we still on for the 3 PM meeting?”
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
                Direct Message
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Task Notification Card (Middle Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="animate-float-reverse absolute top-1/3 -left-4 sm:-left-10 z-20 w-56 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-xl hidden sm:block"
      >
        <div className="flex items-center gap-2.5 mb-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <IconChecklist size={16} />
          </span>
          <div>
            <p className="text-xs font-bold text-slate-900">Website launch</p>
            <p className="text-[10px] text-slate-500">4 tasks remaining</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full w-[75%]" />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <span>Sprint #14</span>
          <span className="font-semibold text-indigo-600">75% done</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Calendar Card (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="animate-float-slow absolute -bottom-8 -right-2 sm:-right-6 z-20 w-60 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-xl hidden xs:block"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
            <span className="text-[9px] uppercase tracking-wider font-medium opacity-80 leading-none">TODAY</span>
            <span className="text-sm leading-none mt-0.5">15</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Product Sync</p>
            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
              <IconCalendar size={12} className="text-indigo-600" /> Today · 3:00 PM
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 4: Team Activity Shard (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute -bottom-10 left-4 z-20 flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-slate-950 px-4 py-2 text-white shadow-xl backdrop-blur-xl hidden sm:flex"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 text-xs font-bold">
          ✓
        </span>
        <p className="text-xs font-medium">
          <span className="font-bold text-cyan-300">Alex</span> completed “Homepage redesign”
        </p>
      </motion.div>
    </div>
  );
}
