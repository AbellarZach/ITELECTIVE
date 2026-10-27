import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-background">
      {/* Global Topographic Curve Lines Background that flows across the entire website */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Ambient atmospheric green glows */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-emerald-500/8 blur-[160px]" />
        <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-[150px]" />

        {/* Global SVG Topographic Contour Curves */}
        <svg
          className="w-full h-full object-cover opacity-15 dark:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 1200"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,150 C300,50 600,280 1000,120 C1250,20 1400,160 1600,90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="5 7"
            className="text-emerald-500/50"
          />
          <path
            d="M-80,250 C320,150 620,380 1020,220 C1270,120 1420,260 1620,190"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/40"
          />
          <path
            d="M-60,350 C340,250 640,480 1040,320 C1290,220 1440,360 1640,290"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground/15"
          />
          <path
            d="M-40,470 C360,370 660,600 1060,440 C1310,340 1460,480 1660,410"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/30"
          />
          <path
            d="M-20,590 C380,490 680,720 1080,560 C1330,460 1480,600 1680,530"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-foreground/15"
          />
          <path
            d="M0,710 C400,610 700,840 1100,680 C1350,580 1500,720 1700,650"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/35"
          />
          <path
            d="M20,830 C420,730 720,960 1120,800 C1370,700 1520,840 1720,770"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/10"
          />
          <path
            d="M40,970 C440,870 740,1100 1140,940 C1390,840 1540,980 1740,910"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-emerald-500/25"
          />
        </svg>
      </div>

      <Header />
      <div className="relative flex-1 w-full z-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}