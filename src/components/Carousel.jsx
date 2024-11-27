import React, { useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";


function Carousel() {
    const slides = [
        { 
            id: 1, 
            img : "/Carouselpic.svg",
            text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", 
            name: "John Doe ",
            titele: "Chief Strategy Officer @ Company",
        },
        { 
            id: 2, 
            img : "/Carouselpic.svg",
            text: "ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", 
            name: "John Doe ",
            titele: "Chief Strategy Officer @ Company",
        },
        { 
            id: 3, 
            img : "/Carouselpic.svg",
            text: "dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", 
            name: "John Doe ",
            titele: "Chief Strategy Officer @ Company",
        },
      ];
      
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeButton, setActiveButton] = useState("");
    
        const handlePrev = () => {
            setActiveButton("left");
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
            );
        };
    
        const handleNext = () => {
            setActiveButton("right");
            setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        };
    
  return (
    <>
        <section className='bg-[#002228] pt-[96px] pb-[86px] '>
            <div className="relative w-full  mx-auto overflow-hidden">

                {/* Slides */}
                <div className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`,}}>
                        {slides.map((slide) => (
                        <div key={slide.id} className='w-full flex flex-shrink-0 flex-col items-center justify-center pb-20'>
                            <img className='w-[56px] md:w-[74px]' src={slide.img} alt="" />
                            <p className='lg:text-[32px] text-2xl tracking-[-2%] leading-[41.6px] font-extralight text-center max-w-[920px] text-secondary mt-[44px] '> {slide.text}</p>
                            <div className='text-center mt-[40px]'>
                                <h1 className='md:text-2xl text-[18px] text-primary font-WorkSans font-semibold'>{slide.name}</h1>
                                <p className='md:text-[20px] text-[18px] text-secondary font-normal'>{slide.titele}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button onClick={handlePrev} className=" hidden lg:block absolute left-4 md:left-[120px] top-1/2 transform -translate-y-1/2 bg-[#96ACAF33] p-[12px] rounded-[8px] hover:bg-gray-600">
                    <span className={`text-base ${ activeButton === "left" ? "text-primary" : "text-secondary" }`}>
                        <HiArrowNarrowLeft/>
                    </span>
                </button>

                <button onClick={handleNext} className="hidden lg:block absolute right-4 md:right-[120px] top-1/2 transform -translate-y-1/2 bg-[#96ACAF33] p-[12px] rounded-[8px] hover:bg-gray-600">
                    <span className={`text-base ${ activeButton === "right" ? "text-primary" : "text-secondary"}`}>
                            <HiArrowNarrowRight/>
                    </span>
                </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} 
          className={`w-[10px] h-[10px] rounded-full ${ index === currentIndex ? "bg-primary" : "bg-[#394648]"}`}></button>
        ))}
      </div>
            </div>
        </section>
    </>
  )
}

export default Carousel