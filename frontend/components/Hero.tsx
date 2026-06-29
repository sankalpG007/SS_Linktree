import Link from "next/link";
import EventCard from "@/components/EventCard";
import { currentEvent } from "@/data/events";
export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_450px] gap-16 items-center">

    <div>

      <h1 className="text-7xl font-bold mt-8"></h1>

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

    <div className="flex flex-wrap gap-3 mt-8">

  <span className="bg-white shadow px-4 py-2 rounded-full">
    🚀 Live Projects
  </span>

  <span className="bg-white shadow px-4 py-2 rounded-full">
    💼 Placement Support
  </span>

  <span className="bg-white shadow px-4 py-2 rounded-full">
    👨‍💻 Industry Mentors
  </span>

  <span className="bg-white shadow px-4 py-2 rounded-full">
    📜 Certification
  </span>

    <div className="grid grid-cols-3 gap-6 mt-10">

  <div>
    <h2 className="text-4xl font-bold text-purple-600">
      500+
    </h2>

    <p className="text-gray-600">
      Students
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-purple-600">
      20+
    </h2>

    <p className="text-gray-600">
      Projects
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-bold text-purple-600">
      92%
    </h2>

    <p className="text-gray-600">
      Placement Support
    </p>
  </div>

</div>

</div>

    </div>

    <div>
    <h2 className="text-2xl font-bold mb-4 text-purple-600">
  🎯 Current Event
</h2>

  <EventCard
    title="Career Guidance Seminar"
    date="27 June 2026 • 4:30 PM"
    location="SS Infotech, Nagpur"
    image="/events/career-guidance-june-2026.jpeg"
  />

</div>

  </div>

</section>
  );
}