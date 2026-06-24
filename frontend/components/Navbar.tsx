import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="SS Infotech"
            width={60}
            height={60}
          />

          <div>
            <h1 className="font-bold text-xl">
              SS INFOTECH
            </h1>

            <p className="text-xs text-gray-500">
              Learn. Build. Get Hired.
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/#courses">Courses</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <Link
  href="/#courses"
  className="bg-purple-600 text-white px-5 py-3 rounded-xl"
>
  Apply Now
</Link>

      </div>
    </nav>
  );
}