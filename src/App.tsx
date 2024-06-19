import { useState, useId, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import displayTable from './components/ProjectsTable';
import InputComponent from './components/InputComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsDisplay from './components/ProjectsDisplay';
import ConstructionProject from './constructionProject';
import LoginComponent from './components/LoginComponent';



function App() {
  const [projects, setProjects] = useState<ConstructionProject[]>([]);

  useEffect(() => {
    //make the get / post call
    //then set the state of project
    try {
      axios.get('http://localhost:5079/api/ConstructionProject')
      .then((response) => response)
      .then((e) => e.data)
      .then((e) => setProjects(e));
    } catch (err) {
      console.log("Console error from react program! Check the response");
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<ProjectsDisplay projects={projects}/>} />
            <Route path="/input" element={<InputComponent />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
      </Router>

    </>
  )
}

export default App