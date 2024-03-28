'use client'
import React from 'react';
import ReuseableModal from "~/components/Modal";
import {patientFields, patientInitialValues} from "~/utils/formFields";
import {createPatient} from "~/services/api.service";
const PatientHeader = () => {

    return (
        <div className={'w-full flex justify-end'}>
            <ReuseableModal submitFunc={async (val)=> await createPatient(val)} initialValue={patientInitialValues} fields={patientFields} Label={'Add Patient'} />
        </div>
    );
};

export default PatientHeader;
