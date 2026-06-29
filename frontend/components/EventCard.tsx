import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  location,
  image,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border">

      <Image
        src={image}
        alt={title}
        width={600}
        height={800}
        className="w-full h-auto"
         priority
      />

      <div className="p-6">

        <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
          LIVE EVENT
        </div>

        <h3 className="text-2xl font-bold mt-4">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          📅 {date}
        </p>

        <p className="text-gray-600">
          📍 {location}
        </p>

        <button className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700">
          Register Now
        </button>

      </div>

    </div>
  );
}