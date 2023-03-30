import { useState, useEffect } from 'react'
import './App.css'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import SkillsPage from '../SkillsPage/SkillsPage'
import { Routes, Route } from 'react-router-dom'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'
import { Project } from '../../Helper/Interfaces'
import { brettProjects } from '../../data/brettProjectsData'
import NoMatch from '../NoMatch/NoMatch'

function App() {

  const [allProjects, setProjects] = useState<Project[]>();
  const [modalOn, setModalOn] = useState(false)

  useEffect(()=> {
    setProjects(brettProjects)
  }, []);

  return (
    <main className='h-screen scroll-behavior: smooth bg-main7 bg-no-repeat bg-cover bg-bottom bg-fixed fixed overflow-auto'>
      <Routes>
        <Route path='/' element={<AboutSection />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='/projects' >
          <Route index element={<ProjectsPage allProjects={allProjects} modalOn={modalOn} setModalOn={setModalOn}/>} />
          <Route path=':id' element={<ProjectsPage allProjects={allProjects} modalOn={modalOn} setModalOn={setModalOn}/>} />
        </Route>
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='*' element={<NoMatch />}/>
      </Routes>
    </main>
  )
}

export default App
