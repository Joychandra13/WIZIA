import React from 'react'

function Partners() {
  return (
    <>
        <section className='bg-[#07292F]'>
            <div className='container pt-8 mx-auto justify-center'>
                <h1 className='text-base text-center font-Mont text-primary leading-5 tracking-[5%] hover:scale-105 hover:-hue-rotate-180 transition-all duration-5000'>our trusted partners</h1>

                <div className='md:flex md:space-x-7 md:justify-center py-6'>
                    <div className='flex space-x-7 justify-center'>
                    <img className='hover:scale-105 transition-all duration-5000' src="/BackHublogo.svg"  alt="" />
                    <img className='hover:scale-105 transition-all duration-5000' src="/CableLabslogo.svg"  alt="" />
                    </div>
                    <div className='flex space-x-7 justify-center'>
                    <img className='hover:scale-105 transition-all duration-5000' src="/DBSlogo.svg" alt="" />
                    <img className='hover:scale-105 transition-all duration-5000' src="/EasyEurologo.svg" alt="" />
                    </div>
                    <div className='flex space-x-7 justify-center'>
                    <img className='hover:scale-105 transition-all duration-5000' src="/AMDlogo.svg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Partners