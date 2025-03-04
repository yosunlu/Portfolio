import React from 'react'
import Link from "next/link";
import { links } from "@/lib/data"

export default function Header() {
  return (
    <header className="flex-col fixed items-end pt-20 ">
      
        <div className="flex flex-col items-end">
          <div className="font-NS  font-bold text-4xl italic text-[#0000CD] leading-none">
            YUSHAN LU
          </div>
          <div className="font-NS font-bold text-3xl italic text-[#32CD32] leading-none relative -translate-y-1 pt-3">
            呂又山
          </div>
        </div>
      

      <nav className="mt-10 flex flex-col items-end space-y-6">
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className="text-[#0000CD] hover:text-[#32CD32] hover:underline text-2xl transition-colors duration-400 font-bold font-NS italic"
            >
              {link.name}
            </a>
          ))}
      </nav>
    </header>
  )
}
