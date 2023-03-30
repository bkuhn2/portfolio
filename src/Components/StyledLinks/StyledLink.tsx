import React from 'react'
import '../StyledLinks/StyledLink.css'
import { NavLink } from 'react-router-dom'

type Props = {
  section: string
}

const StyledLink = ({section}: Props) => {
  return (
    <NavLink 
      className='font-font8 uppercase text-zinc-50 text-md sm:text-2xl border-2 border-zinc-500 shadow-lg rounded-lg w-20 md:w-36 md:px-7 md:py-3 text-center h-fit hover:backdrop-blur-sm bg-neutral-50/10 hover:scale-105 mx-1 md:mx-3' 
      to={section === 'about' ? '/' : `/${section}`}
      style={({isActive}) => {
        return {
          background: isActive ? 'rgba(6, 114, 251, 0.28)' : '',
          color: isActive ? 'white' : '',
          backdropFilter: isActive ? 'brightness(1.7)' : '',
          textShadow: isActive ? '0 0 7px #606060 , 0 0 10px #000, 0 0 15px #000, 0 0 21px #068FFB, 0 0 42px #5FECFC, 0 0 82px #29EBED, 0 0 151px #5FECFC' : '',
          borderColor: isActive ? '#D8D8D8' : '',
        }
      }}
      >{section}
    </NavLink>
  )
}

export default StyledLink
