import {
  IconBookmark,
  IconDotsVertical,
  IconEyeOff,
  IconMapPin,
  IconShare,
  IconTrash,
  IconHeart,
  IconMessageCircle,
  IconSend,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { Pressable, Tooltip, TooltipTrigger } from "react-aria-components";

import { focusRingStyles } from "@/components/ui/primitive";
import { cn } from "@/lib/utils";

export interface PostData {
  id: string;
  author: {
    name: string;
    handle: string;
    role: string;
    avatar: string;
    location?: string;
    website?: string;
    bio?: string;
  };
  timeAgo: string;
  content: string;
  image?: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  tag?: string;
}

const defaultAuthor = {
  name: "Maya Rahman",
  handle: "mayarahman",
  role: "Lead Product Designer",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  location: "San Francisco, CA",
  website: "https://teamio.com/maya",
  bio: "Designing simple experiences for complex workplace problems. Building Teamio layout & components.",
};

const mockPosts: Record<string, PostData> = {
  "0": {
    id: "0",
    author: defaultAuthor,
    timeAgo: "10 mins ago",
    content:
      "Just shipped the new 2-column workspace layout for Teamio! 🚀 We've unified team messaging, Kanban boards, and calendar scheduling into one cohesive experience. Check it out and let us know your feedback! #Teamio #UXDesign #Productivity",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    likesCount: 142,
    commentsCount: 28,
    sharesCount: 15,
    tag: "Product Update",
  },
  "1": {
    id: "1",
    author: {
      name: "Alex Carter",
      handle: "alexcarter",
      role: "Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      location: "Austin, TX",
      website: "https://github.com/alexcarter",
      bio: "Building fast React UI frameworks & design systems.",
    },
    timeAgo: "2 hours ago",
    content:
      "Zero TypeScript errors across all Teamio route components! Super smooth integration with Vite and Tailwind v4. Production builds are zooming under 1.1s. ⚡️ #WebDev #TypeScript #React",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    likesCount: 98,
    commentsCount: 12,
    sharesCount: 8,
    tag: "Tech Milestone",
  },
  "2": {
    id: "2",
    author: {
      name: "Sarah Wilson",
      handle: "sarahwilson",
      role: "Senior Product Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      location: "New York, NY",
      website: "https://teamio.com/sarah",
      bio: "Product strategy and team orchestration at Teamio.",
    },
    timeAgo: "5 hours ago",
    content:
      "Our Q3 roadmap is live! Focused on intelligent task automation, instant DMs-to-tasks conversion, and calendar sync across Google & Outlook. Great job team! 🎉",
    likesCount: 215,
    commentsCount: 44,
    sharesCount: 31,
    tag: "Roadmap",
  },
};

export interface PostProps {
  id: string;
  view?: "list" | "standalone";
  customData?: PostData;
}

export function Post({ id, view = "list", customData }: PostProps) {
  const post = customData || mockPosts[id] || mockPosts["0"];
  const [likes, setLikes] = useState(post.likesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((prev) => [...prev, commentText.trim()]);
    setCommentText("");
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:shadow-md hover:border-indigo-200/80 space-y-4 font-sans",
        {
          "max-w-2xl mx-auto": view === "list",
          "max-w-2xl mx-auto mb-8": view === "standalone",
        }
      )}
    >
      {/* Post Top Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <HoverProfile author={post.author} />

          <div>
            <div className="flex items-center gap-2">
              <Link
                to="/$user"
                params={{ user: post.author.handle }}
                className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                {post.author.name}
              </Link>
              {post.tag && (
                <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700">
                  {post.tag}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 font-medium">{post.author.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 relative">
          <span className="text-[11px] text-slate-400 font-medium">{post.timeAgo}</span>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 transition"
          >
            <IconDotsVertical size={16} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-9 z-30 w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl text-xs font-semibold text-slate-700 space-y-1">
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 transition">
                <IconBookmark size={14} /> Save Post
              </button>
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 transition">
                <IconEyeOff size={14} /> Hide Post
              </button>
              <button type="button" className="flex w-full items-center gap-2 rounded-xl px-3 py-2 hover:bg-rose-50 text-rose-600 transition">
                <IconTrash size={14} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post Text Content */}
      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
        {post.content}
      </p>

      {/* Post Image Media */}
      {post.image && (
        <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-xs">
          <img
            src={post.image}
            alt="Post Attachment"
            className="h-64 sm:h-72 w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>
      )}

      {/* Like / Comment Counter */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <IconHeart size={14} className={isLiked ? "text-rose-500 fill-rose-500" : "text-slate-400"} />
          {likes} Likes
        </span>
        <div className="flex items-center gap-3">
          <span>{post.commentsCount + comments.length} Comments</span>
          <span>•</span>
          <span>{post.sharesCount} Shares</span>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={handleLike}
          className={cn(
            "flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition",
            isLiked
              ? "bg-rose-50 text-rose-600 border border-rose-200"
              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
          )}
        >
          <IconHeart size={16} className={isLiked ? "fill-rose-500" : ""} />
          <span>{isLiked ? "Liked" : "Like"}</span>
        </button>

        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
        >
          <IconMessageCircle size={16} />
          <span>Comment</span>
        </button>

        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
        >
          <IconShare size={16} />
          <span>Share</span>
        </button>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-1">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
        />
        <button
          type="submit"
          disabled={!commentText.trim()}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white disabled:opacity-40 transition hover:bg-indigo-700"
        >
          <IconSend size={14} />
        </button>
      </form>

      {/* Render new comments */}
      {comments.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {comments.map((c, i) => (
            <div key={i} className="rounded-xl bg-slate-50 p-2.5 text-xs text-slate-800 flex items-start gap-2">
              <span className="font-bold text-indigo-600">You:</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const MotionHoverProfileContent = motion.create(HoverProfileContent);

export function HoverProfile({ author = defaultAuthor }: { author?: PostData["author"] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipTrigger
      delay={250}
      closeDelay={250}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Pressable>
        <Link
          className={focusRingStyles({ className: "z-2 rounded-full" })}
          to="/$user"
          params={{ user: author.handle }}
          tabIndex={-1}
        >
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-2xl object-cover ring-2 ring-indigo-500/10 shadow-xs"
          />
        </Link>
      </Pressable>

      <AnimatePresence>
        {open && (
          <MotionHoverProfileContent
            author={author}
            variants={{
              enter: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 8, scale: 0.95 },
            }}
            initial="exit"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>
    </TooltipTrigger>
  );
}

function HoverProfileContent({
  author,
  ...props
}: { author: PostData["author"] } & React.ComponentProps<typeof Tooltip>) {
  return (
    <Tooltip
      isOpen
      {...props}
      offset={12}
      className="bg-white rounded-3xl shadow-xl border border-slate-200 p-4 max-w-xs space-y-3 z-50 font-sans"
      placement="bottom left"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-12 w-12 rounded-2xl object-cover"
          />
          <div>
            <p className="font-bold text-xs text-slate-900">{author.name}</p>
            <p className="text-[11px] font-semibold text-indigo-600">{author.role}</p>
          </div>
        </div>
      </div>

      {author.bio && (
        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          {author.bio}
        </p>
      )}

      {author.location && (
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <IconMapPin size={13} className="text-slate-400" />
          <span>{author.location}</span>
        </div>
      )}
    </Tooltip>
  );
}
