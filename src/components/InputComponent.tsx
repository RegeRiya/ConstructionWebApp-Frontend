import axios from "axios";
import { useState } from "react";

const InputComponent= () => {
    const [projectName, setProjectName] = useState<string>("");
    const [decsription, setDecsription] = useState<string>();
    const [startDate, setStartDate] = useState<string>();
    const [endDate, setEndDate] = useState<string>();

    function addNewProject(): void {
        //save the new project fields to database
        const payloadData = {projectName: "1", decsription: "2", startDate: "3", endDate: "4", projectId: "13"};
        let formData = new FormData();
        formData.append('projectName','1');
        formData.append('decsription','2');
        formData.append('startDate','3');
        formData.append('endDate','4');
        const payload = {
            method: 'post', 
            body: formData
        };
        fetch('http://localhost:5079/api/ConstructionProject', payload)
        .then(() => alert("saved"));
    }

    return(
        <form>
            <div>
                <label>
                    Project Name:
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e: any) => {
                            setProjectName(e.currentTarget.value);
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Decsription:
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e: any) => {
                            setDecsription(e.currentTarget.value);
                        }}                        
                    />
                </label>
            </div>
            <div>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="startDate"
                        onChange={(e: any) => {
                            setStartDate(e.currentTarget.value);
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    End Date:
                    <input
                        type="date"
                        name="endDate"
                        onChange={(e: any) => {
                            setEndDate(e.currentTarget.value);
                        }}
                    />
                </label>
            </div>
            <button type="submit" onClick={addNewProject}>Submit</button>
        </form>
    );
}
export default InputComponent;