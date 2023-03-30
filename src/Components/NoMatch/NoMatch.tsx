import React from 'react'
import '../NoMatch/NoMatch.css'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <>
      <section id='aboutSection' className='flex flex-col justify-center items-center' >
        <br />
        <h1 className='font-font4 sticky top-0 z-30 border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 pt-4 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          Bad Route...
        </h1>
        <br />
        <Link to='/' className='w-1/6 font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl bg-stone-800 bg-opacity-90 backdrop-blur-sm p-3 pt-4 mb-2 text-xl md:text-4xl text-amber-500 bg-gradient-to-r from-neutral-800 to-stone-700'>
          back home
        </Link>
      </section>
    </>

  )
}

export default NoMatch
