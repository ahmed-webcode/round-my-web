export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-14 text-center">
      <span className="font-mono-x relative mb-3 inline-block text-xs uppercase tracking-[0.25em] text-primary before:absolute before:right-[calc(100%+12px)] before:top-1/2 before:h-px before:w-7 before:bg-primary before:content-[''] after:absolute after:left-[calc(100%+12px)] after:top-1/2 after:h-px after:w-7 after:bg-primary after:content-['']">
        {label}
      </span>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
