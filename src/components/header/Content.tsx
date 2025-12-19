import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Content() {
  return (
    <div className="z-10 relative flex flex-row items-center justify-between gap-5 mt-[314px] px-[41px]">
      <span className="text-[#848484] text-[12px] font-light tracking-[-5%] font-geist-mono text-left w-[155px]">
        {' '}
        <Typewriter
          words={['Lorem ipsum dolor sit amet consectetur.']}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <h1
        className="text-[62px] font-extralight tracking-[-5%] leading-[90%] font-inter text-center uppercase"
        style={{
          background: 'linear-gradient(180deg, #E5E5E5, #7F7F7F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Fox
        <br />
        <span className="font-normal">premier</span>
        <br />
        Builders
      </h1>
      <span className="text-[#848484] text-[12px] font-light tracking-[-5%] font-geist-mono text-right w-[155px]">
        <Typewriter
          words={['Lorem ipsum dolor sit amet consectetur.']}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  )
}
