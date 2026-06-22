export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            SS_Linktree
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-600">

          <a href="#">
            Courses
          </a>

          <a href="#">
            About
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Contact Us
        </button>

      </div>

    </nav>
  );
}