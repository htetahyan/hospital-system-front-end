import {PatientResponse} from "~/services/response.type";
import {get, post} from "~/services/default.service";


export const getPatients = async () => {
    try {
        const response = await get('/patients');

        return response as PatientResponse[] || [];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const createPatient = async (data: any) => {

    try {
        const originalData = data; // This is your original data object

// Create a new object that includes all the original data
        const modifiedData = { ...originalData };

// Convert the birthDate to the desired format
        const date = new Date(originalData.birthDate);
        const ISODate = date.toISOString();

// Modify only the birthDate field in the new object
        modifiedData.birthDate = ISODate;

// Now, you can use `modifiedData` to send to the server
        const response = await post<any>(`/patients`, modifiedData);
        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
