import React from 'react'
import NavBar from '../NavBar/NavBar'
import '../SkillsPage/SkillsPage.css'

const SkillsPage = () => {
  return (
    <>
      <NavBar />
      <section id='skillsSection' className=' flex flex-col justify-center items-center'>
        <br />
        <h1 className='font-font4 sticky top-0 z-20 border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 pt-4 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          SKILLS</h1>
        <br />
        <div id='contactContainer' className='w-3/4 grid grid-cols-3 gap-x-4 md:grid-cols-4 justify-around justsify-items-center mb-5 rounded-lg border-2 border-stone-300 bg-stone-50 bg-opacity-70 backdrop-brightness-105 backdrop-blur-sm px-10 py-6'>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>JavaScript</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>TypeScript</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>React</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>HTML</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>CSS</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>Tailwind CSS</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>Mocha</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>Apollo Client</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />            
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>GitHub</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />           
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>Git</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>VS Code</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg'>CircleCI</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>NPM</p>
          </div>
          <div className='flex flex-col items-center mb-3'>
            <img className='w-4/5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <p className='font-font4 mt-1 rounded-sm text-stone-800 font-bold text-center text-xs md:text-md lg:text-lg '>Sass</p>
          </div>
        </div> 
      </section>
    </>
  )
}

export default SkillsPage
