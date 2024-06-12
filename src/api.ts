import axios, { AxiosResponse } from 'axios';
    
export const postData = async () => {

    try {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Riya' })
        };
    
        const response: AxiosResponse = await axios.get('http://localhost:5079/api/ConstructionProject');


        // Process the response data
        return response ? response.data : "hello from the inside";
    } catch (error) {

        // Handle the error
        setTimeout(() => {
        }, 100000);
    }

};