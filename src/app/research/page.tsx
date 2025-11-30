import ResearchCard from "@/components/ResearchCard";

export default function ResearchPage() {
  const research = [
    {
      title: "Plant Disease Detection using Multi-Model CNN + NLP Chatbot",
      publisher: "Springer Nature",
      year: "2023",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-58604-0_15",
      description:
        "Developed a hybrid system combining CNN architectures (VGG16, ResNet50, InceptionV3) with an NLP chatbot to diagnose leaf diseases. Achieved a highest accuracy of 94% using InceptionV3.",
    },
    {
      title: "Lunar Hyperspectral Denoising using CNN with Skip Connections",
      publisher: "IEEE SPACE 2024",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10667656",
      description:
        "Designed and implemented a CNN architecture with skip connections to denoise Chandrayaan-2 hyperspectral images. Evaluated using PSNR, SSIM, SIM, and Spectral Angle Mapper metrics.",
    },
    {
      title: "Mixed-Attention Autoencoder for Lunar Hyperspectral Denoising",
      publisher: "Elsevier (Submitted)",
      year: "2024",
      link: "#",
      description:
        "Proposed and analyzed multiple autoencoder architectures—baseline, self-attention, and mixed-attention—on the IIRS hyperspectral dataset. Conducted preprocessing, ground-truth generation, and comparative evaluation.",
    },
  ];

  return (
    <section className="pb-20">
      <h1 className="text-3xl font-bold mb-4">Research Publications</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Research contributing to hyperspectral imaging, deep learning, and agricultural AI systems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {research.map((item, index) => (
          <ResearchCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
