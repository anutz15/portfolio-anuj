import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="pb-20">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
        Feel free to reach out to me for opportunities, collaboration, or academic discussions.
      </p>

      <div className="space-y-6">

        {/* Email */}
        <a
          href="mailto:anujshah1506@gmail.com"
          className="flex items-center gap-4 bg-white dark:bg-[#041226] p-5 rounded-lg shadow-soft hover:shadow-md transition"
        >
          <FaEnvelope className="text-primary text-xl" />
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-gray-500 dark:text-gray-400">anujshah1506@gmail.com</div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/anujshah1506"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white dark:bg-[#041226] p-5 rounded-lg shadow-soft hover:shadow-md transition"
        >
          <FaLinkedin className="text-primary text-xl" />
          <div>
            <div className="font-semibold">LinkedIn</div>
            <div className="text-gray-500 dark:text-gray-400">linkedin.com/in/anujshah1506</div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Anuj-Shah-1506"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white dark:bg-[#041226] p-5 rounded-lg shadow-soft hover:shadow-md transition"
        >
          <FaGithub className="text-primary text-xl" />
          <div>
            <div className="font-semibold">GitHub</div>
            <div className="text-gray-500 dark:text-gray-400">github.com/Anuj-Shah-1506</div>
          </div>
        </a>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 text-gray-600 dark:text-gray-400">
        <p>
          You can also connect with me on LinkedIn or view my projects on GitHub.
        </p>
      </div>
    </section>
  );
}
