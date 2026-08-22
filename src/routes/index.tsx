import { createFileRoute } from "@tanstack/react-router";
import { getTitle } from "@/lib/utils";
import type { TablerIcon } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconHeart,
  IconMessageCircle,
  IconPlayerPlay,
  IconSparkles,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";

export const Route = createFileRoute("/_layout/")({
  component: Page,
  head: () => ({
    meta: [
      {
        title: getTitle("Home"),
      },
    ],
  }),
});

const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=5",
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return ref;
}

function handleTilt(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rx = ((y - rect.height / 2) / rect.height) * -10;
  const ry = ((x - rect.width / 2) / rect.width) * 10;

  card.style.setProperty("--rx", `${rx}deg`);
  card.style.setProperty("--ry", `${ry}deg`);
  card.style.setProperty("--gx", `${(x / rect.width) * 100}%`);
  card.style.setProperty("--gy", `${(y / rect.height) * 100}%`);
}

function resetTilt(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;

  card.style.setProperty("--rx", `0deg`);
  card.style.setProperty("--ry", `0deg`);
}

function handleSceneMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;

  el.style.setProperty("--sry", `${px * 22}deg`);
  el.style.setProperty("--srx", `${py * -16}deg`);
}

function resetScene(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;

  el.style.setProperty("--sry", `0deg`);
  el.style.setProperty("--srx", `0deg`);
}

/* -------------------------------------------------------------------------
   Orbit diorama — the signature 3D moment: a live "social graph"
   floating in space, tilting toward the cursor.
------------------------------------------------------------------------- */

const orbitPositions = [
  { top: "3%", left: "47%" },
  { top: "47%", left: "89%" },
  { top: "89%", left: "47%" },
  { top: "47%", left: "3%" },
];

