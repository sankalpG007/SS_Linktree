import Link from "next/link";
import { Clock, IndianRupee } from "lucide-react";

interface Props {
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
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition">

      <div className="text-5xl mb-5">
        {title === "Data Analytics"
          ? "📊"
          : title === "DataBricks"
          ? "🔥"
          : title === "ServiceNow"
          ? "⚙️"
          : "💻"}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <div className="flex gap-5 mt-5">

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {duration}
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee size={16} />
          {fees}
        </div>

      </div>

      <Link
        href={`/courses/${id}`}
        className="mt-6 inline-block w-full text-center bg-blue-600 text-white py-3 rounded-xl"
      >
        View Details
      </Link>

    </div>
  );
}