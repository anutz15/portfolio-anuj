import { certifications } from "@/lib/data";
import CertificateCard from "@/components/CertificateCard";

export default function CertificationsPage() {
  return (
    <section className="pb-20">
      <h1 className="text-3xl font-bold mb-4">Certifications</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Verified certifications showcasing my skills in AI, software engineering, and cloud technologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
