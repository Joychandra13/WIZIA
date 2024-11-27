import React from 'react'

function Footer() {
  return (
    <>
       <footer className='flex flex-col md:flex-row items-center md:justify-between md:px-[120px] px-6 md:py-[40px] py-10'>
            <img src="/Logo.svg" alt="" />
            <h1 className='font-light text-secondary text-base text-center md:text-start pt-[24px] md:pt-0'>Copyright © 2023 Wizia. All rights reserved.</h1>
       </footer>
    </>
  )
}

export default Footer