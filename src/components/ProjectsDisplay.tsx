import ConstructionProject from "../constructionProject";
import displayTable from "./ProjectsTable"
import { useNavigate } from "react-router-dom";

const projectsDisplay = (projects: ConstructionProject[]) => {
    
    const navigate = useNavigate();

    return (
        <>
            <h1>Construction Project Details</h1>
            <p><button onClick={() => navigate("/input")}>Input Project</button></p>
            <div>
            {displayTable(projects ? projects.projects : [])}
            </div>
            <div className="top-right-container">
            <button className="top-right-button" onClick={() => navigate("/login")}>Log-in
            </button>
            <button className="top-right-button" onClick={() => alert("For new users please contact administrator; email: riyarege16@gmail.com")}>Sign-in
            </button>
            </div>
        </>
        )
    }
export default projectsDisplay;