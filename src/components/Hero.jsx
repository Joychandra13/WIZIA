import React from 'react'
import { Button } from "@nextui-org/button";
import { PiArrowSquareUpRightDuotone } from "react-icons/pi";

function Hero() {
  return (
    <>
        <section className=" flex items-center md:bg-[url('/Hero.svg')] bg-[url('/Hero2.svg')] bg-cover bg-center bg-no-repeat pt-[44px] pb-[72px] px-4 md:py-28 md:px-32 ">
        
            <div className="space-y-[8px] w-[80%] text-center md:text-left mx-auto">
                <h1 className='text-primary italic font-Mont md:text-2xl text-base'>AI SDRs (aiDRs)</h1>

                <h1 className="font-bold md:text-5xl text-[40px] font-Mont text-white "> 
                    More <span className='font-normal italic'>sleads</span>, <br /> less <span className='font-normal italic' style={{ letterSpacing: '0.1em',  }}>people</span>.
                </h1>

                <p className="text-secondary md:w-[450px] md:text-xl text-lg font-WorkSans"> 
                    Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.
                </p>
                
                <Button variant="solid" color="primary" radius="full" className='text-black font-WorkSans text-base font-medium' style={{marginTop:"24px"}} >
                    Sign Up for the Beta <PiArrowSquareUpRightDuotone />
                </Button>
            </div>
        </section>
    </>
  )
}

export default Hero