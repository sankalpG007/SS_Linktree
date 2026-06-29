export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import WhyChoose from "@/components/WhyChoose";
import PlacementSection from "@/components/PlacementSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { getCourses } from "@/services/courseService";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <Hero />

      <Stats />

      <PlacementSection />
      
      <section
        id="courses"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold">
            Our Courses
          </h2>

          <p className="text-gray-600 mt-4">
            Industry-focused programs designed to
            make you job-ready.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {courses.map((course: any) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.short_description}
              duration={course.duration}
              fees={course.fees}
            />
          ))}

        </div>

      </section>
        <AboutSection />
        <WhyChoose />
        <ContactSection />
      <Footer />

    </main>
  );
}