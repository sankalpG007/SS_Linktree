import ApplicationForm from "@/components/ApplicationForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplyPage({
  params,
}: Props) {

  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-3xl mx-auto py-16 px-6">

        <h1 className="text-5xl font-bold mb-4">
          Apply Now
        </h1>

        <p className="text-gray-600 mb-10">
          Fill the form below to apply.
        </p>

        <div className="bg-white rounded-2xl shadow p-8">

          <ApplicationForm
            courseId={Number(id)}
          />

        </div>

      </div>

    </main>
  );
}