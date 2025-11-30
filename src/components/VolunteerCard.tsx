interface VolunteerItem {
  title: string;
  organization: string;
  year: string;
  details: string[];
}

export default function VolunteerCard({ item }: { item: VolunteerItem }) {
  return (
    <div className="bg-white dark:bg-[#041226] p-6 rounded-lg shadow-soft">
      <h2 className="text-xl font-semibold">{item.title}</h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        {item.organization} • {item.year}
      </p>

      <ul className="list-disc ml-6 mt-4 text-gray-600 dark:text-gray-400 space-y-2 text-sm">
        {item.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