function OrbitDiorama() {
  return (
    <div
      className="diorama-wrap relative mx-auto h-[420px] w-[420px] max-w-full [perspective:1600px] sm:h-[480px] sm:w-[480px]"
      onMouseMove={handleSceneMove}
      onMouseLeave={resetScene}
    >
      <div className="diorama-scene relative h-full w-full [transform-style:preserve-3d]">
        {/* Ambient glow, sits deep behind everything */}
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-200/70 via-cyan-100/50 to-transparent blur-3xl"
          style={{ transform: "translateZ(-140px)" }}
        />

        {/* Floor disc for grounding */}
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200/70 bg-white/40"
          style={{ transform: "translateZ(-60px) rotateX(90deg)" }}
        />

        {/* Orbit ring + spokes */}
        <div
          className="orbit-ring absolute inset-0"
          style={{ transform: "translateZ(10px)" }}
        >
          <svg
            viewBox="0 0 420 420"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <circle
              cx="210"
              cy="210"
              r="184"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeDasharray="2 8"
            />
            {orbitPositions.map((_, i) => {
              const angle = i * 90 - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 210 + 184 * Math.cos(rad);
              const y = 210 + 184 * Math.sin(rad);

              return (
                <line
                  key={`spoke-${i}`}
                  x1="210"
                  y1="210"
                  x2={x}
                  y2={y}
                  stroke="url(#spokeGrad)"
                  strokeWidth="1.5"
                />
              );
            })}
            <defs>
              <linearGradient id="spokeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {avatars.map((avatar, i) => (
            <div
              key={avatar}
              className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2"
              style={{
                top: orbitPositions[i].top,
                left: orbitPositions[i].left,
              }}
            >
              <div className="counter-spin flex h-full w-full items-center justify-center rounded-2xl border border-white bg-white p-[3px] shadow-[0_15px_35px_rgba(79,70,229,0.18)]">
                <img
                  src={avatar}
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Central hub card, floats highest */}
        <div
          className="absolute left-1/2 top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-gray-100 bg-white/90 p-4 shadow-[0_35px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl"
          style={{ transform: "translateZ(90px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
              <IconUsers size={14} stroke={2} />
            </span>
            <div>
              <p className="text-[10px] font-semibold text-gray-900">
                Your circle
              </p>
              <p className="text-[9px] text-gray-400">Live now</p>
            </div>
          </div>

          <div className="mt-3 flex -space-x-2">
            {avatars.map((avatar) => (
              <img
                key={`hub-${avatar}`}
                src={avatar}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <p className="mt-3 text-[9px] leading-4 text-gray-400">
            4 people you follow just went live in Spaces.
          </p>
        </div>

        {/* Floating shard — reaction */}
        <div
          className="drift-a absolute right-2 top-6 rounded-2xl border border-gray-100 bg-white/95 px-3 py-2 shadow-[0_20px_45px_rgba(15,23,42,0.14)]"
          style={{ transform: "translateZ(130px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
              <IconHeart size={15} stroke={2} fill="currentColor" />
            </span>
            <div>
              <p className="text-[10px] font-bold text-gray-900">+248</p>
              <p className="text-[8px] text-gray-400">reactions today</p>
            </div>
          </div>
        </div>

        {/* Floating shard — message */}
        <div
          className="drift-b absolute bottom-4 left-0 flex items-center gap-2 rounded-2xl bg-gray-950 px-3 py-2.5 text-white shadow-[0_20px_45px_rgba(15,23,42,0.28)]"
          style={{ transform: "translateZ(70px)" }}
        >
          <IconMessageCircle size={14} stroke={2} className="text-cyan-300" />
          <p className="text-[10px] font-semibold">"See you at 8 🎧"</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Feature cards — tilt toward the cursor, glare follows the pointer.
------------------------------------------------------------------------- */

interface FeatureCardProps {
  icon: TablerIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal">
      <div
        className="tilt-card group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-7 shadow-[0_10px_50px_rgba(15,23,42,0.05)]"
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
      >
        <span className="tilt-glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div
          className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-950 text-white transition-transform duration-500 group-hover:-translate-y-1"
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon size={23} stroke={1.8} />
        </div>

        <h3 className="relative mb-3 text-xl font-bold tracking-tight text-gray-950">
          {title}
        </h3>

        <p className="relative text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="relative mt-7 flex items-center gap-2 text-sm font-semibold text-gray-900">
          Explore
          <IconArrowRight
            size={15}
            stroke={2}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Fanned glass stack — used in the "Live Spaces" showcase section.
------------------------------------------------------------------------- */

function SpaceStack() {
  const cards = [
    {
      image: "photo-1513364776144-60967b0f800f",
      title: "Creative Minds",
      meta: "12.8K members",
    },
    {
      image: "photo-1541701494587-cb58502866ab",
      title: "Trail Runners",
      meta: "6.2K members",
    },
    {
      image: "photo-1549490349-8643362247b5",
      title: "Night Photography",
      meta: "9.4K members",
    },
  ];

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[420px] [perspective:1800px]">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`stack-card absolute inset-x-6 top-6 overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_35px_70px_rgba(15,23,42,0.14)] ${i === 0 ? "stack-card-0" : i === 1 ? "stack-card-1" : "stack-card-2"}`}
        >
          <img
            src={`https://images.unsplash.com/${card.image}?auto=format&fit=crop&w=700&q=80`}
            alt=""
            className="h-40 w-full object-cover"
          />
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-bold text-gray-950">{card.title}</p>
              <p className="text-xs text-gray-400">{card.meta}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white">
              <IconArrowRight size={14} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Page
------------------------------------------------------------------------- */

function Page() {
  const featuresHead = useReveal<HTMLDivElement>();
  const showcaseHead = useReveal<HTMLDivElement>();
  const showcaseStack = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  return (
    <main
      className="overflow-hidden bg-white text-gray-950"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-5 lg:px-8">
          <nav className="flex h-16 items-center justify-between rounded-2xl border border-gray-200/70 bg-white/80 px-5 shadow-sm backdrop-blur-xl">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-black tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-sm text-white shadow-[0_8px_18px_rgba(79,70,229,0.35)]">
                T
              </span>
              Teamio
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
              >
                Features
              </a>

              <a
                href="#community"
                className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
              >
                Live Spaces
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
              >
                About
              </a>
            </div>

            <a
              href="#get-started"
              className="flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Get Started
              <IconArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen px-5 pt-32 lg:px-8 lg:pt-0">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-100/60 via-cyan-50 to-transparent blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:min-h-screen lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <IconSparkles size={14} className="text-indigo-500" />

              <span className="text-xs font-semibold text-gray-600">
                Social, rendered in three dimensions
              </span>
            </div>

            <h1
              className="text-5xl font-black leading-[0.95] tracking-[-0.045em] text-gray-950 sm:text-6xl lg:text-[76px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Feel closer.
              <br />
              In every
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                dimension.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Teamio turns your feed into a living space — moments, people, and
              communities arranged around you, not stacked in a line.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gray-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-indigo-100 transition hover:-translate-y-1 hover:bg-indigo-600"
              >
                Join Teamio
                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#features"
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold text-gray-700 transition hover:-translate-y-1 hover:border-gray-300"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                  <IconPlayerPlay size={12} fill="currentColor" />
                </span>
                See how it works
              </a>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex text-sm font-bold">
                  <span>4.9</span>
                  <span className="ml-1 text-yellow-400">★★★★★</span>
                </div>

                <p className="text-xs text-gray-400">Loved by 50K+ people</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[440px] items-center justify-center py-10 lg:min-h-[680px] lg:py-0">
            <OrbitDiorama />
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 md:grid-cols-4">
          {[
            ["50K+", "Active users"],
            ["120K+", "Daily posts"],
            ["180+", "Live Spaces"],
            ["99.9%", "Uptime"],
          ].map(([number, label]) => (
            <div key={label} className="px-5 py-10 text-center">
              <p
                className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {number}
              </p>

              <p className="mt-2 text-xs font-medium text-gray-400 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section id="features" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div
            ref={featuresHead}
            className="reveal mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Everything in one place
            </span>

            <h2
              className="mt-4 text-4xl font-black tracking-[-0.04em] text-gray-950 sm:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Social, with actual
              <br />
              <span className="text-gray-400">depth to it.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-500">
              Teamio gives you everything you need to connect, communicate,
              create, and discover — laid out in space, not a scroll.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={IconUsers}
              title="Your circle"
              description="Build meaningful connections with friends, teammates, creators, and people who share your interests."
            />

            <FeatureCard
              icon={IconWorld}
              title="Live Spaces"
              description="Drop into rooms built around your passions and join conversations that actually matter."
            />

            <FeatureCard
              icon={IconBolt}
              title="Moments"
              description="Share photos, stories, thoughts, and everyday moments with the people closest to you."
            />

            <FeatureCard
              icon={IconSparkles}
              title="Discover"
              description="Explore fresh ideas, trending conversations, creators, and communities tailored to you."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY / LIVE SPACES
      ====================================================== */}
      <section id="community" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div ref={showcaseStack} className="reveal">
            <SpaceStack />
          </div>

          <div ref={showcaseHead} className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Find your people
            </span>

            <h2
              className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Communities that
              <br />
              <span className="text-gray-400">feel like home.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-500">
              From photography and technology to fitness, gaming, travel, and
              everything in between, Teamio makes it easy to find people who get
              you.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Discover Spaces based on your interests",
                "Join conversations and share your ideas",
                "Build genuine relationships",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <IconCheck size={13} />
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-9 flex items-center gap-2 text-sm font-bold text-gray-950"
            >
              Explore Live Spaces
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section id="get-started" className="px-5 py-20 lg:px-8 lg:py-28">
        <div
          ref={ctaReveal}
          className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gray-950 px-7 py-20 text-center text-white sm:px-12"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-[100px]" />

          <div className="floor-grid pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-40" />

          <div className="relative">
            <IconSparkles size={25} className="mx-auto mb-6 text-cyan-300" />

            <h2
              className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your next great connection
              <span className="text-cyan-400"> starts here.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
              Join thousands of people already using Teamio to connect, share,
              and build communities — in three dimensions.
            </p>

            <button
              type="button"
              className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-indigo-100"
            >
              Get started for free
              <IconArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        id="about"
        className="border-t border-gray-100 bg-white px-5 py-14 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-xs">
              <a
                href="#"
                className="flex items-center gap-2 text-xl font-black tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-sm text-white">
                  T
                </span>
                Teamio
              </a>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                A better place to connect, share moments, and discover your
                people — in three dimensions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-950">
                  Product
                </h4>

                <div className="mt-4 space-y-3">
                  <a
                    href="#features"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Features
                  </a>

                  <a
                    href="#community"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Live Spaces
                  </a>

                  <a
                    href="#get-started"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-950">
                  Company
                </h4>

                <div className="mt-4 space-y-3">
                  <a
                    href="#about"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Careers
                  </a>

                  <a
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-950">
                  Legal
                </h4>

                <div className="mt-4 space-y-3">
                  <a
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Privacy
                  </a>

                  <a
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Terms
                  </a>

                  <a
                    href="#"
                    className="block text-sm text-gray-400 transition hover:text-gray-950"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-gray-100 pt-7 text-xs text-gray-400 sm:flex-row">
            <p>Copyright © 2026 Teamio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .diorama-scene {
          transform: perspective(1600px) rotateX(var(--srx, 0deg)) rotateY(var(--sry, 0deg));
          transition: transform 0.25s ease-out;
        }

        .orbit-ring {
          animation: orbit-spin 26s linear infinite;
          transform-style: preserve-3d;
        }

        .counter-spin {
          animation: orbit-spin-reverse 26s linear infinite;
        }

        @keyframes orbit-spin {
          from { transform: translateZ(10px) rotate(0deg); }
          to { transform: translateZ(10px) rotate(360deg); }
        }

        @keyframes orbit-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .drift-a {
          animation: drift-a 5s ease-in-out infinite;
        }

        .drift-b {
          animation: drift-b 6.5s ease-in-out infinite;
        }

        @keyframes drift-a {
          0%, 100% { transform: translateZ(130px) translateY(0px); }
          50% { transform: translateZ(130px) translateY(-12px); }
        }

        @keyframes drift-b {
          0%, 100% { transform: translateZ(70px) translateY(0px); }
          50% { transform: translateZ(70px) translateY(10px); }
        }

        .tilt-card {
          transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateZ(0px);
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out, box-shadow 0.4s ease;
        }

        .tilt-card:hover {
          box-shadow: 0 30px 70px rgba(79, 70, 229, 0.14);
        }

        .tilt-glare {
          background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(99,102,241,0.14), transparent 55%);
        }

        .stack-card {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stack-card-0 {
          transform: perspective(1400px) translateZ(60px) translateY(0px) rotateY(0deg);
          z-index: 3;
        }

        .stack-card-1 {
          transform: perspective(1400px) translateZ(0px) translateY(34px) translateX(38px) rotateY(-8deg);
          z-index: 2;
          opacity: 0.92;
        }

        .stack-card-2 {
          transform: perspective(1400px) translateZ(-60px) translateY(68px) translateX(76px) rotateY(-14deg);
          z-index: 1;
          opacity: 0.8;
        }

        .reveal {
          opacity: 0;
          transform: translateY(36px) rotateX(6deg);
          transform-style: preserve-3d;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.is-in {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }

        .floor-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          -webkit-mask-image: linear-gradient(to top, black, transparent);
          mask-image: linear-gradient(to top, black, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-ring, .counter-spin, .drift-a, .drift-b {
            animation: none !important;
          }

          .diorama-scene, .tilt-card, .stack-card, .reveal {
            transition: none !important;
          }
        }

        @media (hover: none) {
          .diorama-scene {
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
