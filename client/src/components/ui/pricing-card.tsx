
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Theme = "blue" | "green" | "orange";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  theme: Theme;
  features: string[];
  buttons: {
    text: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    onClick?: () => void;
  }[];
}

export function PricingCard({
  title,
  description,
  price,
  period,
  theme,
  features,
  buttons,
}: PricingCardProps) {
  const themeStyles = {
    blue: {
      card: "bg-[#EBF3FF]", // Light blue
      check: "text-blue-500", // Or fill
      checkBg: "bg-blue-500",
      buttonPrimary: "bg-blue-500 text-white hover:bg-blue-600",
    },
    green: {
      card: "bg-[#EAFBF1]", // Light green
      check: "text-green-500",
      checkBg: "bg-[#5DBC78]",
      buttonPrimary: "bg-[#9BE376] text-black hover:bg-[#8ADC66]", // Bright green button
    },
    orange: {
      card: "bg-[#FFEAD7]", // Light orange/peach
      check: "text-orange-500",
      checkBg: "bg-[#FF964A]",
      buttonPrimary: "bg-white text-black hover:bg-gray-50",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className={cn("rounded-[32px] p-8 min-w-[300px] flex-1 flex flex-col gap-6", currentTheme.card)}>
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="flex items-end gap-1">
        <span className="text-5xl font-bold tracking-tight text-black">{price}</span>
        <span className="text-sm font-medium text-black mb-1.5">{period}</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={cn(
              "rounded-full px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all",
              btn.variant === "primary" && theme === "green" ? "bg-[#9BE376] text-black shadow-sm" : 
              btn.variant === "primary" && theme === "orange" ? "bg-white text-black shadow-sm" :
              btn.variant === "secondary" ? "bg-white text-black shadow-sm" :
              "bg-[#Eef4ff] text-black" // Default "Register - it's Free" style approx
            )}
             style={ btn.variant === 'ghost' && theme === 'blue' ? { backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)' } : {} } 
          >
            {btn.text}
            <IconArrowRight className="size-4" />
          </button>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-col gap-4 pt-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={cn("rounded-full p-0.5", currentTheme.checkBg)}>
               <IconCheck className="size-3 text-white" stroke={4} />
            </div>
            <span className="text-gray-900 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
