import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-amber-100">
      <Header />

      {/* Page content */}
      <div className="flex-1 container mx-auto px-6 py-6">
        {children}
      </div>

      {/* Footer stays at bottom */}
      <Footer />
    </main>
  );
}
