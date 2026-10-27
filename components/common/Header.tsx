"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "contact", href: "/#contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    // Determine active nav from pathname if on dedicated sub-pages
    if (pathname === "/about") {
      setActiveNav("about");
      return;
    }
    if (pathname.startsWith("/projects")) {
      setActiveNav("projects");
      return;
    }
    if (pathname.startsWith("/contact")) {
      setActiveNav("contact");
      return;
    }

    // Single-page scroll spy & hash tracking on homepage ("/")
    const handleScrollAndHash = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") return;

      // Check current hash on initial load or change
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "about", "projects", "contact"].includes(hash)) {
        // If user just clicked or landed on a hash
      }

      // If at the very top of the page
      if (window.scrollY < 220) {
        setActiveNav("home");
        return;
      }

      // If scrolled to bottom of the page (near Contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveNav("contact");
        return;
      }

      // Check sections based on scroll offset
      const sectionIds = ["contact", "projects", "about", "home"];
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(id);
            return;
          }
        }
      }
    };

    // Initial check
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && ["about", "projects", "contact"].includes(initialHash)) {
      setActiveNav(initialHash);
    } else {
      handleScrollAndHash();
    }

    window.addEventListener("scroll", handleScrollAndHash, { passive: true });
    window.addEventListener("hashchange", handleScrollAndHash);

    return () => {
      window.removeEventListener("scroll", handleScrollAndHash);
      window.removeEventListener("hashchange", handleScrollAndHash);
    };
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/25"
          : "border-b border-border/50 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="w-full flex h-16 items-center justify-between gap-4 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setActiveNav("home")}
          className="flex items-center gap-2 font-bold text-lg tracking-tight text-foreground shrink-0"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00e575] to-emerald-600 text-black font-extrabold text-sm shadow-sm">
            Z
          </span>
          <span className="hidden sm:inline">Zach Abellar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ id, href, label }) => {
              const isActive = activeNav === id;
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={() => setActiveNav(id)}
                    className={cn(
                      "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                    )}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute inset-x-1.5 -bottom-1 h-[2.5px] rounded-full bg-[#00e575] shadow-[0_0_12px_rgba(0,229,117,0.7)] transition-all duration-300" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: ThemeToggle & Mobile menu trigger */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ id, href, label }) => {
                const isActive = activeNav === id;
                return (
                  <li key={id}>
                    <Link
                      href={href}
                      onClick={() => {
                        setActiveNav(id);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3.5 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-emerald-500/10 text-[#00e575] font-bold border-l-2 border-[#00e575]"
                          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                      )}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#00e575] shadow-[0_0_8px_rgba(0,229,117,0.8)]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
