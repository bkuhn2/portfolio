import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../ProjectModal/ProjectModal.css'
import { Project } from '../../Helper/Interfaces'

type Prop = {
  id: string | undefined,
  allProjects: Project[] | undefined
}

const ProjectModal = ({ id, allProjects}: Prop) => {

  const [selectedProject, setSelectedProject] = useState<Project>()
  const navigate = useNavigate();

  useEffect(() => {
    (allProjects && id) ? setSelectedProject(allProjects.find(project => project.id === +id))
      : setSelectedProject(undefined);
  }, [allProjects, id])

  const handleCloseModal = (event: any) => {
    if (event.target.id === 'modalBackground' || event.target.id === 'backButton')
    navigate('/projects')
  }

  return (
    <div id='modalBackground' className='fixed z- z-50 w-screen h-screen backdrop-brightness-50 flex justify-center items-center self-center place-content-center place-items-center place-self-center'
      onClick={event => handleCloseModal(event)}
    >
      {!selectedProject && <h1 className='hover:cursor-pointer font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl p-2 px-4 pt-3 mt-6 mb-2 text-lg md:text-2xl text-teal-400 bg-gradient-to-r from-neutral-800 to-stone-700'>Loading...</h1>}
      {selectedProject && 
        <section className='z-51 flex flex-col items-center w-5/6 md:w-1/2 max-h-full border-8 rounded-2xl border-stone-900 bg-stone-100 bg-opacity-90 backdrop-blur-lg px-10 py-6 my-3 drop-shadow-2xl overflow-y-scroll'>
          <h1 className='font-font4 text-3xl sm:text-5xl md:text-6xl py-3 pt-3 text-cyan-800 font-bold text-center mb-3 '>{selectedProject.name}</h1>
          <img className='rounded-xl border-2 border-stone-800 w-11/12 md:w-4/5' src={selectedProject.img} alt='project picture'/>
          <p className='font-font5 indent-8 rounded-xl border-2 border-stone-800 drop-shadow-2xl text-justify w-full bg-stone-400 bg-opacity-10 backdrop-blur-sm p-7 text-xs md:text-lg text-stone-700 my-8'>{selectedProject.abstract}</p>
          {selectedProject.notes && <p className='text md:text-xl font-font4 text-center font-bold mb-7'>Note: {selectedProject.notes}</p>}
          {selectedProject.githubURL && <Link target="_blank" className='font-font2 text-xl sm:text-3xl md:text-4xl py-2 pt-2 text-pink-700 hover:underline font-bold text-center mb-1 ' to={selectedProject.githubURL}>→Project on GitHub</Link>}
          {selectedProject.deployedURL && <Link target="_blank" className='font-font2 text-xl sm:text-3xl md:text-4xl py-2 pt-2 text-pink-700 hover:underline font-bold text-center mb-1 ' to={selectedProject.deployedURL}>→Deployed Project Site</Link>}
          {!selectedProject.deployedURL &&  <p className='text-sm md:text-lg font-font5 text-center italic'>Working to get this and remaining student projects deployed...</p>}
          <p id='backButton' className='hover:scale-105 hover:cursor-pointer font-font7 text-center rounded-lg border-2 border-stone-800 drop-shadow-2xl p-2 px-4 pt-3 mt-6 mb-2 text-lg md:text-2xl text-teal-400 bg-gradient-to-r from-neutral-800 to-stone-700'>← back</p>
        </section>
      }
    </div>
  )
}

export default ProjectModal
