interface Props {
  courseName: string;
}

export default function CareerSection({
  courseName,
}: Props) {

  const careers: Record<string, string[]> = {

    "Data Analytics": [
      "Data Analyst",
      "BI Analyst",
      "Reporting Analyst",
    ],

    "DataBricks": [
      "Data Engineer",
      "Big Data Developer",
      "Spark Engineer",
    ],

    "ServiceNow": [
      "ServiceNow Developer",
      "ITSM Consultant",
      "Workflow Engineer",
    ],

    "Full Stack Development": [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
  };

  const currentCareers =
    careers[courseName] || [];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Career Opportunities
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {currentCareers.map((career) => (
          <div
            key={career}
            className="bg-white rounded-xl border p-6"
          >
            {career}
          </div>
        ))}

      </div>

    </section>
  );
}