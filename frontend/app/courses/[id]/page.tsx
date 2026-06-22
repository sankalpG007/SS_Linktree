import CourseHero from "@/components/CourseHero";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";

import {
  getCourseById,
} from "@/services/courseService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoursePage({
  params,
}: Props) {

  const { id } = await params;

  const course =
    await getCourseById(id);

  return (
    <main className="bg-slate-50 min-h-screen">

      <CourseHero
        course={course}
      />

      <SkillsSection
        courseName={course.title}
      />

      <CareerSection
        courseName={course.title}
      />

    </main>
  );
}