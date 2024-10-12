import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectList from "./pages/ProjectList"
import ContactForm from "./pages/ContactForm"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/projectlist" element={<ProjectList/>}/>
            <Route path="/project/:id" element={<Projects/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
