// app/(public)/layout.tsx
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 font-semibold">
          JADE
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Jade Portfolio
        </div>
      </footer>
    </div>
  );
}
