import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-16 md:py-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 scroll-mt-20">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* 2-column full-width grid */}
      <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

        {/* Left Column: Picture with original hover container effect positioned towards the left */}
        <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
          <div className="relative group w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] xl:max-w-[580px]">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/25 via-emerald-500/20 to-transparent blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:from-primary/35" />
            <Image
              src="/about-me.jpg"
              alt="Zach Phillipe P. Abellar - Achievements"
              width={600}
              height={600}
              priority
              className="rounded-3xl shadow-2xl object-cover w-full aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-border/40"
            />
          </div>
        </div>

        {/* Right Column: About Me Text and Action Buttons */}
        <div className="flex flex-col items-center lg:items-start justify-center space-y-8 order-1 lg:order-2">
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-[#00e575] animate-pulse" />
              ABOUT ME
            </span>
            <p className="pt-6 max-w-[680px] text-muted-foreground md:text-xl/relaxed">
              I&apos;m a junior WordPress Developer with 6 months of hands-on experience in designing and developing websites from scratch. I specialize in creating responsive, user-friendly, and visually appealing websites tailored to different needs, including e-commerce stores, personal websites, booking platforms, and membership websites. </p>
            <p className="pt-6 max-w-[680px] text-muted-foreground md:text-xl/relaxed">
              I&apos;m passionate about turning ideas into functional digital experiences through clean design, practical solutions, and attention to detail. I&apos;m continuously improving my skills and exploring new technologies to build websites that not only look great but also deliver a seamless user experience.
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button size="lg" className="group" asChild>
              <Link href="https://docs.google.com/document/d/1eDHypor1Cpc7PU7mcN8epjAqpy3J1hts/edit" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}