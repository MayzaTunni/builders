import React from 'react'

const links = [
  {
    label: 'About',
    href: '/',
  },
  {
    label: 'Services',
    href: '/',
  },
  {
    label: 'Portfolio',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
]

export default function Navbar() {
  return (
    <div className="gap-[62px] flex flex-row items-center justify-center z-10 relative pt-[33px]">
      {links.map((link) => (
        <a href={link.href} key={link.label} className="w-[90px]">
          <p className="text-[#C0C0C0] text-[18px] font-normal leading-[-2%] font-inter flex flex-row items-center justify-center gap-0 hover:gap-2 transition-all duration-300 hover:text-[#FFFFFF]">
            <span>(</span>
            {link.label}
            <span>)</span>
          </p>
        </a>
      ))}
    </div>
  )
}
