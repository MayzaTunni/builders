import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col border-t border-px border-[#262626] pt-[100px] gap-[70px] items-center justify-center px-[20px]">
      <div className="max-w-[1216px] flex flex-col items-start justify-start gap-[27px]">
        <h2 className="text-[#424242] text-[20px] font-semibold tracking-[-2%] leading-[150%] font-geist-mono uppercase">
          About
        </h2>
        <h1
          className="text-[93px] font-semibold leading-[110%] font-inter text-start"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #E5E5E5, #7F7F7F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Where Vision Meets Exceptional Craftsmanship
        </h1>
        <p className="text-[#939393] text-[20px] font-normal leading-[150%] font-inter text-start">
          Fox Premier Builders is a distinguished luxury homebuilder based in Naples, Florida, with
          over 20 years of experience specializing in custom residences that embody precision,
          integrity, and enduring craftsmanship. Serving the Naples and Bonita Springs markets, we
          create homes that reflect timeless architecture, superior construction, and the discerning
          lifestyle of Southwest Florida’s most prestigious communities.Every Fox Premier Builders
          home begins with a vision—brought to life through meticulous attention to detail,
          masterful execution, and an unwavering commitment to quality. <br />
          <br />
          From concept to completion, we approach each project with a builder’s expertise and a
          craftsman’s eye, ensuring that every element is constructed to the highest standards.Our
          philosophy is simple: exceptional homes are built on a foundation of trust, precision, and
          pride in workmanship. At Fox Premier Builders, luxury is not defined by scale or
          style—it’s defined by the excellence behind every detail.
        </p>
        <div className="flex flex-col items-start w-[120px] justify-start group">
          <a
            href="#"
            className="text-[#F29A02] text-[20px] font-normal leading-[150%] font-geist-mono uppercase text-start"
          >
            Contact Us
          </a>
          <div className="w-full h-[1px] bg-[#F29A02] -mt-[4px] group-hover:mt-0 transition-all duration-300" />
        </div>
      </div>
      <div>
        <img src="/images/home.png" alt="Home" />
      </div>
      <p
        className="text-[18px] font-medium tracking-[-4%] font-geist-mono text-center uppercase max-w-[386px]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF, #828282)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Every service, every detail is a lever, each one working to make the overall result better
        than before.
      </p>
    </div>
  )
}
