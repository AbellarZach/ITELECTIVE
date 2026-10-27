import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16 md:py-24 lg:py-28 scroll-mt-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
