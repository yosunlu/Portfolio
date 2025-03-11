import Image from "next/image";
import type { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  date: string;
  mandarin: string;
  githubUrl: string;
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  date,
  mandarin,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col relative mb-12 border-b border-gray-400 pb-14">
      <div className="mb-2 text-xl font-medium text-gray-600">{date}</div>

      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <h2 className="mt-4 text-3xl font-bold text-[#0000CD] hover:underline">{title}</h2>
      </a>

      <div className="mt-2">
        <span className="font-semibold text-gray-700"></span>
        <span className="text-gray-600">{tags.join(", ")}</span>
      </div>

      <p className="mt-6 text-[#666] text-[1rem] leading-relaxed">{description}</p>
      <p className="mt-4 text-[#666] text-[1rem] mb-10 leading-relaxed">{mandarin}</p>

      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover h-[16rem] w-full rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </a>
    </div>
  );
}