import Link from "next/link";
import Image from "next/image";
import { Clock, IndianRupee } from "lucide-react";

interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  fees: string;
}

const courseImages: Record<string, string> = {
  "Data Analytics": "/course-icons/data-analytics.png",
  "DataBricks": "/course-icons/databricks.webp",
  "ServiceNow": "/course-icons/servicenow.jpg",
  "Full Stack Development": "/course-icons/fullstack.webp",
};

export default function CourseCard({
  id,
  title,
  description,
  duration,
  fees,
}: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition">

      <div className="mb-5">

  <Image
    src={courseImages[title]}
    alt={title}
    width={70}
    height={70}
    className="rounded-xl object-contain"
  />

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

      <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm">

  <Image
    src={courseImages[title]}
    alt={title}
    width={50}
    height={50}
    className="object-contain"
  />

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