import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles.js';
import {ComputersCanvas} from './canvas';
import herobg from '../assets/herobg.png';

const Hero = ()=> {
  return (
    <section 
   className="relative w-full h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${herobg})`,
  }}>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 rounded-full violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Vikas</span></h1>
         <p className={`${styles.heroSubText} mt-2 text-white-100`}>A final-year BTech CSE student <br className='sm:hidden block'/> who builds web applications using the MERN stack and solves DSA problems in Java.</p> 
        </div>

      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero