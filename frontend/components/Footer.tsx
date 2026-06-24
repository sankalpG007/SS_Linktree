export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              SS INFOTECH
            </h2>

            <p className="text-gray-400 mt-4">
              Empowering students with
              industry-focused learning.
            </p>

          </div>

          <div>
            <h3 className="font-bold mb-4">
              Courses
            </h3>

            <p>Data Analytics</p>
            <p>DataBricks</p>
            <p>ServiceNow</p>
            <p>Full Stack</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <p>Nagpur, Maharashtra</p>
            <p>info@ssinfotech.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Follow Us
            </h3>

            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>YouTube</p>
          </div>

        </div>

      </div>

    </footer>
  );
}