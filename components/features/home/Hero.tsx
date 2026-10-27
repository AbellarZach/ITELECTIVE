import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
        alt="Workspace background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/95 dark:via-background/85 dark:to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 py-24">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">
                Zach
              </span>
              <br className="hidden md:inline" />
              <span className="text-foreground/80"> a software developer.</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I build websites, web applications, mobile apps, and custom software
              that are not only highly functional but also visually captivating.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#projects">
              <Button size="lg" className="group w-full sm:w-auto shadow-lg shadow-primary/20">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background/60 backdrop-blur">
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
