import * as Yup from 'yup';
import React from 'react';
import {getPatients} from "~/services/api.service";

import PatientWrapper from "~/components/wrappers/PatientWrapper";



const Page = async () => {
    const patients  = await getPatients();



// Extract rows
    return (
        <div className={'w-full p flex flex-col gap-'} >
<PatientWrapper initialData={patients!} />

        </div>
    );
};

export default Page;

