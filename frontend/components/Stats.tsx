export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-4xl font-bold text-blue-600">
            500+
          </h3>

          <p>Students Trained</p>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-4xl font-bold text-green-600">
            92%
          </h3>

          <p>Placement Assistance</p>

        </div>

        <div className="bg-white rounded-2xl p-6 shadow">

          <h3 className="text-4xl font-bold text-purple-600">
            20+
          </h3>

          <p>Industry Projects</p>

        </div>

      </div>

    </section>
  );
}