import React from 'react'
import { Button } from "@nextui-org/button";
import { PiArrowSquareUpRightDuotone } from "react-icons/pi";

function Embrace() {
  return (
    <>
        <section className=" flex bg-[#002228] items-center px-6 md:py-[96px]  py-[80px]">
        
            <div className="text-center mx-auto container">
                <h1 className='text-primary font-Mont md:text-xl text-base'>GET STARTED</h1>

                <h1 className="md:text-4xl text-2xl pt-[26px] font-Mont text-white italic"> 
                <span className='italic'>Embrace </span><span className='font-bold '>the new era of</span> <span className='italic'>outbound.</span>
                </h1>

                <p className="text-secondary md:text-xl text-lg pt-[23px] font-light "> 
                Wizia lets you train, activate, and optimize aiDRs. <br /> Take your outbound to new levels of performance and efficiency.
                </p>
            
                <Button variant="solid" color="primary" radius="full" className='text-[#002228] text-base font-medium ' style={{marginTop:"23px"}}>
                    Sign Up for the Beta <PiArrowSquareUpRightDuotone />
                </Button>
            </div>
        </section>
    </>
  )
}

export default Embrace