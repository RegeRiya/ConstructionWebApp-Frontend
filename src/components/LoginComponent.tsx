import axios from "axios";
import { useState } from "react";


const LoginComponent= () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    function loginUser(userName: string): void {
        axios.post('http://localhost:5079/api/ConstructionProject', {username: userName, password: password})
      .then((response) => setLoggedIn(response.data))
    }

    // const [projectName, setProjectName] = useState<string>();
    // const [decsription, setDecsription] = useState<string>();
    // const [startDate, setStartDate] = useState<string>();
    // const [endDate, setEndDate] = useState<string>();

    return(
        <form>
            <div>
                <label>
                    User Name:
                    <input
                        type="text"
                        name="userName"
                        value={userName}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={password}
                    />
                </label>
            </div>
            <button type="submit" onClick={() => loginUser(userName)}>Submit</button>
        </form>
    );
}
export default LoginComponent;