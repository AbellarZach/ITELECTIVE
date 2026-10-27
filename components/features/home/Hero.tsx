import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-background">
      {/* Topographic line background effect inspired by reference */}
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

      {/* Ambient background glow behind text and subject */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none -z-10" />

      {/* Large faint background watermark typography */}
      <div
        className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] font-black text-foreground/[0.03] select-none pointer-events-none tracking-widest uppercase -z-10 leading-none overflow-hidden"
        aria-hidden="true"
      >
        ZACH
      </div>

      {/* Main hero grid */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[calc(100vh-4rem)]">
        
        {/* Left Column: Hero Content */}
        <div className="w-full lg:w-3/5 space-y-7 z-10 py-6 sm:py-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur px-3.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>

          {/* Main Title inspired by reference */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.06]">
              <span className="text-[#00e575] drop-shadow-[0_0_35px_rgba(0,229,117,0.35)] block">
                IMAGINATION
              </span>
              IS MORE IMPORTANT <br className="hidden sm:inline" />
              <span className="text-foreground/90">THAN KNOWLEDGE</span>
            </h1>

            {/* Subtitle with vertical accent bar */}
            <div className="border-l-4 border-[#00e575] pl-4 sm:pl-5 py-1">
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed">
                Together we achieve more than any single person could ever do alone.
                I build fast, responsive, and visually captivating web applications that bring bold ideas to life.
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#00e575] hover:bg-[#00c966] text-black font-extrabold text-sm sm:text-base tracking-wide uppercase px-7 py-6 rounded-md shadow-[0_0_30px_rgba(0,229,117,0.35)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>GETTING STARTED</span>
                <span className="bg-black/85 text-[#00e575] p-1.5 rounded flex items-center justify-center">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border/80 bg-background/60 hover:bg-background/90 text-foreground font-bold text-sm sm:text-base tracking-wide uppercase px-6 py-6 rounded-md backdrop-blur transition-all"
              >
                CONTACT ME
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column: Seamless Background-Style Portrait Cutout (no box, no div radius, no hover rotate animation) */}
        <div className="w-full lg:w-2/5 flex items-end justify-center lg:justify-end self-end relative z-10 mt-auto">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] flex items-end justify-center">
            
            {/* Ambient soft backlight behind silhouette */}
            <div
              className="absolute bottom-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Seamless Portrait Image */}
            <Image
              src="/zach-hero.png"
              alt="Zach Phillipe - Software Developer"
              width={768}
              height={1024}
              priority
              className="w-auto h-auto max-h-[500px] sm:max-h-[580px] lg:max-h-[660px] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] select-none pointer-events-none"
            />

            {/* Smooth bottom gradient overlay to blend jacket seamlessly into section bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Numbered Indicator Badges on right side (from reference design) */}
        <div
          className="hidden xl:flex flex-col items-center gap-3 absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00e575] text-black font-extrabold text-xs shadow-[0_0_15px_rgba(0,229,117,0.5)]">
            01
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 font-bold text-xs backdrop-blur">
            02
          </span>
        </div>

      </div>
    </section>
  );
}
