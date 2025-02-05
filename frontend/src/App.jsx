import NavigationBar from './components/Navbar'
import MainPage from './components/MainPage'
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import "./main.scss"

function App() {

  return (
    <>
      <NavigationBar/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
