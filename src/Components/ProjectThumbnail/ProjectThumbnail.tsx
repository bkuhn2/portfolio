import React from 'react'
import '../ProjectThumbnail/ProjectThumbnail.css'
import { Project } from '../../Helper/Interfaces'
import { useNavigate } from 'react-router-dom'

type Prop = {
  project: Project
}

const ProjectThumbnail = ({ project }: Prop) => {

  const navigate = useNavigate();

  const handleProjectClick = (event: any) => {
    event.preventDefault();
    navigate(`/projects/${event.target.parentElement.id}`)
  }

  return (
    <button className='hover:cursor-pointer flex flex-col justify-between items-center p-2 h-full w-5/6 border-2 border-black rounded-md bg-gradient-to-t from-neutral-900 to-stone-700 drop-shadow-lg'
      id={String(project.id)}  
      onClick={event => handleProjectClick(event)}
      
    >
      <img 
        className='mx-4 md:mx-7 lg:mx-10 border-4 border-stone-800 rounded-lg shadow-inner contrast-75 brightness-75 hover:contrast-100 hover:brightness-110'
        src={project.img} 
        alt=''/>
      <p className='font-font7 text-xl md:text-4xl lg:text-5xl my-5 text-amber-500 text-center'>{project.name}</p>
    </button>
  )
}

export default ProjectThumbnail
