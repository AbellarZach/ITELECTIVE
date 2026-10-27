import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <Section className="relative overflow-hidden grid lg:grid-cols-2 gap-10 items-center">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
            ABOUT ME
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Zach Phillipe P. Abellar
          </h1>
          <p className="max-w-[640px] text-muted-foreground md:text-xl/relaxed">
            I&apos;m a passionate developer driven by the challenge of creating efficient, scalable, and user-friendly web applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Button
            size="lg"
            className="bg-[#00e575] hover:bg-[#00c966] text-black font-bold text-sm tracking-wide px-6 py-6 rounded-md shadow-[0_0_20px_rgba(0,229,117,0.3)] transition-all cursor-pointer"
            asChild
          >
            <Link href="https://www.facebook.com/krattzz2" target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-4 w-4" />
              Contact me
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border/80 text-foreground font-semibold px-6 py-6 rounded-md"
            asChild
          >
            <Link href="/projects">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Portrait integration without boxed div or hover rotate animation */}
      <div className="flex justify-center items-end relative">
        <div className="relative w-full max-w-[420px] flex items-end justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <Image
            src="/zach-hero.png"
            alt="Zach Phillipe P. Abellar"
            width={768}
            height={1024}
            priority
            className="w-auto h-auto max-h-[480px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] select-none pointer-events-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}