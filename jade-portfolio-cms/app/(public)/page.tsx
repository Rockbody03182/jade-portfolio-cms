// app/(public)/page.tsx
export default function PublicHomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold leading-tight">
        Frontend Developer <br />
        Jade
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        CMS 기반으로 운영되는 포트폴리오를 설계하고 구현합니다.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#portfolio"
          className="rounded bg-black px-6 py-3 text-white hover:opacity-90"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="rounded border px-6 py-3 hover:bg-gray-50"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
