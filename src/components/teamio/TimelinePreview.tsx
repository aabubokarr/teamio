import React, { useState } from "react";
import {
  IconHeart,
  IconMessageCircle,
  IconShare,
  IconSparkles,
  IconTrophy,
  IconRocket,
  IconBulb,
  IconPlus,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

interface Post {
  id: number;
  author: string;
  role: string;
  avatar: string;
  badge?: string;
  time: string;
  type: "personal" | "team" | "achievement";
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  mentions: string[];
  hasLiked?: boolean;
}

export function TimelinePreview() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [newPostText, setNewPostText] = useState("");

  const initialPosts: Post[] = [
    {
      id: 1,
      author: "Maya Rahman",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      badge: "Personal Update",
      time: "10 mins ago",
      type: "personal",
      content: "Finished the first prototype today! Check out the interactive design specs for our new mobile navigation layout.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      likes: 84,
      comments: 18,
      shares: 5,
      tags: ["#design", "#prototype", "#uidesign"],
      mentions: ["@alex", "@sarah"],
    },
    {
      id: 2,
      author: "Alex Carter",
      role: "Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      badge: "Team Update",
      time: "1 hour ago",
      type: "team",
      content: "We're launching the new campaign next Monday. All systems are green and test coverage is at 98%. Huge kudos to engineering!",
      likes: 142,
      comments: 32,
      shares: 12,
      tags: ["#launch", "#engineering", "#sprint"],
      mentions: ["@all-team"],
    },
    {
      id: 3,
      author: "Sarah Wilson",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      badge: "Achievement 🎉",
      time: "3 hours ago",
      type: "achievement",
      content: "Congratulations to Maya for completing her first year with the team! 🎉 Thank you for bringing such incredible creativity and positivity to Teamio.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      likes: 215,
      comments: 47,
      shares: 19,
      tags: ["#workanniversary", "#teamlove", "#celebrate"],
      mentions: ["@maya"],
    },
  ];

  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          const hasLiked = !post.hasLiked;
          return {
            ...post,
            hasLiked,
            likes: hasLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      author: "You",
      role: "Product Lead",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      badge: "Personal Update",
      time: "Just now",
      type: "personal",
      content: newPostText,
      likes: 1,
      comments: 0,
      shares: 0,
      tags: ["#teamio", "#workday"],
      mentions: [],
      hasLiked: true,
    };

    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.type === activeFilter);

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
            <IconSparkles size={14} /> Social Timeline
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Stay connected to <span className="text-indigo-600">what matters.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Share updates, celebrate wins, exchange ideas, and stay connected with the people you work with — in a professional social timeline.
          </p>
        </div>

        {/* Timeline Interactive Workspace Box */}
        <div className="mt-12 mx-auto max-w-3xl">
          
          {/* Controls Bar: Post Input + Filter Pills */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 mb-6 shadow-sm backdrop-blur-md">
            
            {/* Quick Share Form */}
            <form onSubmit={handleAddPost} className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex items-center gap-3 flex-1 bg-white rounded-2xl border border-slate-200 px-3.5 py-2 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                  alt="You"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <input
                  type="text"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                  placeholder="Share a work update, win, or idea with your team..."
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition"
              >
                <IconPlus size={16} /> Post Update
              </button>
            </form>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 text-xs font-medium">
              <span className="text-slate-400 mr-2">Filter:</span>
              {[
                { id: "all", label: "All Activity", icon: IconSparkles },
                { id: "personal", label: "Personal Updates", icon: IconBulb },
                { id: "team", label: "Team Announcements", icon: IconRocket },
                { id: "achievement", label: "Achievements", icon: IconTrophy },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition ${
                      isActive
                        ? "bg-slate-900 text-white font-bold shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl object-cover ring-2 ring-indigo-500/10"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">{post.author}</h4>
                          <span className="text-xs text-slate-400">• {post.role}</span>
                        </div>
                        <p className="text-[11px] text-slate-400">{post.time}</p>
                      </div>
                    </div>

                    {post.badge && (
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-100">
                        {post.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-800 font-normal">
                    {post.content}
                  </p>

                  {/* Image attachment */}
                  {post.image && (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-xs">
                      <img
                        src={post.image}
                        alt="Post media"
                        className="h-56 w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Mentions & Hashtags */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    {post.mentions.map((m) => (
                      <span key={m} className="font-semibold text-indigo-600 hover:underline cursor-pointer">
                        {m}
                      </span>
                    ))}
                    {post.tags.map((t) => (
                      <span key={t} className="text-slate-500 hover:text-slate-800 cursor-pointer">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-semibold transition ${
                          post.hasLiked
                            ? "bg-rose-50 text-rose-600"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <IconHeart size={16} fill={post.hasLiked ? "currentColor" : "none"} />
                        <span>{post.likes}</span>
                      </button>

                      <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-xl bg-slate-50 px-3.5 py-1.5 font-semibold text-slate-600 hover:bg-slate-100 transition"
                      >
                        <IconMessageCircle size={16} />
                        <span>{post.comments} Comments</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition"
                    >
                      <IconShare size={16} />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
