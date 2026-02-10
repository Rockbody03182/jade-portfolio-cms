// app/(admin)/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white p-4">
          <div className="font-bold text-lg">Admin</div>
          <nav className="mt-6 space-y-2 text-sm">
            <a
              href="/admin"
              className="block rounded px-2 py-1 hover:bg-gray-100"
            >
              Dashboard
            </a>
            <a
              href="/admin/projects"
              className="block rounded px-2 py-1 hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="/admin/contacts"
              className="block rounded px-2 py-1 hover:bg-gray-100"
            >
              Contacts
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
