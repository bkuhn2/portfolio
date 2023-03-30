import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import '../ProjectsPage/ProjectsPage.css'
import { Project } from '../../Helper/Interfaces'
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail'
import ProjectModal from '../ProjectModal/ProjectModal'
import { useParams } from 'react-router-dom'

type Prop = {
  allProjects: Project[] | undefined,
  modalOn: boolean,
  setModalOn: Function
}

const ProjectsPage = ({ allProjects, modalOn, setModalOn }: Prop) => {

  // Additional state: extension of filtering by tech, etc
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState<Project[]>();

  const projectID = useParams().id

  useEffect(() => {
    (projectID) ? setModalOn(true) : setModalOn(false)
  }, [projectID]);
    
  const thumbnails = allProjects ? allProjects.map((project, index) => {
    return (
      <ProjectThumbnail project={project} key={index} />
    )
  }) : '';

  return (
    <>
      {modalOn && <ProjectModal id={projectID} allProjects={allProjects} />}
      <NavBar />
      <section className='flex flex-col items-center'>
        <br />
        <h1 className='font-font4 sticky top-0 z-40 border-2 border-stone-300 bg-white text-2xl md:text-5xl bg-opacity-60 backdrop-blur-sm w-screen py-3 pt-4 text-stone-800 font-bold text-center mb-10 drop-shadow-sm'>
          PROJECTS</h1>
        <br />
        {/* Filter by tech - extension to revisit */}
        {/* <form className='flex flex-col items-center mb-5 text-md md:text-xl text-stone-700  text-center rounded-lg w-2/3 lg:w-1/3 border-2 border-stone-300 bg-stone-50 bg-opacity-70 backdrop-blur-sm px-10 py-6'>
          <p className='mb-5'>Type in a language or technology to find any projects that match.</p>
          <input 
            className='placeholder:text-stone-500 placeholder:italic border-2 border-stone-400 rounded-md w-4/6 py-2 px-4 text-md md:text-lg bg-stone-200 bg-opacity-20 backdrop-blur-sm drop-shadow-md'
            type='text'
            placeholder='maybe "React," or "cypress" ...'
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}    
          />
        </form> */}
        <br />
        {!allProjects && <h2 className='text-2xl md:text-5xl text-red-700 text-center'>Loading</h2>}
        {/* {(searchTerm && !searchResults)&& <h2 className='text-2xl md:text-5xl text-red-700 text-center'>No results (yet!), try another or make sure word entered correctly.</h2>} */}
        <section className='w-full grid grid-cols-2 gap-y-10 md:gap-y-20 justify-items-center justify-evenly p-1 mb-16'>
          {allProjects && thumbnails}
        </section>
      </section>
    </>
  )
}

export default ProjectsPage
