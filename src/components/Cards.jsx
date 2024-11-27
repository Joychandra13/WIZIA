import React from 'react'
import { PiMagicWandDuotone, PiGraphDuotone, PiArrowsOutCardinalDuotone, } from "react-icons/pi";


function Cards() {
    const cards = [
        {
            icon : [<PiMagicWandDuotone />],
            title: "You’re in Control",
            des: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
            icon : [<PiGraphDuotone />],
            title: "Infinitely Scalable",
            des: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
            icon : [<PiArrowsOutCardinalDuotone  />],
            title: "Incredibly Flexible",
            des: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
        },

      ];

  return (
    <>
        <section className=" bg-[#002228] px-[24px] py-[40px] md:px-[120px] md:py-[120px]">
            <div className='container mx-auto '>
            <div className=' gap-[48px] md:gap-[24px] flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center md:justify-between'>
            {cards.map((item, i) => (
                <div key={i} className='hover:scale-110 transition-all duration-5000 max-w-[363px] p-1 max-h-[254px]'>
                    <div className="md:space-y-6 space-y-4 ">
                        <div className='text-[64px] text-primary hover:scale-105 hover:-hue-rotate-180 hover:rotate-180 transition-all duration-5000'>
                            {item.icon}
                        </div>
                        <div >
                            <h1 className="font-bold font-Mont text-[28px] text-white space-y-4">{item.title}</h1>
                            <p className="text-secondary text-[22px] font-light tracking-[-1%]">{item.des}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </section>
    </>
  )
}

export default Cards