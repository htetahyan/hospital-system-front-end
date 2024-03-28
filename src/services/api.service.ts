import {PatientResponse} from "~/services/response.type";
import {get, post} from "~/services/default.service";


export const getPatients = async () => {
    try {
        const response = await get('/patients','patients');

        return response as PatientResponse[] || [];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const createPatient = async (data: any) => {

    try {
        const response = await post<any>(`/patients`,data,'patients');
        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
