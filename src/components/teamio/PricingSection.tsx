import { useState } from "react";
import { IconCheck, IconSparkles, IconArrowRight } from "@tabler/icons-react";

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "For freelancers and individuals wanting a modern social workplace.",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "Forever free",
      badge: "Free Plan",
      features: [
        "Personal Social Timeline feed",
        "Direct Messaging (up to 5 team DMs)",
        "Basic Kanban task board (50 tasks)",
        "Personal calendar sync",
        "Standard notification controls",
      ],
      cta: "Get Started Free",
      popular: false,
      buttonStyle: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    },
    {
      name: "Pro",
      desc: "For growing teams, startups, and active creators collaborating daily.",
      priceMonthly: "$15",
      priceAnnual: "$12",
      period: "per user / month",
      badge: "Most Popular 🔥",
      features: [
        "Everything in Starter, plus:",
        "Unlimited DMs & Project Channels",
        "Unlimited Tasks with social auto-sync",
        "Shared Team Calendars & Event links",
        "Live Spaces & Community channels",
        "Priority 24/7 customer support",
        "Advanced Analytics & export",
      ],
      cta: "Start 14-Day Free Trial",
      popular: true,
      buttonStyle: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/25",
    },
    {
      name: "Enterprise",
      desc: "For larger organizations demanding custom security, SSO, and admin controls.",
      priceMonthly: "$39",
      priceAnnual: "$32",
      period: "per user / month",
      badge: "Scale & Enterprise",
      features: [
        "Everything in Pro, plus:",
        "Custom SAML SSO & Okta Integration",
        "Dedicated Success Manager & SLA",
        "Advanced Security & Audit logs",
        "Custom workspace permissions & roles",
        "Enterprise data retention policies",
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
      buttonStyle: "bg-slate-900 text-white hover:bg-slate-800",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-4">
            <IconSparkles size={14} /> Flexible Plans
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Simple, transparent <span className="text-indigo-600">pricing.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Start for free as an individual or bring your whole team onboard. No hidden fees.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-100 p-1.5 border border-slate-200">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                !annual ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition ${
                annual ? "bg-indigo-600 text-white shadow-xs" : "text-slate-500"
              }`}
            >
              Annual Billing
              <span className="rounded-md bg-cyan-400 px-1.5 py-0.5 text-[10px] font-black text-slate-950">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 ${
                plan.popular
                  ? "border-indigo-500 bg-white shadow-2xl ring-2 ring-indigo-500/20 scale-102 z-10"
                  : "border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    plan.popular ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-700"
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 min-h-[36px]">
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/{plan.period}</span>
                </div>

                {/* Feature List */}
                <div className="mt-8 space-y-3 pt-6 border-t border-slate-200/70">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mt-0.5">
                        <IconCheck size={11} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold transition duration-200 ${plan.buttonStyle}`}
              >
                <span>{plan.cta}</span>
                <IconArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
