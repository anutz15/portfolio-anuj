interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  details: string[];
}

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="border-l-2 border-primary pl-6 space-y-10">
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Dot */}
          <span className="absolute -left-3 top-1 w-4 h-4 bg-primary rounded-full"></span>

          {/* Content */}
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {item.company} • {item.duration}
          </p>

          <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-1">
            {item.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
