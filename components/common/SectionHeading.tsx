type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center space-y-3"
          : "max-w-2xl space-y-3"
      }
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground md:text-lg/relaxed">{description}</p>
      )}
    </div>
  );
}
