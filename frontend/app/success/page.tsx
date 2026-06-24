import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">

      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg text-center">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold">
          Application Submitted
        </h1>

        <p className="text-gray-600 mt-4">
          Thank you for applying.
          Our team will contact you soon.
        </p>

        <div className="flex flex-col gap-4 mt-8">

          <a
            href="https://wa.me/919399345989"
            target="_blank"
            className="bg-green-500 text-white py-3 rounded-xl"
          >
            Chat on WhatsApp
          </a>

          <Link
            href="/"
            className="border py-3 rounded-xl"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}