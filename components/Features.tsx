import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Camera,
  MapPin,
  Package,
  ScanFace,
  Scissors,
} from "lucide-react";

const FEATURES: Array<{
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}> = [
  {
    id: "ai-face",
    Icon: ScanFace,
    title: "AI Face Analysis",
    description:
      "On-device Google ML Kit detects your facial structure — oval, round, square, heart — with precision, forming the foundation for all recommendations.",
    tag: "Core",
    tagColor: "primary",
  },
  {
    id: "personalized",
    Icon: Scissors,
    title: "Personalized Recommendations",
    description:
      "Receive three curated hairstyle picks matched to your face shape and style goals — so you always have clear options to explore, save, and take to your barber.",
    tag: "Smart",
    tagColor: "tertiary",
  },
  {
    id: "try-trends",
    Icon: Camera,
    title: "Try Trending Styles",
    description:
      "Browse the hottest cuts right now. Select any trending hairstyle, tap Try Now, and see an AI-generated preview of you wearing that exact look.",
    tag: "New",
    tagColor: "primary",
  },
  {
    id: "grooming-tracker",
    Icon: CalendarDays,
    title: "Grooming Tracker",
    description:
      "Save your looks to the Grooming tab. Mark haircuts as done, track your schedule, and get smart reminders before your next appointment.",
    tag: "Lifestyle",
    tagColor: "outline",
  },
  {
    id: "nearby-salons",
    Icon: MapPin,
    title: "Nearby Salons",
    description:
      "After marking a haircut, instantly discover the best salons near you. Navigate directly with integrated Google Maps.",
    tag: "Discover",
    tagColor: "outline",
  },
  {
    id: "products",
    Icon: Package,
    title: "Product Recommendations",
    description:
      "Post-haircut product picks tailored to your style and hair type — from styling creams to grooming kits curated by Luvia AI.",
    tag: "Curated",
    tagColor: "tertiary",
  },
];

const TAG_STYLES: Record<string, string> = {
  primary: "text-primary border-primary/40 bg-primary/6",
  tertiary: "text-tertiary border-tertiary/35 bg-tertiary/5",
  outline: "text-outline border-outline-variant bg-transparent",
};

const STATS = [
  { value: "3", label: "Looks picked for you" },
  { value: "AI", label: "Face Detection" },
  { value: "∞", label: "Trending Looks" },
  { value: "0", label: "Data Shared" },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-x section-y relative bg-white"
      style={{ borderTop: "1px solid transparent" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #0891B2, transparent)" }}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">
            Everything you need for{" "}
            <span className="text-primary">your best look</span>
          </h2>
          <p className="section-lede">
            Personalized looks crafted for your face, trending styles you can try in a tap, and a
            full grooming suite — reminders, salons, and product picks — all in one app.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((f, i) => (
            <article
              key={f.id}
              id={`feature-${f.id}`}
              className="luvia-card flex flex-col gap-3 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-[52px] h-[52px] bg-surface-high rounded-2xl flex items-center justify-center mb-1 transition-all duration-300 group-hover:bg-primary/10">
                <f.Icon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <span
                className={`self-start text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-0.5 rounded-full border ${TAG_STYLES[f.tagColor]}`}
              >
                {f.tag}
              </span>
              <h3 className="card-title">{f.title}</h3>
              <p className="text-on-surface-muted text-[14px] leading-[1.65] flex-1">
                {f.description}
              </p>
            </article>
          ))}
        </div>

        {/* Stats strip — hairline grid, readable on narrow screens */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-outline-variant bg-outline-variant p-px sm:mt-14 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-surface-low flex flex-col items-center justify-center gap-1 sm:gap-1.5 py-5 px-2 sm:py-7 sm:px-4 md:px-6 hover:bg-surface-high/60 transition-colors min-h-[5.5rem] sm:min-h-0"
            >
              <span className="font-brand font-extrabold text-[clamp(1.5rem,5vw,2.25rem)] text-primary leading-none text-center">
                {s.value}
              </span>
              <span className="text-[11px] sm:text-[13px] font-medium text-on-surface-muted text-center leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
