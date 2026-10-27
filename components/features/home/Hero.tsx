import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden min-h-[calc(100vh-4rem)] flex items-center bg-background scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Topographic curve lines background spanning full screen width */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25" aria-hidden="true">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 C200,100 400,300 700,180 C900,100 1050,220 1200,150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="text-emerald-500/40"
          />
          <path
            d="M-80,260 C220,160 420,360 720,240 C920,160 1070,280 1220,210"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/30"
          />
          <path
            d="M-60,320 C240,220 440,420 740,300 C940,220 1090,340 1240,270"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground/15"
          />
          <path
            d="M-40,380 C260,280 460,480 760,360 C960,280 1110,400 1260,330"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20"
          />
          <path
            d="M-20,440 C280,340 480,540 780,420 C980,340 1130,460 1280,390"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-foreground/15"
          />
          <path
            d="M0,500 C300,400 500,600 800,480 C1000,400 1150,520 1300,450"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/25"
          />
          <path
            d="M20,560 C320,460 520,660 820,540 C1020,460 1170,580 1320,510"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/10"
          />
        </svg>
      </div>

      {/* Full-width container: padded on left, flush on right edge */}
      <div className="relative w-full pl-6 sm:pl-12 md:pl-16 lg:pl-16 xl:pl-24 pr-0 py-12 lg:py-0 grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">

        {/* Left Column: Original Text & Buttons with vibrant Green accents */}
        <div className="relative flex flex-col items-center lg:items-start justify-center space-y-8 z-10 py-6 sm:py-10 pr-6 lg:pr-4">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-[#00e575] animate-pulse" />
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>

          {/* Main Headline: Original Text with Green Highlight */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-[#00e575] drop-shadow-[0_0_30px_rgba(0,229,117,0.35)]">
                Zach
              </span>
              <br className="hidden md:inline" />
              <span className="text-foreground/85"> a Wordpress developer.</span>
            </h1>

            {/* Subtitle with vertical green accent bar */}
            <div className="border-l-4 border-[#00e575] pl-4 sm:pl-5 py-1 text-left">
              <p className="max-w-[640px] text-muted-foreground text-lg sm:text-lg md:text-lg font-normal leading-relaxed">
                I design and develop modern, responsive, and user-friendly WordPress websites that combine clean design with powerful functionality. I turn ideas into engaging digital experiences, helping businesses and individuals build a strong online presence.
              </p>
            </div>
          </div>

          {/* Buttons with Green Accent */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-[#00e575] hover:bg-[#00c966] text-black font-extrabold text-sm sm:text-base tracking-wide px-7 py-6 rounded-md shadow-[0_0_25px_rgba(0,229,117,0.35)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>View my work</span>
                <span className="bg-black/85 text-[#00e575] p-1.5 rounded flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border/80 bg-background/60 hover:bg-background/90 text-foreground font-bold text-sm sm:text-base tracking-wide px-6 py-6 rounded-md backdrop-blur transition-all"
              >
                Contact me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Full-width anchored Seamless Background Portrait flush to the right edge */}
        <div className="relative flex items-end justify-center lg:justify-end self-end w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[620px] overflow-hidden lg:overflow-visible">
          <div className="relative w-full max-w-[500px] sm:max-w-[580px] lg:max-w-none flex items-end justify-center lg:justify-end [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">

            {/* Ambient soft backlight behind silhouette */}
            <div
              className="absolute bottom-16 right-0 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Seamless Portrait Image flush against right side */}
            <Image
              src="/zach-hero.png"
              alt="Zach - Software Developer"
              width={768}
              height={1024}
              priority
              className="w-auto h-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[640px] xl:max-h-[720px] 2xl:max-h-[800px] object-contain object-bottom-right lg:translate-x-4 xl:translate-x-8 select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
