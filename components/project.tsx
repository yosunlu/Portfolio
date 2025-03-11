import Image from "next/image";
import type { StaticImageData } from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  URL?: string;
  githubUrl?: string;
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  URL,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="flex flex-col relative">
      <div className="relative rounded-xl overflow-hidden hover:border-2 hover:border-emerald-700 hover:shadow-2xl">
        <Image
          src={imageUrl}
          alt="onlymemes"
          className="object-cover h-[18rem] rounded-xl opacity-90 transition-opacity hover:opacity-5"
        />

        <div className="absolute overflow-auto min-h-full inset-0 flex flex-col justify-between bg-white bg-opacity-100 text-black opacity-0 transition duration-200 hover:opacity-90 p-3">
          <ul className="flex flex-wrap w-full ">
            {tags.map((tag, index) => (
              <li
                className="bg-black font-medium px-3 py-1 text-[0.7rem] uppercase tracking-normal text-white rounded-xl mr-1 mb-1"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="sm:text-base font-normal text-sm">{description}</p>

          <div className="flex justify-between">
            <a
              className=" text-emerald-700 text-4xl rounded-4xl cursor-pointer"
              href={githubUrl}
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="text-emerald-700 text-4xl rounded-4xl cursor-pointer"
              href={URL}
              target="_blank"
            >
              Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
