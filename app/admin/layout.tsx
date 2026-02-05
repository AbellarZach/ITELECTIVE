
export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-blue-100 h-screen">
      
      { children }
    </main>
  );
}