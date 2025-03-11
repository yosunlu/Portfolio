import React from 'react'
import Project from "./project";
import { projectsData } from "../lib/data";

export default function Projects() {
  return (
    <section className="ml-32 flex flex-col text-3xl justify-center w-1/3">
      <div className="font-bold pt-32"></div>

      <div className="flex pt-16 font-NS font-medium text-2xl italic text-[#a7d12a] items-center justify-center">
        Projects / 專案
      </div>

      <div className="flex flex-col h-[18rem] space-x-3.5 mt-6">
            {projectsData.map((project, index) => (
              <div key={index} className="flex-1 bg-slate-20">
                <Project {...project} />
              </div>
            ))}

      </div>
    </section>
  )
}
