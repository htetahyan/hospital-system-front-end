'use client'
import React from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createPatient, getPatients} from "~/services/api.service";
import ReuseableTableBody from "~/components/table/body";
import {PatientResponse} from "~/services/response.type";

import ReuseableModal from "~/components/Modal";
import {patientFields, patientInitialValues} from "~/utils/formFields";
import toast from "react-hot-toast";

const PatientWrapper = ({initialData}:{initialData:PatientResponse[]}) => {
    const {data:patients,refetch,isLoading}=useQuery({queryKey:['patients'],queryFn: getPatients,initialData:initialData});
    const queryClient = useQueryClient()
    const {mutate:post,isPending}=useMutation({
        mutationFn: async (data:any) => await createPatient(data),
        mutationKey: ['patients'],

        onSuccess: () => {
           refetch()
            toast.success('Patient added successfully')
        }
    })

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
    console.log(patients)

    return (
        <div>
            <div className={'w-full flex justify-end'}>
                <ReuseableModal submitFunc={post} initialValue={patientInitialValues} fields={patientFields} Label={'Add Patient'} isLoading={isPending || isLoading} />
            </div>
            <ReuseableTableBody cols={columns} rows={patients as any}/>
        </div>
    );
};

export default PatientWrapper;
