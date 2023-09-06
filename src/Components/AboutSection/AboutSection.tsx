import React from 'react'
import '../AboutSection/AboutSection.css'
import NavBar from '../NavBar/NavBar'

const AboutSection = () => {


  return (
    <>
      <NavBar />
      <section id='aboutSection' className='flex flex-col justify-center' >
        <br />
        <h1 className='font-font4 sticky top-0 z-30 border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 pt-4 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          ABOUT</h1>
        <br />
        <div className='flex flex-col items-center lg:items-start lg:flex-row lg:justify-center'>
        <img className='lg:ml-12 lg:mr-4 mb-6 contrast-125 w-48 h-48 lg:w-96 lg:h-96 md:w-72 md:h-72 rounded-md border-2 border-stone-800 drop-shadow-2xl' src='/BAK2.jpg' alt='Brett Head Shot Photo'/>
        <section 
          id='aboutTextSection' 
          className='w-5/6 lg:w-1/2 lg:mr-16 lg:ml-4 flex flex-col items-left mb-14'>
          <h2 className='font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl bg-stone-800 bg-opacity-90 backdrop-blur-sm p-3 pt-4 mb-2 text-xl md:text-4xl text-amber-500 bg-gradient-to-r from-neutral-800 to-stone-700'>
            Who I Am ...</h2>
            <div className='flex flex-col rounded-md border-2 border-stone-500 drop-shadow-2xl bg-stone-50 bg-opacity-60 backdrop-blur-sm backdrop-brightness-125'>
              <p className='font-font5 indent-8 text-justify w-full p-7 pb-1 text-sm md:text-xl text-stone-700 '>
              After managing projects in the oil & gas industry for nearly a decade, my desire for solving problems and finding new challenges led me to software development and in 2022, I enrolled in the Turing School of Software & Design. 
              </p>
              <p className='font-font5 indent-8 text-justify w-full p-7 pt-3 text-sm md:text-xl text-stone-700 '>As a recent graduate and freelancer, I'm passionate about building apps with a strong emphasis on aesthetics and user experience, as well as building culture and connecting with others. I excel at working in a collaborative, deadline driven environment that requires a high level of coordination and attention to detail. When I'm not coding, you can find me traveling, rock climbing, playing
                music or building guitars.</p>
            </div>
          <br />
          <h2 className='font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl  bg-stone-800 bg-opacity-90 backdrop-blur-sm p-3 pt-4 mb-2 text-xl md:text-4xl text-amber-500 bg-gradient-to-r from-neutral-800 to-stone-700'>
            What I'm Working On ...</h2>
          <ul className='font-font5 eading-6 rounded-md border-2 border-stone-500 drop-shadow-2xl text-left w-full bg-stone-50 bg-opacity-60 backdrop-blur-sm p-7 text-sm md:text-xl text-stone-700 backdrop-brightness-125'>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>Next project... </b> A road trip app that incorporates map and event data.</li>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>Currently learning... </b> Next.js</li>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>What else? </b> Adding more features and more projects to this site, and deploying previous student projects.</li>
          </ul>
        </section>
      </div>
    </section>
    </>

  )
}

export default AboutSection
