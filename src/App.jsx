import { Routes, Route } from "react-router"; 

import { HomePage } from "./pages/home/HomePage";
import { About } from "./pages/about/About";
import { Projects } from "./pages/projects/projects";
import { Resume } from "./pages/resume/resume";
import { Contact } from "./pages/contact/contact";

import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="resume" element={<Resume/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App
