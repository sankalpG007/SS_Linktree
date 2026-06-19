import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/services/courseService";

export default async function Home() {

  const courses = await getCourses();

  return (
    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold text-center">
        SS_Linktree
      </h1>

      <p className="text-center mt-4 text-gray-600">
        Learn. Build. Get Hired.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {courses.map((course: any) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.short_description}
            duration={course.duration}
            fees={course.fees}
          />
        ))}

      </div>

    </main>
  );
}