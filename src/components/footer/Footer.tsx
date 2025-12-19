import React from 'react'

const links = [
  {
    label: 'Team',
    href: '/',
  },
  {
    label: 'Case Studies',
    href: '/',
  },
  {
    label: 'Publications',
    href: '/',
  },
]

const socialMedia = [
  {
    image: '/images/insta.png',
    alt: 'Instagram',
    href: '/',
  },
  {
    image: '/images/face.png',
    alt: 'Facebook',
    href: '/',
  },
  {
    image: '/images/linkedin.png',
    alt: 'LinkedIn',
    href: '/',
  },
  {
    image: '/images/youtube.png',
    alt: 'YouTube',
    href: '/',
  },
]

export default function Footer() {
  return (
    <div className="flex mt-[80px] border-t border-[#333333] border-px items-center justify-between max-w-[1192px] mx-auto py-[31px] px-[20px]">
      <img src="/images/logo.png" alt="Logo" />
      <div className="flex flex-row items-center justify-center gap-[39px]">
        {links.map((link) => (
          <div
            className="flex flex-col items-start justify-start group cursor-pointer"
            key={link.label}
          >
            <p className="text-[#838383] text-[16px] font-normal leading-[110%] font-inter">
              {link.label}
            </p>
            <div className="w-0 transition-all duration-300 ease-in-out group-hover:w-full h-[1px] bg-[#838383]" />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-[25px]">
        {socialMedia.map((social) => (
          <a
            className="cursor-pointer flex items-center justify-center h-[45px] w-[45px] rounded-full border border-solid border-[#838383]"
            href={social.href}
            key={social.alt}
            style={{ boxSizing: 'border-box' }}
          >
            <img src={social.image} alt={social.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}
