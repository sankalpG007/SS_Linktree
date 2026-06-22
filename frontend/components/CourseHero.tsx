import Link from "next/link";

interface Props {
  course: any;
}

export default function CourseHero({
  course,
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
          Professional Course
        </div>

        <h1 className="text-5xl font-bold">
          {course.title}
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          {course.short_description}
        </p>

        <div className="flex gap-6 mt-8">

          <div className="bg-slate-100 px-6 py-4 rounded-xl">
            <p className="text-sm text-gray-500">
              Duration
            </p>

            <p className="font-semibold">
              {course.duration}
            </p>
          </div>

          <div className="bg-slate-100 px-6 py-4 rounded-xl">
            <p className="text-sm text-gray-500">
              Fees
            </p>

            <p className="font-semibold">
              ₹{course.fees}
            </p>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <Link
            href={`/apply/${course.id}`}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl"
          >
            Apply Now
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="border px-8 py-4 rounded-xl"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}