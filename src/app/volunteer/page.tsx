import VolunteerCard from "@/components/VolunteerCard";

export default function VolunteerPage() {
  const volunteerWork = [
    {
      title: "Impact Day Volunteer",
      organization: "Deloitte",
      year: "2024",
      details: [
        "Collaborated with a team of five to design a 15-page Happiness Journal for underprivileged children.",
        "Created mindfulness and emotional well-being content including activities and illustrations.",
        "Worked on layout design, writing, and structuring interactive exercises.",
        "Contributed to Deloitte’s initiative to support emotional development and creativity among young children."
      ],
    },
  ];

  return (
    <section className="pb-20">
      <h1 className="text-3xl font-bold mb-4">Volunteer Work</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Contributions and initiatives I have been part of to support social impact and community well-being.
      </p>

      <div className="space-y-10">
        {volunteerWork.map((item, index) => (
          <VolunteerCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
