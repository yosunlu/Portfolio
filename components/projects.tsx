import React from 'react'
import Project from "./project";
import { projectsData } from "../lib/data";

export default function Projects() {
  return (
    <section className="flex flex-col max-w-[525px] justify-center ml-[9%] 2xl:ml-[15%]">
      <div className="font-bold pt-32"></div>

      <div className="flex pt-16 font-NS font-medium text-2xl italic text-[#FF7700] items-center justify-center">
        Projects / 專案
      </div>

      <div className="flex flex-col h-[18rem] pt-11">
            {projectsData.map((project, index) => (
              <div key={index} className="flex-1 bg-slate-20">
                <Project {...project} />
              </div>
            ))}

      </div>
    </section>
  )
}
