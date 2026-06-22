interface Props {
  courseName: string;
}

export default function SkillsSection({
  courseName,
}: Props) {

  const skills: Record<string, string[]> = {

    "Data Analytics": [
      "Excel",
      "SQL",
      "Power BI",
      "Python",
    ],

    "DataBricks": [
      "PySpark",
      "Delta Lake",
      "ETL",
      "Azure",
    ],

    "ServiceNow": [
      "ITSM",
      "CMDB",
      "Catalog",
      "Workflows",
    ],

    "Full Stack Development": [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
    ],
  };

  const currentSkills =
    skills[courseName] || [];

  return (
    <section className="max-w-6xl mx-auto px-6">

      <h2 className="text-3xl font-bold mb-8">
        What You'll Learn
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {currentSkills.map((skill) => (
          <div
            key={skill}
            className="bg-white p-4 rounded-xl border"
          >
            ✓ {skill}
          </div>
        ))}

      </div>

    </section>
  );
}