import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Post } from "@/features/post/post";
import {
  IconPhoto,
  IconChecklist,
  IconCalendarEvent,
  IconSend,
  IconSparkles,
} from "@tabler/icons-react";

export const Route = createFileRoute("/_2col-layout/timeline")({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeFilter, setActiveFilter] = useState<"all" | "updates" | "sprints">("all");
  const [postText, setPostText] = useState("");
  const [createdPosts, setCreatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.body.setAttribute("data-platform", "macos");
    }
  }, []);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newPost = {
      id: `custom-${Date.now()}`,
      author: {
        name: "Maya Rahman",
        handle: "mayarahman",
        role: "Lead Product Designer @ Teamio",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        location: "San Francisco, CA",
      },
      timeAgo: "Just now",
      content: postText.trim(),
      likesCount: 0,
      commentsCount: 0,
      sharesCount: 0,
      tag: "Live Update",
    };

    setCreatedPosts((prev) => [newPost, ...prev]);
    setPostText("");
  };

  return (
    <div className="mt-3 space-y-4 font-sans px-4 md:px-0 pb-12 max-w-2xl mx-auto">
      
      {/* Top Post Composer */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Maya"
            className="h-10 w-10 rounded-2xl object-cover ring-2 ring-indigo-500/10 shadow-xs"
          />
          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Share what you're working on today, Maya..."
            className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition"
            >
              <IconPhoto size={16} className="text-indigo-600" /> Photo
            </button>

            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition"
            >
              <IconChecklist size={16} className="text-emerald-600" /> Task Link
            </button>

            <button
              type="button"
              className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition"
            >
              <IconCalendarEvent size={16} className="text-cyan-600" /> Event
            </button>
          </div>

          <button
            type="button"
            onClick={handleCreatePost}
            disabled={!postText.trim()}
            className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 disabled:opacity-40 hover:bg-indigo-700 transition"
          >
            <IconSend size={14} /> Post
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          {[
            { id: "all", label: "All Feed" },
            { id: "updates", label: "Product Updates" },
            { id: "sprints", label: "Design Sprints" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                activeFilter === tab.id
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="text-[11px] font-bold text-indigo-600 flex items-center gap-1">
          <IconSparkles size={12} /> Teamio Live Timeline
        </span>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {/* Render user created posts first */}
        {createdPosts.map((post) => (
          <Post key={post.id} id={post.id} customData={post} />
        ))}

        {/* Render default timeline posts */}
        <Post id="0" />
        <Post id="1" />
        <Post id="2" />
      </div>

    </div>
  );
}
