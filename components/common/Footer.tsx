import Link from "next/link";
import { Mail, Github, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-100/50 dark:bg-gray-900 mt-16">
      {/* Top Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700"></div>

      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Logo / Info */}
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-lg font-semibold">Portfolio</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Cebu City, Philippines</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row md:flex-1 gap-4 md:gap-6 text-sm text-center md:text-left">
          <Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition">Projects</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-1 gap-2 text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-4 w-4" /> <span>123-123-123</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="h-4 w-4" /> <span>test@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Github className="h-4 w-4" /> 
            <Link href="https://github.com/yourusername" target="_blank" className="hover:text-black dark:hover:text-white transition">
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
