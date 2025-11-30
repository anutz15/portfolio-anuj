import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function ExperiencePage() {
  const experience = [
    {
      title: "Analyst — Salesforce Marketing Cloud",
      company: "Deloitte",
      duration: "2024 – Present",
      details: [
        "Designed and executed end-to-end digital marketing campaigns for 3 global clients.",
        "Created personalized Email, WhatsApp, and RCS templates.",
        "Developed CloudPages using HTML, CSS, JavaScript, and AMPscript.",
        "Managed customer data in SFMC Data Cloud and Marketing Cloud.",
        "Built SQL-driven segmentation and automation workflows.",
        "Developed and maintained automations in Automation Studio.",
        "Supported Journey Builder multi-step customer journeys.",
        "Analyzed campaign metrics and presented insights to stakeholders."
      ],
    },
    {
      title: "Backend Developer Intern — Node.js",
      company: "UniQual iTech, Surat",
      duration: "2023 (2 months)",
      details: [
        "Trained in JavaScript, NPM, MVC, and REST API development.",
        "Built a backend project using Node.js and Express.js.",
        "Created secure APIs with validation, routing, and middleware.",
        "Integrated database operations following modular architecture.",
        "Implemented an organized folder structure and industry-standard patterns."
      ],
    },
  ];

  return (
    <section className="pb-20">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        My professional experience across software engineering and digital marketing technology.
      </p>

      <ExperienceTimeline items={experience} />
    </section>
  );
}
