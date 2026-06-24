import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

    <div>

      <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
        SS INFOTECH
      </span>

      <h1 className="text-7xl font-bold mt-8">

        IT Research &
        Product Development
        Firm

      </h1>

      <p className="text-xl text-gray-600 mt-8">

        Learn industry skills through
        real-world projects and
        job-focused training.

      </p>

      <div className="flex gap-4 mt-10">

        <button className="bg-purple-600 text-white px-8 py-4 rounded-xl">
          <Link
  href="/#courses"
  className="bg-purple-600 text-white px-8 py-4 rounded-xl"
>
  Explore Courses
</Link>
        </button>

        <Link
  href="/#contact"
  className="border px-8 py-4 rounded-xl"
>
  Contact Us
</Link>

      </div>

    </div>

    <div className="flex justify-center items-center">

      <img
        src="/logo.png"
        className="w-[450px]"
      />

    </div>

  </div>

</section>
  );
}