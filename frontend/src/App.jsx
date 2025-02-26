import NavigationBar from './components/Navbar'
import MainPage from './components/MainPage'
import About from './components/About';
import Project2 from './components/Project2'
import Project1 from './components/Project1';
import RandomImage from './components/RandomImage';
import { Routes, Route } from 'react-router-dom';
import ProjectCarousel from './components/ProjectCarousel';
import Projects from './components/Projects';
import "./main.scss"

function App() {

  return (
    <>
      <NavigationBar/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="project1" element={<Project1 />} />
          <Route path="image-generator" element={<RandomImage/>}/>
          <Route path="flatfilemanager" element={<Project2 />} />
          <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
