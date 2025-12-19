import React, { useState } from 'react'

const buttons = [
  {
    label: 'Custom Homes',
    image1: '/images/rectangle24.png',
    image2: '/images/rectangle27.png',
    image3: '/images/rectangle26.png',
  },
  {
    label: 'Communities',
  },
  {
    label: 'Vanderbilt Beach/Conners',
  },
  {
    label: 'Pelican Bay',
  },
  {
    label: 'Park Shore',
  },
  {
    label: 'Moorings Park',
  },
  {
    label: 'Olde Naples',
  },
  {
    label: 'Aqualane Shores',
  },
  {
    label: 'Talis Park',
  },
  {
    label: 'Quail West',
  },
]

export default function Menu() {
  const [activeButton, setActiveButton] = useState(buttons[0].label)

  return (
    <div className="flex flex-row items-center justify-between gap-[69px] w-full max-w-[1192px]">
      <div className="flex shrink-0 flex-col items-start justify-start gap-[4px] w-[320px]">
        {buttons.map((button) => (
          <button
            key={button.label}
            className={`text-[18px] font-semibold leading-[110%] tracking-[-6%] font-inter uppercase w-full text-center h-[73px] bg-[#0C0C0C] transition-all duration-300 ease-in-out flex items-center justify-center ${activeButton === button.label ? 'text-[#000000] bg-[linear-gradient(180deg, #E5E5E5, #7F7F7F)]' : 'text-[#CFCFCF]'}`}
            onClick={() => setActiveButton(button.label)}
          >
            <p
              className={`w-full h-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out`}
              style={
                activeButton === button.label
                  ? {
                      background: 'linear-gradient(90deg, #D9D9D9 28%, transparent 100%)',
                    }
                  : { background: 'linear-gradient(90deg, #D9D9D9 0%, transparent 0%)' }
              }
            >
              {button.label}
            </p>
          </button>
        ))}
      </div>
      <div className="w-full h-full shrink grid grid-cols-3 grid-rows-2 gap-[12px]">
        <div className="col-span-3 row-span-1">
          <img src="/images/rectangle24.png" alt="Rectangle 27" />
        </div>
        <div className="col-span-2 row-span-1">
          <img src="/images/rectangle27.png" alt="Rectangle 24" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src="/images/rectangle26.png" alt="Rectangle 26" />
        </div>
      </div>
    </div>
  )
}
