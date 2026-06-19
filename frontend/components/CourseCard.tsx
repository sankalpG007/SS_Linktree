interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  fees: string;
}

export default function CourseCard({
  title,
  description,
  duration,
  fees,
}: CourseCardProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <div className="mt-4">
        <p>
          Duration: {duration}
        </p>

        <p>
          Fees: ₹{fees}
        </p>
      </div>

    </div>
  );
}