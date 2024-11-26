import React from 'react'

function Partners() {
  return (
    <>
        <section className='bg-[#07292F]'>
            <div className='container pt-8 mx-auto justify-center'>
                <h1 className='text-base text-center font-Mont text-primary leading-5 tracking-[5%]'>our trusted partners</h1>

                <div className='md:flex md:space-x-7 md:justify-center py-6'>
                    <div className='flex space-x-7 justify-center'>
                    <img src="/BackHublogo.svg"  alt="" />
                    <img src="/CableLabslogo.svg"  alt="" />
                    </div>
                    <div className='flex space-x-7 justify-center'>
                    <img src="/DBSlogo.svg" alt="" />
                    <img src="/EasyEurologo.svg" alt="" />
                    </div>
                    <div className='flex space-x-7 justify-center'>
                    <img src="/AMDlogo.svg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Partners