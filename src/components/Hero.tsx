import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10">
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-primary">Anuj Shah</span> — 
          <br />
          Software Engineer & AI Researcher
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-xl text-lg">
          I build intelligent applications, machine learning pipelines, 
          computer vision models, and full-stack digital solutions.
          Currently working as an Analyst at Deloitte in Marketing & Commerce,
          specializing in Salesforce Marketing Cloud.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium shadow-soft hover:opacity-90 transition"
          >
            View Projects
          </Link>

          <Link
            href="/resume"
            className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-soft flex items-center justify-center text-white text-4xl font-bold">
          AS
        </div>
      </div>
    </section>
  );
}
