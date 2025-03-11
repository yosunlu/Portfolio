import Image from "next/image";
import type { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  date: string;
  mandarin: string;
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  date,
  mandarin,
}: ProjectProps) {
  return (
    <div className="flex flex-col relative mb-10 border-b border-gray-400 pb-16 text-[1rem]">
      <div className="mb-2 text-xl font-medium text-gray-600">{date}</div>

      <h2 className="mt-4 text-3xl font-bold text-[#0000CD]">{title}</h2>

      <div className="mt-2">
        <span className="font-semibold text-gray-700"></span>
        <span className="text-gray-600">{tags.join(", ")}</span>
      </div>

      <p className="mt-6 text-[#666] text-sm sm:text-base leading-relaxed">{description}</p>
      <p className="mt-4 text-[#666] text-sm sm:text-base mb-10 leading-relaxed">{mandarin}</p>

      <div className="relative rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover h-[16rem] w-full rounded-xl opacity-90"
        />
      </div>
    </div>
  );
}