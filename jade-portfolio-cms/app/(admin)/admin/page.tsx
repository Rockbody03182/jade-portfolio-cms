// app/(admin)/admin/page.tsx
export default function AdminHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        포트폴리오 콘텐츠를 관리하세요.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded border bg-white p-4">
          <p className="text-sm text-gray-500">Projects</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="rounded border bg-white p-4">
          <p className="text-sm text-gray-500">Published</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="rounded border bg-white p-4">
          <p className="text-sm text-gray-500">Contacts</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
