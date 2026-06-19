interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({
  title,
  description,
}: CourseCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </div>
  );
}