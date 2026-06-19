import CourseCard from "@/components/CourseCard";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold text-center text-slate-900">
        SS_Linktree
      </h1>

      <p className="text-center text-lg text-slate-600 mt-4">
        Learn. Build. Get Hired.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
        <CourseCard
          title="Data Analytics"
          description="Excel, SQL, Power BI, Python"
        />

        <CourseCard
          title="DataBricks"
          description="Spark, Delta Lake, ETL"
        />

        <CourseCard
          title="ServiceNow"
          description="ITSM, CMDB, Workflow Automation"
        />

        <CourseCard
          title="Full Stack Development"
          description="React, Node.js, PostgreSQL"
        />
      </div>
    </main>
  );
}