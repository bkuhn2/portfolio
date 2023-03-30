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
          <p className='font-font5 indent-8 rounded-md border-2 border-stone-500 drop-shadow-2xl text-justify w-full bg-stone-50 bg-opacity-60 backdrop-blur-sm p-7 text-sm md:text-xl text-stone-700 backdrop-brightness-125'>
            Hello! I'm Brett Kuhn, a software engineer who specializes in front end development and a recent graduate of 
            Turing School of Software and Design. <br/><br/> <p>I'm passionate about building applications and solving complex 
            problems, and I love new experiences and learning new things both inside and outside of the 
            tech industry. Working as a part of a team is important to me, and I take pride in building a strong
            culture. When I'm not coding, you can find me traveling, rock climbing, playing
            music or building guitars.</p>
          </p>
          <br />
          <h2 className='font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl  bg-stone-800 bg-opacity-90 backdrop-blur-sm p-3 pt-4 mb-2 text-xl md:text-4xl text-amber-500 bg-gradient-to-r from-neutral-800 to-stone-700'>
            What I'm Working On ...</h2>
          <ul className='font-font5 eading-6 rounded-md border-2 border-stone-500 drop-shadow-2xl text-left w-full bg-stone-50 bg-opacity-60 backdrop-blur-sm p-7 text-sm md:text-xl text-stone-700 backdrop-brightness-125'>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>Next project... </b> Producing a card game app in a four person front end team that will incorporate a back end database (GitHub repo coming soon).</li>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>Currently learning... </b> Next.js, Express.</li>
            <li className='mx-6 list-disc list-outside'><b className='font-font4 text-stone-800'>What else? </b> Adding to this site! More features and more projects, and deploying previous student projects.</li>
          </ul>
        </section>
      </div>
    </section>
    </>

  )
}

export default AboutSection
