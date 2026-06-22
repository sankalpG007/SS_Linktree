import Link from "next/link";
import { Clock, IndianRupee } from "lucide-react";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  fees: string;
}

export default function CourseCard({
  id,
  title,
  description,
  duration,
  fees,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>

      <div className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">

          {
  title === "Data Analytics"
    ? "📊"
    : title === "DataBricks"
    ? "🔥"
    : title === "ServiceNow"
    ? "⚙️"
    : "💻"
}

        </div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <div className="flex gap-6 mt-5 text-sm text-gray-500">

          <div className="flex items-center gap-1">
            <Clock size={16} />
            {duration}
          </div>

          <div className="flex items-center gap-1">
            <IndianRupee size={16} />
            {fees}
          </div>

        </div>

        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
          View Details
        </button>

      </div>

    </Link>
  );
}