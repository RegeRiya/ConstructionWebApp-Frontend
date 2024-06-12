import { useState, useId, useEffect } from 'react'
import './App.css'
import axios from 'axios';

interface ConstructionProject {
  projectName: string
  //id: number
}

function App() {
  const [project, setProject] = useState<ConstructionProject>({projectName: ''})
  
  const handleNameChange = (event: { target: { value: any; }; }) => {
    setProject({projectName: event.target.value})
  }
  useEffect(() => {
    //make the get / post call
    //then set the state of project
    try{
      // axios.get('http://localhost:5079/api/ConstructionProject')
      // .then((response) => response)
      // .then((e) => e.data)
      // .then((e) => console.log(e));
      // // .then((e) => setProject(e as ConstructionProject));
    } catch (err) {
      console.log("Console error from react program! Check the response");
    }
  }, []);

  const saveProject = async () => {
    const payload = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body:
      {
        projectName: project.projectName
      }
    };
    try { 
      axios.post('http://localhost:5079/api/ConstructionProject', project)
      .then((response) => response)
      .then((e) => e.data)
      .then((e) => console.log(e));
    } catch (err) {
      // Handle the error 
      console.log("Console error from react program! Check the response");
    } 
  };

  //accept name and display

  return (
    <>
      <h1>Construction Project Details</h1>
      <label>Project Name: </label>
      <input type='text' name='ProjectName' value={project?.projectName} onChange={handleNameChange}></input>
      <button onClick={() => saveProject()}>Submit</button>
      <p>{project?.projectName}</p>
    </>
  )
  // <form>
  //       <label htmlFor={nameId}>Project Name: </label>
  //       <input id={nameId} type='text' name='ProjectName' value={name}></input>
  //       <button onClick={() => saveProject()}>Submit</button>
  //     </form>
}


export default App