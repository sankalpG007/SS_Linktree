export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center">
        Why Choose SS Infotech?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold">
            Live Projects
          </h3>

          <p className="mt-4 text-gray-600">
            Work on real industry projects.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold">
            Placement Support
          </h3>

          <p className="mt-4 text-gray-600">
            Resume, Interview and Job guidance.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold">
            Industry Mentors
          </h3>

          <p className="mt-4 text-gray-600">
            Learn from professionals.
          </p>
        </div>

      </div>

    </section>
  );
}