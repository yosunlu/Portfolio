import React from 'react'
import Image from "next/image"; 

export default function About() {
  return (
    <section className="flex flex-col max-w-[525px] justify-center ml-[9%] 2xl:ml-[15%]">

      <div className="font-bold pt-32"></div>

      <div className="flex pt-16 font-NS font-medium text-2xl italic text-[#a7d12a] items-center justify-center">
        About / 簡介
      </div>

      <div className="font-NS font-normal text-[1rem] text-[#666]">
        {/* English Version */}
        <h3 className="pt-11 leading-normal">
          <span className="font-semibold text-black">Yushan Lu 呂又山</span> views himself as a{" "}
          <span className="text-[#a7d12a] font-semibold">backend developer</span>, 
          but also crafts elegant and functional frontends when needed. 
          He holds a master's degree in Computer Science from the 
          University of Wisconsin-Madison and is seeking a{" "}
          <span className="text-[#a7d12a] font-semibold">
            full-time Software Development Engineer (SDE) position
          </span>{" "}
          starting in 2025.
        </h3>
        <h3 className="pt-4 leading-normal">
          His core expertise includes{" "}
          <span className="text-[#a7d12a] font-semibold">Node.js and Express.js</span>, 
          with additional experience in relational and non-relational databases, 
          containerized environments, and cloud infrastructure. His work and 
          projects can be explored on{" "}
          <a
            className="text-[#a7d12a] font-semibold underline"
            href="https://github.com/yosunlu"
            target="_blank"
          >
            GitHub
          </a>.
        </h3>
        <h3 className="pt-4 leading-normal">
          Outside of development, he enjoys surfing, watching films, and cooking. 
          He is also an enthusiast of{" "}
          <span className="text-[#a7d12a] font-semibold">Taiwanese indie music</span>.
        </h3>
        <h3 className="pt-4 leading-normal">
          A detailed resume is available for{" "}
          <a className="text-[#a7d12a] font-semibold underline" href="/CV.pdf" download>
            download
          </a>. He can also be reached via{" "}
          <a
            className="text-[#a7d12a] font-semibold underline"
            href="https://www.linkedin.com/in/yushanlu1031/"
            target="_blank"
          >
            LinkedIn
          </a>.
        </h3>

        {/* Mandarin Version */}
        <h3 className="pt-11 leading-normal text-[#666]">
          <span className="text-black font-semibold">呂又山</span> 是一名
          <span className="text-[#a7d12a] font-semibold">後端開發者</span>，
          但在需要時，也能打造優雅且實用的前端。
          他畢業於威斯康辛大學麥迪遜分校 (University of Wisconsin-Madison) 的資工碩士，並正在尋找
          2025年開始的全職軟體開發工程師 (SDE) 職位。
          
        </h3>
        <h3 className="pt-4 leading-normal text-[#666]">
          他的核心技術專長包括
          <span className="text-[#a7d12a] font-semibold">Node.js 和 Express.js</span>，
          並且具備關聯式與非關聯式數據庫、容器化環境與雲端基礎架構的經驗。
          他的作品與項目可在
          <a
            className="text-[#a7d12a] font-semibold underline"
            href="https://github.com/yosunlu"
            target="_blank"
          >
            GitHub
          </a>
          上查閱。
        </h3>
        <h3 className="pt-4 leading-normal text-[#666]">
          工作之外，他熱愛衝浪、電影與烹飪，同時也是
          <span className="text-[#a7d12a] font-semibold">台灣獨立音樂</span>
          的愛好者。
        </h3>
        <h3 className="pt-4 leading-normal text-[#666]">
          可於此
          <a className="text-[#a7d12a] font-semibold underline" href="/CV.pdf" download>
            下載 CV
          </a>
          ，或透過
          <a
            className="text-[#a7d12a] font-semibold underline"
            href="https://www.linkedin.com/in/yushanlu1031/"
            target="_blank"
          >
            LinkedIn
          </a>
          與他聯繫。
        </h3>
      </div>
      
      <Image
        src="/profile.jpg"
        alt="Yushan Lu"
        width={0} // ✅ Allows auto-scaling
        height={0} // ✅ Allows auto-scaling
        sizes="100vw" // ✅ Ensures full responsiveness
        className="w-full mt-16"
      />

      <h3 className='mt-5 pb-32 italic text-gray-500 text-sm'>
        Photo by Yi-Fang Yu
        <br />
        攝影：余宜芳
      </h3>

    </section>
  )
}
