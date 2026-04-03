import type { ReactNode } from "react";

/** Hero band for Privacy / Terms — aligned column, readable title block */
export function LegalDocumentHero({
  title,
  meta,
}: Readonly<{
  title: string;
  meta: ReactNode;
}>) {
  return (
    <header className="section-x relative overflow-hidden border-b border-outline-variant bg-gradient-to-b from-surface-lowest via-surface-lowest to-bg">
      <div className="relative z-10 mx-auto max-w-[1200px] py-12 sm:py-14 md:py-16 lg:py-[4.25rem]">
        <div className="flex max-w-[40rem] flex-col gap-4 sm:gap-5">
          <span className="section-label">Legal</span>
          <h1 className="page-hero-title">{title}</h1>
          {meta}
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-[-5%] top-1/2 hidden h-[min(360px,45vh)] w-[min(100%,32rem)] -translate-y-1/2 opacity-70 md:block"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgb(8 145 178 / 0.1), transparent 68%)",
        }}
        aria-hidden
      />
    </header>
  );
}

/** Meta row under title — stacks on narrow screens */
export function LegalMetaRow({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col gap-2 text-[13px] leading-relaxed text-on-surface-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:text-sm">
      {children}
    </div>
  );
}

export function LegalMetaSeparator() {
  return (
    <span className="hidden text-outline-variant sm:inline" aria-hidden>
      ·
    </span>
  );
}

/** Main reading column — optimal line length */
export function LegalDocumentBody({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="section-x bg-bg">
      <div className="legal-doc-main mx-auto w-full py-10 sm:py-12 md:py-16 pb-12 sm:pb-16 md:pb-[max(4rem,env(safe-area-inset-bottom))]">
        {children}
      </div>
    </div>
  );
}

export function LegalCallout({ icon, children }: Readonly<{ icon: ReactNode; children: ReactNode }>) {
  return (
    <div
      className="mb-10 flex gap-4 rounded-2xl border border-primary/15 bg-primary/[0.04] p-4 sm:mb-12 sm:gap-4 sm:p-5 md:p-6"
      role="note"
    >
      <div className="shrink-0 pt-0.5 text-primary">{icon}</div>
      <div className="min-w-0 text-[14px] leading-[1.75] text-on-surface-muted sm:text-[15px]">{children}</div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
  last,
}: Readonly<{
  id?: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}>) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-8 sm:py-10 ${last ? "" : "border-b border-outline-variant"}`}
    >
      <h2 className="content-h2">{title}</h2>
      <div className="mt-1 flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function LegalSubSection({ title, children }: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-outline-variant bg-surface-lowest p-4 sm:p-5">
      <h3 className="card-title text-base">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function LegalProse({ children }: Readonly<{ children: ReactNode }>) {
  return <p className="legal-prose">{children}</p>;
}

export function LegalList({ items }: Readonly<{ items: (string | ReactNode)[] }>) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={`legal-li-${i}`} className="flex gap-3 text-[14px] leading-[1.7] text-on-surface-muted sm:text-[15px]">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" aria-hidden />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Contact / info card — responsive label / value */
export function LegalContactCard({
  rows,
}: Readonly<{
  rows: { label: string; value: ReactNode }[];
}>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-lowest shadow-sm">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-start sm:gap-6 sm:px-5 sm:py-4 md:px-6 ${
            i < rows.length - 1 ? "border-b border-outline-variant" : ""
          }`}
        >
          <span className="shrink-0 font-brand text-[11px] font-bold uppercase tracking-wider text-on-surface-muted sm:mt-0.5 sm:w-36">
            {r.label}
          </span>
          <div className="min-w-0 flex-1 text-[14px] leading-relaxed text-on-surface sm:text-[15px]">{r.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Third-party service rows */
export function LegalServiceRow({
  name,
  purpose,
  href,
}: Readonly<{
  name: string;
  purpose: string;
  href: string;
}>) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-outline-variant bg-surface-lowest p-4 sm:grid sm:grid-cols-[minmax(0,10rem)_1fr] sm:items-start sm:gap-4 md:grid-cols-[11rem_1fr_auto] md:items-center md:gap-5 md:p-4">
      <strong className="font-brand text-[15px] font-semibold text-on-surface">{name}</strong>
      <p className="min-w-0 text-[13px] leading-relaxed text-on-surface-muted sm:text-[14px]">{purpose}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit shrink-0 items-center gap-1 text-[13px] font-medium text-primary hover:underline sm:justify-end"
      >
        Privacy <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
