import * as Yup from 'yup';
import React from 'react';
import ReuseableTableBody from "~/components/table/body";
import {getPatients} from "~/services/api.service";
import PatientHeader from "~/components/headers/PatientHeader";



const Page = async () => {
    const patients = await getPatients();

 /*   const columns = Object.keys(patients![0]).map(key => {
        return {
            field: key,
            headerName: key,
            flex: 1,
        };
    });*/
    const columns = [
        { field: 'Id', headerName: 'ID',flex: 0.5 },
        { field: 'Name', headerName: 'Name' ,flex: 1},
        { field: 'Gender', headerName: 'Gender' ,flex: 0.5},
        { field: 'PhoneNumber', headerName: 'Phone Number' ,flex: 1},
        { field: 'Email', headerName: 'Email',flex: 1 },
        { field: 'BloodType', headerName: 'Blood Type' ,flex: 0.5},
        { field: 'BirthDate', headerName: 'Birth Date',flex: 1 },
        { field: 'Address', headerName: 'Address' ,flex: 1.5},
    ];


// Extract rows
    return (
        <div className={'w-full p flex flex-col gap-'} >
        <PatientHeader/>
<ReuseableTableBody cols={columns} rows={patients as any}/>

        </div>
    );
};

export default Page;

