interface ResearchItem {
  title: string;
  publisher: string;
  year: string;
  link?: string;
  description: string;
}

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <div className="bg-white dark:bg-[#041226] p-6 rounded-xl shadow-soft hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{item.title}</h2>
      
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        {item.publisher} • {item.year}
      </p>

      <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
        {item.description}
      </p>

      {item.link && (
        <div className="mt-4">
          <a
            href={item.link}
            target="_blank"
            className="text-primary text-sm hover:underline"
          >
            View Publication →
          </a>
        </div>
      )}
    </div>
  );
}
