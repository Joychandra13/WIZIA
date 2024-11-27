import React from 'react'

function AllocateEffort() {
    const check= [
        {
            percent: "32%",
            text : "Improvement in Open Rates",
        },
        {
            percent: "75%",
            text : "Improvement in Ramp Time",
        },
        {
            percent: "35%",
            text : "Improvement in Meetings Booked",
        },





      ];

  return (
    <>
        <section className='bg-[#002228] flex justify-center'>
            <div className=' relative bg-[#09292f] mx-[48px] rounded-3xl md:pt-[69px] md:pb-[90px] md:ps-[72px] py-8 px-6 flex items-center container bg-cover  bg-no-repeat'>
            <div className=' absolute inset-0 bg-no-repeat bg-contain  w-full opacity-45 bg-[url("/bg.svg")] scale-x-[-1] rounded-3xl z-0'></div>
                <div className=' z-10'>
                    <h1 className='md:text-[40px] text-[28px] font-semibold font-Mont text-white tracking-[-1%] md:leading-[48.76px] leading-[34.13px]'>Allocate effort where your reps <br /> make an inpact.</h1>
                    <h1 className='md:text-[40px] text-[24px] font-medium font-Mont italic text-primary tracking-[-1%] leading-[48.76px]'>Let us handle the rest.</h1>
                    <p className='font-WorkSans md:text-xl text-lg tracking-[-1%] text-secondary font-light md:pt-[30px] pt-6'>Keep your reps “in the air” -- out in the field and on the phone <br /> where they can build relationships.</p>

                    <div className='md:flex md:mt-[94px] mt-[30px] place-content-center md:gap-8 space-y-8 md:space-y-0'>
                    {check.map((item, i) => (
                        <div key={i}  className="flex flex-col gap-[10px] md:w-[185px]">
                            <span className="font-Mont md:text-[40px] text-[32px] font-bold text-base text-primary ">{item.percent}</span>
                            <h1 className=" font-medium  font-Mont md:text-xl text-lg text-secondary ">{item.text}</h1>
                       </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AllocateEffort