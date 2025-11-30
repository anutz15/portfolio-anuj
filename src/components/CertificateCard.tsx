import Image from "next/image";

interface Cert {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  image?: string;
  link?: string;
}

export default function CertificateCard({ cert }: { cert: Cert }) {
  return (
    <div className="bg-white dark:bg-[#041226] p-5 rounded-lg shadow-soft hover:shadow-lg transition cursor-pointer">
      <div className="flex items-center gap-4">
        {cert.image ? (
          <Image
            src={cert.image}
            alt={cert.title}
            width={60}
            height={60}
            className="rounded-md object-cover"
          />
        ) : (
          <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-md" />
        )}

        <div>
          <h3 className="font-semibold text-lg">{cert.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {cert.skills.map((s) => (
          <span
            key={s}
            className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-[#0B1720]"
          >
            {s}
          </span>
        ))}
      </div>

      {cert.link && (
        <div className="mt-4 text-right">
          <a
            href={cert.link}
            target="_blank"
            className="text-primary text-sm hover:underline"
          >
            View Credential →
          </a>
        </div>
      )}
    </div>
  );
}
