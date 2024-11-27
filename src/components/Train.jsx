import React from 'react'
import { PiCheckCircleDuotone } from "react-icons/pi";


function Train() {
    const check= [
        {
            text : "Quick to ramp",
        },
        {
            text : "Easy to optimize",
        },
        {
            text : "Quick to scale up",
        },
        {
            text : "Works with all your existing tools",
        },


      ];

  return (
    <>
        <section className='bg-[#002228] flex justify-center'>
            <div className=' relative bg-[#07292F] mx-[48px] rounded-3xl md:py-[114px] py-8 px-6 flex items-center container justify-center bg-cover bg-center bg-no-repeat'>
            <div className=' absolute inset-0 bg-no-repeat bg-contain  w-full opacity-40 bg-[url("/bg.svg")] rounded-3xl z-0'></div>
                <div className='md:ps-32 z-10'>
                    <h1 className='md:text-[40px] text-[28px] font-semibold font-Mont text-white tracking-[-1%] leading-[48.76px]'>Train your aiDR on your...</h1>
                    <h1 className='md:text-[40px] text-[28px] font-medium font-Mont italic text-primary tracking-[-1%] leading-[48.76px]'>prefered email st /</h1>
                    <p className='md:text-2xl text-lg tracking-[-1%] text-secondary font-light pt-[30px]'>You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.</p>
                <div className='grid md:grid-cols-2 md:mt-[64px] mt-[30px] place-content-center'>
                {check.map((item, i) => (
                    <div key={i}  className="flex items-center gap-[10px]">
                        <span className="font-medium  font-Mont md:text-[20px] text-base text-primary "><PiCheckCircleDuotone /></span>
                        <h1 className=" font-medium  font-Mont text-[20px] text-base text-primary ">{item.text}</h1>
                    </div>
                ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Train